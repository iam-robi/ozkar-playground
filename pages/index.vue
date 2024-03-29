<template>
  <div>
    <Navbar></Navbar>
    <LayoutHeroBanner></LayoutHeroBanner>
    <div class="flex justify-center items-center mt-10">
      <!-- Card for Sequence -->
      <div class="card w-96 bg-base-100 shadow-xl m-5">
        <div class="card-body">
          <h2 class="card-title">🧬 Sequence</h2>
          <p>Access the Sequence verifier playground.</p>
          <div class="card-actions justify-end">
            <router-link to="/sequence" class="btn btn-primary"
              >Go to Sequence</router-link
            >
          </div>
        </div>
      </div>

      <!-- Card for FHIR -->
      <div class="card w-96 bg-base-100 shadow-xl m-5">
        <div class="card-body">
          <h2 class="card-title">🔥FHIR</h2>
          <p>Access the FHIR data playground.</p>
          <div class="card-actions justify-end">
            <router-link to="/fhir" class="btn btn-primary"
              >Go to FHIR</router-link
            >
          </div>
        </div>
      </div>

      <!-- Card for FHIR -->
      <div class="card w-96 bg-base-100 shadow-xl m-5">
        <div class="card-body">
          <h2 class="card-title">📜 Clinical Form</h2>
          <p>Access the Clinical Form Submission & Proving Interface</p>
          <div class="card-actions justify-end">
            <router-link to="/questionnaires" class="btn btn-primary"
              >Go to Clinical Forms</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import LayoutHeroBanner from "@/components/layout/HeroBanner.vue";
</script>
