import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingPageComponent } from './streaming-page.component';

describe('StreamingPageComponent', () => {
  let component: StreamingPageComponent;
  let fixture: ComponentFixture<StreamingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StreamingPageComponent]
    });
    fixture = TestBed.createComponent(StreamingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
