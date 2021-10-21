import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jordan',
  templateUrl: './jordan.component.html',
  styleUrls: ['./jordan.component.css']
})
export class JordanComponent implements OnInit {
  defaultOption = "advanced"
  password= ""

  onSubmit(){
    console.log("Thank you, your form has been submitted")
}

  constructor() { }

  ngOnInit() {
  }

}