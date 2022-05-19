import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChannelDetailsComponent } from './show-channel-details.component';

describe('ShowChannelDetailsComponent', () => {
  let component: ShowChannelDetailsComponent;
  let fixture: ComponentFixture<ShowChannelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowChannelDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChannelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
