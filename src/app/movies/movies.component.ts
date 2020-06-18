import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
declare var $: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieList = []
  count = 0
  loading = true
  anim = "one"
  movieChosen

  constructor(public hs: HttpService) { }
  ngOnInit() {

    this.hs.getMoviesCount().subscribe((list: any) => {
      this.movieList = list
      this.hs.hideLoader()
      this.hs.getMovies({ list }).subscribe((res: any) => {
        this.initData(res)
      })
    })
  }

  initData(res) {
    this.movieList = res;
    for (const element of this.movieList) {
      if (element.Ratings.length > 0)
        element.rating = element.Ratings[0].Value.split('/')[0]
    }
    console.log(this.movieList.map(res => res.path.split('.')[1]))
  }

  loaded() {
    this.count++
    if (this.count > 0 && this.count == this.movieList.length)
      this.loading = false
  }


  watch(movie) {
    this.movieChosen = movie.path
    $('#modal-container').addClass(this.anim);
    $('#tt').addClass('modal-active');
  }

  close() {
    this.movieChosen = null
    $('#modal-container').removeClass(this.anim);
    $('#tt').removeClass('modal-active');
  }

}
