import { Component, OnInit } from '@angular/core';
import { FlexModule } from '@angular/flex-layout/flex';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
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
  imports: [FlexModule, FormsModule, ReactiveFormsModule],
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
      lines: new FormArray<FormControl<string | null>>([]),
    }),
  });

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
    return this.form.get('name')! as FormControl<string>;
  }

  get number() {
    return this.form.get('order.number')! as FormControl<string>;
  }

  get lines() {
    return this.form.get('order.lines')! as FormArray<
      FormControl<string | null>
    >;
  }

  onAddLine() {
    this.lines.push(new FormControl(''));
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
