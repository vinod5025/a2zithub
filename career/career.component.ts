import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-career',
    standalone: true,
    templateUrl: './career.component.html',
    styleUrl: './career.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class CareerComponent {

}
