class Funcionario {
  constructor(nome, idade, cargo, salario) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = salario;
  }

  obterNome() { return this.nome; }
  alterarNome(novoNome) { this.nome = novoNome; }

  obterIdade() { return this.idade; }
  atualizarIdade(novaIdade) { this.idade = novaIdade; }

  cargoAtual() { return this.cargo; }
  modificarCargo(novoCargo) { this.cargo = novoCargo; }

  salarioAtual() { return this.salario; }
  definirSalario(novoSalario) { this.salario = novoSalario; }

  descrever() {
    return `${this.nome}, ${this.idade} anos, ${this.cargo}, R$ ${this.salario}`;
  }
}

const funcionarios = [];

const form = document.getElementById('form-funcionario');
const tabelaBody = document.querySelector('#tabela-funcionarios tbody');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const cargo = document.getElementById('cargo').value;
  const salario = parseFloat(document.getElementById('salario').value);

  const novoFuncionario = new Funcionario(nome, idade, cargo, salario);
  funcionarios.push(novoFuncionario);

  renderizarTabela();
  form.reset();
});

function renderizarTabela() {
  tabelaBody.innerHTML = '';
  funcionarios.forEach(func => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${func.obterNome()}</td>
      <td>${func.obterIdade()}</td>
      <td>${func.cargoAtual()}</td>
      <td>${func.salarioAtual().toFixed(2)}</td>
    `;
    tabelaBody.appendChild(row);
  });
}
