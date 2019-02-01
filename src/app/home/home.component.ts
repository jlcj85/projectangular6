import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  users$ = this.userService.data$;

  constructor(
    private userService: UserService
  ) { 
  }

  ngOnInit() {
    this.userService.loadUsers();
  }

  ngOnDestroy() {

  }

  remove(index) {
    this.users$.subscribe((data: any)=>{
      data.splice(index, 1);
    })
  }

}
