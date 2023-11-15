// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import type { SequenceState } from "~/store/sequence/sequence.types";
import { PublicKey, Mina, Field } from "o1js";
import {
  BruteForceVerifier,
  ZKSeq,
  DynamicArray,
} from "@ozkarjs/sequence-verifiers";

export const useSequence = defineStore("sequence", {
  state: (): SequenceState => ({
    bruteForceVerifierAddress:
      "B62qpWAr1nJ6WNCZnAUsWPXPAhT9nDNRQAZvuM1vQ6gDjgQKCqCMPxr",
    segmentVerifierAddress:
      "B62qjxuF5zqUvdHX8SKCLnGRvELSqSLqoJFh8c3AVFaLikGhuTWaA3K",
    sequence: "ATCGTCAGTGGAATTGATCGTCAGTATTATTG",
    sequenceWithVariant: "ATCGTCAGTGGAATTGATCGTCAGTATGATTG",
    pattern: "ATTATT",
    proof: "",
  }),
  actions: {
    computeProof: async function () {
      const fee = Number("0.1") * 1e9;
      class SequenceFieldArray extends DynamicArray(Field, 32) {}
      class PatternFieldArray extends DynamicArray(Field, 6) {}
      let patternSeq = new ZKSeq(this.pattern.toString());
      let fullSeq = new ZKSeq(this.sequence.toString());
      console.log("compiling...");
      await BruteForceVerifier.compile();
      let zkApp = new BruteForceVerifier(
        PublicKey.fromBase58(this.bruteForceVerifierAddress.toString())
      );
      console.log("finished compiling, verifying...");
      try {
        const tx = await Mina.transaction(() => {
          zkApp.verify(
            SequenceFieldArray.from(fullSeq.fieldList),
            PatternFieldArray.from(patternSeq.fieldList)
          );
        });
        await tx.prove();
        const { hash } = await window.mina.sendTransaction({
          transaction: tx.toJSON(),
          feePayer: {
            fee: "",
            memo: "zk",
          },
        });
        console.log(tx.toPretty());
        console.log(hash);
      } catch (err) {
        // You may want to show the error message in your UI to the user if the transaction fails.
        console.log(err.message);
      }
    },
    verify: async function () {
      console.log("verify");
    },
  },
});
