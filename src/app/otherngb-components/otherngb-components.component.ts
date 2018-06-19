import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
// import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-otherngb-components',
  templateUrl: './otherngb-components.component.html',
  styleUrls: ['./otherngb-components.component.css']

})
export class OtherngbComponentsComponent implements OnInit {

  images: Array<string>;
  currentJustify = 'start';//tabsets
  time = { hour: 13, minute: 30 };//time-picker
  meridian = true;
  seconds = true;
  name = 'World';

  toggleMeridian() {
    this.meridian = !this.meridian;
  }
  constructor(private _http: HttpClient, config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    // config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    // config.height = '20px';
  }


  // ctrl = new FormControl(null, Validators.required);

  // toggle() {
  //   if (this.ctrl.disabled) {
  //     this.ctrl.enable();
  //   } else {
  //     this.ctrl.disable();
  //   }
  // }
  ngOnInit() {
    this._http.get('https://picsum.photos/list')
      .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }

  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }

}
