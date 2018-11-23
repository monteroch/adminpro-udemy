import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  changeColor( theme: string, link: any ) {
    console.log(link);

    this.updateCheck( link );

    let url = 'assets/css/colors/' + theme + '.css';
    this._document.getElementById('tema').setAttribute('href', url);
  }

  updateCheck( link: any ) {
    let selectors: any = document.getElementsByClassName('selector');
    for ( let ref of selectors ) {
      ref.classList.remove( 'working' );
    }

    link.classList.add('working');

  }

}
