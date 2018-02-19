import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { iTunesSearchResults } from './iTunesSearchResults.interface';

@Injectable()

export class iTunesService {
	
	constructor(private _http:HttpClient) {} //inject the http to make the REST API call
	
	baseUrl: string = "https://itunes.apple.com/search?entity=album&term="; // URL of the API
	
	// Get iTunes API and log to console in order to see data structure and create a matching interface
	// This function used only at the first time in order to see how the API is built
	/*getAlbums(): void {
		this._http.get("https://itunes.apple.com/search?entity=album&term=Jay Z").subscribe(data => console.log(data));
	}*/
	
	getAlbums(artistName: string): Observable<iTunesSearchResults[]> {
		return this._http.get<{resultCount: number, results: any[]}>(`${this.baseUrl}${artistName}`)
	    .map(data => data.results);
	}
	
}
