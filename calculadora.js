// Função declarativa para adição
function adicionar(numero1, numero2) {
  return numero1 + numero2;
}

// Função anônima para subtração
const subtrair = function (numero1, numero2) {
  return numero1 - numero2;
};

// Função para multiplicação (função de flecha abreviada em uma linha)
const multiplicar = (numero1, numero2) => numero1 * numero2;

// Função para divisão (função de flecha completa)
let dividir = (numero1, numero2) => {
  return numero1 / numero2;
};

// TODO Criar a função para calcular porcentagem
const porcentagem = (numero1, numero2) => {
  return ((numero1 * numero2) / 100);
};

// TODO Criar a função para gerar o número aleatório
const gerarNumero = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Função principal da calculadora
function iniciarCalculadora() {
  alert('Bem-vindo à Calculadora JavaScript!');

  // Solicitação de operação ao usuário
  let operacao = prompt(
    'Selecione a operação que deseja realizar:\n1. Adição\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Porcentagem\n6. Número aleatório'
  );

  // Solicitação de números ao usuário - valores undefined
  let numero1;
  let numero2;

  // Realiza a operação com base na escolha do usuário
  let resultado;
  switch (operacao) {
    case '1':
      numero1 = parseFloat(prompt('Insira o primeiro número:'));
      numero2 = parseFloat(prompt('Insira o segundo número:'));
      resultado = adicionar(numero1, numero2);
      break;
    case '2':
      numero1 = parseFloat(prompt('Insira o primeiro número:'));
      numero2 = parseFloat(prompt('Insira o segundo número:'));
      resultado = subtrair(numero1, numero2);
      break;
    case '3':
      numero1 = parseFloat(prompt('Insira o primeiro número:'));
      numero2 = parseFloat(prompt('Insira o segundo número:'));
      resultado = multiplicar(numero1, numero2);
      break;
    case '4':
      numero1 = parseFloat(prompt('Insira o primeiro número:'));
      numero2 = parseFloat(prompt('Insira o segundo número:'));
      resultado = dividir(numero1, numero2);
      break;
    case '5':
      numero1 = parseFloat(prompt('Insira o número:'));
      numero2 = parseFloat(prompt('Insira a porcentagem desejada:'));
      resultado = porcentagem(numero1, numero2);
      break;
    case '6':
      min = parseFloat(prompt('Insira o número minimo:'));
      max = parseFloat(prompt('Insira o número máximo:'));
      resultado = gerarNumero(min, max);
      break;
    default:
      alert('Operação inválida!');
      return;
  }

  // Exibe o resultado com alert
  alert('Resultado: ' + resultado);

  // Confirma se o usuário deseja continuar
  let continuar = confirm('Deseja fazer outra operação?');
  if (continuar) {
    iniciarCalculadora();
  } else {
    alert('Obrigado por usar a Calculadora JavaScript!');
  }
}

// Chama a função principal para iniciar a calculadora
iniciarCalculadora();
