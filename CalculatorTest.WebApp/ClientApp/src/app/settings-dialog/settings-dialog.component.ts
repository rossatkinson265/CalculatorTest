import { Component, Inject } from '@angular/core';
import { NgbActiveModal, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from '../services/theme-service.service';
import { ITheme, IThemeMode, ThemeStyle } from '../theme/theme';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent {
  public selectedMode: IThemeMode;
  public selectedTheme: ITheme;
  public allThemes: ITheme[];
  public allThemeNames: string[];
  public allModes: IThemeMode[];
  public inDarkMode: boolean = false;
  public inLightMode: boolean = true;

  constructor(private _activeModal: NgbActiveModal, private _themeService: ThemeService) {
    this.selectedMode = this._themeService.GetActiveMode();
    this.selectedTheme = this._themeService.GetActiveTheme();
    this.allThemes = this._themeService.GetAllThemes();
    this.allThemeNames = this.allThemes.map(theme => theme.themeName);
    this.allThemeNames = [...new Set(this.allThemeNames.map(name => name))];
    this.allModes = this._themeService.GetAllModes();
    this.UpdateToggle();
  }

  CloseSelf(): void {
    this._activeModal.close();
  }

  ModeSelected(style: string): void {
    switch (style.toUpperCase()) {
      case 'DARK':
        this._themeService.SetMode(ThemeStyle.dark);
        this.selectedMode = this._themeService.GetActiveMode();
        this.ThemeSelected(this.selectedTheme.themeName);
        this.UpdateToggle();
        return;
      case 'LIGHT':
        this._themeService.SetMode(ThemeStyle.light);
        this.selectedMode = this._themeService.GetActiveMode();
        this.ThemeSelected(this.selectedTheme.themeName);
        this.UpdateToggle();
        return;
    }    
  }

  UpdateToggle(): void {
    this.inDarkMode = this.selectedMode.style == ThemeStyle.dark;
    this.inLightMode = this.selectedMode.style == ThemeStyle.light;
  }

  ThemeSelected(selectedThemeName: string) : void {
    this._themeService.SetTheme(selectedThemeName);
    this.selectedTheme = this._themeService.GetActiveTheme();
  }
}
