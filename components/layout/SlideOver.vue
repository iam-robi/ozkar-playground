<template>
  <div>
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
                fhirStore.getResourceById(proofRequestId).code.coding[0].display
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
        <button
          v-if="Object.keys(fhirStore.preparedQueries).length > 0"
          @click="compute"
          class="btn btn-accent"
        >
          <div v-if="!navigationStore.pendingCloudProverRequest">
            Send to Cloud Prover
            <UIcon
              style="font-weight: 900"
              name="i-heroicons-paper-airplane-solid
"
            />
          </div>
          <span v-else class="loading loading-ring loading-lg"></span>
        </button>
        <br /><br />
        <div v-if="Object.keys(fhirStore.pendingQueries).length > 0">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Pending Proofs
          </h3>
          <br />
          <div
            v-for="(proofRequestId, index) in Object.keys(
              fhirStore.pendingQueries
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
                    fhirStore.pendingQueries[proofRequestId][
                      fhirStore.pendingQueries[proofRequestId].length - 1
                    ].comparisonOperator
                  } ${
                    fhirStore.pendingQueries[proofRequestId][
                      fhirStore.pendingQueries[proofRequestId].length - 1
                    ].value
                  }`
                }}
              </div>
            </div>
            <button class="btn btn-sm btn-success">See</button>
            <span class="loading loading-infinity loading-md"></span>
          </div>
        </div>
        <!-- 
          <Placeholder class="h-full" /> -->
      </UCard>
    </USlideover>
  </div>
</template>
<script setup>
import { useFHIR } from "@/store/fhir/fhir.index";
import { useNavigation } from "@/store/navigation/navigation.index";
const fhirStore = useFHIR();
const navigationStore = useNavigation();
const compute = async () => {
  await fhirStore.requestProofs();
};
</script>
