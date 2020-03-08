import { Component, OnInit } from '@angular/core';
import { DelayService } from './util/delay.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loader: boolean = true;
  content: boolean = false;
  loadCake:boolean = false;

  constructor(private delaySvc: DelayService) {

  }
  ngOnInit() {

    AOS.init({
      duration: 1500,
    })

    this.delay();



  }
  async delay() {
    await this.delaySvc.delay(3000);
    this.loader = false;
    this.loadCake = true;
    await this.delaySvc.delay(7000);
    this.content = true;
    // await this.delaySvc.delay(1000);
    // this.loadCake = false;
  }
}
