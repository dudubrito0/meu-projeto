class Funcionario {
  constructor(nome, idade, cargo, salario) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = salario;
  }

  obterNome = () => this.nome;
  alterarNome = novoNome => this.nome = novoNome;

  pegarIdade = () => this.idade;
  definirIdade = novaIdade => this.idade = novaIdade;

  cargoAtual = () => this.cargo;
  atualizarCargo = novoCargo => this.cargo = novoCargo;

  salarioAtual = () => this.salario;
  atualizarSalario = novoSalario => this.salario = novoSalario;

  resumo = () => `${this.nome}, ${this.idade} anos, ${this.cargo}, R$ ${this.salario}`;
}

const funcionarios = [];
const form = document.getElementById('form-funcionario');
const tabelaBody = document.querySelector('#tabela-funcionarios tbody');
const indiceEdicao = document.getElementById('indice-edicao');
const output = document.getElementById('relatorio-output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const cargo = document.getElementById('cargo').value;
  const salario = parseFloat(document.getElementById('salario').value);
  const indice = parseInt(indiceEdicao.value);

  if (indice >= 0) {
    let f = funcionarios[indice];
    f.alterarNome(nome);
    f.definirIdade(
