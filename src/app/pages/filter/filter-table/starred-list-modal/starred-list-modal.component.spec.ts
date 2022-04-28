import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredListModalComponent } from './starred-list-modal.component';

describe('StarredListModalComponent', () => {
  let component: StarredListModalComponent;
  let fixture: ComponentFixture<StarredListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarredListModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
