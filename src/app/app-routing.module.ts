import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ ContactmeComponent } from './contactme/contactme.component'
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';

const routes:Routes = [
{path: 'contactme', component: ContactmeComponent },
{path: 'main', component: MainComponent},
{path: 'projects', component: ProjectsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

