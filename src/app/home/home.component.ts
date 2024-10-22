import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
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
