import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {


  urlList: any[] = [];

  constructor(private router: Router) {
    router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
          const url = event.url;
          this.urlList = url.split("/").splice(1, url.length);
          const list: any[] = [];
          this.urlList.reverse().forEach((element,index) => {
            var abc = '../';
            var a = {
              name:element,
              path: abc.repeat(++index)+element
            }
            list.push(a);
          });
          this.urlList = list.reverse(); 
      }
    })
  }

  ngOnInit(): void {
  }

}
