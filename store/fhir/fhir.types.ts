import type { Observation } from "@medplum/fhirtypes";
export interface FHIRState {
  query: any;
  merkleMap: any;
  selectedResource: String;
  fhirObservationWeight: Observation;
  fhirObservationHeight: Observation;
  fhirObservationHeartRate: Observation;
  proofs: Array<String>;
}
