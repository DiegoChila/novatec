import { Component, OnInit } from '@angular/core';
import { ResponseData } from 'src/app/models/response-data';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students: User[] = new Array();
  teachers: User[] = new Array();

  constructor(private userService: UserApiService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(
      (response: ResponseData<User[]>) => {
        if (response.code === 200) {
          this.students = response.response.filter(item => !item.role);
          this.teachers = response.response.filter(item => item.role);
        }
      }
    )
  }
}
