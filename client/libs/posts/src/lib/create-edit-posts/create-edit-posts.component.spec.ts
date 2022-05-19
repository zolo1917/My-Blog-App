import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditPostsComponent } from './create-edit-posts.component';

describe('CreateEditPostsComponent', () => {
  let component: CreateEditPostsComponent;
  let fixture: ComponentFixture<CreateEditPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEditPostsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
