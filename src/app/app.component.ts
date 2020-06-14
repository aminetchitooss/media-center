import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public ds: DataService) {
  }
  userId

  ngOnInit() {
  }

  checkProfilSelected() {
    const vUser = this.ds.getCurrentUser()
    if (this.ds.isNotNull(vUser.id)) {
      this.userId = vUser.id
      return true
    } else { return false }
  }
}
