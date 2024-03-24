<template>
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-8 h-8 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div class="stat-title">
      {{
        resource.code.coding[0].display
          ? resource.code.coding[0].display
          : resource.code.text
      }}
    </div>
    <div class="stat-value">
      {{ resource.valueQuantity.value }}
    </div>
    <div class="stat-desc">
      {{ resource.valueQuantity.unit }}
    </div>
    <div
      v-if="
        fhirStore.getResourceWorkflows(resource.id) &&
        fhirStore.getResourceWorkflows(resource.id).workflows.length == 0
      "
    >
      <FhirResourceQueryModal :resource="resource" />
    </div>
    <div
      v-if="
        fhirStore.getResourceWorkflows(resource.id) &&
        fhirStore.getResourceWorkflows(resource.id).workflows.length > 0
      "
    >
      <FhirResourceProofSummaryModal :resource="resource" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFHIR } from "@/store/fhir/fhir.index";
const fhirStore = useFHIR();

defineProps<{
  resource?: any;
}>();
//fhirStore.getResourceWorkflows(resource.id);
</script>
