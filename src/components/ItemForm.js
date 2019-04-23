import React, { Component } from "react";
import { observer } from "mobx-react";

import Item from "./Item";

class ItemForm extends Component {
  render() {
    const { invoice } = this.props;

    return (
      <div className="App">
        <h1>{invoice.status()}</h1>
        {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}

        <form
          onSubmit={e => {
            e.preventDefault();
            invoice.itemList.add({
              name: this.nameInput.value,
              quantity: parseInt(this.quantityInput.value),
              price: parseFloat(this.priceInput.value)
            });
            e.target.reset();
            this.nameInput.focus();
          }}
        >
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              ref={input => (this.nameInput = input)}
              id="name"
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              ref={input => (this.quantityInput = input)}
              id="quantity"
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              ref={input => (this.priceInput = input)}
              id="price"
            />
          </div>
          <button type="submit">Add</button>
        </form>

        <h2>Total is ${invoice.itemList.total().toFixed(2)}</h2>

        <ul>
          {invoice.itemList.items.map((item, i) => (
            <Item item={item} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

export default observer(ItemForm);
