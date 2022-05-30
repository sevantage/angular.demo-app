import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';

export function evenOrderNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const i = parseInt(control.value);
    if (i % 2 != 0) return { odd: control.value };
    return null;
  };
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('Customer 1', Validators.required),
    order: new FormGroup({
      number: new FormControl('1234', [
        Validators.pattern(/[0123456789]{4}/),
        Validators.maxLength(4),
        evenOrderNumber(),
      ]),
      lines: new FormArray([]),
    }),
  });

  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((val) => console.log(val));
  }

  status(ctrlName?: string): string {
    const ctrl = ctrlName ? this.form.get(ctrlName)! : this.form;
    return (
      (ctrl.touched ? 'T' : 'U') +
      (ctrl.dirty ? 'D' : 'P') +
      (ctrl.valid ? 'V' : 'I')
    );
  }

  get name() {
    return <FormControl>this.form.get('name')!;
  }

  get number() {
    return <FormControl>this.form.get('order.number')!;
  }

  get lines() {
    return <FormArray>this.form.get('order.lines')!;
  }

  onAddLine() {
    this.lines.push(new FormControl());
  }

  get valueText() {
    return JSON.stringify(this.form.value);
  }

  onPatch() {
    const newValues = {
      name: 'New customer name',
      order: {
        number: '9876',
        lines: ['line 1', 'line 2'],
      },
    };
    this.lines.clear();
    while (this.lines.length < newValues.order.lines.length)
      this.lines.push(new FormControl(), { emitEvent: false });
    this.form.patchValue(newValues);
  }
}
