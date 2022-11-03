import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagasisideAndjaComponent } from './tagasiside-andja.component';

describe('TagasisideAndjaComponent', () => {
  let component: TagasisideAndjaComponent;
  let fixture: ComponentFixture<TagasisideAndjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagasisideAndjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagasisideAndjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
