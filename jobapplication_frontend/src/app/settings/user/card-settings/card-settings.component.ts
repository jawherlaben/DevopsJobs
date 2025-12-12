import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Education, Experience, User } from '../../../Model/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserUpdateDTO } from './UserUpdate.dto';

@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
  styleUrls: ['./card-settings.component.css']
})
export class CardSettingsComponent {
  @Input() user: User | undefined ;
  userUpdateDTO: UserUpdateDTO = {};
  editMessage: string;
  editMessageClass: string;

  isSkillInputEnabled: boolean = true;
  isEducationInputEnabled: boolean = false;
  isExperienceInputEnabled: boolean = false;

  isEditingEducation: boolean = false;
  isEditingExperience: boolean = false;
  newEducation: Education = { title: '', period: { startDate: new Date(), endDate: new Date() }, description: '' };
  newExperience: Experience = { title: '', period: { startDate: new Date(), endDate: new Date() }, description: '' };


  @Output() userUpdateDTOChanged = new EventEmitter<UserUpdateDTO>();
  @ViewChild('newSkill') newSkill?: ElementRef;


  constructor( private userService: UserService) {
    this.editMessage = '';
    this.editMessageClass = '';
    this.userUpdateDTO = 
    {
      education: [], 
    };
  }
  ngOnInit(): void {
    this.initializeModel();
  }

  private initializeModel(): void {
    if (this.user) {
      this.userUpdateDTO = { ...this.user };
      this.userUpdateDTO.dateBirth = this.formatDate(this.user.dateBirth);
      this.userUpdateDTOChanged.emit(this.userUpdateDTO);
      this.userUpdateDTO.education = this.userUpdateDTO.education ?? [];
      this.userUpdateDTO.experience = this.userUpdateDTO.experience ?? [];
      this.userUpdateDTO.skills = this.userUpdateDTO.skills ?? [];
    }
    else {
      this.userUpdateDTO = {
        education: [],
        experience: [],
        skills: []
      };    
    }
  }
  private formatDate(dateString: string | undefined): string {
    if (!dateString) {
      return '';
    }
  
    const d = new Date(dateString);
    if (isNaN(d.getTime())) {
      return '';
    }
  
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();
    return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
  }
  
  showErrorMessage(message: string, type: string = 'error') {
    this.editMessage = message;
    if (type == 'error')
      this.editMessageClass = 'text-red-500';
    else
      this.editMessageClass = 'text-green-500';

    setTimeout(() => {
      this.editMessage = '';
    }, 5000);
  }

  updateUserInfos(settingsForm: NgForm): void {
    if (settingsForm.valid && this.userUpdateDTO) {
      this.userService.updateUser(this.userUpdateDTO as User).subscribe({
        next: (response) => {
          this.showErrorMessage('Update successful', "success");
          if (this.user) {
            Object.assign(this.user, this.userUpdateDTO);
          }
        },
        error: (error) => {
          this.showErrorMessage('Erreur lors de la mise à jour');

        }
      });
    } else {
      this.showErrorMessage('Le formulaire n est pas valide ou les données sont manquantes');
      return;

    }
  }

  addEducation() {

    if (this.userUpdateDTO && this.userUpdateDTO.education) {
      this.userUpdateDTO?.education?.push({ title: '', period: { startDate: new Date(), endDate: new Date() }, description: '' });
    }
  }

  removeEducation(index: number) {
    if (this.userUpdateDTO && this.userUpdateDTO.education) {
      this.userUpdateDTO.education.splice(index, 1);
    }
  }

  validateEducation(): void {
    this.isEducationInputEnabled = false;
  }

  editEducation():void
  {
    this.isEducationInputEnabled = !this.isEducationInputEnabled;
  }

  
  addExperience() {

    if (this.userUpdateDTO && this.userUpdateDTO.experience) {
      this.userUpdateDTO?.experience?.push({ title: '', period: { startDate: new Date(), endDate: new Date() }, description: '' });
    }
  }


  removeExperience(index: number) {
    if (this.userUpdateDTO && this.userUpdateDTO.experience) {
      this.userUpdateDTO.experience.splice(index, 1);
    }
  }

  editExperience():void
  {
    this.isExperienceInputEnabled = !this.isExperienceInputEnabled;

  }

  validateExperience(): void {

    this.isExperienceInputEnabled = false;

  }

  addSkill(skill: string) {
    if (!this.userUpdateDTO.skills) {
      this.userUpdateDTO.skills = [];
    }
    if (skill) {
      this.userUpdateDTO.skills.push(skill);
    }
    this.isSkillInputEnabled = true;
  }
    
  removeSkill(index: number) {
    this.userUpdateDTO.skills?.splice(index, 1);
  }


  isEducationValid(): boolean {
    return this.user?.education?.every(edu => 
      edu.title && edu.period.startDate && edu.period.endDate
    ) ?? false;
  }

  isExperienceValid(): boolean {
    return this.user?.experience?.every(exp => 
      exp.title && exp.period.startDate && exp.period.endDate
    ) ?? false;
  }

}

