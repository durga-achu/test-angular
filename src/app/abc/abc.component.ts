import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dis = true
  public name="cybersq";
  myid="inputid";
  testfn(){
    this.dis=false
  }

}
