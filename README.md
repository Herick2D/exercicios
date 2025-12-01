# 🚀 Desafio de Lógica de Programação: JavaScript

Seja bem-vindo(a)! Este repositório foi criado para ajudar você a dar os primeiros passos na lógica de programação usando **JavaScript**.

Aqui, você não vai apenas escrever código; você vai aprender como funciona o fluxo de trabalho real de um desenvolvedor (Git, Testes Automatizados e Code Review).

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado no seu computador:
* [Node.js](https://nodejs.org/) (Versão LTS)
* [Git](https://git-scm.com/)
* [VS Code](https://code.visualstudio.com/) (Editor de código recomendado)

---

## 👣 Passo a Passo

### 1. Clonar e Instalar
Abra o seu terminal (Git Bash ou Terminal do VS Code) e rode os comandos abaixo, um por um:

```bash
# 1. Baixe o repositório para sua máquina
git clone [https://github.com/Herick2D/exercicios.git](https://github.com/Herick2D/exercicios.git)

# 2. Entre na pasta do projeto
cd exercicios

# 3. Instale as ferramentas de teste (Isso cria a pasta node_modules)
npm install
```

### 2. Criar sua Branch
```
git checkout -b meu-nome
```

### 3. Hora de codar!
```
1. Abra a pasta do projeto no Vs Code.
2. Navegue até a pasta `src` e abra o arquivo `exercicios.js`.
3. Lá você encontrará 10 funções vazias. Sua missão é escrever a lógica dentro delas.
```

_exemplo do que fazer:_
```
// Antes
function somar(a, b) {
  // Escreva seu código aqui
}

// Depois (Como você deve deixar)
function somar(a, b) {
  return a + b;
}
```

### 4. Testando seu código
Como saber se está certo? Nós temos um "robô" que corrige para você. No terminal rode:
```
npm test
```

> 🔴 Texto vermelho: Significa que algo está errado ou incompleto. O terminal vai te dizer o que ele esperava e o que ele recebeu.

> 🟢 Texto Verde: Parabéns! A função passou no teste.

## Como entregar (Pull Request)
Quando você terminar os exercícios (ou o máximo que conseguir), siga estes passos para enviar:

### 1. Salve suas alterações no Git:
```
git add .
git commit -m "Minha resolução dos exercícios"
git push origin resolucao-seu-nome
```

### 2. Abra a Pull Request (PR)
```
> Vá até a página deste repositório no GitHub.
> Você verá um aviso amarelo perguntando se quer abrir um "Compare & pull request". Clique nele.
> Dê um título (ex: "Exercícios do [Seu Nome]") e clique em Create Pull Request.
```
