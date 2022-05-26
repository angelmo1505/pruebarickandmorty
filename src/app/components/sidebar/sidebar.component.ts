import { Component, Input, OnInit } from '@angular/core';

export interface Navs {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isCollapsed!: boolean;
  @Input() loadData!: boolean;
  navs: Navs[] = [
    { name: 'Home', icon: 'home', url: '/' },
    { name: 'Mis Cursos', icon: 'auto_stories', url: '/course-list' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  getPath(){
    return window.location.pathname;
  }

}
