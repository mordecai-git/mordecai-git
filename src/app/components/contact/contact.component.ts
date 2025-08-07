import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessMessage = true;

      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }, 2000);
  }
}
