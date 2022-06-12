import { Test } from "@nestjs/testing";

import { AppService } from "./app.service";

describe("AppService", () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe("getVersion", () => {
    it("should return the app's version", () => {
      expect(service.getVersion()).toBe("0.0.1");
    });
  });
});
