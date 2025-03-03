import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesDemoComponent } from './observables-demo.component';

describe('ObservablesDemoComponent', () => {
  let component: ObservablesDemoComponent;
  let fixture: ComponentFixture<ObservablesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ObservablesDemoComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
