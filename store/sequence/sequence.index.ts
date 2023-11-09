// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import type { SequenceState } from '~/store/sequence/sequence.types';

export const useSequence = defineStore("sequence", {
  state: (): SequenceState => ({
    bruteForceVerifierAddress: 'B62qoB21FbxU4mCmz5vUSuMTfAqPZYeKt7vy9TKNxbeACNu4TaCgPJo',
    segmentVerifierAddress: 'B62qjxuF5zqUvdHX8SKCLnGRvELSqSLqoJFh8c3AVFaLikGhuTWaA3K',
    sequence: '',
    pattern: '',
    proof: ''
  }),
  actions: {
    computeProof: async function () {
        this.proof = 'fakeproof'
        console.log('computeProof')
    },
    verify: async function () {
        console.log('verify')
    },
  }
});