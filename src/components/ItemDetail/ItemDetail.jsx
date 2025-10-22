import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";

export const ItemDetail = ({ detail }) => {
  const {addItem} = useCartContext();
  const handleadd = (quantity) => { addItem({...detail, quantity});}
  return (  
    <Item {...detail}>
      <Count btntext="Agregar al carrito" onConfirm={handleadd} />
    </Item>
  );
};
