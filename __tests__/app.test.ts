import app from "../src/app";
import request from "supertest";

const server = app.listen(6666);

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

  describe("GET /api/users/:id/devices", () => {
    const userWithDevices = "cm3op7iwu0000jrcqa60tc9kv";
    const userWithoutDevices = "cm3op7iww0001jrcqpq3qxx6i";

    it("200: should return the devices for a valid user with more than one device", () => {
      return request(app)
        .get(`/api/users/${userWithDevices}/devices`)
        .expect(200)
        .then(({ body: { success, data } }) => {
          expect(success).toBe(true);
          expect(data).not.toEqual([]);
        });
    });

    it("200: should return an empty array when given a valid user with no devices", () => {
      return request(app)
        .get(`/api/users/${userWithoutDevices}/devices`)
        .expect(200)
        .then(({ body: { success, data } }) => {
          expect(success).toBe(true);
          expect(data).toEqual([]);
        });
    });
  });

  describe("POST /api/devices/create", () => {
    it("201: should create a new device", () => {
      return request(app)
        .post("/api/devices/create")
        .set("Authorization", "user1")
        .expect(201)
        .then(({ body: { success, data } }) => {
          expect(success).toBe(true);
          expect(data).toMatchObject({
            name: "GPS Device",
            last_pulse_at: null,
            last_location: {},
            location_history: {},
          });
        });
    });
    it("401: should alert of no authorization", () => {
      return request(app)
        .post("/api/devices/create")
        .expect(401)
        .then(({ body: { success, message } }) => {
          expect(success).toBe(false);
          expect(message).toBe("You are not authorized");
        });
    });
  });
});
