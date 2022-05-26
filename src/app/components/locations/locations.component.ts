import { Component, OnInit, ViewChild } from '@angular/core';
import { RickandmortyService } from 'src/app/services/rickandmorty-service.service';
import {MatTableDataSource} from '@angular/material/table';
import { characters } from 'src/app/interfaces/characters';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  preCollapsed: boolean = true;
  dataRickandMorty: any;
  displayedColumns: string[] = ['id', 'name', 'accion'];
  dataSource!: MatTableDataSource<characters[]>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  resultsLength = 0;

  constructor(
    private _rickandmortyService: RickandmortyService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this._rickandmortyService.getRickandMortyLocations().subscribe(
      data => {
        console.log('dataLocations => ',data);
        this.dataRickandMorty = data;
        this.dataSource = new MatTableDataSource(this.dataRickandMorty.results);
        this.dataSource.paginator = this.paginator;
        this.resultsLength = this.dataRickandMorty.results.length;
      },
      error => {
        console.log('error => ', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
  }

  viewListCharacter(){
    this.route.navigate(['/'])
  }

}
