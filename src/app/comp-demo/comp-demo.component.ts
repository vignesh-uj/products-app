import { Component, OnInit, ViewChild  } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';


@Component({
  selector: 'app-comp-demo',
  templateUrl: './comp-demo.component.html',
  styleUrls: ['./comp-demo.component.css']
})
export class CompDemoComponent implements OnInit {


  @ViewChild(ChildCompComponent)
  private childComponent?: ChildCompComponent;

  major = 1;
  minor = 23;

  constructor() { }

  ngOnInit(): void {
  }

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  increaseCounter() {
    if (this.childComponent) {
      this.childComponent.counter++;
    }
  }

}
