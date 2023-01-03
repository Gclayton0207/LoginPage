import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: UserService) {}

  headername = 'Bem vindo';
  respdata: any;

  ngOnInit(): void {
    this.service.getUser(`${localStorage.getItem('id')}`).subscribe((item) => {
      this.respdata = item;
      this.headername += ` ${this.respdata.user.name}`;
      console.log();
    });
  }

  functionclick(name: string) {
    alert(name);
  }
}
