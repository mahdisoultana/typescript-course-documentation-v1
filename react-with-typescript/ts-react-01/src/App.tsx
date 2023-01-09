import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';
function App(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);
  const id = uuid();
  function addItem(name: string, quantity: number) {
    setItems([...items, { id, name, quantity }]);
  }
  return (
    <>
      <ShoppingForm addItem={addItem} />
      <ShoppingList items={items} />
    </>
  );
}

export default App;
