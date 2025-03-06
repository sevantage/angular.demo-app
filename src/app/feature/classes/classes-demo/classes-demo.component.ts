import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classes-demo',
  imports: [NgClass, FormsModule, FlexLayoutModule],
  templateUrl: './classes-demo.component.html',
  styleUrl: './classes-demo.component.scss',
})
export class ClassesDemoComponent {
  color = 'red';
}
