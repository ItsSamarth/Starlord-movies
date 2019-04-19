import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MainService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  api: string = "http://starlord.hackerearth.com/movies";
  constructor(private http: HttpClient) {}

  getMoviesData(): Observable<any> {
    return this.http.get("/movies");
    // .pipe(map(res => res.json()))
    // .do(data => console.log(data));
  }
}
