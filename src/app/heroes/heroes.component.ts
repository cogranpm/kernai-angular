import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[]
  selectedHero?: Hero

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    // wait for service to emit asyc
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }



}
