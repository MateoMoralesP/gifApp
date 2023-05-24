import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

@Input()
  public alt: string = '';

  public hasLoaderd: boolean = false;

  ngOnInit(): void {
      if (!this.url)throw new Error('URL property is required');
  }

  onLoad(){
    setTimeout(()=>{
      this.hasLoaderd = true;
    }, 1000);
    // console.log('Image loaded');
    // this.hasLoaderd=true;

  }

}
