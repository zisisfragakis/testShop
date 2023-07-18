<template>
  <div class="justify-between flex bg-gray-400 p-2 items-center">
    <nuxtLink to="/">My Shop</nuxtLink>
    <div class="flex gap-2 justify-center">
      <div
        class="font-bold bg-gray-200 p-1 rounded-md shadow-black/20 shadow"
        v-for="item in options"
        :key="item.id"
      >
        <nuxtLink :to="item.to">
          {{ item.title }}
        </nuxtLink>
      </div>
    </div>
    <nuxtLink class="flex gap-1" to="/cart">
      <div
        v-if="cartProducts != 0"
        class="bg-red-500 rounded-full px-2 text-white"
      >
        {{ cartProducts }}
      </div>
      <div class="font-semibold text-md">Cart</div>
    </nuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const { cartList } = useCart();

const options = [
  {
    id: 1,
    title: "Products",
    to: "products",
  },
  {
    id: 2,
    title: "Inventory",
    to: "inventory",
  },
];

const cartProducts = computed(() => {
  return cartList.value.reduce((total, cartItem) => {
    return total + cartItem.productQuantity;
  }, 0);
});
</script>
