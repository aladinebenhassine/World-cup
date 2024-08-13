import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarplayerComponent } from './similarplayer.component';

describe('SimilarplayerComponent', () => {
  let component: SimilarplayerComponent;
  let fixture: ComponentFixture<SimilarplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarplayerComponent]
    });
    fixture = TestBed.createComponent(SimilarplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
