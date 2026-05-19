Angular CLI — Student One‑Page Handout

This project uses the Angular CLI to create components, run the app, and build it for deployment.

⸻

Important Setup Rule

Angular is NOT installed globally.

The Angular CLI is installed inside this project only, at:

node_modules/@angular/cli

Because of this:
	•	You must run Angular commands inside the project folder
	•	Different projects can use different Angular versions
	•	You do NOT need to install Angular on your computer

⸻

Using Angular CLI in VS Code

When you open this project in Visual Studio Code and use the integrated terminal:
	•	The terminal automatically uses the project’s local Angular CLI
	•	The ng command works even though Angular is not installed globally

If you ever need to check the version:

npx ng version


⸻

Common Angular CLI Commands

Generate Code

ng generate component components/example
ng generate service services/example

Short version:

ng g c components/example
ng g s services/example

These commands:
	•	Create files automatically
	•	Use correct Angular naming rules
	•	Put files in the correct folders

⸻

Run the App (Development Server)

ng serve

This:
	•	Starts a local web server
	•	Rebuilds the app when files change
	•	Lets you see changes immediately in the browser

⸻

Build the App

ng build

This:
	•	Compiles the Angular app
	•	Outputs files to the dist/ folder

⸻

How Everything Connects

VS Code Terminal
       ↓
      npm
(node_modules/.bin)
       ↓
Angular CLI (ng)
       ↓
Angular Project Files


⸻

Common Mistakes to Avoid
	•	❌ Running ng commands outside the project folder
	•	❌ Installing Angular globally when it is not needed
	•	❌ Creating files manually instead of using ng generate
	•	❌ Using uppercase letters in component names

⸻

Quick Checklist

Before running an ng command, make sure:
	•	You are in the correct project folder
	•	You are using VS Code’s terminal
	•	You typed the command exactly as shown

⸻

Key Takeaway

Always use the Angular CLI (ng) to create, run, and build this project.

It ensures correct structure, correct configuration, and fewer errors.
