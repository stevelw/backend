import app from "../src/app";
import server from "../src/server";
import request from "supertest";

afterAll(() => {
  server.close();
});

describe("🧪 Express Application", () => {
  describe("GET /api", () => {
    it("200: should return a successful response", () => {
      return request(app)
        .get("/api")
        .expect(200)
        .then(({ body }) => {
          expect(body).toEqual({
            success: true,
          });
        });
    });
  });
});
