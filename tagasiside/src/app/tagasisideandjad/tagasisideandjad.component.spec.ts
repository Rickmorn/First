import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagasisideandjadComponent } from './tagasisideandjad.component';

describe('TagasisideandjadComponent', () => {
  let component: TagasisideandjadComponent;
  let fixture: ComponentFixture<TagasisideandjadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagasisideandjadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagasisideandjadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
