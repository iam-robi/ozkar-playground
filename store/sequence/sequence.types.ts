import type { BruteForceVerifier } from "@ozkarjs/sequence-verifiers";

export interface SequenceState {
  bruteForceVerifierAddress: String;
  segmentVerifierAddress: String;
  sequence: String;
  sequenceWithVariant: String;
  pattern: String;
  proof: String;
}
