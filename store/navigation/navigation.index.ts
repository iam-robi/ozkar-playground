// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import type { NavigationState } from "~/store/navigation/navigation.types";
import { useNuxtApp } from "#app";

export const useNavigation = defineStore("navigation", {
  state: (): NavigationState => ({
    pendingCloudProverRequest: false,
    loading: false,
    proofSlideOverOpen: false,
  }),
  actions: {},
});
