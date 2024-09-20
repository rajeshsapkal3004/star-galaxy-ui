import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './pages/user-login-ui/user-login/user-login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LandingPageComponent } from './pages/home-page/landing-page/landing-page.component';
import { UserRegistrationUiComponent } from './pages/user-login-ui/user-registration/user-registration-ui/user-registration-ui.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UserDashboardUiComponent } from './pages/user-login-ui/user-dashboard/user-dashboard-ui/user-dashboard-ui.component';
import { AuthInterceptor } from './guard-interceptor/auth.interceptor';
import { UserSettingsComponent } from './pages/user-pages/user-settings/user-settings.component';
import { MedicineInventoryComponent } from './pages/user-pages/medicine-inventory/medicine-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NavBarComponent,
    LandingPageComponent,
    UserRegistrationUiComponent,
    UserDashboardUiComponent,
    UserSettingsComponent,
    MedicineInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule

  ],
  providers: 
  [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
