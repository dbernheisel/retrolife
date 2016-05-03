import { Publisher }       from '../models/publisher';
import { Http,
         Response,
         Headers,
         RequestOptions } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class PublisherService {
  constructor(private http: Http) { }
  private _publisherUrl = 'http://localhost:3000/api/publishers';

  getPublishers() {
    return this.http.get(`${this._publisherUrl}.json`)
      .map(res => <Publisher[]>res.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getPublisher(id: number) {
    return this.http.get(`${this._publisherUrl}/${id}.json`)
      .map(res => <Publisher>res.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  createPublisher(name: string) : Observable<Publisher> {
    let body = JSON.stringify({ publisher: { name: name } });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this._publisherUrl}.json`, body, options)
      .map(res => <Publisher>res.json())
      .catch(this.handleError)
  }

  updatePublisher(publisher:Publisher) {
    let body = JSON.stringify({ publisher: { name: publisher.name, founded_on: publisher.foundedOn, disbanded_on: publisher.disbandedOn } });
    return this.http.put(`${this._publisherUrl}/${publisher.id}.json`, body)
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().meta.errors || 'Server Error');
  }
}