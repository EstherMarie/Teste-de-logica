// array com as questões
const questoes = [
	{
		numero: 1,
		prova: 'FCC - 2019 - SANASA - Campinas',
		enunciado:
			'Sabendo que com HTML DOM, JavaScript pode acessar e mudar os elementos de uma página web, para que o Terceiro Parágrafo seja adicionado ao contêiner identificado como caixa, a lacuna I deve ser corretamente preenchida por',
		opcoes: [
			['a', 'document.getElementById("caixa").add(para)'],
			['b', 'element.append(para.append(node))'],
			['c', 'element.innetHTML(para.add(node))'],
			['d', 'element.addNode(para.addContent(node))'],
			['e', 'element.appendChild(para.appendChild(node))'],
		],
		ilustração: `
		<body>
			<div id="caixa">
				<p id="p1">Primeiro Parágrafo.</p>
				<p id="p2">Segundo Parágrafo.</p>
			</div>
			<script>
				var para = document.createElement("p");
				var node = document.createTextNode("Terceiro Parágrafo.");
				var element = document.getElementById("caixa");
				...
			</script>
		</body>
		`,
		resposta: 'e',
	},
	{
		numero: 2,
		prova: 'Ano: 2018 Banca: FUMARC Órgão: COPASA',
		enunciado: 'O resultado correspondente apresentado como saída é:',
		opcoes: [
			['a', 'banana | laranja | limao | uva |'],
			['b', 'banana | uva | laranja | limao |'],
			['c', 'laranja | uva |'],
			['d', 'laranja | uva | limao'],
		],
		ilustração: `
		var frutas = new Array("banana", "laranja", "limao");
		frutas.shift();
		frutas.splice(1, 1, "uva");
		for(var i=0; i<frutas.length; i++)
 		 document.write(frutas[i] + " | ");
		`,
		resposta: 'c',
	},
	{
		numero: 3,
		prova: 'Ano: 2019 Banca: COVEST-COPSET Órgão: UFPE',
		enunciado:
			'Após a execução do código, desconsiderando os caracteres de quebra de linha da função console.log(), o console apresentará:',
		opcoes: [
			['a', 'as saídas: 4, 1, 5 e 1.'],
			['b', 'as saídas: 4, 1, 4 e 1.'],
			['c', 'as saídas: 4, 1 ,4 e 10.'],
			['d', 'uma mensagem de erro referente à linha 3.'],
			['e', 'uma mensagem de erro referente à linha 4.'],
		],
		ilustração: `
		var a = 5;
		var b = 10;
		if(a === 5){
		  let a = 4;
		  var b = 1;
		  console.log(a);
		  console.log(b);
		}
		console.log(a);
		console.log(b);
		`,
		resposta: 'a',
	},
	{
		numero: 4,
		prova: 'Ano: 2019 Banca: UFRR Órgão: UFRR',
		enunciado:
			'Imagine o seguinte cenário: Marcelo lhe deve um dinheiro e promete pagar em parcelas mensais de R$ 70; com o intuito de prever qual seria o valor devido após o decorrer de 12 meses, você resolve escrever algumas linhas de código (JavaScript). Levando em consideração que o valor devido por Marcelo era de R$ 1400, qual seria o total devido após a execução do trecho a seguir?',
		opcoes: [
			[
				'a',
				'Marcelo lhe deveria 2240 reais pois o loop (for) está incrementando o total da dívida.',
			],
			['b', 'Marcelo teria pago 840 reais e lhe deveria ainda 560.'],
			[
				'c',
				'Marcelo lhe deveria ainda 1400 reais, pois o código possui erro semântico.',
			],
			['d', 'A declaração da função atualizar_divida está errada.'],
			['e', 'O trecho apresenta um erro de sintaxe na linha 3.'],
		],
		ilustração: `
		let total_divida = 1400;
		function atualizar_divida(valor_recebido){
			total_divida -= valor_recebido;
			return total_divida;
		}
		for(var i=0;i<12;i++){
			atualizar_divida(70);
		}
		`,
		resposta: 'b',
	},
	{
		numero: 5,
		prova: 'Ano: 2019 Banca: VUNESP Órgão: Câmara de Piracicaba - SP',
		enunciado:
			'Na linguagem JavaScript, o operador === (três sinais de igualdade) realiza a comparação apenas do',
		opcoes: [
			['a', 'tipo dos operandos.'],
			['b', 'conteúdo dos operandos.'],
			['c', 'valor dos operandos.'],
			['d', ' valor lógico dos operandos.'],
			['e', 'valor e do tipo dos operandos.'],
		],
		ilustração: `
		
		`,
		resposta: 'e',
	},
];

// variáveis
let q = 0;
let acertos = 0;
let respostaUsuario;
let questao = document.querySelector('.questao');
let prova = document.querySelector('.prova');
let enunciado = document.querySelector('.enunciado');
let ilustracao = document.querySelector('.ilustracao');

function novaQuestao() {
	if (q == questoes.length) {
		prova.textContent = '';
		document.querySelector('h1').textContent = 'Resultado';
		document.querySelector('.conteudo').style.cssText =
			'display: flex; justify-content: center; align-items: center; font-size: 1.5em';
		document.querySelector(
			'.conteudo'
		).textContent = `Você acertou ${acertos} de ${questoes.length} questões.`;
	} else {
		questao.textContent = questoes[q].numero;
		prova.textContent = questoes[q].prova;
		enunciado.textContent = questoes[q].enunciado;
		ilustracao.textContent = questoes[q].ilustração;

		for (let i = 0; i < questoes[q].opcoes.length; i++) {
			let btnOpcao = document.createElement('button');
			let btnSpan = document.createElement('span');

			btnOpcao.classList.add('opcao');
			btnSpan.textContent = `${questoes[q].opcoes[i][1]}`;

			btnOpcao.appendChild(btnSpan);
			btnOpcao.value = `${questoes[q].opcoes[i][0]}`;

			document.querySelector('.opcoes').appendChild(btnOpcao);
		}

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
				document.querySelector('.opcoes').textContent = '';
				novaQuestao();
			});
		});
	}
}

novaQuestao();
