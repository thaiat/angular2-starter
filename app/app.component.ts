import {Component} from 'angular2/core';

interface Hero {
	id: number;
	name: string
}

let HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];

@Component({
	selector: 'my-app',
	styles: [require('./app.component.css')],
	template: require('./app.component.html')
})
export class AppComponent {
	public title = 'Tour Of Heroes';
	public heroes = HEROES;
	public selectedHero: Hero;

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}