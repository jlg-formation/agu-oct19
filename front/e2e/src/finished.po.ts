import { browser, by, element } from 'protractor';

export class FinishedPage {

  getLabel() {
    const label = element(by.css('h1'));
    return label.getText() as Promise<string>;
  }


}
