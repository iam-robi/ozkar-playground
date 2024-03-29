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
          {{ resourceDisplay }}
        </h3>

        <div class="text-xs">
          {{ queryComparatorDisplay }}
          {{ queryValueDisplay }}
          {{ unitDisplay }}
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
import type { Observation, AdverseEvent } from "@medplum/fhirtypes";
import type { QueryList } from "@/store/fhir/fhir.types";

const download = () => {
  const dataStr = JSON.stringify(props.workflowMetadata.result, null, 2); // Format the JSON string for readability
  const blob = new Blob([dataStr], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "proof.json"); // Set the file name for the download
  document.body.appendChild(link); // Append link to the body
  link.click(); // Programmatically click the link to trigger the download

  document.body.removeChild(link); // Clean up by removing the link
  URL.revokeObjectURL(url); // Release blob URL
};

const resourceDisplay = computed(() => {
  return (
    props.resource?.code?.coding?.[0]?.display ||
    props.resource?.code?.text ||
    "N/A"
  );
});

const queryComparatorDisplay = computed(
  () => props.workflowMetadata.queryMetadata.queryComparator
);
const queryValueDisplay = computed(
  () => props.workflowMetadata.queryMetadata.queryValue
);
const unitDisplay = computed(() => props.resource.valueQuantity?.unit || "N/A");

const props = defineProps<{
  resource: Observation;
  workflowMetadata: any;
}>();
</script>
