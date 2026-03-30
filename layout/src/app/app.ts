import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Home } from './pages/home/home';
import { Farmador } from './pages/farmador/farmador';
import { Mogador } from './pages/mogador/mogador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet,Header, Footer, Home, Farmador, Mogador, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('layout');
}
