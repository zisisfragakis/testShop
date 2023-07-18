<template>
  <div class="flex gap-4">
    <div v-for="item in items" :key="item.id">
      <div class="flex gap-2">
        <img class="h-40" :src="item.image" />
        <div class="flex flex-col justify-between h-40 max-w-[20vw]">
          <div class="flex flex-col gap-2">
            <div class="flex justify-between">
              <div class="font-bold text-2xl">{{ item.title }}</div>
              <div class="font-semibold">{{ item.price }}$</div>
            </div>
            <div class="overflow-hidden whitespace-nowrap overflow-ellipsis">
              {{ item.description }}
            </div>
          </div>
          <div class="w-40 flex justify-end">
            <button
              v-if="item.status == 0"
              @click="addToCartItem(item)"
              class="p-1 border border-black"
            >
              Add to Cart
            </button>
          </div>
          <div
            v-if="item.status != 0"
            class="text-red-500 bg-white top-28 -rotate-12 border border-red-500 fixed p-2 font-semibold"
          >
            UNAVAILABLE
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Products } from "../interfaces/Products";
import { ref } from "vue";
import useCart from "../composables/useCart";

const { addToCart } = useCart();

const dd = ref<Products[]>([]);

const addToCartItem = (item: Products) => {
  addToCart(item, 1);
};

defineProps({
  items: Array<Products>,
});
</script>
