import { SearchComponent } from './components/search/search.component';
import { SourceComponent } from './components/source/source.component';
import { ArticleComponent } from './components/article/article.component';
import { GeneralComponent } from './components/general/general.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { ScienseComponent } from './components/sciense/sciense.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { HealthComponent } from './components/health/health.component';
import { BusinessComponent } from './components/business/business.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"business",component:BusinessComponent},
  {path:"health",component:HealthComponent},
  {path:"tech",component:TechnologyComponent},
  {path:"sports",component:SportsComponent},
  {path:"science",component:ScienseComponent},
  {path:"entertainment",component:EntertainmentComponent},
  {path:"general",component:GeneralComponent},
  {path:"article/:id",component:ArticleComponent},
  {path:"source/:sourceName",component:SourceComponent},
  {path:"search/:searchName",component:SearchComponent},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
