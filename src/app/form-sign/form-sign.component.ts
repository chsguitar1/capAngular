import { Component } from '@angular/core';

@Component({
  selector: 'app-form-sign',
  templateUrl: './form-sign.component.html',
  styleUrls: ['./form-sign.component.css'],
})
export class FormSignComponent {
  nome: string = '';
  endereco: string = '';
  cidade = new String();
  cargo: string = '';

  cargos: Array<string> = ['Desenvolvedor', 'QA', 'Arquiteto'];

  setCargo(e: any) {
    this.cargo = e;
  }

  setNome(e: string) {
    this.nome = e;
  }

  setEndereco(e: string) {
    this.endereco = e;
  }

  setCidade(e: string) {
    this.cidade = e;
  }

  sendMessage() {
    alert(
      this.nome + '\n' + this.endereco + '\n' + this.cidade + '\n' + this.cargo
    );
  }
}
