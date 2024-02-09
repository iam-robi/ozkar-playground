<template>
  <div>
    <Navbar></Navbar>
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-figure text-primary">
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
        <div class="stat-title">Avg Heartbeat</div>
        <div class="stat-value text-primary">
          {{ fhirStore.fhirObservationHeartRate.valueQuantity.value }}
        </div>
        <div class="stat-desc">at rest heartbeat</div>
        <div class="badge badge-neutral">
          id: {{ fhirStore.fhirObservationHeartRate.id }}
        </div>
      </div>

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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Height</div>
        <div class="stat-value">
          {{ fhirStore.fhirObservationHeight.valueQuantity.value }}
        </div>
        <div class="stat-desc">cm</div>
        <div class="badge badge-neutral bottom-0 right-0">
          id: {{ fhirStore.fhirObservationHeight.id }}
        </div>
      </div>

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
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Weight</div>
        <div class="stat-value">
          {{ fhirStore.fhirObservationWeight.valueQuantity.value }}
        </div>
        <div class="stat-desc">↘︎ kgs</div>
        <div class="badge badge-neutral">
          id: {{ fhirStore.fhirObservationWeight.id }}
        </div>
      </div>
    </div>
    <FhirQueryBuilder :default-query="{}"></FhirQueryBuilder>
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
