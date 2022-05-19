import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditChannelComponent } from './create-edit-channel.component';

describe('CreateEditChannelComponent', () => {
  let component: CreateEditChannelComponent;
  let fixture: ComponentFixture<CreateEditChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEditChannelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
