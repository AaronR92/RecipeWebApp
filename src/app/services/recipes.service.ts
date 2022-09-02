import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"


const headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa('antonru924@gmail.com:password')
})


@Injectable({
    providedIn: "root"
}) 
export class RecipesService {

    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get(`http://localhost:8080/api/recipe/all`, 
        {headers, responseType:'text' as 'json'})
    }
}