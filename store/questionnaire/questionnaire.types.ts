import type { Questionnaire } from "@medplum/fhirtypes";
export interface QuestionnaireState {
  loading: Boolean;
  questionnaire: Questionnaire;
  selectedQuestionnaireId: string;
  questionnaires: Questionnaire[];
}
