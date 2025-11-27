import {  Locator, Page } from '@playwright/test';
export class LoginPage {

  private readonly usernameTextbox: Locator;
  private readonly passwordTextbox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.usernameTextbox = page.getByRole('textbox', { name: 'username' });
    this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async fillUsername(){
   await this.usernameTextbox.fill('standard_user');
}
async Password(){
   await this.passwordTextbox.fill('secret_sauce');
}

async clickOnlogin(){
   await this.loginButton.click();
}
}