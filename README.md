# Análise do Site de Fraude TKM (TikTok Monetização)

Este diretório contém arquivos baixados do site `https://robertsuper.shop/tkm-front-tkm/`, que simula um falso programa de recompensas do TikTok. O site é claramente uma fraude que tenta enganar usuários com promessas de ganhos fáceis.

## Estrutura da Fraude

O site utiliza uma estrutura de "quiz" com múltiplas etapas para criar engajamento e manipular o usuário:

1. **Página inicial**: Apresenta um falso prêmio de US$49 e pede ao usuário para completar 5 avaliações
2. **Perguntas simples**: Apresenta vídeos com perguntas triviais para simular uma pesquisa
3. **Contador de saldo falso**: Mostra um valor crescente (49, 125, 150, 180 dólares) para criar a ilusão de ganhos
4. **Depoimentos falsos**: Exibe comentários fictícios de pessoas que supostamente ganharam dinheiro
5. **Redirecionamento**: No final, tenta redirecionar o usuário para outro site de fraude

## Técnicas de Manipulação Utilizadas

- **Urgência falsa**: "Quedan solo unos minutos para retirar el saldo"
- **Falsa escassez**: Sugestão de que a oportunidade é limitada
- **Social proof**: Comentários falsos de supostos usuários bem-sucedidos
- **Efeitos sonoros**: Som de caixa registradora para reforçar a sensação de ganho financeiro

## Arquivos Principais

- `index.html`: Página principal com o código completo da fraude
- `player.js`: Script do reprodutor de vídeo
- `quiz-script.js`: Script que controla o fluxo das perguntas
- `video-1.mp4`, `video-2.mp4`, `video-3.mp4`: Vídeos utilizados nas perguntas
- `tracking.js`: Script para rastreamento de usuários
- `cash-register.mp3`: Efeito sonoro de caixa registradora

## Finalidade

Este material foi coletado apenas para fins de análise e documentação de técnicas fraudulentas, visando conscientização sobre esse tipo de golpe.

⚠️ **AVISO**: Este site é uma fraude. Não insira informações pessoais ou financeiras em sites como este. 