import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Publisher } from '../models/publisher';

@Injectable()

export class PublisherService {
  private publisherUrl = 'http://localhost:3000/api/publishers';

  constructor(private http: Http) { }

  getPublishers(): Promise<Publisher[]> {
    return this.http.get(`${this.publisherUrl}.json`)
      .toPromise()
      .then(response => response.json().data)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getPublisher(id: number): Promise<Publisher> {
    return this.http.get(`${this.publisherUrl}/${id}.json`)
      .toPromise()
      .then(response => response.json().data)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  createPublisher(name: string): Promise<Publisher> {
    let body = JSON.stringify({ publisher: { name: name } });
    let headers = new Headers({ 'Content-Type': 'application/vnd.api+json' });
    return this.http.post(`${this.publisherUrl}.json`, body, { headers: headers })
      .toPromise()
      .then(response => response.json().data)
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
    return this.http.put(`${this.publisherUrl}/${publisher.id}.json`, body, { headers: headers })
  }

  private handleError(error: any) {
    console.log(error);
    return Promise.reject(error.meta.errors || 'Server Error');
  }
}