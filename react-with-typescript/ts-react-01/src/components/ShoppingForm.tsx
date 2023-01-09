import { useRef } from 'react';

function ShoppingForm({
  addItem,
}: {
  addItem: (name: string, quantity: number) => void;
}) {
  // const textRef = useRef<HTMLInputElement>(null); // 1
  // const quantityRef = useRef<HTMLInputElement>(null); // 1
  const textRef = useRef<HTMLInputElement>(null!); // 2
  const quantityRef = useRef<HTMLInputElement>(null!); // 2
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // console.log(textRef.current!.value);// 1
        // console.log(quantityRef.current!.value);// 1
        const name = textRef.current.value; // 2
        const quantity = Number(quantityRef.current.value); // 2
        addItem(name, quantity);
        textRef.current.value = '';
        quantityRef.current.value = '1';
      }}
    >
      <input type="text" ref={textRef} />
      <input type="number" min={1} defaultValue="1" ref={quantityRef} />
      <button>Add Item</button>
    </form>
  );
}

export default ShoppingForm;
