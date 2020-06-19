import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../core/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient, public loader: LoaderService) { }

  url = 'https://12de13115e47.ngrok.io/'

  getFakeService() {
    this.loader.show()
    return this.http.get("./assets/data.json")
  }

  getMoviesCount() {
    this.loader.show()
    const vUrl = this.url + 'count'
    return this.http.get(vUrl)
  }

  getMovies(pBody) {
    const vUrl = this.url + 'movies'
    return this.http.post(vUrl, pBody)
  }

  getMemories() {
    const vUrl = this.url + 'memories'
    return this.http.get(vUrl)
  }

  hideLoader() {
    setTimeout(() => {
      this.loader.hide()
    }, 200);
  }

  showLoader() {
    this.loader.show()
  }

}
