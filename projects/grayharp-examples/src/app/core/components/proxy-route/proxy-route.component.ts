import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proxy-route',
  templateUrl: './proxy-route.component.html',
  styleUrls: ['./proxy-route.component.scss']
})
export class ProxyRouteComponent implements OnInit {

  @HostBinding('class')
  classes = 'overlay';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBackdropClicked() {
    this.router.navigate(['..']);
  }

}
