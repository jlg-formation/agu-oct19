import { browser, by, element } from 'protractor';

export class SetupPage {


  async clickOnAddQuestion() {
    const button = element(by.css('button'));
    await button.click();
  }

  async clickOnFinishButton() {
    const button = element(by.css('button.primary'));
    await button.click();
  }



}
