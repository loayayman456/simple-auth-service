# CI Pipeline Design

1. **Stages:** - **Lint:** Checks code for syntax errors and style issues.
   - **Build:** Creates the Docker image to ensure the application compiles correctly in its containerized environment.
   - **Test:** Runs the automated unit tests to verify application logic.
2. **Trigger:** The pipeline runs automatically whenever a Pull Request is opened/updated, and whenever code is pushed directly to the `main` branch.
3. **Quality Gate:** A Pull Request is strictly blocked from merging if *any* of the three jobs (Lint, Build, Test) fail.
4. **Speed:** We ensure the pipeline finishes in under 10 minutes by utilizing a lightweight `node:18-alpine` base image and leveraging Docker layer caching (copying `package.json` and running `npm ci` before copying the rest of the source code).