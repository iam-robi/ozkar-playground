<template>
  <div>
    <div role="alert" style="margin-bottom: 10px" class="alert shadow-lg">
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
            resource.code.coding[0].display
              ? resource.code.coding[0].display
              : resource.code.text
          }}
        </h3>
        <!-- resource.code.coding[0].display ? resource.code.coding[0].display
              : resource.code.text -->
        <div class="text-xs">
          {{ workflowMetadata.queryMetadata.queryComparator }}
          {{ workflowMetadata.queryMetadata.queryValue }}
          {{ resource.valueQuantity.unit }}
        </div>
      </div>
      <!-- <button class="btn btn-sm btn-success">See</button> -->
      <button class="btn btn-circle">
        <UIcon
          @click="download"
          style="font-weight: 900"
          name="i-heroicons-arrow-down-tray-20-solid"
        />
      </button>
      <!-- <input type="checkbox" checked="checked" class="checkbox" /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import type Fhir from "@medplum/fhirtypes";
import type { Observation, AdverseEvent } from "@medplum/fhirtypes";
import type { QueryList } from "@/store/fhir/fhir.types";

const download = () => {
  console.log("downlaoding");
};

defineProps<{
  resource?: Observation | AdverseEvent;
  workflowMetadata: Object;
}>();
</script>
