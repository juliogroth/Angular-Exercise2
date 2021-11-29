import { InterpolationConfig } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
      this.messages.push(message);
    }

  delete(indexador: number) {
    console.log("testando " + indexador);
    this.messages.splice(indexador,1);
    console.log(this.messages);
  }
  
  clear() {
    this.messages = [];
  }
}