import React from "react";
import { observer } from "mobx-react";


const Item = ({item}) => (
    <li>
        {item.name} Q {item.quantity} P {item.price.toFixed(2)} = Total {item.total().toFixed(2)}
        <button onClick={item.decrement}>-</button>
        <button onClick={item.increment}>+</button>
        <button onClick={item.remove}>X</button>
    </li>
)

export default observer(Item)