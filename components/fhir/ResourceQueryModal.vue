<template>
  <div class="flex items-center justify-center">
    <button type="button" @click="openModal" class="btn">
      Proof
      <div
        v-if="fhirStore.pendingQueries.hasOwnProperty(resource.id)"
        class="badge badge-outline"
      >
        pending <span class="loading loading-infinity loading-md"></span>
      </div>
      <div
        v-else-if="fhirStore.preparedQueries.hasOwnProperty(resource.id)"
        class="badge badge-outline"
      >
        prepared
      </div>
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Prove data point
                <div class="badge badge-neutral">{{ resource.id }}</div>
              </DialogTitle>

              <FhirQueryBuilder :default-query="{}"></FhirQueryBuilder>
              <div class="mt-4">
                <button class="btn btn-outline btn-success" @click="confirm">
                  Confirm
                </button>
                <button class="btn btn-outline btn-error" @click="closeModal">
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { useFHIR } from "@/store/fhir/fhir.index";
const fhirStore = useFHIR();
const isOpen = ref(false);

const props = defineProps({
  resource: {},
});

function closeModal() {
  isOpen.value = false;
}
function confirm() {
  fhirStore.preparedQueries[fhirStore.selectedResource] = fhirStore.query;
  fhirStore.query = [];
  closeModal();
}

function openModal() {
  fhirStore.selectedResource = props.resource.id;
  if (fhirStore.preparedQueries.hasOwnProperty(props.resource.id)) {
    fhirStore.query = fhirStore.preparedQueries[props.resource.id];
  } else {
    fhirStore.setBasicQuery(props.resource);
  }
  isOpen.value = true;
}
</script>
