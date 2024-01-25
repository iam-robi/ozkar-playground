// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import type { FHIRState } from "~/store/fhir/fhir.types";
import { PublicKey, Mina, Field } from "o1js";

export const useFHIR = defineStore("fhir", {
  state: (): FHIRState => ({
    fhirObservationWeight: {
      resourceType: "Observation",
      id: "bodyWeight",
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
        value: 25,
        unit: "kg",
        system: "http://unitsofmeasure.org",
        code: "kg",
      },
    },
    fhirObservationHeight: {
      resourceType: "Observation",
      id: "body-height",
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
        value: 66.899999999999991,
        unit: "in",
        system: "http://unitsofmeasure.org",
        code: "[in_i]",
      },
    },
    fhirObservationHeartRate: {
      resourceType: "Observation",
      id: "ExampleAverageRestingHeartRate",
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
    proofs: [],
  }),
  actions: {},
});