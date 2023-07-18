<template>
  <div class="flex flex-col gap-4 items-center">
    <h1 class="font-bold text-xl">Inventory</h1>

    <div
      class="border border-black p-2 flex flex-col gap-2"
      v-for="item in productsList"
      :key="item.id"
    >
      <div class="flex justify-between w-96">
        <input class="w-14" type="text" v-model="item.title" />
        <input class="w-14" type="text" v-model="item.price" />
        <button @click="toggleStatus(item)">
          {{ getStatus(item.status) }}
        </button>
      </div>

      <hr class="h-[2px] bg-gray-200 border-0 dark:bg-gray-700" />

      <div class="flex justify-center w-full">
        {{ item.description }}
      </div>
    </div>

    <button
      type="button"
      @click="toggleModal"
      class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Add +
    </button>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog
        :open="isOpen"
        as="div"
        @close="toggleModal"
        class="relative z-10"
      >
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Add new meal
                </DialogTitle>
                <div class="mt-2">
                  <div class="flex items-center flex-col gap-2">
                    <div
                      v-for="key in Object.keys(newMeal)"
                      :key="key"
                      class="flex gap-2"
                    >
                      <label :for="key" class="font-semibold w-24">{{
                        key
                      }}</label>
                      <input
                        :id="key"
                        v-model="newMeal[key]"
                        class="border border-gray-300 p-1 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex justify-center mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="saveNewMeal(newMeal)"
                  >
                    Add
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import { Products } from "../interfaces/Products";

const { productsList, addProduct } = UseProducts();

const getStatus = (itemStauts: number) => {
  return itemStauts === 0 ? "available" : "unavailable";
};

const toggleStatus = (item: Products) => {
  item.status = item.status === 0 ? 1 : 0;
};

const isOpen = ref<boolean>(false);

const newMeal = ref<Products>({
  id: 0,
  title: "",
  description: "",
  price: 0,
  image: "",
  status: 0,
});

const toggleModal = () => {
  isOpen.value = !isOpen.value;
};

const saveNewMeal = (item: Products) => {
  addProduct(item);
  toggleModal();
};
</script>
