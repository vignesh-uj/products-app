import { Component, Input, OnChanges, OnInit, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit, OnChanges {

  @Input() major = 0;
  @Input() minor = 0;

  
  changeLog: string[] = [];
  counter: number = 0;

  private test: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges ) {
    // console.log(changes);

    // const major = changes['major'];
    // if (major && major.currentValue === 30) {
    //   alert('Yayyy, we have released version 30');
    // }
  }

}
