import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // Importar MatToolbarModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule], // Adicionar MatToolbarModule aos imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Certifique-se de que está correto
})
export class AppComponent {
  title = 'chatbot-frontend';
}
