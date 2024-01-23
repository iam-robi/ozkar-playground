import type { BruteForceVerifier } from "@ozkarjs/sequence-verifiers";

export interface FHIRState {
  fhirObservationWeight: String;
  fhirObservationHeight: String;
  fhirObservationHeartRate: String;
  proofs: Array<String>;
}
