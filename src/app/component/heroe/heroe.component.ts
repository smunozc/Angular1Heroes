import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @Input() heroes: any[];
  @Output() query = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  heroSelection(heroName: string) {
    this.query.emit(heroName);
  }

}
