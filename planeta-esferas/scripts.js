let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "A esfera terrestre é dividida em três grandes camadas internas. Quais são elas?",
    alternativaA : "Crosta terrestre, manto e núcleo",
    alternativaB : "Astenosfera, biosfera e litosfera",
    alternativaC : "Biosfera, litosfera e núcleo",
    alternativaD : "Astenosfera, atmosfera e litosfera",
    correta      : "Crosta terrestre, manto e núcleo",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é a camada intermediária da Terra que é composta por rochas sólidas?",
    alternativaA : "Atmosfera",
    alternativaB : "Mesosfera",
    alternativaC : "Litosfera",
    alternativaD : "Nenhuma das alternativas anteriores",
    correta      : "Litosfera",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual é a camada da Terra localizada entre a litosfera e a astenosfera, caracterizada pela deformação plástica das rochas?",
    alternativaA : "Litosfera",
    alternativaB : "Atmosfera",
    alternativaC : "Astenosfera",
    alternativaD : "Mesosfera",
    correta      : "Astenosfera",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "A litosfera é a camada mais externa do planeta, formada por diversas rochas e minerais. Ela também é corretamente nomeada de",
    alternativaA : "camada vulcânica.",
    alternativaB : "manto superior.",
    alternativaC : "crosta terrestre.",
    alternativaD : "horizonte primário.",
    correta      : "manto superior.",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Observe as alternativas abaixo e marque aquela que melhor define a biosfera:",
    alternativaA : "Parte sólida formada a partir das rochas.",
    alternativaB : "Porção do planeta constituída por água.",
    alternativaC : "Conjunto de todos os ecossistemas do planeta.",
    alternativaD : "Camada de ar que envolve a Terra.",
    correta      : "Conjunto de todos os ecossistemas do planeta.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é a camada da Terra composta principalmente por rochas e minerais?",
    alternativaA : "Manto",
    alternativaB : "Mesosfera",
    alternativaC : "Núcleo externo",
    alternativaD : "Astenosfera",
    correta      : "Manto",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual é a camada da Terra que é composta por uma mistura de gases e é fundamental para a sustentação da vida?",
    alternativaA : "Litosfera",
    alternativaB : "Atmosfera",
    alternativaC : "Mesosfera",
    alternativaD : "Hidrosfera",
    correta      : "Atmosfera",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual é a principal função da atmosfera terrestre?",
    alternativaA : "Proteger a Terra contra meteoros e detritos espaciais",
    alternativaB : "Regular a temperatura do planeta",
    alternativaC : "Permitir a respiração dos seres vivos",
    alternativaD : "Refletir a luz solar de volta para o espaço",
    correta      : "Regular a temperatura do planeta",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é a influência da hidrosfera no clima global?",
    alternativaA : "Armazenar água e regular a distribuição de chuvas",
    alternativaB : "Reduzir a temperatura da superfície terrestre através da evaporação",
    alternativaC : "Controlar a concentração de gases na atmosfera",
    alternativaD : "Filtrar a poluição e melhorar a qualidade do ar",
    correta      : "Armazenar água e regular a distribuição de chuvas",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual é a camada da Terra que possui uma alta concentração de ferro e níquel?",
    alternativaA : "Litosfera",
    alternativaB : "Mesosfera",
    alternativaC : "Núcleo externo",
    alternativaD : "Manto",
    correta      : "Núcleo externo",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
