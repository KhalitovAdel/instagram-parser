import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly service: ProfileService) {}

  @Get('/:username')
  public getProfile(@Param('username') username: string) {
    return this.service.defaultParse({query: username});
  }
}