import { Component, OnInit } from '@angular/core';
import { Prova1Service } from './prova1.service';
import { Prova1 } from './prova1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'em-frontend';
  response: Prova1;

  constructor(private service: Prova1Service) { }

  ngOnInit() {
    this.getResponseFromServer();
  }

  getResponseFromServer(): void {
    this.service.getResponseFromServer().subscribe( response => this.response = response );
  }

}
