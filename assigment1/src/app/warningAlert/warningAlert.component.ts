import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningAlert',
  template:`
  <p>Warning!!</p>
`,
  styles: [`
   p{
     padding:20px;
     background-color: red;
     border: 1px solid red;
    }
   `
  ]
})

export class WarningAlertComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
