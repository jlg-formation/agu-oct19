import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { CreatePage } from './create.po';
import { SetupPage } from './setup.po';
import { AddQuestionPage } from './add-question.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let create: CreatePage;
  let setup: SetupPage;
  let addQuestion: AddQuestionPage;

  beforeEach(() => {
    page = new AppPage();
    create = new CreatePage();
    setup = new SetupPage();
    addQuestion = new AddQuestionPage();
  });

  it('should create a Quizz', async () => {
    await page.navigateTo();
    await page.clickOnCreateQuizz();
    await browser.sleep(1000);
    await create.write('toto');
    await browser.sleep(1000);
    await create.clickOnContinue();
    await browser.sleep(1000);
    await setup.clickOnAddQuestion();
    await browser.sleep(1000);
    await addQuestion.clickOnRadioButton(1);
    await browser.sleep(1000);
    await addQuestion.clickOnAddButton(1);
    // expect(page.getTitleText()).toEqual('Quizz');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
