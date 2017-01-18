import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  id: any;
  paramsSub: any;
  
  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
  }
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
