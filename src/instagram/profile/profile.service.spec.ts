import { ProfileService } from './profile.service';
import { Test } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';

describe('', () => {
  let service: ProfileService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ProfileService]
    }).compile();

    service = moduleRef.get<ProfileService, ProfileService>(ProfileService);
  })

  describe('profile', () => {

    it('should method works', async () => {
      const result = await service.defaultParse({query: 'dojacat'});
      expect(!!result).toBe(true)
    });

  })
})