import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInComponent } from './client-in.component';

describe('ClientInComponent', () => {
  let component: ClientInComponent;
  let fixture: ComponentFixture<ClientInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
