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
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <!-- <th></th> -->
              <th>Path</th>
              <th>Comparison Operator</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(val, index) in fhirStore.query" :key="index">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <!-- <th>{{ index + 1 }}</th> -->

              <td>{{ val.path }}</td>
              <td>{{ val.comparisonOperator }}</td>
              <td>{{ val.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="card-title">Add a comparator</h3>
      <div class="flex flex-row justify-between items-center space-x-4">
        <select
          v-model="fhirStore.selectedResource"
          class="select select-primary flex-1"
        >
          <option disabled selected>Select a path</option>
          <option
            v-for="(observation, index) in fhirStore.observations"
            :key="index"
            :value="ln"
          >
            {{ observation.id }} 
          </option>
        </select>

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
            {{ ln }} value:
            {{ String(fhirStore.getLinearResource[ln]).substring(0, 20) }} 
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
      </div>
      <button @click="addToProofCart" class="btn btn-accent">
        Add to Cart
      </button>
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
</script>
