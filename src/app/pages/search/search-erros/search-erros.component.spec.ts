import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchErrosComponent } from './search-erros.component';

describe('SearchErrosComponent', () => {
  let component: SearchErrosComponent;
  let fixture: ComponentFixture<SearchErrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchErrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
