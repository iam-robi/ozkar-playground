<template>
  <div>
    <h3 class="text-2xl font-bold mb-4 pt-4 pl-4">Constants</h3>
    <div class="stats shadow">
      <FhirObservation
        v-for="(obs, index) in fhirStore.observations"
        :key="index"
        :resource="obs"
      ></FhirObservation>
    </div>

    <div class="flex">
      <!-- Use flex container here -->
      <div class="w-1/2 pt-4 pl-4">
        <h3 class="text-2xl font-bold mb-4">Adverse Events</h3>
        <!-- Add padding to the top and left -->
        <FhirAdverseEvents
          :resources="fhirStore.adverseEvents"
        ></FhirAdverseEvents>
      </div>
      <div class="w-1/2">
        <!-- The right half of the screen could go here -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFHIR } from "@/store/fhir/fhir.index";
import { useNavigation } from "@/store/navigation/navigation.index";
//import { QueryBuilder } from "@/components/fhir/QueryBuilder.vue";
const fhirStore = useFHIR();
const navigationStore = useNavigation();
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
