import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Necesario para FormBuilder y formControlName
import { MatFormFieldModule } from '@angular/material/form-field'; // Importar MatFormField
import { MatInputModule } from '@angular/material/input'; // Importar MatInput


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatCardModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
