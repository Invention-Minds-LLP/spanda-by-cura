import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Glyph } from '../home/glyph';
import { SPECIALITIES_FULL } from './content/specialities';

/**
 * Enquiry form submitted to Netlify Forms (a static copy in src/index.html lets Netlify detect it).
 * Collects the minimum needed to call back; asks people not to share medical details (DPDP Act 2023).
 */
@Component({
  selector: 'sp-callback-form',
  imports: [RouterLink, Glyph],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (sent()) {
      <div class="sent" role="status">
        <strong>Thank you. Your request has been received.</strong>
        <p>The team will contact you on the number you shared.</p>
      </div>
    } @else {
      <form class="cb-form" name="callback" method="POST" data-netlify="true" netlify-honeypot="bot-field" (submit)="submit($event)">
        <input type="hidden" name="form-name" value="callback" />
        <p class="visually-hidden"><label>Leave this empty <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
        <label class="field">
          <span>Your name</span>
          <input name="name" type="text" autocomplete="name" required />
        </label>
        <label class="field">
          <span>Phone number</span>
          <input name="phone" type="tel" autocomplete="tel" inputmode="tel" pattern="[0-9+ \\-]{8,16}" required />
        </label>
        <label class="field">
          <span>Enquiry about</span>
          <select name="speciality" required>
            <option value="" disabled selected>Select one</option>
            @for (s of specs; track s.id) {
              <option [value]="s.title">{{ s.title }}</option>
            }
            <option value="General assessment enquiry">General assessment enquiry</option>
            <option value="Visit information">Visit information</option>
          </select>
        </label>
        <label class="field">
          <span>Best time to call</span>
          <select name="time">
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
        <label class="consent">
          <input type="checkbox" name="consent" value="yes" required />
          <span>
            I agree to be contacted about this enquiry and have read the
            <a routerLink="/privacy">privacy information</a>. Please do not include medical records or health details here.
          </span>
        </label>
        <button class="btn-v3 primary lg" type="submit" [disabled]="sending()">
          {{ sending() ? 'Sending…' : label() }} <app-glyph name="right" />
        </button>
        @if (error()) {
          <p class="form-error" role="alert">Something went wrong. Please try again in a moment.</p>
        }
      </form>
    }
  `,
})
export class CallbackForm {
  readonly label = input('Request a callback');
  protected readonly specs = SPECIALITIES_FULL;
  protected readonly sending = signal(false);
  protected readonly sent = signal(false);
  protected readonly error = signal(false);

  protected async submit(e: Event): Promise<void> {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!form.reportValidity()) return;
    this.sending.set(true);
    this.error.set(false);
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(String(res.status));
      this.sent.set(true);
    } catch {
      this.error.set(true);
    } finally {
      this.sending.set(false);
    }
  }
}
