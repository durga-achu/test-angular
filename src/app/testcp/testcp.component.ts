import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcp',
  templateUrl: './testcp.component.html',
  styleUrls: ['./testcp.component.css']
})
export class TestcpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  testfn(){
    console.log('hiiiiiii')
  }

}
