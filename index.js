const perguntas = [
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Output Management",
        "Dynamic Operation Mechanism",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Verifica igualdade de valor e tipo",
        "Verifica igualdade de valor",
        "Verifica igualdade de tipo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "add()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você define uma variável em JavaScript?",
      respostas: [
        "let",
        "variable",
        "var",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função passada como argumento para outra função",
        "Uma função que chama a si mesma",
        "Uma função que não recebe argumentos",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de negação em JavaScript?",
      respostas: [
        "!",
        "-",
        "~",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Uma função que tem acesso ao escopo de outra função",
        "Uma função que não tem acesso ao escopo de outra função",
        "Uma variável que só pode ser acessada em outro arquivo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar o primeiro elemento que corresponde a um seletor CSS",
        "Selecionar todos os elementos que correspondem a um seletor CSS",
        "Selecionar o último elemento que corresponde a um seletor CSS",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
      respostas: [
        "55",
        "10",
        "7",
      ],
      correta: 1
    },
 ];
 const quiz = document.querySelector("#quiz")
 const template = document.querySelector("template")
 
 const corretas = new Set()
 const totalDePerguntas = perguntas.length
 const mostrarTotal = document.querySelector('#acertos span')
 mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
 
 //loop ou laço de repetição
 for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
 for (let resposta of item.respostas) {
   const dt = quizItem.querySelector('dl dt').cloneNode(true)
   dt.querySelector('span').textContent = resposta 
   dt.querySelector('input').setAttribute('name', 'pergunta - ' + perguntas.indexOf(item))
   dt.querySelector('input').value = item.respostas.indexOf(resposta)
   dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
     
     corretas.delete(item)
 
     if (estaCorreta) {
       corretas.add(item)
     }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   }
   
   
   quizItem.querySelector('dl').appendChild(dt)
 }
 
 quizItem.querySelector('dl dt').remove() 
 
 
 
   //coloca a pergunta na tela
   quiz.appendChild(quizItem) 
 }