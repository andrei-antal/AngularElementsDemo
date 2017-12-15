## Angular Elements demo for ngBucharest Meetup

- Proof of concept for Building Angular Elements and using them in a react app. This is a fork of Rob Wormalds old Angular Elements repo. Mheanwile it has been moved to the Angular repo, on this [branch](https://github.com/angular/angular/tree/labs/elements).
- This example is generated using the instructions found in [this](https://moduscreate.com/blog/angular-elements-ngcomponents-everywhere/) article

- To run the example
1. run `npm install`
2. run `npm run build` - this will generate the Angular Element web component script.
3. In the `lib` folder you can find 2 files: `angular.js` and `todo-app.js`. In order to use these, just create a simple html app and ad dthe 2 in a script tag and include `<todo-app></todo-app>` in you application and interact with it as with any HTML dom element
4. To run the react example, go in the `react_app` folder and run `yarn install` and then `yarn run start` (make sure you have Yarn installed; npm works as well) and explore the code.



This is the original readme:

### experiments with Angular and Web Components

Sketching out hosting Angular Components as Custom Elements / Web Components



#### Angular Component API (4.x)

Angular components are 

```ts

//annotate with metadata about template and styles
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.html',
  styleUrls: [ 'my-component.css' ],
  viewEncapsulation: ViewEncapsulation.Native //Shadow DOM V0
  providers: [ SomeService ],

})
class MyComponent {
  //public API for component consumers
  @Input() someProperty:any; //property values passed in
  @Output() someEvent new EventEmitter(); //events go out

  @ViewChild(ChildComponent) childView:ChildComponent;
  @ViewChildren(ItemComponent) items:QueryList<ItemComponent>

  //bind to host element events
  @HostListener('mousemove', ['$event'])
  onMouseMouse(event:MouseEvent){}

  //bind to host properties and attributes
  @HostBinding('attr.aria-foo') someValue;
  
  //lifecycle events
  ngOnInit(){}
  ngOnChanges(changes){}
  ngDoCheck(){}
  ngOnDestroy(){}

  //view lifecycle events
  ngAfterContentInit(){}
  ngAfterContentChecked(){}
  ngAfterViewInit(){}
  ngAfterViewChecked(){}


}

```


#### Custom Elements v1 API

```ts

class MyCustomElement extends HTMLElement {
  //newable
  constructor(...optionalArgs?:any[]){}

  //attributes to observe changes to
  static get observedAttributes():string[]{ return ['value', 'foo'] }

  //properties
  someProp:string;
  set foo(value:string) { }
  get foo() { return 'foo' }

  //dispatch events
  onClick(){
    this.dispatchEvent(new CustomEvent('some-event', options))
  }

  //called when attributes change
  attributeChangedCallback(attributeName, oldValue, newValue, namespace):void {}

  //called when connected to a document / shadow tree
  connectedCallback():void {}

  //called when removed from document 
  disconnectedCallback():void {}

}

```

