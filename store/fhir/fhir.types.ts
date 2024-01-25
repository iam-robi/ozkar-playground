import type { Observation } from "@medplum/fhirtypes";
export interface FHIRState {
  fhirObservationWeight: Observation;
  fhirObservationHeight: Observation;
  fhirObservationHeartRate: Observation;
  proofs: Array<String>;
}
