import React, { Component } from 'react';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: '',
      newQuantity: 1,
    };
  }

  addItem = () => {
    const { items, newItem, newQuantity } = this.state;
    if (newItem) {
      this.setState({
        items: [...items, { name: newItem, quantity: newQuantity, purchased: false }],
        newItem: '',
        newQuantity: 1,
      });
    }
  };

  handleItemChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  handleQuantityChange = (event) => {
    this.setState({ newQuantity: parseInt(event.target.value, 10) });
  };

  markAsPurchased = (index) => {
    const items = [...this.state.items];
    items[index].purchased = !items[index].purchased;
    this.setState({ items });
  };

  removeItem = (index) => {
    const items = this.state.items.filter((_, i) => i !== index);
    this.setState({ items });
  };

  render() {
    const { items, newItem, newQuantity } = this.state;

    return (
      <div>
        <h2>Lista de Compras</h2>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={this.handleItemChange}
            placeholder="Nome do Item"
          />
          <input
            type="number"
            value={newQuantity}
            onChange={this.handleQuantityChange}
            min="1"
            placeholder="Quantidade"
          />
          <button onClick={this.addItem}>Adicionar Item</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.purchased}
                onChange={() => this.markAsPurchased(index)}
              />
              {item.name} - {item.quantity}
              <button onClick={() => this.removeItem(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
