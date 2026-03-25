import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  requisicao = [
    {
      tecnologia:'HTML',
      descricao:'Estrutura da página',
    },
    {
      tecnologia:'CSS',
      descricao:'Estilização da página',
    }
  ];
}

