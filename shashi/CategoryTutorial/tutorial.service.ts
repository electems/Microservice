import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutorial} from '../models/tutorial.model';
import { Category } from '../models/categoryTask.model';

const baseUrl = 'http://localhost:8000/tutorials';
const baseUrl2 = 'http://localhost:8000/category';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

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

  async getTutorial(id: Number):Promise<Tutorial> {
    return await this.http.get(`${baseUrl}/${id}`).toPromise();
  }
}
