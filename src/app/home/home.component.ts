import { Component, OnInit } from "@angular/core";
import { MainService } from "../services/main.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movies: Observable<any[]>;
  startIndex: number = 0;
  endIndex: number = 10;
  // pagination: number[] = [1, 2];
  // countMovies: number;

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.getMovies();
    // this.setLastPage();
  }

  setPage(type: String) {
    if (type == "next" && this.movies["length"] >= this.endIndex) {
      this.startIndex = this.endIndex;
      this.endIndex = this.endIndex + 10;
    } else if (type == "prev") {
      this.endIndex = this.startIndex;
      this.startIndex = this.startIndex - 10;
    }

    console.log("Start index " + this.startIndex);
    console.log("End index " + this.endIndex);
  }

  setLastPage() {}

  getMovies() {
    this.mainService.getMoviesData().subscribe(response => {
      this.movies = response;
      // this.countMovies = response.length;
      // this.movies = this.allMovies.slice
    });
  }
}
