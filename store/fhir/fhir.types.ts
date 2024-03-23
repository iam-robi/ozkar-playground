import type { Observation, AdverseEvent } from "@medplum/fhirtypes";
import type { ComparisonOperator } from "@ozkarjs/vhir";
import type { WorkflowExecutionDescription } from "@temporalio/client";
import type { Proof } from "o1js";

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

enum WorkflowStatus {
  "UNSPECIFIED" = "UNSPECIFIED",
  "RUNNING" = "RUNNING",
  "COMPLETED" = "COMPLETED",
  "FAILED" = "FAILED",
}

export type WorkflowMetadata = {
  workflowId: string;
  runId: string;
  status: WorkflowStatus;
  executionInfo: WorkflowExecutionDescription;
  //T0DO: update w/ proof type
  result: any;
};
export type WorkflowRequestResponse = {
  resourceId: string;
  run: string;
  workflows: WorkflowMetadata[];
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
  provingWorkflowStatus: Array<WorkflowRequestResponse>;
  provingRequestHistory: ProvingRequestHistory;
  pendingQueries: any;
  dashboardLoading: boolean;
  workflows: any[];
}
