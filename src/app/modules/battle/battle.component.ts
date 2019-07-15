import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  collection: Array<any> = []
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.collection = [{id: 1}, {id: 2}, {id: 3}]
  }

  addItem(){
    this.collection = this.newItem();
  }

  newItem(){
    return [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
  }

  trackByFn(index, item) {
    return index;
  }

  
  goBattle(){
    this.router.navigate(['gobattle'], { relativeTo: this.route, replaceUrl: true});
  }
}
