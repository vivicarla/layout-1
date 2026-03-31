import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  requisicao = [
    {
      tecnologia:'HTML',
      descricao:'Estrutura da página e conteúdo estático da página',
    },
    {
      tecnologia:'CSS',
      descricao:'Estilização da página e responsividade da página',
    },
    {
      tecnologia:'JavaScript',
      descricao:'Interatividade da página e manipulação do DOM',
    }
  ];
}

