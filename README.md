# 🧮 Calculadora JavaScript – Operações Básicas + Desafios

## 📚 Descrição do Projeto

A calculadora realiza as quatro operações básicas — **adição, subtração, multiplicação e divisão** — utilizando diferentes formas de declaração de funções:  
- **Funções nomeadas (declarativas)**  
- **Funções anônimas**  
- **Funções arrow (de flecha)**

Além disso, você será desafiado a **adicionar duas funcionalidades extras**:
1. **Cálculo de porcentagem**
2. **Geração de número aleatório dentro de um intervalo definido pelo usuário**

---

## ✅ Funcionalidades

- [x] Adição (`+`)
- [x] Subtração (`-`)
- [x] Multiplicação (`*`)
- [x] Divisão (`/`)
- [x] **Cálculo de porcentagem** (`%`)
- [x] **Número aleatório entre dois valores**
- [x] Exibição de resultados com **template strings**

---

## 📄 Estrutura do Projeto
calculadora/
├── index.html
└── script.js

---

## 🚀 Como Usar

1. **Clone ou baixe o projeto.**
2. Abra o arquivo `index.html` em um navegador.
3. Interaja com a calculadora através de caixas de diálogo (`prompt`, `alert`, `confirm`).
4. Escolha a operação desejada (opções de 1 a 6).
5. Insira os valores solicitados e veja o resultado formatado de forma clara e amigável.

---

## 🧠 Instruções de Desenvolvimento

### 1. Estude o Código Existente
Analise como cada operação é implementada:
- A adição pode usar uma **função nomeada**
- A subtração, uma **função anônima**
- A multiplicação, uma **função arrow**
- A divisão, outra forma à sua escolha

Observe também o uso de `let`, `const` e os métodos de entrada/saída (`prompt`, `alert`, `confirm`).

### 2. Adicionar o Cálculo de Porcentagem
Implemente uma função chamada `calcularPorcentagem()` que:
- Solicita dois números via `prompt`
- Calcula a porcentagem do primeiro número em relação ao segundo
- Exibe o resultado com uma `template string`, ex:  
  `A porcentagem de 50 em relação a 200 é 25%.`

### 3. Adicionar Geração de Número Aleatório
Crie uma **função arrow** chamada `gerarNumeroAleatorio()` que:
- Pede ao usuário o valor mínimo e máximo
- Converte os valores com `parseFloat()`
- Usa a fórmula:  
  `Math.random() * (max - min) + min`
- Exibe o número gerado com uma mensagem clara.

---

## 🛠 Tecnologias Utilizadas

- HTML5
- JavaScript (ES6+)

---

## 🎯 Objetivo da Atividade
Esta atividade visa consolidar conhecimentos sobre:
- Sintaxe de funções em JavaScript
- Manipulação de entrada e saída com prompt/alert
- Operações matemáticas e uso de Math.random()
- Boas práticas como uso de const, let e template strings

---


## ✅ Conclusão
Este projeto proporcionou uma excelente oportunidade para revisar e aplicar conceitos fundamentais do JavaScript, como diferentes formas de declarar funções, manipulação de entrada e saída com prompt, alert e confirm, além do uso de Math.random() e template strings. A ampliação da calculadora com funcionalidades como o cálculo de porcentagem e a geração de números aleatórios tornou a aplicação mais completa e prática. Essa atividade reforça a importância de compreender a lógica por trás das operações e de escrever um código limpo, reutilizável e fácil de entender.


