import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(){
  }

  headername = 'Bem vindo';
  

  ngOnInit(): void {

  }

  functionclick(name: string) {
    alert(name)

  }
}


