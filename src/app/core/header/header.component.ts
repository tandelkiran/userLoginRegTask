import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * method for route perticular page
   * @param path paht of page
   */
  public goToPage(path: any): void{
    this.router.navigate([path]);
  }
}
