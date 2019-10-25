import { browser, by, element } from 'protractor';

export class SetupPage {

  async clickOnAddQuestion() {
    const button = element(by.css('button'));
    await button.click();
  }



}
