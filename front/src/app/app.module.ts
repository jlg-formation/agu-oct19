import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { QuizzCreateModule } from './quizz-create/quizz-create.module';
import { QuizzExecModule } from './quizz-exec/quizz-exec.module';
import { QuizzService } from './quizz.service';
import { HttpQuizzService } from './http-quizz.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    MainModule,
    QuizzCreateModule,
    QuizzExecModule
  ],
  providers: [{provide: QuizzService, useClass: HttpQuizzService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
