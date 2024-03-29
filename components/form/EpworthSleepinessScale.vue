<template>
  <div>
    <div class="flex justify-center p-4">
      <div class="card w-full max-w-4xl bg-base-100 shadow-xl">
        <div class="card-body flex flex-col lg:flex-row">
          <!-- Explanation Column -->
          <div class="lg:w-1/2">
            <h2 class="card-title text-2xl">The Epworth Sleepiness Scale</h2>
            <br />
            <p>
              The Epworth Sleepiness Scale is widely used in the field of sleep
              medicine as a subjective measure of a patient's sleepiness. The
              test is a list of eight situations in which you rate your tendency
              to become sleepy on a scale of 0 (no chance of dozing) to 3 (high
              chance of dozing). When you finish the test, add up the values of
              your responses. Your total score is based on a scale of 0 to 24.
              The scale estimates whether you are experiencing excessive
              sleepiness that possibly requires medical attention.
            </p>
            <p class="pt-4 font-bold">How Sleepy Are You?</p>
            <p>
              How likely are you to doze off or fall asleep in the following
              situations? You should rate your chances of dozing off, not just
              feeling tired. Even if you have not done some of these things
              recently, try to determine how they would have affected you. For
              each situation, decide whether or not you would have:
            </p>
            <ul class="list-disc pl-5 py-2">
              <li>No chance of dozing = 0</li>
              <li>Slight chance of dozing = 1</li>
              <li>Moderate chance of dozing = 2</li>
              <li>High chance of dozing = 3</li>
            </ul>
            <p>
              Write down the number corresponding to your choice in the
              right-hand column. Total your score below.
            </p>
          </div>
          <!-- Form Column -->
          <div class="lg:w-1/2 lg:pl-10">
            <UForm
              :schema="schema"
              :state="state"
              @submit="onSubmit"
              class="space-y-4"
            >
              <div v-for="(question, index) in questions" :key="index">
                <UFormGroup
                  :label="`Question ${index + 1}: ${question}`"
                  :name="`q${index + 1}`"
                >
                  <select
                    v-model="state[`q${index + 1}`]"
                    class="select select-bordered w-full max-w-xs"
                  >
                    <option disabled value="">Select your option</option>
                    <option value="0">0 - No chance of dozing</option>
                    <option value="1">1 - Slight chance of dozing</option>
                    <option value="2">2 - Moderate chance of dozing</option>
                    <option value="3">3 - High chance of dozing</option>
                  </select>
                </UFormGroup>
              </div>
              <UButton type="submit">Submit</UButton>
              <UButton
                color="violet"
                variant="solid"
                @click="questionnaireStore.selectedQuestionnaireId == ''"
                >Cancel</UButton
              >
            </UForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { z } from "zod";
import { useQuestionnaire } from "@/store/questionnaire/questionnaire.index";
const questionnaireStore = useQuestionnaire();
const questions = [
  "Sitting and reading",
  "Watching TV",
  "Sitting inactive in a public place",
  "As a passenger in a car for an hour",
  "Lying down to rest in the afternoon",
  "Sitting and talking to someone",
  "Sitting quietly after a lunch without alcohol",
  "In a car, while stopped for a few minutes in traffic",
];

const schema = z.object(
  questions.reduce((acc, _, index) => {
    acc[`q${index + 1}`] = z.union([
      z.literal("0"),
      z.literal("1"),
      z.literal("2"),
      z.literal("3"),
    ]);
    return acc;
  }, {})
);

const state = reactive(
  questions.reduce((acc, _, index) => {
    acc[`q${index + 1}`] = ""; // Initialize state with empty strings
    return acc;
  }, {})
);

async function onSubmit(event) {
  console.log(event.data); // Handle form submission here
}
</script>
