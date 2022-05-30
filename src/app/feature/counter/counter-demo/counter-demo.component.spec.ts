import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../counter/counter.component';
import { MockBuilder, MockComponent, ngMocks, MockRender } from 'ng-mocks';

import { CounterDemoComponent } from './counter-demo.component';
import { By } from '@angular/platform-browser';

describe('CounterDemoComponent', () => {

  beforeEach(() => {
    return MockBuilder(CounterDemoComponent).mock(CounterComponent);
  });

  it('should initialize value', () => {
    const fixture = MockRender(CounterDemoComponent);
    const counterComp = ngMocks.find<CounterComponent>('app-counter').componentInstance;
    expect(counterComp.value).toBe(123);
  });

  it('should react to value changes', () => {
    const fixture = MockRender(CounterDemoComponent);
    const counterComp = ngMocks.find<CounterComponent>('app-counter').componentInstance;
    expect(counterComp.value).toBe(123);
    counterComp.valueChange.emit(246);
    expect(fixture.componentInstance.value).toBe(246);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css("p")).nativeElement.innerText).toBe("Current value: 246");
  });
});
