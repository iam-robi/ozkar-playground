import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/graphql",
  documents: "gql/cloudprover/**/*.gql",
  generates: {
    "types/cloudprover/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
