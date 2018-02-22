import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Iuser } from '../iuser';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user:Iuser;

  constructor(private userService:UserService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.userService.userReady$.subscribe(post => this.user = this.userService.selectedUser); // Pour que un rafraichissement marche
    this.user=this.userService.selectedUser;
  }

  onSubmit() {
    this.userService.update().subscribe(
      user => {
        this.snackBar.open('Mise à jour réussie !','update', {duration:1000}); // 2. Afficher un message de confirmation de ma mise a jour
      }
    );
    setTimeout ( ()  => {
    this.router.navigateByUrl('/users'); // Retourne sur le lien suivant: liste des users
    },1000);
    
  }

}
