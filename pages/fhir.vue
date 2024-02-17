<template>
  <div>
    <Navbar></Navbar>
    <div class="stats shadow">
      <FhirObservation
        v-for="(obs, index) in fhirStore.observations"
        :key="index"
        :resource="obs"
      ></FhirObservation>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import LayoutHeroBanner from "@/components/layout/HeroBanner.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { JsonParser } from "@ozkarjs/vhir";
import { useFHIR } from "@/store/fhir/fhir.index";
import { IPLD } from "@ozkarjs/zerkle";
//import { QueryBuilder } from "@/components/fhir/QueryBuilder.vue";
const fhirStore = useFHIR();

const startProver = (resourceId) => {
  console.log(resourceId);
  fhirStore.selectedResource = resourceId;
  console.log(fhirStore.getSelectedResourcePaths);
  let queryValues;
  switch (resourceId) {
    case "heartbeat":
      queryValues = [
        {
          path: "resourceType",
          comparisonOperator: "$eq",
          value: "Observation",
          resourceId: resourceId,
        },
        {
          path: "valueQuantity.code",
          comparisonOperator: "$eq",
          value: "beats per minute",
          resourceId: resourceId,
        },
      ];
      break;
    case "weight":
      queryValues = [
        {
          path: "resourceType",
          comparisonOperator: "$eq",
          value: "Observation",
          resourceId: resourceId,
        },
        {
          path: "valueQuantity.code",
          comparisonOperator: "$eq",
          value: "kg",
          resourceId: resourceId,
        },
      ];
      break;
    case "height":
      queryValues = [
        {
          path: "resourceType",
          comparisonOperator: "$eq",
          value: "Observation",
          resourceId: resourceId,
        },
        {
          path: "valueQuantity.code",
          comparisonOperator: "$eq",
          value: "[cm_i]",
          resourceId: resourceId,
        },
      ];

      break;
    default:
      queryValues = [
        {
          path: "resourceType",
          comparisonOperator: "$eq",
          value: "Observation",
          resourceId: resourceId,
        },
      ];

      fhirStore.query = queryValues;
  }

  fhirStore.query = queryValues;
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
