import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
powerlevel:number=0;
human = 0;


onSubmit = function (){
  console.log("Hello",this.powerlevel);
  this.human =this.powerlevel;
  }
  constructor() { }

  ngOnInit() {
  }

}
