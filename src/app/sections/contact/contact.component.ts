import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly submitted = signal(false);
  readonly submitting = signal(false);
  readonly contactEmail = 'devanjana.mukherjee71@gmail.com';
  readonly companyName = 'Global Cargo Forwarders';
  readonly ccEmail = 'sushamaics@gmail.com';

  readonly quoteForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+]?[\d\s-]{10,15}$/)]],
    company: [''],
    serviceType: ['', Validators.required],
    shipmentType: ['', Validators.required],
    origin: ['', Validators.required],
    destination: ['', Validators.required],
    weight: [''],
    message: ['', Validators.required],
  });

  readonly serviceTypes = [
    'Air Freight',
    'Sea Freight',
    'PAN India Delivery',
    'Pickup & Reverse Pickup',
    'Premium Shipping',
    'Standard Shipping',
    'Documentation Assistance',
    'Other',
  ];

  readonly shipmentTypes = [
    'Domestic',
    'International Import',
    'International Export',
    'Both Domestic & International',
  ];

  async onSubmit(): Promise<void> {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    const formValue = this.quoteForm.getRawValue();
    const companySubject = `New enquiry from ${formValue.name || 'Website Visitor'}`;
    const companyBody = [
      `Name: ${formValue.name || '-'}`,
      `Email: ${formValue.email || '-'}`,
      `Phone: ${formValue.phone || '-'}`,
      `Company: ${formValue.company || '-'}`,
      `Service Type: ${formValue.serviceType || '-'}`,
      `Shipment Type: ${formValue.shipmentType || '-'}`,
      `Origin: ${formValue.origin || '-'}`,
      `Destination: ${formValue.destination || '-'}`,
      `Approx. Weight: ${formValue.weight || '-'}`,
      `Additional Details: ${formValue.message || '-'}`,
    ].join('\n');

    const acknowledgementSubject = `We received your enquiry - ${this.companyName}`;
    const acknowledgementBody = [
      `Hello ${formValue.name || 'there'},`,
      '',
      `Thank you for contacting ${this.companyName}. We have received your enquiry and our team will contact you shortly by email or phone.`,
      '',
      `Your submitted details:`,
      `Service Type: ${formValue.serviceType || '-'}`,
      `Shipment Type: ${formValue.shipmentType || '-'}`,
      `Origin: ${formValue.origin || '-'}`,
      `Destination: ${formValue.destination || '-'}`,
      '',
      `Regards,`,
      this.companyName,
    ].join('\n');

    const formData = new URLSearchParams({
      _subject: companySubject,
      _replyto: formValue.email || '',
      _template: 'table',
      _captcha: 'false',
      name: formValue.name || '',
      email: formValue.email || '',
      phone: formValue.phone || '',
      company: formValue.company || '',
      serviceType: formValue.serviceType || '',
      shipmentType: formValue.shipmentType || '',
      origin: formValue.origin || '',
      destination: formValue.destination || '',
      weight: formValue.weight || '',
      message: formValue.message || '',
      companyBody,
    });

    if (this.ccEmail) {
      formData.append('_cc', this.ccEmail);
    }

    const acknowledgementData = new URLSearchParams({
      _subject: acknowledgementSubject,
      _replyto: this.contactEmail,
      _template: 'table',
      _captcha: 'false',
      name: formValue.name || '',
      email: formValue.email || '',
      phone: formValue.phone || '',
      message: acknowledgementBody,
    });

    try {
      await fetch(`https://formsubmit.co/ajax/${this.contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (formValue.email) {
        await fetch(`https://formsubmit.co/ajax/${formValue.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: acknowledgementData.toString(),
        });
      }
    } catch (error) {
      console.error('Failed to submit enquiry', error);
    } finally {
      this.submitting.set(false);
      this.submitted.set(true);
      this.quoteForm.reset();
    }
  }

  isInvalid(field: string): boolean {
    const control = this.quoteForm.get(field);
    return !!(control && control.invalid && control.touched);
  }
}
