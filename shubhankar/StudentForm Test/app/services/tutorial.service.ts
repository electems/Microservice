import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Tutorial } from '../models/tutorial.model'

const baseUrl = 'http://localhost:8080/api/tutorials'

@Injectable({
  providedIn: 'root',
})
export class TutorialService {

  tutorial :Tutorial[] = [ 
  {"id":1, "title":"BA","description":"Kate" ,"published":false},
  {"id":2, "title":"BA0","description":"Kate0" ,"published":false},
  {"id":3, "title":"BA1","description":"Kate1" ,"published":false},
  {"id":4, "title":"BA2","description":"Kate2" ,"published":false},
  {"id":5, "title":"BA3","description":"Kate3" ,"published":false},
  {"id":6, "title":"BA4","description":"Kate4" ,"published":false},
]
  constructor(private http: HttpClient) {}

  getAll(){
    return this.tutorial;
  }
 
  getData(){
   return "data is fetched"
  }

  get(id: any) {
  const index = this.tutorial.findIndex(u => id == u.id);
  return this.tutorial[index]
 }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl)
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`)
  }
}
