const { validate, validationSchemas } = require(".");

describe("validate records request body", () => {
  it("should validate body and return object with same keys", async () => {
    const body = {
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: 2700,
      maxCount: 3000,
    };
    const result = await validate(validationSchemas.getRecords, body);
    expect(result).toHaveProperty(...Object.keys(body));
  });
});
