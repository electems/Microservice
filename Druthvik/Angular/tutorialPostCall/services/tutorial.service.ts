import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from '../models/tutorial.model';
import { Category } from '../models/category.model';

const baseUrl = 'http://localhost:8000/tutorial';
const baseUrl1 = 'http://localhost:8000/category';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  async getAll(): Promise<Tutorial[]> {
    return await this.http.get<Tutorial[]>(baseUrl).toPromise();
  }

  async getAllCategory(): Promise<Category[]> {
    return await this.http.get<Category[]>(baseUrl1).toPromise();
  }

  async getCategoryById(id: any): Promise<Category[]> {
    return await this.http.get<Category[]>(baseUrl1).toPromise();
  }

  getbyId(id: any) {
    return this.http.get(`${baseUrl}/${id}`).toPromise();
  }

  createTutorial(data: any) {
    return this.http.post(baseUrl, data).toPromise();
  }

  async createCategory(data: any): Promise<Category[]> {
    return await this.http.post<Category[]>(baseUrl1, data).toPromise();
  }
  update(id: any, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data).toPromise();
  }
  deletebyid(id: any) {
    return this.http.delete(`${baseUrl}/${id}`).toPromise();
  }

  deleteAll() {
    return this.http.delete(baseUrl).toPromise();
  }

  filterByTitle(title: any) {
    return this.http.get<Tutorial>(`${baseUrl}?title=${title}`).toPromise();
  }
}