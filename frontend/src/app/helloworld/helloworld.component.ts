import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Greet} from "../../wailsjs/go/main/App";

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloworldComponent implements OnInit {

  greetForm: FormGroup;
  resultText = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.greetForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  get name() {
    return this.greetForm.get('name');
  }

  onSubmit() {
    if (!this.greetForm.valid) {
      return;
    }

    Greet(this.greetForm.value.name).then(result => {
      this.resultText = result;
    })
  }

}
