import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { GeneralComponent } from './components/general/general.component';
import { HealthComponent } from './components/health/health.component';
import { ScienseComponent } from './components/sciense/sciense.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleComponent } from './components/article/article.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SourceComponent } from './components/source/source.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienseComponent,
    SportsComponent,
    TechnologyComponent,
    NotfoundComponent,
    ArticleComponent,
    DrawerComponent,
    SourceComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    HttpClientModule,
    NzCardModule,
    NzButtonModule,
    FontAwesomeModule,
    NzDrawerModule,
    FormsModule,
    NzDatePickerModule,
    BrowserAnimationsModule
    ],
  providers: [  { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
