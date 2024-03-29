import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component'
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component'
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component'
import { StudentComponent } from './components/student/student.component'
import { CourceComponent } from './components/cource/cource.component'
import { StudentListComponent } from './components/student-list/student-list.component'
import { CourceListComponent } from './components/cource-list/cource-list.component'
import { DemoListComponent } from './components/demo-list/demo-list.component'
import { StudentDetailsComponent } from './student-details/student-details.component'
import { CourceDetailsComponent } from './components/cource-details/cource-details.component'
import { DemoDetailsComponent } from './components/demo-details/demo-details.component'
import { TestComponent } from './components/test/test.component'
import { ProductComponent } from './components/product/product.component'
import { UserComponent } from './components/user/user.component'
import { UserListComponent } from './components/user-list/user-list.component'
import { NewtutorialComponent } from './components/newtutorial/newtutorial.component'
import { EmployeelistComponent } from './components/employeelist/employeelist.component'
import { StudentformComponent } from './studentform/studentform.component'
import { EditStudentComponent } from './components/edit-student/edit-student.component'


const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'student', component: StudentComponent },
  { path: 'course', component: CourceComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'cource-list', component: CourceListComponent },
  { path: 'demo-list', component: DemoListComponent },
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: 'cource/:id', component: CourceDetailsComponent },
  { path: 'demo-list/:id', component: DemoDetailsComponent },
  { path: 'test', component: TestComponent },
  { path: 'product', component: ProductComponent },
  { path: 'user', component: UserComponent },
  { path: 'userListing', component: UserListComponent },
  { path: 'Newtutorial', component: NewtutorialComponent },
  { path: 'Newtutorial', component: NewtutorialComponent },
  { path: 'Newtutorial', component: NewtutorialComponent },
  { path: 'Employeelist', component: EmployeelistComponent },
  { path: 'Studentform', component: StudentformComponent },
  { path: 'Studentform/:id', component: EditStudentComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
