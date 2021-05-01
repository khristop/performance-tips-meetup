import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "change-detection",
    pathMatch:"full"
  },
  {
    path: "change-detection",
    loadChildren: () =>
      import(
        "../change-detection-example/change-detection-example.module"
      ).then((m) => m.ChangeDetectionExampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
