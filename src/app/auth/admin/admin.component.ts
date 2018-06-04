import { Component } from '@angular/core';
import { DataService } from '../../@core/data/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-admin',
  styleUrls: ['./admin.component.scss'],
  templateUrl: './admin.component.html',
})
export class AdminComponent {

  constructor(private service: DataService, private router: Router,) {

  }
  info = {
    username : '',
    password : ''
  }

  login(): void {
    this.service.login(this.info)
    .subscribe(
      (data)=>{
        console.log(data)
        localStorage.setItem('token', JSON.stringify(data));
        this.router.navigate(['/admin/dashboard']);
      },
      (error) => {
        alert(JSON.stringify(error.error))
        console.log(error)
      }
    )
  } 

}
