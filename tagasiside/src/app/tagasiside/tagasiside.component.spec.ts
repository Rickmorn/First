import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagasisideComponent } from './tagasiside.component';

describe('TagasisideComponent', () => {
  let component: TagasisideComponent;
  let fixture: ComponentFixture<TagasisideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagasisideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagasisideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
