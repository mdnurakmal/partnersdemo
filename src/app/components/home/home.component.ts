import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Demo } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { ControllerService } from '../../controller.service';
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

  subscription: any;
 
  demo1: Demo ={

    name: "GCP Resource Visualizer",
    website: "string",
    description: "string",
    brief_desc: "Display your whole GCP infrastructure with Neo4J",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"neo4j",
    solution_pillar: "Infrastructure Modernization",
   }

   demo2: Demo ={

    name: "Investment Recommendation",
    website: "string",
    description: "string",
    brief_desc: "Data processing pipelines that generate synthetic investor risk",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"softserve",
    solution_pillar: "Smart Analytics",
   }

   demo3: Demo ={

    name: "Demo 3",
    website: "string",
    description: "string",
    brief_desc: "Data processing pipelines that generate synthetic investor risk",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Data Management",
   }

   demo4: Demo ={

    name: "Demo 4",
    website: "string",
    description: "string",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Smart Analytics",
   }

   demo5: Demo ={
  
    name: "Demo 5",
    website: "string",
    description: "string",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Artificial Intelligence",
   }

   demo6: Demo ={

    name: "Demo 6",
    website: "string",
    description: "string",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Security",
   }

   demo7: Demo ={

    name: "Demo 7",
    website: "string",
    description: "string",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Productivity & Collaboration",
   }

   demo8: Demo ={

    name: "Demo 8",
    website: "string",
    description: "string",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Smart Analytics",
   }
   
   demoDB: Demo[] = [this.demo1,this.demo2,this.demo3,this.demo4,this.demo5,this.demo6,this.demo7,this.demo8];


  constructor(    
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute, private conService:ControllerService) { }

   

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        //this.searchGames('metacrit');
        this.games = this.demoDB;
      }
    });

    this.subscription = this.conService.getNavChangeEmitter()
    .subscribe(item => this.selectBySolution(item));
  }

  selectBySolution(solution: string): void {
    console.log("selecting sol:" + solution);
    var temp = []
    for (var demo of this.demoDB) {
      if(demo.solution_pillar==solution || solution=="All")
        temp.push(demo);
    }

    this.games = temp;
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
