import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '@app/models/Project';
import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {


  projects$!: Observable<Project[]>;

  constructor(private projectService: ProjectService, private router: Router) { 
    // this.logService.log('costruttore del project component');
    // setTimeout(() => this.label = 'io sono una label aggiornata!', 3000);
  }


  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();
    // this.subscription = this.projectService.getAll().subscribe(data => {
    //   this.projects = data;
    // })
  }

  selectProject(project: Project){
    this.router.navigate(['/projects', 'detail', project.id]);
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project).subscribe(data => this.projects$ = this.projectService.getAll())
  }



}
