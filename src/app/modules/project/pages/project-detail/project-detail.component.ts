import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '@app/models/Project';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project$!: Observable<Project>;

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.projectService.get(+id!).subscribe(data => console.log(data));
    this.project$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectService.get(+params.get('id')!))
    )

  }

  public updatePrj(prj: Project, id: number) {
    this.projectService.Update(prj, id).subscribe(() => this.project$ = this.projectService.get(id));
  }

}
