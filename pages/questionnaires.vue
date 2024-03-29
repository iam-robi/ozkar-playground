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
          <p>Please log in to start filling the form</p>
          <div class="card-actions justify-end">
            <WalletConnectWallet></WalletConnectWallet>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="title">
        Pick a form to fill, enter the era of traceable & secure clinical forms
        !
      </div>

      <div
        v-if="questionnaireStore.selectedQuestionnaireId === ''"
        class="card w-96 bg-base-100 shadow-xl m-5"
      >
        <div class="card-body">
          <h2 class="card-title">🛌 Epworth Sleepiness Scale</h2>
          <p style="font-style: italic">
            The Epworth Sleepiness Scale is widely used in the field of sleep
            medicine as a subjective measure of a patient's sleepiness.
          </p>
          <div class="card-actions justify-end">
            <button
              class="btn btn-primary"
              @click="selectForm('epworth-sleepiness-scale')"
            >
              Go to Form
            </button>
          </div>
        </div>
      </div>
    </div>

    <FormEpworthSleepinessScale
      v-if="
        questionnaireStore.selectedQuestionnaireId ===
        'epworth-sleepiness-scale'
      "
    ></FormEpworthSleepinessScale>
    <button class="btn btn-primary" @click="selectForm('')">Cancel</button>

    <LayoutSlideOver></LayoutSlideOver>
  </div>
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import { useNavigation } from "@/store/navigation/navigation.index";
import { useAccount } from "@/store/account/account.index";
import { useQuestionnaire } from "@/store/questionnaire/questionnaire.index";
const accountStore = useAccount();
const questionnaireStore = useQuestionnaire();

accountStore.$subscribe(async (mutation) => {
  console.log("mutation", mutation.events);
  console.log("mutation", mutation);
  if (
    mutation.events.key == "minaLoggedIn" &&
    mutation.events.newValue == true
  ) {
    // await formStore.fetchFormData();
  }
});
const selectForm = (form) => {
  questionnaireStore.selectedQuestionnaireId = form;
};
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
