import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";
import { LandingComponent } from "./landing/landing.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReviewsComponent } from "./reviews/reviews.component";

const routes: Routes = [
  { path: "home", component: LandingComponent , data: {title : 'Fine Art & Fashion Illustrations | RuthTeresaArt'}},
  { path: "", component: LandingComponent , data: {title : 'Fine Art & Fashion Illustrations | RuthTeresaArt'}},
  { path: "about-us", component: AboutUsComponent , data: {title : 'About Us | Fine Art & Fashion Illustrations | RuthTeresaArt'}},
  { path: "reviews", component: ReviewsComponent , data: {title : 'Reviews | Fine Art & Fashion Illustrations | RuthTeresaArt'} },
  { path: "portfolio", component: ProjectsComponent , data: {title : 'Portfoilio | Fine Art & Fashion Illustrations | RuthTeresaArt'} },
  { path: "contact", component: ContactComponent  , data: {title : 'Contact | Fine Art & Fashion Illustrations | RuthTeresaArt'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
