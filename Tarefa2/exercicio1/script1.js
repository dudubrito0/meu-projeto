class Funcionario {
  constructor(nome, idade, funcao, salario) {
    this.nome = nome;
    this.idade = idade;
    this.funcao = funcao;
    this.salario = salario;
  }

  obterNome = () => this.nome;
  atualizarNome = nome => this.nome = nome;

  obterIdade = () => this.idade;
  atualizarIdade = idade => this.idade = idade;

  obterFuncao = () => this.funcao;
  definirFuncao = funcao => this.funcao = funcao;

  obterSalario = () => this.salario;
  modificarSalario = salario => this.salario = salario;

  exibirResumo = () => `${this.nome}, ${this.idade} anos, ${this.funcao}, R$ ${this.salario}`;
}

const funcionarios = [];
const form = document.getElementById('form-funcionario');
const tabelaBody = document.querySelector('#tabela-funcionarios tbody');
const indiceEdicao = document.getElementById('indice-edicao');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const cargo = document.getElementById('cargo').value;
  const salario = parseFloat(document.getElementById('salario').value);
  const indice = parseInt(indiceEdicao.value);

  if (indice >= 0) {
    let f = funcionarios[indice];
    f.atualizarNome(nome);
    f.atualizarIdade(idade);
    f.definirFuncao(cargo);
    f.modificarSalario(salario);
    indiceEdicao.value = -1;
  } else {
    funcionarios.push(new Funcionario(nome, idade, cargo, salario));
  }

  form.reset();
  preencherTabela();
});

const preencherTabela = () => {
  tabelaBody.innerHTML = '';

  funcionarios.forEach((f, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${f.obterNome()}</td>
      <td>${f.obterIdade()}</td>
      <td>${f.obterFuncao()}</td>
      <td>${f.obterSalario().toFixed(2)}</td>
      <td>
        <button onclick="iniciarEdicao(${index})">Editar</button>
        <button onclick="removerFuncionario(${index})">Excluir</button>
      </td>
    `;
    tabelaBody.appendChild(row);
  });
};

const iniciarEdicao = (index) => {
  const f = funcionarios[index];
  document.getElementById('nome').value = f.obterNome();
  document.getElementById('idade').value = f.obterIdade();
  document.getElementById('cargo').value = f.obterFuncao();
  document.getElementById('salario').value = f.obterSalario();
  indiceEdicao.value = index;
};

const removerFuncionario = (index) => {
  funcionarios.splice(index, 1);
  preencherTabela();
};

// Buscas

const localizarPorNome = nome =>
  funcionarios.find(f => f.obterNome().toLowerCase() === nome.toLowerCase());

const filtrarPorFuncao = funcao =>
  funcionarios.filter(f => f.obterFuncao().toLowerCase() === funcao.toLowerCase());
