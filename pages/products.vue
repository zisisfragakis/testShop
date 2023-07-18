<template>
  <div class="mt-4 flex justify-center">
    <List :items="productsList"></List>
  </div>
</template>

<script lang="ts" setup>
const { productsList } = UseProducts();
</script>
