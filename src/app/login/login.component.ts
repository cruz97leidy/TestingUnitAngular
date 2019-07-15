import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TestService } from './../services/test.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  listOfUsers: any;

  constructor(private router: Router, private testService: TestService) { }

  ngOnInit() {
    this.mockServices();
  }

  redirectPrincipal(){
    this.router.navigate(['/search-module/search']);
  }

  redirectBattle(){
    this.router.navigate(['/battle-module']);
  }

  mockServices(){
    this.testService.getInfo().subscribe(response =>{
      this.listOfUsers = response;
    }, error =>{
      this.listOfUsers = 'error';
    })
  }
}
