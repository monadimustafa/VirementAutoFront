import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestPasComponent } from './gest-pas.component';

describe('GestPasComponent', () => {
  let component: GestPasComponent;
  let fixture: ComponentFixture<GestPasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestPasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
