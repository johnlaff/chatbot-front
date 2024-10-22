import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly apiUrl = 'http://localhost:8080/chat'; // Ajuste a URL conforme seu backend

  constructor(private readonly http: HttpClient) { }

  sendMessage(message: string, prompt: string): Observable<string> {
    let params = new HttpParams()
      .set('message', message)
      .set('prompt', prompt);
    return this.http.get(this.apiUrl, { params, responseType: 'text' });
  }
}
