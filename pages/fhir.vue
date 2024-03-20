<template>
  <div>
    <Navbar></Navbar>

    <div
      class="flex justify-center items-center min-h-screen"
      v-if="!accountStore.minaLoggedIn"
    >
      <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">You are logged out !</h2>
          <p>Please log in to access your dashboard</p>
          <div class="card-actions justify-end">
            <WalletConnectWallet></WalletConnectWallet>
          </div>
        </div>
      </div>
    </div>

    <div v-else><FhirDashboard></FhirDashboard></div>

    <!-- {{ $mina }} -->
    <LayoutSlideOver></LayoutSlideOver>
  </div>
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import LayoutHeroBanner from "@/components/layout/HeroBanner.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { JsonParser } from "@ozkarjs/vhir";
import { useFHIR } from "@/store/fhir/fhir.index";
import { useNavigation } from "@/store/navigation/navigation.index";
import { useAccount } from "@/store/account/account.index";
import { IPLD } from "@ozkarjs/zerkle";
//import { QueryBuilder } from "@/components/fhir/QueryBuilder.vue";
const fhirStore = useFHIR();
const navigationStore = useNavigation();
const accountStore = useAccount();
const compute = async () => {
  await fhirStore.requestProofs();
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
