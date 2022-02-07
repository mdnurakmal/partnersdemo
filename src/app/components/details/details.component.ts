import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ControllerService } from 'src/app/controller.service';
import { Demo } from 'src/app/models';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  gameRating = 0;
  gameId: string;
  demo: Demo;
  routeSub: Subscription;
  gameSub: Subscription;

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
    liveDemo: "https://ui-m5hyfr2bqa-ey.a.run.app",
    deployDemo:"https://ui-m5hyfr2bqa-ey.a.run.app"
   }

  constructor(
    private activatedRoute: ActivatedRoute,
    private conService : ControllerService,
    private sanitizer:DomSanitizer
  ) {
    this.demo = this.demo1;

   }

   getUrl(column:string){
    return this.sanitizer.bypassSecurityTrustUrl(`${column}`);
}
   

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.demo = this.conService.getDemo(params['id'])
    });

  }



  ngOnDestroy(): void {

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
