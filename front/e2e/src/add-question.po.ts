import { browser, by, element } from 'protractor';

export class AddQuestionPage {

  async clickOnRadioButton(index: number) {
    const radioButtons = await element.all(by.css('input[type="radio"]'));
    const rb = radioButtons[index];
    await rb.click();
  }

  async clickOnAddButton(arg0: number) {
    const button = element(by.css('button.primary'));
    await button.click();
  }


}
