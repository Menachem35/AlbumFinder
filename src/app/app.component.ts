import { Component, OnInit } from '@angular/core';
import { iTunesService } from './iTunesService.service';
import { iTunesSearchResults } from './iTunesSearchResults.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	constructor (private albumsList: iTunesService) {} //Inject the service
	
	title = 'Album Finder';
	
	artist: string = ''; //search string
	
	albumListByArtist: iTunesSearchResults[]; // create a new array of the interface type to get the api call
	
	getAlbums(): void {
		this.albumsList.getAlbums(this.artist).subscribe(albums => { 
			this.albumListByArtist = albums;
			console.log(albums);
		});
	}
	
	ngOnInit() {
		this.getAlbums();
	}
  
}
