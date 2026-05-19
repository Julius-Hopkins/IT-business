
# Angular View Template — Person Form

This HTML form is designed for use in an Angular application using **Bootstrap styles imported locally** (from `node_modules`). It supports:

- Responsive layout with Bootstrap grid
- Fields for `FirstName`, `LastName`, `FullName`, `Phone`, and `Email`
- UX-friendly validation layout
- Designed to be used as a component view (`person-form.component.html`)

---

## 📦 Prerequisite: Include Bootstrap in `angular.json`

Ensure Bootstrap is included locally (no CDN):

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]


⸻

🧩 HTML Template (Responsive Bootstrap Form)

<!-- person-form.component.html -->
<div class="container mt-4">
  <form class="row g-3 needs-validation" novalidate>
    <!-- First Name -->
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstName" name="firstName" required>
      <div class="invalid-feedback">First name is required.</div>
    </div>

    <!-- Last Name -->
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lastName" name="lastName" required>
      <div class="invalid-feedback">Last name is required.</div>
    </div>

    <!-- Full Name (Read-only if computed) -->
    <div class="col-md-12">
      <label for="fullName" class="form-label">Full Name</label>
      <input type="text" class="form-control" id="fullName" name="fullName" readonly>
    </div>

    <!-- Phone -->
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input type="tel" class="form-control" id="phone" name="phone" required pattern="[0-9+ ]{7,}">
      <div class="invalid-feedback">Please enter a valid phone number.</div>
    </div>

    <!-- Email -->
    <div class="col-md-6">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" name="email" required>
      <div class="invalid-feedback">Please enter a valid email address.</div>
    </div>

    <!-- Submit Button -->
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</div>


⸻

🧠 Notes
	•	FullName is marked as readonly under the assumption it is calculated from FirstName + LastName either in TypeScript or from backend response.
	•	Add Angular FormGroup or ngModel bindings to integrate with logic as needed.
	•	Validation can be extended with Angular Reactive Forms or custom scripts.

---

