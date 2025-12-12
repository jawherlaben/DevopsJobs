import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CompaniesComponent } from './companies/companies.component';
import { AboutComponent } from './about/about.component';
import { TopCompaniesComponent } from './top-companies/top-companies.component';
import { ContactComponent } from './contact/contact.component';
import { HeadProfileComponent } from './profile/user-profil/user-head-profile/user-head-profile.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { RangeSelectorComponent } from './companies/range-selector/range-selector.component';
import { PaginationComponent } from './companies/pagination/pagination.component';
import { SearchBarComponent } from './companies/search-bar/search-bar.component';
import { AccessForbiddenComponent } from './error/access-forbidden/access-forbidden.component';
import { NonExistentURLsComponent } from './error/non-existent-urls/non-existent-urls.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './common/button/button.component';
import { InputComponent } from './common/input/input.component';
import { UnderlinedLinkComponent } from './common/underlined-link/underlined-link.component';
import { CardComponent } from './common/card/card.component';
import { ConnecterComponent } from './authentification/connecter/connecter.component';
import { InscrireComponent } from './authentification/inscrire/inscrire.component';
import { UserInscriptionComponent } from './authentification/inscrire/user-inscription/user-inscription.component';
import { CompanyInscriptionComponent } from './authentification/inscrire/company-inscription/company-inscription.component';
import { UserConnectComponent } from './authentification/connecter/user-connect/user-connect.component';
import { CompanyConnectComponent } from './authentification/connecter/company-connect/company-connect.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { UserDashboardComponent } from './dashboard/user/user-dashboard/user-dashboard.component';
import { HeadUserDashboardComponent } from './dashboard/user/head-user-dashboard/head-user-dashboard.component';
import { ProfileMenuComponent } from './navbar/profile-menu/profile-menu.component';
import { JobComponent } from './job/job.component';

import { CompanyProfileMenuComponent } from './navbar/company-profile-menu/company-profile-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { UserSettingsComponent } from './settings/user/user-settings.component';
import { UserNotificationsComponent } from './notifications/user-notifications/user-notifications.component';
import { CardSettingsComponent } from './settings/user/card-settings/card-settings.component';
import { CardUserUpdateComponent } from './settings/user/card-user-update/card-user-update.component';
import { UserSettingsAuthComponent } from './settings/user/user-settings-auth/user-settings-auth.component';
import { ProflixVerifiedSettingsComponent } from './settings/user/proflix-verified-settings/proflix-verified-settings.component';
import { PaiementsSettingsComponent } from './settings/user/paiements-settings/paiements-settings.component';
import { ForgetPasswordSettingsComponent } from './settings/user/forget-password-settings/forget-password-settings.component';
import { NewPasswordSettingsComponent } from './settings/user/new-password-settings/new-password-settings.component';
import { TwoStepsAuthSettingsComponent } from './settings/user/two-steps-auth-settings/two-steps-auth-settings.component';
import { InformationsAutorisationsSettingsComponent } from './settings/user/informations-autorisations-settings/informations-autorisations-settings.component';
import { AuthenticatedDashboardComponent } from './auth-dashboard/auth-dashboard.component';
import { PasswordSecurityComponentComponent } from './settings/user/password-security-component/password-security-component.component';
import { CardForgetPasswordComponent } from './settings/user/card-forget-password/card-forget-password.component';
import { CardTwostepsAuthenticationComponent } from './settings/user/card-twosteps-authentication/card-twosteps-authentication.component';
import { AuthInformationsSavedComponent } from './settings/user/auth-informations-saved/auth-informations-saved.component';
import { UserProfilComponent } from './profile/user-profil/user-profil.component';
import { UserEducationCardComponent } from './profile/user-profil/user-education-card/user-education-card.component';
import { UserSkillsCardComponent } from './profile/user-profil/user-skills-card/user-skills-card.component';
import { UserExperienceCardComponent } from './profile/user-profil/user-experience-card/user-experience-card.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginInterceptorProvider } from './interceptors/login.interceptor';

import { ImagePipePipe } from './image-pipe.pipe';
import { CompanyProfilComponent } from './profile/company-profil/company-profil.component';
import { CompanyHeadProfileComponent } from './profile/company-profil/company-head-profile/company-head-profile.component';
import { CompanySettingsComponent } from './settings/company/company-settings.component';
import { CardCompanyUpdateComponent } from './settings/company/card-company-update/card-company-update.component';
import { CardCompanySettingsComponent } from './settings/company/card-company-settings/card-company-settings.component';
import { HeadCompanyDashboardComponent } from './dashboard/company/head-company-dashboard/head-company-dashboard.component';
import { CompanyDashboardComponent } from './dashboard/company/company-dashboard/company-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CompaniesComponent,
    AboutComponent,
    TopCompaniesComponent,
    ContactComponent,

    HeadProfileComponent,
    CompanyListComponent,
    RangeSelectorComponent,
    PaginationComponent,
    SearchBarComponent,
    AccessForbiddenComponent,
    NonExistentURLsComponent,
    ButtonComponent,
    InputComponent,
    UnderlinedLinkComponent,
    CardComponent,
    ConnecterComponent,
    InscrireComponent,
    UserInscriptionComponent,
    CompanyInscriptionComponent,
    UserConnectComponent,
    CompanyConnectComponent,
    JobOffersComponent,
    JobComponent,
    UserDashboardComponent,
    HeadUserDashboardComponent,
    SidebarComponent,
    SidebarMenuComponent,
    ProfileMenuComponent,
    CompanyProfileMenuComponent,
    UserSettingsComponent,
    UserNotificationsComponent,
    CardSettingsComponent,
    CardUserUpdateComponent,
    UserSettingsAuthComponent,
    ProflixVerifiedSettingsComponent,
    PaiementsSettingsComponent,
    ForgetPasswordSettingsComponent,
    NewPasswordSettingsComponent,
    TwoStepsAuthSettingsComponent,
    InformationsAutorisationsSettingsComponent,
    AuthenticatedDashboardComponent,
    PasswordSecurityComponentComponent,
    CardForgetPasswordComponent,
    CardTwostepsAuthenticationComponent,
    AuthInformationsSavedComponent,
    UserProfilComponent,
    UserEducationCardComponent,
    UserSkillsCardComponent,
    UserExperienceCardComponent,
    ImagePipePipe,
    CompanyProfilComponent,
    CompanyHeadProfileComponent,
    CompanySettingsComponent,
    CardCompanyUpdateComponent,
    CardCompanySettingsComponent,
    HeadCompanyDashboardComponent,
    CompanyDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule ,
    AngularSvgIconModule.forRoot(),
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    BrowserAnimationsModule, 
    
  ],
  providers: [
    LoginInterceptorProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
