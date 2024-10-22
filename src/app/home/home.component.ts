import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  prompt: string = '';

  constructor(private readonly router: Router) { }

  startChat() {
    if (this.prompt.trim() === '') {
      alert('Por favor, defina o prompt do sistema.');
      return;
    }
    // Navegar para a rota 'chat' com o prompt como parâmetro
    this.router.navigate(['/chat'], { queryParams: { prompt: this.prompt } });
  }
}
