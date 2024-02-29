<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <ConnectWallet></ConnectWallet>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <button class="btn btn-circle">
              <UIcon
                @click="openSlideOver"
                style="font-weight: 900"
                name="i-heroicons-shopping-cart-20-solid"
              />
            </button>
            <span
              v-if="Object.keys(fhirStore.preparedQueries).length > 0"
              class="badge badge-success badge-sm indicator-item"
              >{{ Object.keys(fhirStore.preparedQueries).length }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ConnectWallet from "../wallet/ConnectWallet.vue";
import { useFHIR } from "#imports";
import { useNavigation } from "#imports";
const navigationStore = useNavigation();
const fhirStore = useFHIR();
const colorMode = useColorMode();
const themes = [
  "system",
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const openSlideOver = () => {
  navigationStore.proofSlideOverOpen = true;
};
const compute = async () => {
  await fhirStore.requestProofs();
};
</script>
