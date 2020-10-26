import { Module } from '@nestjs/common';
import { InstagramRootModule } from './instagram/root/instagram-root.module';

@Module({
  imports: [InstagramRootModule],
})
export class AppModule {}
