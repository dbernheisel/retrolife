import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Publisher } from '../models/publisher';

@Injectable()

export class PublisherService {
  private publisherUrl = 'http://localhost:3000/api/companies';

  constructor(private http: Http) { }

  getPublishers(): Promise<Publisher[]> {
    return this.http.get(`${this.publisherUrl}?filter_role=publisher`)
      .toPromise()
      .then(response => response.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getPublisher(id: number): Promise<Publisher> {
    return this.http.get(`${this.publisherUrl}/${id}`)
      .toPromise()
      .then(response => response.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  createPublisher(name: string): Promise<Publisher> {
    let body = JSON.stringify({ company: { name: name, role: 'Publisher' } });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.publisherUrl, body, { headers: headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  updatePublisher(publisher: Publisher) {
    let body = JSON.stringify({
      publisher: {
        name: publisher.name,
        founded_on: publisher.foundedOn,
        disbanded_on: publisher.disbandedOn
      }
    });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.publisherUrl}/${publisher.id}`, body, { headers: headers })
  }

  private handleError(error: any) {
    console.log(error);
    return Promise.reject(error.meta.errors || 'Server Error');
  }
}