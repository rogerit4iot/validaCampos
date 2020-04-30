
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn} from '@angular/forms';

const validacao: ValidatorFn = (fg: FormGroup) => {
  const num1 = fg.get('num1').value;
  const num2 = fg.get('num2').value;
  const num3 = fg.get('num3').value;
  const num4 = fg.get('num4').value;
  let valida = null;

 /* return num2 < num3 && num1 < num2 &&  num3 < num4 

  ? null

    : { range: true };*/

  if (num1.length > 0 ){
    if (num2.length > 0 && num2 <= num1){
      valida = {range: false};
    }else if (num3.length > 0 && num3 <= num1){
      valida = {range: false};
    }else if (num4.length > 0 && num4 <= num1){
      valida = {range: false};
    }
  }

  if(num2.length > 0){
    if(num3.length > 0 && num3 <= num2){
      valida = {range: false};
    }else if (num4.length > 0 && num4 <= num2){
      valida = {range: false};
    }
  }

  if(num3.length > 0){
    if(num4.length > 0 && num4 <= num3){
      valida = {range: false};
    }
  }

    console.log(valida);
    
/*
  if(num2.length > 0){
    if(num2 > num1 && num2 < num3 && num2 < num4){
      valida = {range: false};

    }else{
      valida = {range: true};
    }
  }

  if(num3.length > 0){
    if(num3 > num1 && num3 > num2 && num3 < num4){
      valida = {range: false};

    }else{
      valida = {range: true};
    }
  }

  if(num4.length > 0){
    if(num4 > num1 && num4 > num2 && num4 > num3){
      valida = {range: false};

    }else{
      valida = {range: true};
    }
  }*/
  return  valida ;



}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form : FormGroup;

  ngOnInit(): void {
   this.form =  this._fb.group({
    num1: [''],
    num2: [''],
    num3: [''],
    num4: ['']
  }, { validator: validacao })
    }
  title = 'teste-validacao';

  constructor(private _fb: FormBuilder){

  }
}
/*
 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  form : FormGroup;


  ngOnInit(): void {
   this.form =  this._fb.group({
        num1: ['', [Validators.minLength(0)]],
        num2: ['', [Validators.minLength(0),]],
        num3: ['', [Validators.minLength(0)]],
        num4: ['', [Validators.minLength(0)]]
    });

  }
  title = 'teste-validacao';

  constructor(private _fb: FormBuilder){

  }
}

*/