<template>
  <div class="card w-960">
    <figure>
      <!-- <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="car!"
        /> -->
    </figure>
    <div class="card-body">
      <h2 class="card-title">Query Builder</h2>
      <p>Create the query you would like to prove for the FHIR Resource</p>

      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Path</th>
              <th>Comparison Operator</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(val, index) in valuesObjects" :key="index">
              <th>{{ index + 1 }}</th>
              <td>{{ val.path }}</td>
              <td>{{ val.comparisonOperator }}</td>
              <td>{{ val.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="card-title">Add a comparator</h3>

      <select
        v-model="fhirStore.newOperator.path"
        class="select select-primary w-full max-w-xs"
      >
        <option disabled selected>Select a path</option>
        <option
          v-for="(ln, index) in fhirStore.getSelectedResourcePaths"
          :key="index"
          :value="ln"
        >
          {{ ln }} value: {{ fhirStore.getLinearResource[ln] }} 
        </option>
      </select>

      <select
        v-model="fhirStore.newOperator.comparisonOperator"
        class="select select-primary w-full max-w-xs"
      >
        <option disabled selected>Select a comparison operator</option>
        <option
          v-for="(op, index) in comparisonOperators"
          :key="index"
          :value="op.value"
        >
          {{ op.label }}
        </option>
      </select>

      <input
        v-model="fhirStore.newOperator.value"
        type="text"
        placeholder="Enter value"
        class="input w-full max-w-xs"
      />

      <button
        @click="startProver('heartbeat')"
        class="btn btn-accent w-full mt-4"
      >
        Add
      </button>

      <!-- <div class="card-actions justify-end">
        <button class="btn btn-primary">Learn now!</button>
      </div> -->
    </div>
  </div>
</template>
<script setup>
import { useFHIR } from "@/store/fhir/fhir.index";
const fhirStore = useFHIR();

const comparisonOperators = [
  { label: "Equal", value: "$eq" },
  { label: "Greather than", value: "$gt" },
  { label: "Greater than or equal", value: "$ge" },
  { label: "Lower than", value: "$lt" },
  { label: "Lower than or equal", value: "$le" },
];
const valuesObjects = [
  { path: "/resourceType", comparisonOperator: "$eq", value: "Observation" },
];
const props = defineProps({
  defaultQuery: {},
  paths: [],
  valuesObjects: [
    { path: "/resourceType", comparisonOperator: "$eq", value: "Observation" },
  ],
});
</script>
