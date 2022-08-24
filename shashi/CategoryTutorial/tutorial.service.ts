import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from '../models/tutorial.model';
import { Category } from '../models/categoryTask.model';

const baseUrl = 'http://localhost:8000/tutorials';
const baseUrl2 = 'http://localhost:8000/category';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  public tutorials!: Tutorial[];

  onSubmit() {
    throw new Error('Method not implemented.');
  }
  private Countrys = [{ name: 'qq' }, { name: 'www' }];
  
  constructor(private http: HttpClient) {}

  getTasks() {
    this.tutorials = JSON.parse(localStorage.getItem('todoListAngular'));
    return this.tutorials;
 }

  getCountryFromData() {
    return this.Countrys;
  }

  async getAll(): Promise<Tutorial[]> {
    return await this.http.get<Tutorial[]>(baseUrl).toPromise();
  }

  async getAllCategory(): Promise<Category[]> {
    return await this.http.get<Category[]>(baseUrl2).toPromise();
  }

  createTutorial(data: any) {
    return this.http.post(baseUrl, data).toPromise();
  }

  updateTutorial(data: any) {
    return this.http.put(baseUrl, data).toPromise();
  }

  async getTutorial(id: Number): Promise<Tutorial> {
    return await this.http.get(`${baseUrl}/${id}`).toPromise();
  }
}
