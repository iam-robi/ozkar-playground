<template>
  <div>
    Timeframe to prove
    <div v-if="resource.hasOwnProperty('effectivePeriod')">
      Date Time Verification
    </div>
    <!-- <div v-if="resource.hasOwnProperty('valueString')">String verification</div> -->
  </div>
</template>
<script setup>
import { useFHIR } from "@/store/fhir/fhir.index";
const fhirStore = useFHIR();
const props = defineProps({
  resource: {},
});
</script>
