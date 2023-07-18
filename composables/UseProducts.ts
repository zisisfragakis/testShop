import { Products } from "interfaces/Products";

export default function () {
  const productsList = useState<Products[]>("productsList");

  productsList.value = [
    {
      id: 1,
      title: "Fish",
      description: "A main dish with fish",
      image:
        "https://images.indianexpress.com/2018/07/fish-sustainanbel-759.jpg",
      price: 100,
      status: 0,
    },
    {
      id: 2,
      title: "Meat",
      description: "A main dish with meat",
      image:
        "https://www.safefood.net/getmedia/94101697-3c3f-4fe1-8ae8-5b595d3814ba/medium-rare-steak.jpg?w=2000&h=1333&ext=.jpg&width=1360&resizemode=force",
      price: 50,
      status: 1,
    },
  ];

  const addProduct = (product: Products) => {
    productsList.value.push(product);
  };

  return { productsList, addProduct };
}
