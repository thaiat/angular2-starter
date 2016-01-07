/* beautify ignore:start */
import {Component, OnInit} from 'angular2/core';
import {IHero} from '../common/interfaces/ihero';
import {HeroService} from '../common/services/hero.service';
/* beautify ignore:end */
@Component({
    selector: 'app',
    styles: [require('./app.component.scss').toString()],
    providers: [HeroService],
    template: require('./app.component.html')
})
export class AppComponent implements OnInit {
    title = 'Tour Of Heroes';
    heroes;
    selectedHero: IHero;
    url: string = 'https://twitter.com/AngularClass';

    constructor(private heroService: HeroService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroes = this.heroService.getHeroes();
    }

    onSelect(hero: IHero) {
        this.selectedHero = hero;
    }
}
