import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"training",component:TrainingComponent},
    {path:"career",component:CareerComponent},
    {path:"contact",component:ContactComponent},
    {path:"footer",component:FooterComponent}
    
];

