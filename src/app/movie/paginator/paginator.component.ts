import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PaginatorService } from "src/app/services/paginator.service";
import { MainService } from "src/app/services/main.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"]
})
export class PaginatorComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private pagerService: PaginatorService,
    private movieService: MainService
  ) {}

  // array of all items to be paged
  private allItems: any[];

  //pager object
  pager: any = {};

  //paged items
  pagedItems: any[];

  ngOnInit() {
    //get movies data
    this.movieService.getMoviesData().subscribe(data => {
      //set all items to json response
      this.allItems = data;
      console.log(this.allItems);

      //initilize to page 1
      this.setPage(1);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    console.log(this.pager);
    // get current page of items
    this.pagedItems = this.allItems.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
    console.log(this.pagedItems);
  }
}
