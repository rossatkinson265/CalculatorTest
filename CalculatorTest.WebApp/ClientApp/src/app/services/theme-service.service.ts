import { Injectable } from '@angular/core';
import { ITheme, IThemeMode, ThemeStyle, themeModes, themes } from '../theme/theme';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _activeMode = themeModes.filter(themeMode => themeMode.style == ThemeStyle.light)[0];
  private _activeTheme = themes.filter(theme => theme.themeName.toUpperCase() == 'BALI HAI' && theme.themeStyle == this._activeMode.style)[0];

  GetAllModes(): IThemeMode[] {
    return themeModes;
  }

  GetActiveMode(): IThemeMode {
    return this._activeMode;
  }

  GetAllThemes(): ITheme[] {
    return themes;
  }

  GetActiveTheme(): ITheme {
    return this._activeTheme;
  }

  IsLightMode(): boolean {
    return this._activeMode.style == ThemeStyle.light;
  }

  IsDarkMode(): boolean {
    return this._activeMode.style == ThemeStyle.dark;
  }

  SetMode(mode: ThemeStyle): void {
    this._activeMode = themeModes.filter(themeMode => themeMode.style == mode)[0];
    this.UpdateElements(this._activeMode.modeProperties);
  }

  SetTheme(themeName: string): void {
    this._activeTheme = themes.filter(theme => theme.themeName.toUpperCase() == themeName.toUpperCase() && theme.themeStyle == this.GetActiveMode().style)[0];
    this.UpdateElements(this._activeTheme.themeProperties);
  }

  UpdateElements(properties: Map<string, string>): void {
    properties.forEach((value: string, key: string) => {
      document.documentElement.style.setProperty(
        key,
        value
      );
    });
  }
}
