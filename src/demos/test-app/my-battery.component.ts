import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-battery',
  template: `
    <div class="volume">
      HEREEEEEE
    </div>`,
  styles: [`
    :host { display: inline-block; height: 30px;}
    .volume { width: 190px; height: 100%; border: 1px solid blue; border-radius: 10px; padding: 5px 10px; }
    .volume-wrap { overflow: hidden; height: 100%; }
    .volume-fill { width: 40px; height: 100%; margin-right:10px; border-radius: 5px; display: inline-block;}
    .volume-fill:last-child { margin: 0;}

    }
  `]
})
export class MyBatteryComponent implements OnInit {
  @Input() bateryLevel:number;
  constructor() { }

  ngOnInit() {
  }

  getBackgroundColor() {
    switch(this.bateryLevel) {
      case 1: return "#F44336"
      case 2: return "#FFCA28"
      case 3: return "#FFEA00"
      case 4: return "#C6FF00"
      default: return "#C6FF00"
    }
  }

  getWidth() {
    return `${this.bateryLevel * 30}%`
  }
}
