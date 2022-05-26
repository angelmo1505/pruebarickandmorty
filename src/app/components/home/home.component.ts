import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { RickandmortyService } from 'src/app/services/rickandmorty-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { characters } from 'src/app/interfaces/characters';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataRickandMorty: any;
  displayedColumns: string[] = ['id', 'name', 'accion'];
  dataSource!: MatTableDataSource<characters[]>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  resultsLength = 0;
  preCollapsed: boolean = true;

  constructor(
    private _rickandmortyService: RickandmortyService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._rickandmortyService.getRickandMortyCharacters().subscribe(
      data => {
        console.log('data => ',data);
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

  viewDetailCharacter(character: characters) {
    this.dialog.open(DialogDetailCharacter, {
      autoFocus: false,
      disableClose: true,
      width: screen.width <= 1440 ? '75%' : '50%',
      data: character
    });
  }

}

@Component({
  selector: 'dialog-detail-character',
  templateUrl: 'dialog/dialog-detail-character/dialog-detail-character.component.html',
  styleUrls: ['dialog/dialog-detail-character/dialog-detail-character.component.scss']
})
export class DialogDetailCharacter {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: characters, public dialog: MatDialog
  ){}
}
