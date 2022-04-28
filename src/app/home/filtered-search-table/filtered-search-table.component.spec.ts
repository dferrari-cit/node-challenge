import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredSearchTableComponent } from './filtered-search-table.component';

describe('FilteredSearchTableComponent', () => {
  let component: FilteredSearchTableComponent;
  let fixture: ComponentFixture<FilteredSearchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredSearchTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
