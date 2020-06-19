import { Component, OnInit } from '@angular/core';
import { SmoothY, XToRight, YToTop, SmoothPop } from '../shared/animation';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss'],
  animations: [SmoothPop, YToTop, XToRight, SmoothY]

})
export class MemoriesComponent implements OnInit {

  memoryList
  constructor(public hs: HttpService) { }

  ngOnInit() {
    this.hs.getMemories().subscribe((memories: any) => {
      this.memoryList = memories
      console.log(this.memoryList)
      this.hs.hideLoader()
    })
  }

}
