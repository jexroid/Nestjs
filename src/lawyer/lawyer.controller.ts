import { Controller } from '@nestjs/common';
import { LawyerService } from './lawyer.service';

@Controller('lawyer')
export class LawyerController {
  constructor(private readonly lawyerService: LawyerService) {}
}
