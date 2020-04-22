import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPrevComponent } from './client-prev.component';

describe('ClientPrevComponent', () => {
  let component: ClientPrevComponent;
  let fixture: ComponentFixture<ClientPrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
