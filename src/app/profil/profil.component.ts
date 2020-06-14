import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(public route: ActivatedRoute, public hs: HttpService) { }
  userId
  user = {}
  memoryList=[]
  Imgloading=true
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.findUser()
    });
  }

  findUser() {
    this.hs.getFakeService().subscribe((res: any) => {
      this.user = res.users.find(user => user.id == this.userId)
      console.log(this.user)
    })
  }

  loaded() {
      // this.Imgloading = false
  }
}
