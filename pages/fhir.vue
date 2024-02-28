<template>
  <div>
    <Navbar></Navbar>
    <div class="stats shadow">
      <FhirObservation
        v-for="(obs, index) in fhirStore.observations"
        :key="index"
        :resource="obs"
      ></FhirObservation>

      <USlideover v-model="navigationStore.proofSlideOverOpen" prevent-close>
        <UCard
          class="flex flex-col flex-1"
          :ui="{
            body: { base: 'flex-1' },
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3
                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Proof Basket
              </h3>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="navigationStore.proofSlideOverOpen = false"
              />
            </div>
          </template>

          <div
            v-for="(proofRequestId, index) in Object.keys(
              fhirStore.preparedQueries
            )"
            :key="index"
            role="alert"
            style="margin-bottom: 10px"
            class="alert shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-info shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <h3 class="font-bold">
                {{
                  fhirStore.getResourceById(proofRequestId).code.coding[0]
                    .display
                    ? fhirStore.getResourceById(proofRequestId).code.coding[0]
                        .display
                    : fhirStore.getResourceById(proofRequestId).code.text
                }}
              </h3>
              <!-- resource.code.coding[0].display ? resource.code.coding[0].display
              : resource.code.text -->
              <div class="text-xs">
                {{
                  `${
                    fhirStore.preparedQueries[proofRequestId][
                      fhirStore.preparedQueries[proofRequestId].length - 1
                    ].comparisonOperator
                  } ${
                    fhirStore.preparedQueries[proofRequestId][
                      fhirStore.preparedQueries[proofRequestId].length - 1
                    ].value
                  }`
                }}
              </div>
            </div>
            <button class="btn btn-sm btn-success">See</button>
            <input type="checkbox" checked="checked" class="checkbox" />
          </div>

          <br />
          <button @click="compute" class="btn btn-accent">
            Compute Proofs with Cloud Prover
          </button>

          <Placeholder class="h-full" />
        </UCard>
      </USlideover>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import LayoutHeroBanner from "@/components/layout/HeroBanner.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { JsonParser } from "@ozkarjs/vhir";
import { useFHIR } from "@/store/fhir/fhir.index";
import { useNavigation } from "@/store/navigation/navigation.index";
import { IPLD } from "@ozkarjs/zerkle";
//import { QueryBuilder } from "@/components/fhir/QueryBuilder.vue";
const fhirStore = useFHIR();
const navigationStore = useNavigation();
const compute = async () => {
  await fhirStore.requestProofs();
};
onMounted(async () => {});
</script>
<style>
.stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.stat {
  flex: 0 0 auto; /* Prevents the cards from growing or shrinking */
  max-width: 30%; /* Adjust this value based on your layout */
  margin: 10px; /* Optional, for spacing around the cards */
}
</style>
