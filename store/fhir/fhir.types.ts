import type { Observation, AdverseEvent } from "@medplum/fhirtypes";
import type { ComparisonOperator } from "@ozkarjs/vhir";
import type { WorkflowExecutionDescription } from "@temporalio/client";

export interface OperatorObject {
  path: String;
  comparisonOperator: ComparisonOperator;
  value: String;
  resourceId: String;
}

export interface ProvingRequestStatus {
  resourceId: string;
  workflowId: string;
  workflowDescription?: WorkflowExecutionDescription;
}
type ResourceId = string;
export type ProvingRequestHistory = {
  [key: ResourceId]: ProvingRequestStatus[];
};

export type QueryList = {
  [key: ResourceId]: OperatorObject[];
};

export interface FHIRState {
  query?: OperatorObject[];
  newOperator?: OperatorObject;
  merkleMap?: any;
  selectedResource: String;
  observations: Observation[];
  adverseEvents: AdverseEvent[];
  proofs: Array<String>;
  preparedQueries: QueryList;
  proofRequestsIds: string[];
  provingWorkflowStatus: Array<WorkflowExecutionDescription>;
  provingRequestHistory: ProvingRequestHistory;
  pendingQueries: any;
}
