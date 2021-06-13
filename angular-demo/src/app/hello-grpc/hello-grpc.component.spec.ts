import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloGrpcComponent } from './hello-grpc.component';

describe('HelloGrpcComponent', () => {
  let component: HelloGrpcComponent;
  let fixture: ComponentFixture<HelloGrpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloGrpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloGrpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
