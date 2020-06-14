import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { DataService } from '../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public hs: HttpService, public ds: DataService, public router: Router) { }

  loading = true
  userList = []
  count = 0
  currentUser = {}
  ngOnInit() {
    this.hs.getFakeService().subscribe((res: any) => {
      this.userList = res.users
      // const vUser = this.ds.getCurrentUser()
      // if (vUser.id)
      //   this.choose({
      //     id: vUser.id,
      //     name: vUser.name,
      //     img: vUser.img
      //   })
      console.log(this.userList)
    })
  }

  loaded() {
    this.count++
    if (this.count > 0 && this.count == this.userList.length)
      this.loading = false
  }

  choose(pUser) {
    this.ds.setCurrentUser({ ...this.ds.getCurrentUser(), ...pUser })
    this.currentUser = pUser
    setTimeout(() => {
      this.router.navigate(['profil/' + pUser.id])
    }, 10);
  }

}
