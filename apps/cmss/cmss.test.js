const logger = require("../../logger");
const request = require("supertest");
const app = require("../../app");
describe("GET /api/cmms_request", () => {
  it("should return all cmms_request", async () => {
    // const res = await request(app).get("/api/products");
    // const res = await request(app).get("/api/cmss/cmm_request");
    // expect(res.statusCode).toBe(200);
    expect("Testing in Progess").toEqual("Testing in Progess");
  });
  it("should return all cmms_request", async () => {
    const res = await request(app).get("/api/cmss/cmm_request");
    expect(res.statusCode).toBe(200);
  });

  it("should return all cmms_request", async () => {
    const res = await request(app).post("/api/cmss/post_cmms").send({
      name: "Product 2",
      price: 1009,
      description: "Description 2",
    });
    console.log(res.statusCode);
    expect(res.statusCode).toBe(201);
    var response = {
      name: "Product 2",
      price: 1009,
      description: "Description 2",
    };
    expect(res.body).toMatchObject(response);
  });
});
