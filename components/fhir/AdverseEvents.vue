<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Date</th>
          <th>Grade</th>
          <th>Proof</th>
        </tr>
      </thead>
      <tbody>
        <!-- {{
          fhirStore.adverseEvents
        }} -->
        <!-- row 1 -->
        <tr v-for="(adverseEvent, index) in resources" :key="index">
          <th></th>

          <td>{{ adverseEvent.event.coding[0].display }}</td>
          <th>{{ adverseEvent.date }}</th>
          <td>
            <div
              :class="`badge ${getBadgeColor(
                adverseEvent.severity.coding[0].code
              )}`"
            >
              {{ adverseEvent.severity.coding[0].display }}
            </div>
          </td>
          <td><button class="btn btn-sm">Prove</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { useFHIR } from "@/store/fhir/fhir.index";
import type { AdverseEvent } from "@medplum/fhirtypes";
const fhirStore = useFHIR();
const getBadgeColor = (severity: string) => {
  switch (severity) {
    case "1":
      return "badge-primary"; // Lighter color for lower severity
    case "2":
      return "badge-secondary"; // Slightly darker
    case "3":
      return "badge-warning"; // Yellow, for middle-ground severity
    case "4":
      return "badge-accent"; // Orange, indicating higher severity
    case "5":
      return "badge-error"; // Red, for highest severity
    default:
      return "badge-neutral"; // Default case
  }
};

defineProps<{
  resources?: AdverseEvent[];
}>();
</script>
