import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseData } from 'src/app/models/response-data';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User(0, '', '', true);
  newUser: boolean = true;

  constructor(
    private userService: UserApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!isNaN(this.activatedRoute.snapshot.params.userId)) {
      this.userService.get(this.activatedRoute.snapshot.params.userId).subscribe(
        (response: ResponseData<User>) => {
          this.user = response.response;
          this.newUser = false;
        }
      );
    } 
  }

  onSubmit() {
    if (this.newUser) {
      this.userService.save(this.user).subscribe(
        (response: ResponseData<User>) => {
          if (response.code == 201) {
            this.router.navigateByUrl('/');
          }
        }
      );
    } else {
      this.userService.update(this.user, this.user.id).subscribe(
        (response: ResponseData<User>) => {
          if (response.code == 200) {
            this.router.navigateByUrl('/');
          }
        }
      );
    }
  }

}
