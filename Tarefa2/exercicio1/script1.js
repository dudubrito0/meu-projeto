class Funcionario {
  constructor(nome, idade, cargo, salario) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = salario;
  }

  obterNome() { return this.nome; }
  definirNome(nome) { this.nome = nome; }

  pegarIdade() { return this.idade; }
  atualizarIdade(idade) { this.idade = idade; }

  cargoAtual() { return this.cargo; }
  mudarCargo(cargo) { this.cargo = cargo; }

  salarioAtual() { return this.salario; }
  definirSalario(salario) { this.salario = salario; }

  toString() {
    return `${this.nome}, ${this.idade} anos, ${this.cargo}, R$ ${this.salario}`;
  }
}

const funcionarios = [];
const form = document.getElementById('form-funcionario');
const tabelaBody = document.querySelector('#tabela-funcionarios tbody');
const indiceEdicao = document.getElementById('indice-edicao');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade =
