import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsFinderPageComponent } from './lyrics-finder-page.component';

describe('LyricsFinderPageComponent', () => {
  let component: LyricsFinderPageComponent;
  let fixture: ComponentFixture<LyricsFinderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricsFinderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyricsFinderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
