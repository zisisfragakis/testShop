import { Cart } from "interfaces/Cart";
import { Products } from "interfaces/Products";

export default function () {
  const cartList = useState<Cart[]>("cartList", () => []);

  const addToCart = (item: Products, quantity: number) => {
    const existingCartItemIndex = cartList.value.findIndex(
      (cartItem) => cartItem.productName === item.title
    );

    if (existingCartItemIndex !== -1) {
      cartList.value[existingCartItemIndex].productQuantity += quantity;
    } else {
      const newCartItem: Cart = {
        price: item.price,
        productName: item.title,
        productQuantity: quantity,
      };
      cartList.value.push(newCartItem);
    }
  };

  return { cartList, addToCart };
}
