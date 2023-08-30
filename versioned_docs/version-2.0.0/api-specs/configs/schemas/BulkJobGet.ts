import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const BulkJobGet: ApiParam = {
  type: "object",
  displayName: "Bulk Job Get",
  fields: [
    {
      type: "json",
      name: "job",
      description: "The bulk job data",
      example: {
        definition: {
          event: "V7E6M48EFQMB78H746QCCD1KSRAA",
        },
        enqueued: 2,
        failures: 0,
        received: 2,
        status: "COMPLETED",
      },
    },
  ],
};

export default BulkJobGet;
