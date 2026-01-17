export class UpdateJobApplicationDto {
  status?: 'applied' | 'interviewing' | 'offered' | 'rejected';
  responded?: boolean;
}
