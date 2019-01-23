import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Sum } from '../sum';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-heroesng',
  templateUrl: './heroesng.component.html',
  styleUrls: ['./heroesng.component.css']
})
export class HeroesngComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  sum: Sum = {
    num1: 0,
    num2: 0,
    sum:0
  };
  
  constructor() { }

  ngOnInit() {
    
  }

}
