import { Component, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonService } from '../services/common.service';

import { MissionService } from '../services/mission.service';
import { SizerComponent } from '../sizer/sizer.component';

@Component({
  selector: 'app-mission-control',
  templateUrl: './missioncontrol.component.html',
  providers: [MissionService]
})
export class MissionControlComponent {

  @ViewChild('sizer')
  testSizer!: SizerComponent

  @ViewChild('testbtn')
  myTestButton: any

  @ViewChild('mytemplate')
  templateTest: any;

  astronauts = ['Lovell', 'Swigert', 'Haise'];

  history: string[] = [];

  mission = 'Fly to the moon!';

  nextMission = 0;

  currentDate = new Date();

  fontSizePx = 12;

  spanStyle1: any = {
    'font-size': '32px',
    'color': '#0505c7',
    'font-style': 'italic',
    'text-decoration': 'underline'
  }

  spanStyle2 = {
    'font-size': '52px',
    'color': 'rgb(206 0 188)',
    'font-style': 'normal',
    'text-decoration': 'underline',
    'border': 'solid 8px #148300bf',
    'padding': '12px'
  }

  spanStyle = this.spanStyle1;

  userName: string = 'Default user 123';


  project = {
    feature: 'WAREHOUSE',
    person: 'Alwin'
  }

  highlightColor: string = 'grey';

  constructor(private missionService: MissionService, private cartService: CartService, private commonService: CommonService) {
    missionService.missionConfirmed$.subscribe( // important
      astronaut => {
        // this.history.push(`${astronaut} confirmed the mission`);
        alert(astronaut);
      });
  }

  announce() {
    // const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(this.mission);
    // this.history.push(`Mission "${this.mission}" announced`);
    // if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  getSomeData () {
    return 'ABCD';
  }

  onTemplateRefViewClick() {
      // console.log(this.testSizer);
      // this.testSizer.fillColor = '#b5b816';

      console.log(this.templateTest);
      
  }

  onToggleStyle() {
    // this.spanStyle = this.spanStyle2;

    alert('User name is: ' + this.userName);
  }

  toggleProject () {
    this.project = {
      feature: 'XYZ',
      person: 'Mohan'
    }

    console.log(this.cartService.getItems());
    
    this.cartService.addToCart({
       id: 10001,
       name: 'XYZ',
       description: 'XYZ',
       price: 100
    });

    this.commonService.addToNames('Alwin');
    console.log(this.commonService.readNames());
  }

  setRandomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.highlightColor = `rgb(${r}, ${g}, ${b})`;
  }
}