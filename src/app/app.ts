import {bootstrap, View, Component } from "angular2/angular2";

@Component({
	selector: "note-a-note"
})
@View({
	template: `<h1>Hello World!!!</h1>`
})
class MyApp {
	
}

bootstrap(MyApp, []);