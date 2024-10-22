import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Message {
  sender: 'user' | 'bot';
  content: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  prompt: string = '';
  currentMessage: string = '';
  messages: Message[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.prompt = params['prompt'] || '';
    });
  }

  sendMessage() {
    if (this.currentMessage.trim() === '') return;

    // Adiciona a mensagem do usuário na lista de mensagens
    this.messages.push({ sender: 'user', content: this.currentMessage });

    // Envia a mensagem para o backend
    this.chatService.sendMessage(this.currentMessage, this.prompt).subscribe(
      response => {
        // Adiciona a resposta do bot na lista de mensagens
        this.messages.push({ sender: 'bot', content: response });
        // Limpa a mensagem atual
        this.currentMessage = '';
      },
      error => {
        console.error('Erro ao enviar mensagem:', error);
        // Opcional: Adicione uma mensagem de erro para o usuário
        this.messages.push({ sender: 'bot', content: 'Desculpe, ocorreu um erro.' });
        this.currentMessage = '';
      }
    );
  }
}
