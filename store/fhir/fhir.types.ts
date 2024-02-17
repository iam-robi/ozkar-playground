import type { Observation } from "@medplum/fhirtypes";
import type { ComparisonOperator } from "@ozkarjs/vhir";

export interface OperatorObject {
  path: String;
  comparisonOperator: ComparisonOperator;
  value: String;
  resourceId: String;
}

export interface FHIRState {
  query?: OperatorObject[];
  newOperator?: OperatorObject;
  merkleMap?: any;
  selectedResource: String;
  observations: Observation[];
  proofs: Array<String>;
  preparedQueries: any;
}
