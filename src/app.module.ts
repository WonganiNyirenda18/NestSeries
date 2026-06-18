import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EmployeesService } from './employees/employees.service';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [UsersModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService, EmployeesService],
})
export class AppModule {}
