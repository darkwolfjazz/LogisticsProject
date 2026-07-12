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
    phone: ['', [Validators.pattern(/^[+]?([\d\s-]{10,15})$/)]],
    company: [''],
    serviceType: ['', Validators.required],
    shipmentType: ['', Validators.required],
    origin: ['', Validators.required],
    destination: ['', Validators.required],
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

    try {
      const createHiddenForm = (action: string, fields: Record<string, string>) => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = action;
        form.acceptCharset = 'UTF-8';
        form.style.display = 'none';
        form.target = 'formsubmit-frame';

        Object.entries(fields).forEach(([name, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = name;
          input.value = value;
          form.appendChild(input);
        });

        return form;
      };

      const iframe = document.createElement('iframe');
      iframe.name = 'formsubmit-frame';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const companyForm = createHiddenForm(`https://formsubmit.co/${this.contactEmail}`, {
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
        companyBody,
        ...(this.ccEmail ? { _cc: this.ccEmail } : {}),
      });

      document.body.appendChild(companyForm);
      companyForm.submit();
      document.body.removeChild(companyForm);

      if (formValue.email) {
        const acknowledgementForm = createHiddenForm(`https://formsubmit.co/${formValue.email}`, {
          _subject: acknowledgementSubject,
          _replyto: this.contactEmail,
          _template: 'table',
          _captcha: 'false',
          name: formValue.name || '',
          email: formValue.email || '',
          phone: formValue.phone || '',
          message: acknowledgementBody,
        });

        document.body.appendChild(acknowledgementForm);
        acknowledgementForm.submit();
        document.body.removeChild(acknowledgementForm);
      }

      window.setTimeout(() => {
        if (iframe.parentNode) {
          document.body.removeChild(iframe);
        }
      }, 1500);
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
