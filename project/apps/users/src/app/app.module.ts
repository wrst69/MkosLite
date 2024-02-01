import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { ClaimUserModule } from './claim-user/claim-user.module';

@Module({
  imports: [AuthenticationModule, ClaimUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
