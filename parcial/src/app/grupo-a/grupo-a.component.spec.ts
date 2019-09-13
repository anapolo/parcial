import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoAComponent } from './grupo-a.component';

describe('GrupoAComponent', () => {
  let component: GrupoAComponent;
  let fixture: ComponentFixture<GrupoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
