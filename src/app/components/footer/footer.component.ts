import { Component, OnInit } from '@angular/core';
import {faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();
  twitter = faTwitter;
  instagram = faInstagram;
  fb = faFacebookF;

  constructor() { }

  ngOnInit(): void {
  }

}
