<template>
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
    <button @click="startProver('weight')" class="btn btn-accent w-full mt-4">
      Prove
    </button>
  </div>
</template>
