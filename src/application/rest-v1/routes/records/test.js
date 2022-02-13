const request = require("supertest");
const mongodDb = require("../../../../../config/mongoDb");

let app;

describe("/restv1/records", () => {
  beforeAll(async () => {
    app = require("../../../../app");
    await mongodDb.connect();
  });

  afterAll(async () => {
    await mongodDb.disconnect();
  });

  describe("POST /", () => {
    let validBody;
    const exec = async () => {
      return await request(app).post("/restv1/records").send(validBody);
    };
    beforeEach(() => {
      validBody = {
        startDate: "2016-01-26",
        endDate: "2018-02-02",
        minCount: 2700,
        maxCount: 3000,
      };
    });

    it("should return 400 if start date invalid", async () => {
      validBody.startDate = "2016-25-18";
      const res = await exec();
      expect(res.status).toBe(400);
    });
    it("should return 400 if end date invalid", async () => {
      validBody.endDate = "2018-25-18";
      const res = await exec();
      expect(res.status).toBe(400);
    });
    it("should return 400 if endDate is less than startDate invalid", async () => {
      validBody.endDate = "2015-01-18";
      const res = await exec();
      expect(res.status).toBe(400);
    });
    it("should return 400 if min count is not number", async () => {
      validBody.minCount = "a";
      const res = await exec();
      expect(res.status).toBe(400);
    });
    it("should return 400 if max count is not number", async () => {
      validBody.maxCount = "b";
      const res = await exec();
      expect(res.status).toBe(400);
    });
    it("should return 400 if max count is not greater than min count", async () => {
      validBody.maxCount = 2700;
      const res = await exec();
      expect(res.status).toBe(400);
    });
    it("should return 200 if body is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });
  });
});
