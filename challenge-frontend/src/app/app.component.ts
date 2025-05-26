import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'challenge-frontend';
  numbersInput = '';
  result: number | null = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  submitNumbers() {
    const numbersArray = this.numbersInput
      .split(',')
      .map(num => Number(num.trim()))
      .filter(num => !isNaN(num));

    this.http.post<{ sum: number }>('http://localhost:3000/sumofeven', numbersArray)
      .subscribe({
        next: (response) => {
          this.result = response.sum;
          this.error = null;
        },
        error: () => {
          this.result = null;
          this.error = 'Failed to fetch result. Please check the input and server.';
        }
      });
  }
}
