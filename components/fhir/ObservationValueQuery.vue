<template>
  <div>
    <div
      v-if="
        resource.hasOwnProperty('valueQuantity') &&
        !fhirStore.getQueryContainsPath('/valueQuantity/value')
      "
    >
      <select v-model="selectedComparator" class="select w-full max-w-xs">
        <option
          v-for="(op, index) in comparisonOperators"
          :key="index"
          :value="op.value"
        >
          {{ op.label }}
        </option>
      </select>
      <br /><br />
      <label
        class="input input-bordered flex items-center gap-2"
        :class="{
          'input-error': isQuantityError,
          'input-success': !isQuantityError,
        }"
      >
        <input
          type="text"
          v-model="inputValue"
          class="grow"
          placeholder="Value to compare"
        />
        <span class="badge badge-ghost badge-xs font-bold"
          ><span>{{ resource.valueQuantity.unit }}</span></span
        >
      </label>
      <span>actual value: {{ resource.valueQuantity.value }}</span
      ><br /><br />
      <button class="btn btn-outline btn-primary" @click="addQuantityQuery">
        Add
      </button>
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
const selectedComparator = ref(comparisonOperators[0].value); // Initialize with the first option or a default value
const inputValue = ref("");
const addQuantityQuery = () => {
  const query = {
    path: "/valueQuantity/value",
    comparisonOperator: selectedComparator,
    value: inputValue,
    resourceId: fhirStore.selectedResource.id,
  };
  fhirStore.query.push(query);
};
const isQuantityError = computed(() => {
  if (!inputValue.value || isNaN(inputValue.value)) return false; // Ensure input is a number
  const inputNumber = parseFloat(inputValue.value);
  const resourceValue = parseFloat(props.resource.valueQuantity.value);

  switch (selectedComparator.value) {
    case "$eq":
      return resourceValue !== inputNumber;
    case "$gt":
      return resourceValue <= inputNumber;
    case "$ge":
      return resourceValue < inputNumber;
    case "$lt":
      return resourceValue >= inputNumber;
    case "$le":
      return resourceValue > inputNumber;
    default:
      return false;
  }
});
</script>
