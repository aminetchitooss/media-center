import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/services/http.service';
import { SmoothY, YToTop, XToRight, SmoothPop } from '../shared/animation';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  animations: [SmoothPop, YToTop, XToRight, SmoothY]
})
export class ProfilComponent implements OnInit {

  constructor(public route: ActivatedRoute, public hs: HttpService) { }
  userId
  user: any = {}
  Imgloading = true
  dataLoaded = false
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.findUser()
    });
  }

  findUser() {
    this.hs.getFakeService().subscribe((res: any) => {
      this.hs.hideLoader()
      this.dataLoaded = true
      this.user = res.users.find(user => user.id == this.userId)
      console.log(this.user)
    })
  }

  loaded() {
    this.Imgloading = false
  }
}
