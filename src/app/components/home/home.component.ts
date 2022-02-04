import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Demo } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
  public games: Array<Demo>;
  private routeSub: Subscription;
  private gameSub: Subscription;

  constructor(    
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

 
    demo1: Demo ={
      background_image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      name: "GCP Resource Visualizer",
      website: "string",
      description: "string",
      brief_desc: "Display your whole GCP infrastructure with Neo4J",
      parent_platforms: [],
      publishers:[],
      screenshots: [],
      partners:"neo4j"
     }

     demo2: Demo ={
      background_image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      name: "Investment Recommendation",
      website: "string",
      description: "string",
      brief_desc: "Data processing pipelines that generate synthetic investor risk",
      parent_platforms: [],
      publishers:[],
      screenshots: [],
      partners:"softserve"
     }
     
      gameArray: Demo[] = [this.demo1,this.demo2];

   

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        //this.searchGames('metacrit');
        this.games = this.gameArray;
      }
    });
  }

  searchGames(sort: string, search?: string): void {
    this.gameSub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Demo>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
