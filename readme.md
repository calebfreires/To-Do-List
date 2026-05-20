# To do List

Uma aplicação leve e elegante criada em HTML, CSS e JavaScript puro para organizar tarefas diárias com uma interface moderna e comportamento realista de produto.

## Por que esse projeto importa

Este projeto não é apenas um exercício de estudo: é uma ferramenta simples que espelha um problema real do dia a dia. Com ele, eu mostro capacidade de:

- construir interfaces limpas e usáveis sem frameworks
- preservar estado no `localStorage`
- manter lógica clara e componentes coesos
- transformar uma ideia prática em uma aplicação enxuta e funcional

## O que ele faz

- adiciona tarefas com texto livre
- marca tarefas como concluídas com um clique
- remove tarefas e atualiza o armazenamento local
- mantém a lista após recarregar a página
- exibe feedback visual com animações e estilos modernos

## Tecnologias usadas

- HTML padrão para a estrutura
- CSS moderno para visual, animações e responsividade
- JavaScript puro para lógica e persistência local
- `localStorage` para salvar o estado entre sessões

## Como executar

1. Abra a pasta `to do list`
2. Abra `index.html` no navegador
3. Use o campo de texto para adicionar tarefas
4. Clique no item para marcar como concluído
5. Clique no ícone de lixeira para remover uma tarefa

## Como o código está organizado

- `index.html`: estrutura da aplicação
- `style.css`: visual com foco em usabilidade, bordas arredondadas e animações suaves
- `script.js`: lógica de validação, criação de tarefas, conclusão, exclusão e leitura/gravação no `localStorage`

## Por trás da lógica

A aplicação segue uma abordagem simples e previsível:

1. ao adicionar uma tarefa, ela é renderizada no DOM e o `localStorage` é atualizado
2. ao marcar como concluída, a tarefa ganha a classe `completed`
3. ao excluir, a tarefa é removida do estado persistido
4. ao abrir a página, o navegador recria as tarefas a partir do `localStorage`

Isso garante consistência entre a interface e o armazenamento.

## O que esse projeto demonstra

- atenção ao detalhe visual
- foco em experiência do usuário
- separação clara entre comportamento e apresentação
- maturidade para transformar um requisito simples em uma ferramenta utilizável

## Próximos passos possíveis

- adicionar filtros por status (todas / ativas / concluídas)
- permitir edição inline das tarefas
- salvar data/hora de criação e ordem personalizada
- adicionar animações de transição ao remover itens
- adaptar para um layout responsivo completo em dispositivos móveis

## Nota para recrutadores

Este projeto foi feito com a intenção de servir como solução real e portfólio pessoal. Ele mostra a capacidade de desenvolver com lógica sólida, atenção ao visual e compreensão de como uma pequena aplicação pode se comportar como um produto.
