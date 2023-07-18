<template>
  <div v-if="cartList.length > 0" class="flex gap-4 items-center flex-col">
    <h1 class="flex text-xl font-bold">Cart List</h1>
    <div class="fle flex-col border-b-2 border-b-black">
      <div v-for="item in cartList" :key="item.productName">
        <div class="flex justify-between w-40 border-b border-b-black py-4">
          <div class="flex gap-2">
            <div>{{ item.productQuantity }}</div>
            x
            <div>{{ item.productName }}</div>
          </div>
          <div>{{ item.price }}</div>
        </div>
      </div>
    </div>

    <div class="flex justify-between w-40">
      <div>Total:</div>
      <div class="font-bold">{{ totalPrice }} $</div>
    </div>
  </div>

  <div v-else>
    <h1 class="flex justify-center text-lg font-semibold">
      No Products inside the cart yet
    </h1>
  </div>
</template>

<script lang="ts" setup>
const { cartList } = useCart();

const totalPrice = computed(() => {
  return cartList.value.reduce((total, cartItem) => {
    return total + cartItem.productQuantity * cartItem.price;
  }, 0);
});
</script>
