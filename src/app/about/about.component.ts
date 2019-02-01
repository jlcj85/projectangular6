import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  users$ = this.userService.data$;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
