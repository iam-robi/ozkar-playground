// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import type { QuestionnaireState } from "~/store/questionnaire/questionnaire.types";

export const useQuestionnaire = defineStore("account", {
  state: (): QuestionnaireState => ({
    loading: false,
    questionnaire: {
      resourceType: "Questionnaire",
      id: "",
      status: "active",
      subjectType: ["Patient"],
      date: "2024-03-29",
      item: [
        {
          linkId: "1",
          text: "Sitting and reading",
          type: "integer",
        },
        {
          linkId: "2",
          text: "Watching TV",
          type: "integer",
        },
        {
          linkId: "3",
          text: "Sitting inactive in a public place (e.g., a theater or a meeting)",
          type: "integer",
        },
        {
          linkId: "4",
          text: "As a passenger in a car for an hour without a break",
          type: "integer",
        },
        {
          linkId: "5",
          text: "Lying down to rest in the afternoon when circumstances permit",
          type: "integer",
        },
        {
          linkId: "6",
          text: "Sitting and talking to someone",
          type: "integer",
        },
        {
          linkId: "7",
          text: "Sitting quietly after a lunch without alcohol",
          type: "integer",
        },
        {
          linkId: "8",
          text: "In a car, while stopped for a few minutes in traffic",
          type: "integer",
        },
      ],
    },
    questionnaires: [
      {
        resourceType: "Questionnaire",
        id: "",
        status: "active",
        subjectType: ["Patient"],
        date: "2024-03-29",
        item: [
          {
            linkId: "1",
            text: "Sitting and reading",
            type: "integer",
          },
          {
            linkId: "2",
            text: "Watching TV",
            type: "integer",
          },
          {
            linkId: "3",
            text: "Sitting inactive in a public place (e.g., a theater or a meeting)",
            type: "integer",
          },
          {
            linkId: "4",
            text: "As a passenger in a car for an hour without a break",
            type: "integer",
          },
          {
            linkId: "5",
            text: "Lying down to rest in the afternoon when circumstances permit",
            type: "integer",
          },
          {
            linkId: "6",
            text: "Sitting and talking to someone",
            type: "integer",
          },
          {
            linkId: "7",
            text: "Sitting quietly after a lunch without alcohol",
            type: "integer",
          },
          {
            linkId: "8",
            text: "In a car, while stopped for a few minutes in traffic",
            type: "integer",
          },
        ],
      },
    ],
    selectedQuestionnaireId: "epworth-sleepiness-scale",
  }),
  actions: {},
});
