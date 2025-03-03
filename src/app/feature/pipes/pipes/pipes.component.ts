import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoublePipe } from '../../../shared/pipes/double/double.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  imports: [FormsModule, DoublePipe],
})
export class PipesComponent {
  value = 123;
}
