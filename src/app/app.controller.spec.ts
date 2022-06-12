import { Test, TestingModule } from "@nestjs/testing";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe("getVersion", () => {
    it("should return the app's version", () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getVersion()).toBe("0.0.1");
    });
  });
});
