import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { LyricsFinderPageComponent } from './lyrics-finder-page.component';

describe('LyricsFinderPageComponent', () => {
  let component: LyricsFinderPageComponent;
  let fixture: ComponentFixture<LyricsFinderPageComponent>;

  const initialState = {
    lyricsState: { lyricsResponse: { lyrics: '' }, status: 'pending' },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LyricsFinderPageComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(LyricsFinderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
