import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";
import { ProjectComponent } from "./pages/project.component";
import { ProjectDashboardComponent } from "./project-dashboard/project-dashboard.component";

const routes: Routes = [
    { path: '',
        component: ProjectComponent,
        children:[
         { path: 'detail/:id', component: ProjectDetailComponent},
        { path: '', component: ProjectDashboardComponent}
        ]
    }
];

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ProjectRoutingModule {}