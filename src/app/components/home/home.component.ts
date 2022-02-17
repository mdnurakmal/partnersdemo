import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Demo } from 'src/app/models';

import { ControllerService } from '../../controller.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger("inOutAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [
        animate(
          300,
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 0.25, offset: 0.25 }),
            style({ opacity: 0.5, offset: 0.5 }),
            style({ opacity: 0.75, offset: 0.75 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ]),
 
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
  public games: Array<Demo>;
  private routeSub: Subscription;
  subscription: any;

  demo1: Demo ={

    name: "GCP Resource Visualizer",
    website: "string",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium urna. Nullam quis elit odio. Cras rhoncus enim mi, quis aliquet metus euismod nec. Nulla vel tempus elit, at aliquet magna. Aliquam iaculis nibh in dictum fermentum. Vestibulum eu accumsan diam, vel sagittis est. Sed facilisis cursus nulla non ultricies. In sit amet tempus leo. Proin condimentum leo non eros semper euismod luctus id orci. Fusce non metus sodales, rhoncus nibh sit amet, dapibus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in consectetur tortor, vitae venenatis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brief_desc: "Display your whole GCP infrastructure with Neo4J",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"neo4j",
    solution_pillar: "Infrastructure Modernization",
    liveDemo: "http://104.197.25.92:7474/browser",
    deployDemo:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https://github.com/mdnurakmal/neo4j-gcp-viz.git&cloudshell_image=gcr.io/cloudrun/button&shellonly=true"
   }

   demo2: Demo ={

    name: "Investment Recommendation",
    website: "string",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium urna. Nullam quis elit odio. Cras rhoncus enim mi, quis aliquet metus euismod nec. Nulla vel tempus elit, at aliquet magna. Aliquam iaculis nibh in dictum fermentum. Vestibulum eu accumsan diam, vel sagittis est. Sed facilisis cursus nulla non ultricies. In sit amet tempus leo. Proin condimentum leo non eros semper euismod luctus id orci. Fusce non metus sodales, rhoncus nibh sit amet, dapibus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in consectetur tortor, vitae venenatis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brief_desc: "Data processing pipelines that generate synthetic investor risk",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"softserve",
    solution_pillar: "Smart Analytics",
    liveDemo: "https://ui-b3lhcxttdq-ey.a.run.app/",
    deployDemo:"https://ui-b3lhcxttdq-ey.a.run.app/"
   }

   demo3: Demo ={

    name: "Stream real time data with kafka",
    website: "string",
    description: "Track your vehicle in real time with Kafka. Our app offers a phenomenal level of detail, but it also has some great features like geo-fencing and lost car detection. View live kafka cluster: http://34.125.115.64:8080/",
    brief_desc: "Track your vehicle in real time with Kafka.",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"confluent",
    solution_pillar: "Data Management",
    liveDemo: "http://34.125.115.64:5000/",
    deployDemo:"http://34.125.115.64:5000/"
   }

   demo4: Demo ={

    name: "Demo 4",
    website: "string",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium urna. Nullam quis elit odio. Cras rhoncus enim mi, quis aliquet metus euismod nec. Nulla vel tempus elit, at aliquet magna. Aliquam iaculis nibh in dictum fermentum. Vestibulum eu accumsan diam, vel sagittis est. Sed facilisis cursus nulla non ultricies. In sit amet tempus leo. Proin condimentum leo non eros semper euismod luctus id orci. Fusce non metus sodales, rhoncus nibh sit amet, dapibus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in consectetur tortor, vitae venenatis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Smart Analytics",
    liveDemo: "https://www.lipsum.com/",
    deployDemo:"https://www.lipsum.com/"
   }

   demo5: Demo ={
  
    name: "Demo 5",
    website: "string",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium urna. Nullam quis elit odio. Cras rhoncus enim mi, quis aliquet metus euismod nec. Nulla vel tempus elit, at aliquet magna. Aliquam iaculis nibh in dictum fermentum. Vestibulum eu accumsan diam, vel sagittis est. Sed facilisis cursus nulla non ultricies. In sit amet tempus leo. Proin condimentum leo non eros semper euismod luctus id orci. Fusce non metus sodales, rhoncus nibh sit amet, dapibus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in consectetur tortor, vitae venenatis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Artificial Intelligence",
    liveDemo: "https://www.lipsum.com/",
    deployDemo:"https://www.lipsum.com/"
   }

   demo6: Demo ={

    name: "Demo 6",
    website: "string",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium urna. Nullam quis elit odio. Cras rhoncus enim mi, quis aliquet metus euismod nec. Nulla vel tempus elit, at aliquet magna. Aliquam iaculis nibh in dictum fermentum. Vestibulum eu accumsan diam, vel sagittis est. Sed facilisis cursus nulla non ultricies. In sit amet tempus leo. Proin condimentum leo non eros semper euismod luctus id orci. Fusce non metus sodales, rhoncus nibh sit amet, dapibus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in consectetur tortor, vitae venenatis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Security",
    liveDemo: "https://www.lipsum.com/",
    deployDemo:"https://www.lipsum.com/"
   }

   demo7: Demo ={

    name: "Demo 7",
    website: "string",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium urna. Nullam quis elit odio. Cras rhoncus enim mi, quis aliquet metus euismod nec. Nulla vel tempus elit, at aliquet magna. Aliquam iaculis nibh in dictum fermentum. Vestibulum eu accumsan diam, vel sagittis est. Sed facilisis cursus nulla non ultricies. In sit amet tempus leo. Proin condimentum leo non eros semper euismod luctus id orci. Fusce non metus sodales, rhoncus nibh sit amet, dapibus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in consectetur tortor, vitae venenatis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Productivity & Collaboration",
    liveDemo: "https://www.lipsum.com/",
    deployDemo:"https://www.lipsum.com/"
   }

   demo8: Demo ={

    name: "Demo 8",
    website: "string",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium urna. Nullam quis elit odio. Cras rhoncus enim mi, quis aliquet metus euismod nec. Nulla vel tempus elit, at aliquet magna. Aliquam iaculis nibh in dictum fermentum. Vestibulum eu accumsan diam, vel sagittis est. Sed facilisis cursus nulla non ultricies. In sit amet tempus leo. Proin condimentum leo non eros semper euismod luctus id orci. Fusce non metus sodales, rhoncus nibh sit amet, dapibus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in consectetur tortor, vitae venenatis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brief_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parent_platforms: [],
    publishers:[],
    screenshots: [],
    partners:"demo",
    solution_pillar: "Smart Analytics",
    liveDemo: "https://www.lipsum.com/",
    deployDemo:"https://www.lipsum.com/"
   }
   
   demoDB: Demo[] = [this.demo1,this.demo2,this.demo3,this.demo4,this.demo5,this.demo6,this.demo7,this.demo8];


  constructor(    

    private router: Router,
    private activatedRoute: ActivatedRoute, private conService:ControllerService) { }


  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {

        //this.searchGames('metacrit');
        this.games = this.demoDB;
      
    });

    this.subscription = this.conService.getemitSolutionPillarFilter()
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

  openGameDetails(id: Number): void {


    console.log("open details" + id);
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {

    console.log("ngondestry");
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.conService.emitDemosDb(this.games);
  }

}
