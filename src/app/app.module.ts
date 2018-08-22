import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./components/todo/todo.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";

import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { TodoState } from "./store/store";

@NgModule({
  declarations: [AppComponent, TodoComponent, AddTodoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FontAwesomeModule,
    NgxsModule.forRoot([TodoState]),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
