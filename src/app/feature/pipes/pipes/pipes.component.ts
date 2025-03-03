import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoublePipe } from '../../../shared/pipes/double/double.pipe';

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.scss'],
    imports: [FormsModule, DoublePipe]
})
export class PipesComponent implements OnInit {
  value: number = 123;

  constructor() { }

  ngOnInit(): void {
  }

}
