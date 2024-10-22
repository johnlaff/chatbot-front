import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { marked } from 'marked'; // Import correto
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Message {
  sender: 'user' | 'bot';
  content: string;
  formattedContent?: SafeHtml; // Novo campo para armazenar o HTML formatado
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('messagesEnd') private messagesEnd!: ElementRef;

  prompt: string = '';
  currentMessage: string = '';
  messages: Message[] = [];
  isLoading: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly chatService: ChatService,
    private sanitizer: DomSanitizer // Injetar DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.prompt = params['prompt'] || '';
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.messagesEnd) {
      this.messagesEnd.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  sendMessage() {
    if (this.currentMessage.trim() === '') return;

    // Adicionar a mensagem do usuário
    this.messages.push({ sender: 'user', content: this.currentMessage });
    this.isLoading = true;

    this.chatService.sendMessage(this.currentMessage, this.prompt).subscribe(
      response => {
        // Converter a resposta do bot de Markdown para HTML e sanitizar
        const formatted = this.sanitizer.bypassSecurityTrustHtml(marked.parse(response) as string);
        this.messages.push({ sender: 'bot', content: response, formattedContent: formatted });
        this.currentMessage = '';
        this.isLoading = false;
      },
      error => {
        console.error('Erro ao enviar mensagem:', error);
        this.messages.push({ sender: 'bot', content: 'Desculpe, ocorreu um erro.' });
        this.currentMessage = '';
        this.isLoading = false;
      }
    );
  }
}
