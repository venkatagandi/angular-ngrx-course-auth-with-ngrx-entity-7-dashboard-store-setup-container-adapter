import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";
import * as fromCourse from "./courses.reducer";
export const selectCoursesState = createFeatureSelector<CoursesState>(
  "courses"
);

export const selectCourseById = (courseId: number) =>
  createSelector(selectCoursesState, (coursesState: CoursesState) => {
    return coursesState.entities[courseId];
  });

export const selectAllCourses = createSelector(
  selectCoursesState,
  //coursesState => coursesState.ids
  fromCourse.selectAll
);
