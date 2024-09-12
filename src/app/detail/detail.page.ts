import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  
  pro:any;
  constructor( private rotue:Router) { const navigation = this.rotue.getCurrentNavigation();
    this.pro = navigation?.extras?.state?.['i'];}
    

  ngOnInit() {
  }

}