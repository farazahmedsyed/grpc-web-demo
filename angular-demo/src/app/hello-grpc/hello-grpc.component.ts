import { Component, OnInit } from '@angular/core';
import {HelloRequest} from 'src/app/generated/HelloService_pb';
import { HelloServiceClient } from 'src/app/generated/HelloServiceServiceClientPb';
import { FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-hello-grpc',
  templateUrl: './hello-grpc.component.html',
  styleUrls: ['./hello-grpc.component.sass']
})
export class HelloGrpcComponent implements OnInit {
  result = new String();
  helloForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required]
  });
  constructor(    private formBuilder: FormBuilder ) { }

  onSubmit(): void {
    this.result = 'Processing';
    this.callService(this.helloForm.value.firstname,this.helloForm.value.lastname);
    this.helloForm.reset();
  }
  ngOnInit(): void {
   console.log('init');
  }

  callService(fn: string, ln: string){
    var self = this;
    var req = new HelloRequest();
    req.setFirstname(fn);
    req.setLastname(ln);
    var metadata = {'custom-header-1': 'value1'};
    var service = new HelloServiceClient('http://localhost:10000');

    var res;
     service.hello(req, metadata, function(err, response) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        res = err.message;
      } else {
         var json  = JSON.parse(JSON.stringify(response.toObject()));
        res = json.greeting;
      }
      self.result = res;
    });
  }
}
