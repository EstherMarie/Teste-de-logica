// Night mode(?)
let html = document.querySelector('body');

let date = new Date();
let hour = date.getHours();

if (hour >= 18 || hour <= 05) {
	html.style.cssText = 'background-color: #202124; color: #e8e8e9';
	document.querySelectorAll('.opcao').forEach(op => {
        op.style.cssText = 'border: 1px solid rgb(232, 232, 233, 0.8); color: #e8e8e9;';
    })
	document.querySelector('.questionario').style.cssText = 'border: 1px solid rgb(232, 232, 233, 0.8);';
	document.querySelector('h1').style.cssText = 'border-left: 5px solid rgb(232, 232, 233, 0.8);';
}

// array com as questões
const questoes = [
	{
		numero: 1,
		enunciado: 'Se RESPOSTA = 32587564 e SAPO = 5487 então ROSA é:',
		opcoes: {
			a: 1234,
			b: 1537,
			c: 9538,
			d: 3754,
			e: 2345,
		},
		resposta: 'd',
	},
	{
		numero: 2,
		enunciado:
			'Qual o próximo número da sequência 4 - 6 - 12 - 6 - 20 - 6 - ...',
		opcoes: {
			a: 6,
			b: 17,
			c: 19,
			d: 25,
			e: 28,
		},
		resposta: 'e',
	},
	{
		numero: 3,
		enunciado: 'Complete a sequência: C D F I M R ...',
		opcoes: {
			a: 'V',
			b: 'W',
			c: 'X',
			d: 'Y',
			e: 'Z',
		},
		resposta: 'c',
	},
	{
		numero: 4,
		enunciado: 'Complete a sequência: 30 19 27 16 24 ...',
		opcoes: {
			a: 13,
			b: 17,
			c: 16,
			d: 34,
			e: 28,
		},
		resposta: 'a',
	},
	{
		numero: 5,
		enunciado: 'Complete a sequência: X23 W22 X21 ...',
		opcoes: {
			a: 'W12',
			b: 'U20',
			c: 'V22',
			d: 'B32',
			e: 'C22',
		},
		resposta: 'b',
	},
];

// variáveis
let q = 0;
let acertos = 0;
let respostaUsuario;
let questao = document.querySelector('.questao');
let enunciado = document.querySelector('.enunciado');
let escolhas = ['a', 'b', 'c', 'd', 'e'];

function novaQuestao() {
	if (q == questoes.length) {
		document.querySelector('h1').textContent = 'Resultado';
		document.querySelector('.conteudo').style.cssText =
			'display: flex; justify-content: center; align-items: center; font-size: 1.5em';
		document.querySelector('.conteudo').textContent = `Você acertou ${acertos} de ${questoes.length} questões.`;
	} else {
		questao.textContent = questoes[q].numero;
		enunciado.textContent = questoes[q].enunciado;

		for (let i = 0; i < escolhas.length; i++) {
			document.querySelector(`.${escolhas[i]}`).textContent =
				questoes[q].opcoes[escolhas[i]];
		}
	}
}

novaQuestao();

// Event Listener dos botões
let opcoes = document.querySelectorAll('.opcao');
opcoes.forEach((opcao) => {
	opcao.addEventListener('click', (e) => {
		respostaUsuario = e.target.value;

		if (respostaUsuario == questoes[q].resposta) {
			acertos++;
			console.log('resposta correta');
		} else {
			console.log('resposta incorreta');
		}
		q++;
		novaQuestao();
	});
});

