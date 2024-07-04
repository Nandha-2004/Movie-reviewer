import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  url:string="http://localhost:5000/";
  constructor(private httpClient:HttpClient) 
  { 

  } 
  insertuser(username:string, phno:number, email:string, pwd:string):Observable<any>
  {
    return this.httpClient.get(this.url+"insertuser?username="+username+"&phno="+phno+"&email="+email+"&pwd="+pwd);
  }
  login(email: string, pwd: string): Observable<any> {
    return this.httpClient.get(this.url + 'login?email=' + email + '&pwd=' + pwd);
  }
  ulogin(email: string, pwd: string): Observable<any> {
    return this.httpClient.get(this.url + 'ulogin?email=' + email + '&pwd=' + pwd);
  }
  insertmovie(m_name: string, year: number, gener: string, lang: string, rate: number, native: string, description: string, type: string):Observable<any> 
  {
    return this.httpClient.get(this.url + "insertmovie?m_name=" + m_name + "&year=" + year + "&gener=" + gener + "&lang=" + lang + "&rate=" + rate + "&native=" + native + "&description=" + description + "&type=" + type);
  }
  userreview(m_name: string, year: number, gener: string,description: string):Observable<any> 
  {
    return this.httpClient.get(this.url + "userreview?m_name=" + m_name + "&year=" + year + "&gener=" + gener + "&description=" + description );
  }
  deletemovie(m_name:string):Observable<any>{
    return this.httpClient.get(this.url+"deletemovie?m_name="+m_name);
  }
  updatemovie(m_name: string, year: number, gener: string, lang: string, rate: number, native: string, description: string, type: string):Observable<any> 
  {
    return this.httpClient.get(this.url + "updatemovie?m_name=" + m_name + "&year=" + year + "&gener=" + gener + "&lang=" + lang + "&rate=" + rate + "&native=" + native + "&description=" + description + "&type=" + type);
  }
  getAllMovies(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url + 'get_all_movies');
  }
  getMovieDetails(movieName: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}get_movie_details/${movieName}`);
  }
}
