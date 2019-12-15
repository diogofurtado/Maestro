# Maestro

TCC - Maestro: Sistema de Auxílio e Ensino Musical para Alunos Deficientes Visuais

Aluno:
Diogo Esteves Furtado

Contato:
diogo.esteves.furtado@gmail.com
linkedin.com/in/furtadodiogo/

Orientador:
Fernando Ernesto Kintchner

Universidade:
Pontifícia Universidade Católica de Campinas (PUC-Camp)

# Resumo

Esse sistema foi desenvolvido no trabalho de conclusão de curso da Faculdade de Engenharia da Computação (2019) com o Objetivo de auxíliar deficientes visuais a aprender música. O artigo ciêntifico desenvolvido nesse projeto se encontra no repositório (artigo.pdf) para mais informações do que foi desenvolvido.

# Ambiente

A aplicação foi desenvolvida e React-Native o formato do aplicativo aqui contido é de um projeto para ser executado no EXPO SDK.
Sugiro uma leitura breve dos seguintes endereços para saber como criar um simples projeto de React-Native no EXPO e como executá-lo:
https://facebook.github.io/react-native/docs/getting-started
https://expo.io/

Para executar o app em sua máquina, ela deve conter o Node.js instalado (v10 LTS <), utilizando o NPM para instalar o EXPO CLI com a seguinte linha de comando:

npm install -g expo-cli

Para o Funcionamento correto da biblioteca de Áudio do expo, execute a seguinte instalação:

expo install expo-av

Após essa configuração de ambiente, basta executar o seguinte comando:

expo start

# Componentes Externos

O sistema utiliza uma API de outro trabalho relacionado, o Chordix. Ela é responsável pela extração da página HTML do cifraclub mediante o envio da URL da mesma.
Hoje (dez/2019) ela está hospedada no Heroku, funcionando perfeitamente.
Abaixo temos o link da sua documentação no GitHub e mesmo postado, adicionei o seu conteúdo na pasta "API" deste projeto.

Link API: https://github.com/terciodejesus/chordix-api.git
