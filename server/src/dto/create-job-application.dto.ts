export class CreateJobApplicationDto {
  company: string;
  position: string;
  appliedDate: Date;
  status: 'applied' | 'interviewing' | 'offered' | 'rejected';
  skillsRequired: string[];
  responded: boolean;
  appliedOn: 'linkedIn' | 'company_website' | 'referral' | 'job_board';
  location: string;
  flexibility: 'remote' | 'on_site' | 'hybrid';
}
