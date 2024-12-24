import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private userService: UserService

  ){}
  user$ = this.userService.retornarUser();

}
