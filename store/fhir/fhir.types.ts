import type { Observation } from "@medplum/fhirtypes";
import type { ComparisonOperator } from "@ozkarjs/vhir";

export interface OperatorObject {
  path: String;
  comparisonOperator: ComparisonOperator;
  value: String;
  resourceId: String;
}

export interface FHIRState {
  proofCart?: OperatorObject[][];
  query?: OperatorObject[];
  newOperator?: OperatorObject;
  merkleMap?: any;
  selectedResource: String;
  observations: Observation[];
  fhirObservationWeight: Observation;
  fhirObservationHeight: Observation;
  fhirObservationHeartRate: Observation;
  proofs: Array<String>;
}
