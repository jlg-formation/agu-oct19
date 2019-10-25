import { browser, by, element } from 'protractor';

export class CreatePage {

  async write(quizzName: string): Promise<void> {
    const input = element(by.css('input'));
    await input.clear();
    return input.sendKeys(quizzName);
  }

  clickOnContinue(): Promise<void> {
    const button = element(by.css('button'));
    return button.click() as Promise<void>;
  }

}
