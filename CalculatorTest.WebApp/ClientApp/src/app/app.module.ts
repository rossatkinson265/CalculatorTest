import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculatorBackgroundComponent } from './calculator-background/calculator-background.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CalculatorBackgroundComponent,
    SimpleCalculatorComponent,
    ErrorDialogComponent,
    SettingsDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CalculatorBackgroundComponent, pathMatch: 'full' },
      { path: '', component: SimpleCalculatorComponent, pathMatch: 'full' }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
