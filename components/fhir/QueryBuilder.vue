<template>
  <div class="card w-960">
    <figure>
      <!-- <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="car!"
        /> -->
    </figure>
    <div class="card-body">
      <!-- <h2 class="card-title">Query Builder</h2>
      <p>Create the query you would like to prove for the FHIR Resource</p> -->

      <div
        class="overflow-x-auto"
        v-for="(operator, index) in fhirStore.query"
        :key="index"
      >
        <div class="badges-container">
          <div class="badge badge-primary">{{ operator.path }}</div>
          &nbsp; &nbsp;
          <div class="badge badge-ghost">=</div>
          &nbsp; &nbsp;
          <div class="badge badge-secondary">
            {{ operator.value }}
          </div>
        </div>
      </div>
      <div class="overflow-x-auto"></div>

      <FhirObservationValueQuery :resource="fhirStore.getSelectedResource" />
      <!-- <div class="justify-between items-center space-x-4">
        <select
          v-model="fhirStore.newOperator.path"
          class="select select-primary flex-1"
        >
          <option disabled selected>Select a path</option>
          <option
            v-for="(ln, index) in fhirStore.getSelectedResourcePaths"
            :key="index"
            :value="ln"
          >
            {{ ln }} 
          </option>
        </select>

        <select
          v-model="fhirStore.newOperator.comparisonOperator"
          class="select select-primary flex-1"
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
          class="input flex-1"
        />

        <button @click="addQuery" class="btn btn-accent">Add</button>
      </div> -->
      <!-- <button @click="addToProofCart" class="btn btn-accent">
        Add to Cart
      </button> -->
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

const props = defineProps({
  defaultQuery: {},
  paths: [],
  valuesObjects: [
    { path: "/resourceType", comparisonOperator: "$eq", value: "Observation" },
  ],
});

const addQuery = () => {
  fhirStore.query.push(fhirStore.newOperator);
  fhirStore.newOperator = {
    path: "",
    comparisonOperator: "",
    value: "",
    resourceId: fhirStore.selectedResource,
  };
};

const addToProofCart = () => {
  fhirStore.proofCart.push(fhirStore.query);
  fhirStore.query = [];
  fhirStore.newOperator = {
    path: "",
    comparisonOperator: "",
    value: "",
    resourceId: fhirStore.selectedResource,
  };
};

watch(
  () => fhirStore.selectedResource,
  (path) => {
    console.log("watching", path);
  }
);
</script>
