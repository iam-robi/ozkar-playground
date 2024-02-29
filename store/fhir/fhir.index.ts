// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import type { FHIRState } from "~/store/fhir/fhir.types";

import { JsonParser } from "@ozkarjs/vhir";
import { GqlRequestProofs, GqlGetWorflowStatus } from "#imports";
import type { Observation } from "@medplum/fhirtypes";
import { useNavigation } from "../navigation/navigation.index";

export const useFHIR = defineStore("fhir", {
  state: (): FHIRState => ({
    query: [],
    newOperator: {
      path: "",
      comparisonOperator: "$eq",
      value: "",
      resourceId: "",
    },
    merkleMap: {},
    selectedResource: "",
    observations: [
      {
        resourceType: "Observation",
        id: "fb2fe821-7406-4566-8e19-a05099840eb3",
        meta: {
          profile: [
            "http://hl7.org/fhir/us/vitals/StructureDefinition/body-weight",
          ],
        },
        text: {
          status: "extensions",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative: Observation</b><a name="bodyWeight-example"> </a></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource Observation &quot;bodyWeight-example&quot; </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-body-weight.html">Body Weight</a></p></div><p><b>Device Code</b>: Floor scale, electronic <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#469204003)</span></p><p><b>Associated Situation</b>: Undressed <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#248160001)</span></p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/5.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#vital-signs)</span></p><p><b>code</b>: Body weight <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#29463-7)</span></p><p><b>subject</b>: <span>: Small Child1234</span></p><p><b>encounter</b>: <span>: GP Visit</span></p><p><b>effective</b>: 2019-10-16 12:12:29-0900</p><p><b>value</b>: 25 kg<span style="background: LightGoldenRodYellow"> (Details: UCUM code kg = \'kg\')</span></p></div>',
        },
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/observation-deviceCode",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "469204003",
                  display: "Floor scale, electronic",
                },
              ],
            },
          },
          {
            url: "http://hl7.org/fhir/us/vitals/StructureDefinition/AssociatedSituationExt",
            valueCodeableConcept: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "248160001",
                  display: "Undressed",
                },
              ],
            },
          },
        ],
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "vital-signs",
                display: "Vital Signs",
              },
            ],
            text: "Vital Signs",
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "29463-7",
            },
          ],
          text: "Body weight",
        },
        subject: {
          display: "Small Child1234",
        },
        encounter: {
          display: "GP Visit",
        },
        effectiveDateTime: "2019-10-16T12:12:29-09:00",
        valueQuantity: {
          value: 75,
          unit: "kg",
          system: "http://unitsofmeasure.org",
          code: "kg",
        },
      },
      {
        resourceType: "Observation",
        id: "d01fd0ef-9f80-440b-accb-23b536151a0b",
        meta: {
          profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
        },
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative: Observation</b><a name="body-height"> </a></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource Observation &quot;body-height&quot; </p><p style="margin-bottom: 0px">Profile: <a href="vitalsigns.html">Vital Signs Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html">Observation Category Codes</a>#vital-signs)</span></p><p><b>code</b>: Body height <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#8302-2)</span></p><p><b>subject</b>: <a href="patient-example.html">Patient/example</a> &quot;Peter CHALMERS&quot;</p><p><b>effective</b>: 1999-07-02</p><p><b>value</b>: 66.899999999999991 in<span style="background: LightGoldenRodYellow"> (Details: UCUM code [in_i] = \'in_i\')</span></p></div>',
        },
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "vital-signs",
                display: "Vital Signs",
              },
            ],
            text: "Vital Signs",
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "8302-2",
              display: "Body height",
            },
          ],
          text: "Body height",
        },
        subject: {
          reference: "Patient/example",
        },
        effectiveDateTime: "1999-07-02",
        valueQuantity: {
          value: 176,
          unit: "cm",
          system: "http://unitsofmeasure.org",
          code: "[cm_i]",
        },
      },
      {
        resourceType: "Observation",
        id: "4aca574c-2597-4062-b1af-2649a0c4f7da",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative: Observation</b><a name="ExampleAverageRestingHeartRate"> </a></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource Observation &quot;ExampleAverageRestingHeartRate&quot; </p></div><p><b>status</b>: final</p><p><b>category</b>: Activity <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/5.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#activity)</span>, Physical Activity <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-pa-temporary-codes.html">Temporary Codes</a>#PhysicalActivity)</span></p><p><b>code</b>: Heart rate --resting <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#40443-4)</span></p><p><b>subject</b>: <a href="http://example.org/Patient/1">http://example.org/Patient/1: Example Patient</a></p><p><b>effective</b>: 2022-06-01 --&gt; 2022-06-08</p><p><b>performer</b>: <a href="http://example.org/Patient/1">http://example.org/Patient/1: Example Patient</a></p><p><b>value</b>: 68 beats per minute<span style="background: LightGoldenRodYellow"> (Details: UCUM code /min = \'/min\')</span></p></div>',
        },
        status: "final",
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "activity",
              },
            ],
          },
          {
            coding: [
              {
                system:
                  "http://hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes",
                code: "PhysicalActivity",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "40443-4",
              display: "Heart rate --resting",
            },
          ],
        },
        subject: {
          reference: "http://example.org/Patient/1",
          display: "Example Patient",
        },
        effectivePeriod: {
          start: "2022-06-01",
          end: "2022-06-08",
        },
        performer: [
          {
            reference: "http://example.org/Patient/1",
            display: "Example Patient",
          },
        ],
        valueQuantity: {
          value: 68,
          unit: "beats per minute",
          system: "http://unitsofmeasure.org",
          code: "/min",
        },
      },
    ],
    adverseEvents: [
      {
        resourceType: "AdverseEvent",
        id: "uuid-1",
        subject: {
          display: "Patient Example One",
        },
        date: "2024-02-01",
        actuality: "actual",
        event: {
          coding: [
            {
              system: "https://www.meddra.org/how-to-use/basics/hierarchy",
              code: "10016558",
              display: "Fever",
            },
          ],
          text: "Patient experienced a mild fever.",
        },
        severity: {
          coding: [
            {
              system:
                "http://ctep.cancer.gov/protocolDevelopment/electronic_applications/ctc.htm#ctc_50",
              code: "1",
              display: "Grade 1",
            },
          ],
          text: "Grade 1",
        },
      },
      {
        resourceType: "AdverseEvent",
        id: "uuid-2",
        subject: {
          display: "Patient Example Two",
        },
        date: "2024-02-02",
        actuality: "actual",
        event: {
          coding: [
            {
              system: "https://www.meddra.org/how-to-use/basics/hierarchy",
              code: "10029104",
              display: "Fatigue",
            },
          ],
          text: "Patient reported significant fatigue.",
        },
        severity: {
          coding: [
            {
              system:
                "http://ctep.cancer.gov/protocolDevelopment/electronic_applications/ctc.htm#ctc_50",
              code: "2",
              display: "Grade 2",
            },
          ],
          text: "Grade 2",
        },
      },
      {
        resourceType: "AdverseEvent",
        id: "uuid-3",
        subject: {
          display: "Patient Example Three",
        },
        date: "2024-02-03",
        actuality: "actual",
        event: {
          coding: [
            {
              system: "https://www.meddra.org/how-to-use/basics/hierarchy",
              code: "10000719",
              display: "Abdominal pain",
            },
          ],
          text: "Severe abdominal pain reported.",
        },
        severity: {
          coding: [
            {
              system:
                "http://ctep.cancer.gov/protocolDevelopment/electronic_applications/ctc.htm#ctc_50",
              code: "3",
              display: "Grade 3",
            },
          ],
          text: "Grade 3",
        },
      },
      {
        resourceType: "AdverseEvent",
        id: "uuid-4",
        subject: {
          display: "Patient Example Four",
        },
        date: "2024-02-04",
        actuality: "actual",
        event: {
          coding: [
            {
              system: "https://www.meddra.org/how-to-use/basics/hierarchy",
              code: "10033371",
              display: "Palpitations",
            },
          ],
          text: "Patient experienced severe palpitations.",
        },
        severity: {
          coding: [
            {
              system:
                "http://ctep.cancer.gov/protocolDevelopment/electronic_applications/ctc.htm#ctc_50",
              code: "4",
              display: "Grade 4",
            },
          ],
          text: "Grade 4",
        },
      },
      {
        resourceType: "AdverseEvent",
        id: "uuid-5",
        subject: {
          display: "Patient Example Five",
        },
        date: "2024-02-05",
        actuality: "actual",
        event: {
          coding: [
            {
              system: "https://www.meddra.org/how-to-use/basics/hierarchy",
              code: "10008738",
              display: "Cough",
            },
          ],
          text: "Patient reported a persistent, severe cough.",
        },
        severity: {
          coding: [
            {
              system:
                "http://ctep.cancer.gov/protocolDevelopment/electronic_applications/ctc.htm#ctc_50",
              code: "5",
              display: "Grade 5",
            },
          ],
          text: "Grade 5",
        },
      },
    ],
    proofs: [],
    preparedQueries: {},
    proofRequestsIds: [],
    provingWorkflowStatus: [],
    provingRequestHistory: {},
    pendingQueries: {},
  }),
  actions: {
    setBasicQuery: function (resource: any) {
      if (resource.resourceType === "Observation") {
        this.query = [
          {
            path: "/resourceType",
            comparisonOperator: "$eq",
            value: resource.resourceType,
            resourceId: resource.id,
          },
          {
            path: "/status",
            comparisonOperator: "$eq",
            value: "final",
            resourceId: resource.id,
          },
          {
            path: "/code/coding/'0/system",
            comparisonOperator: "$eq",
            value: resource.code.coding[0].system,
            resourceId: resource.id,
          },
          {
            path: "/code/coding/'0/code",
            comparisonOperator: "$eq",
            value: resource.code.coding[0].code,
            resourceId: resource.id,
          },
        ];
        if (resource.hasOwnProperty("valueQuantity")) {
          this.query.push({
            path: "/valueQuantity/unit",
            comparisonOperator: "$eq",
            value: resource.valueQuantity.unit,
            resourceId: resource.id,
          });
        }
      }
    },
    formatProvingRequest: function () {
      const keys = Object.keys(this.preparedQueries);
      const provingRequests: any = [];
      keys.forEach((key) => {
        const queryElements = this.preparedQueries[key];

        const query = Object.assign({});
        queryElements.forEach((queryElement: any) => {
          query[queryElement.path] = {
            [queryElement.comparisonOperator]: queryElement.value,
          };
        });

        const resource = this.observations.filter((obs) => obs.id === key)[0];
        const provingRequest = { query, resource };
        provingRequests.push(provingRequest);
      });
      console.log(provingRequests);
      return provingRequests;
    },
    requestProofs: async function () {
      const { $mina } = useNuxtApp();
      const navigationStore = useNavigation();
      const provingRequests = this.formatProvingRequest();
      const serializedProvingRequests = JSON.stringify(provingRequests);

      // Encode the string into a Uint8Array
      const encoder = new TextEncoder();
      const data = encoder.encode(serializedProvingRequests);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      const signature = await $mina.signMessage({ message: hashHex });
      console.log(signature);

      //TODO: send signature to the server , server verifies the signature and then sends the request to temporal
      navigationStore.pendingCloudProverRequest = true;
      try {
        const proofRequestsIds = await GqlRequestProofs({
          proofRequests: { proofRequests: provingRequests },
        });
        this.proofRequestsIds = proofRequestsIds.requestProofs;
      } catch (error) {
        console.log(error);
      }
      navigationStore.pendingCloudProverRequest = false;

      let count = 0;
      let provingRequestStatuses = [];

      provingRequests.forEach((provingRequest: any) => {
        const provingRequestStatus = {
          workflowId: this.proofRequestsIds[count],
          worfklowDescription: null,
          resourceId: provingRequest.resource.id,
        };
        this.pendingQueries[provingRequest.resource.id] =
          this.preparedQueries[provingRequest.resource.id];
        if (
          this.provingRequestHistory.hasOwnProperty(provingRequest.resource.id)
        ) {
          this.provingRequestHistory[provingRequest.resource.id].push(
            provingRequestStatus
          );
        } else {
          this.provingRequestHistory[provingRequest.resource.id] = [
            provingRequestStatus,
          ];
        }

        count++;
      });

      this.preparedQueries = {};
    },
    getWorkflowStatus: async function () {
      try {
        const workflowStatus = await GqlGetWorflowStatus({
          workflowIds: { workflowIds: this.proofRequestsIds },
        });
        this.provingWorkflowStatus = workflowStatus.getWorflowStatus;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getSelectedResource: (state) => {
      let resourceId = state.selectedResource;
      return state.observations.filter(
        (observation: Observation) => observation.id === resourceId
      )[0];
    },
    getResourceById: (state) => (resourceId: any) => {
      return state.observations.filter(
        (observation: Observation) => observation.id === resourceId
      )[0];
    },
    getSelectedResourcePaths: (state) => {
      let resourceId = state.selectedResource;
      let resource = state.observations.filter(
        (observation: Observation) => observation.id === resourceId
      )[0];
      return Object.keys(JsonParser.linearizeJson(resource));
    },
    getLinearResource: (state) => {
      let resourceId = state.selectedResource;
      let resource = state.observations.filter(
        (observation: Observation) => observation.id === resourceId
      )[0];
      return JsonParser.linearizeJson(resource);
    },
    getQueryContainsPath: (state) => (path: any) => {
      if (state.query === undefined) return false;
      else {
        return state.query.filter((query) => query.path === path).length > 0;
      }
      //return state.query?.filter((query) => query.path === path).length > 0;
    },
  },
});
