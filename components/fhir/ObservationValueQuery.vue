<template>
  <div>
    Value to prove
    <div v-if="resource.hasOwnProperty('valueQuantity')">
      Number verification
      <select class="select select-warning w-full max-w-xs">
        <option v-for="(op, index) in comparisonOperators" :key="index">
          {{ op.label }}
        </option>
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" />
          <span class="badge badge-info">Optional</span>
        </label>
      </select>
    </div>
    <div v-if="resource.hasOwnProperty('valueString')">String verification</div>
  </div>
</template>
<script setup>
import { useFHIR } from "@/store/fhir/fhir.index";
const fhirStore = useFHIR();
const props = defineProps({
  resource: {},
});

const comparisonOperators = [
  { label: "Equal", value: "$eq" },
  { label: "Greather than", value: "$gt" },
  { label: "Greater than or equal", value: "$ge" },
  { label: "Lower than", value: "$lt" },
  { label: "Lower than or equal", value: "$le" },
];
</script>
