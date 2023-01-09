import Item from '../models/item';

interface ShopingListProps {
  items: Item[];
}
function ShoppingList({ items }: ShopingListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}-{item.quantity}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
