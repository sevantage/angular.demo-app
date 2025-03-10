import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoublePipe } from 'src/app/shared/pipes/double/double.pipe';
import { MockPipe } from 'ng-mocks';

import { PipesComponent } from './pipes.component';
import { FormsModule } from '@angular/forms';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        FormsModule,
        PipesComponent,
        MockPipe(DoublePipe, () => 123),
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
