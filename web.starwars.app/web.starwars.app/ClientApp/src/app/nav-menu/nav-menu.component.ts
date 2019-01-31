import { Component, OnInit } from '@angular/core';
import { NavMenuService } from "./service/nav-menu.service"

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [NavMenuService]
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  menuItems: string[] = [];

  constructor(private navMenuService: NavMenuService) { }

  ngOnInit(): void {
    this.getManuItemsList();
  }

  getManuItemsList(): void {
    this.navMenuService.getMenuItems()
      .subscribe(items => this.menuItems = items);
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
