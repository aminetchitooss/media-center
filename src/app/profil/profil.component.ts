import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/services/http.service';
import { SmoothY, YToTop, XToRight, SmoothPop } from '../shared/animation';
import { element } from 'protractor';

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
  memoryList = [
    // "https://picsum.photos/500/200"
  ]
  Imgloading = true
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.findUser()
    });
  }

  findUser() {
    this.hs.getFakeService().subscribe((res: any) => {
      this.hs.getMemories().subscribe((memories: any) => {
        this.memoryList = memories
        console.log(this.memoryList)
        this.hs.hideLoader()
        this.user = res.users.find(user => user.id == this.userId)
        console.log(this.user)
      })
    })
  }

  loaded() {
    this.Imgloading = false
  }
}
