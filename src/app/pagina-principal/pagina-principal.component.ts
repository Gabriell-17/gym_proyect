import { Component, OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit{
  loggedIn: boolean = false;
  username: string = '';

  constructor(private userService: UserServiceService) 
    { 
    //this.nav = this.router.getCurrentNavigation();
    //this.nuevoUsuario = this.nav.extras.state;
  }

  ngOnInit() {
    this.userService.getLoggedInState().subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });

    this.userService.getUserName().subscribe((username) => {
      this.username = username;
    });
  }
}
