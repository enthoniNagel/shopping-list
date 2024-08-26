
# Lista de Compras com Quantidades

## Objetivo
O objetivo deste projeto é criar uma aplicação de lista de compras onde o usuário pode:
- Adicionar itens com quantidades.
- Marcar itens como comprados.
- Remover itens da lista.

## Funcionalidades
- **Adicionar Itens:** Adicione novos itens à lista com nome e quantidade.
- **Marcar Como Comprado:** Marque itens como comprados ou não.
- **Remover Itens:** Remova itens da lista.

## Componentes Principais

### `ShoppingList`
Componente de classe que gerencia a lista de compras.

#### Estado (`state`)
- `items` (Array): Lista de itens, onde cada item é um objeto com:
  - `name` (String): Nome do item.
  - `quantity` (Number): Quantidade do item.
  - `purchased` (Boolean): Flag que indica se o item foi comprado.
- `newItem` (String): Valor do novo item a ser adicionado.
- `newQuantity` (Number): Quantidade do novo item a ser adicionado.

#### Métodos
- **`addItem`**
  - Adiciona um novo item à lista.
- **`handleItemChange`**
  - Atualiza o valor do novo item.
- **`handleQuantityChange`**
  - Atualiza a quantidade do novo item.
- **`markAsPurchased`**
  - Alterna o status de compra de um item.
- **`removeItem`**
  - Remove um item da lista.

## Instruções para Executar o Projeto

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
