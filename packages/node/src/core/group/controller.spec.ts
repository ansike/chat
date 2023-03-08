import { Test, TestingModule } from '@nestjs/testing';
import { GroupController } from './controller';
import { GroupService } from './service';

describe('AppController', () => {
  let appController: GroupController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GroupController],
      providers: [GroupService],
    }).compile();

    appController = app.get<AppController>(GroupController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
