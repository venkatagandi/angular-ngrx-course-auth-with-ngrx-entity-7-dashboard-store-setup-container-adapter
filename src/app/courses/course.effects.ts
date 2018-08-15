import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  CourseActionTypes,
  CourseRequested,
  CourseLoaded
} from "./courses.actions";
import { mergeMap, map } from "rxjs/operators";
import { CoursesService } from "./services/courses.service";

@Injectable()
export class CourseEffects {
  @Effect()
  loadCourse$ = this.action$.pipe(
    ofType<CourseRequested>(CourseActionTypes.CourseRequested),
    mergeMap(action =>
      this.coursesService.findCourseById(action.payload.courseId)
    ),
    map(course => new CourseLoaded({ course }))
  );

  constructor(
    private action$: Actions,
    private coursesService: CoursesService
  ) {}
}
