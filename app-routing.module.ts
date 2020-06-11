import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BodyComponent} from './body/body.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'skills' , component: SkillsComponent},
  {path: 'hobbies' , component: HobbiesComponent},
  {path: 'feedback' , component: FeedbackComponent},
  {path: 'sent' , component: SentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
