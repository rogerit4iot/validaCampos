import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form : FormGroup;

  ngOnInit(): void {
   this.form =  this._fb.group({
        num1: ['', [Validators.required]],
        num2: ['',[Validators.required]],
        num3: ['',[Validators.required]],
        num4: ['',[Validators.required]]
    })
  }
  title = 'teste-validacao';

  constructor(private _fb: FormBuilder){

  }
}
