import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.css']
})
export class MaxComponent implements OnInit {
subscriptions = ['basic', 'advanced', 'pro']

selectedSubscription= 'advanced'
@ViewChild('form') sgnForm: NgForm;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
console.log (this.sgnForm.value)
  }
}