# Home Page

### Required Software

- **NVM for windows:** https://github.com/coreybutler/nvm-windows
- **Angular CLI:** `15.2.9`
- **NodeJS:** `18.15.0`
- **NPM:** `9.5.0`

### Run the project locally

- Install NVM: https://github.com/coreybutler/nvm-windows
- Install NodeJS `18.15.0` using NVM & PowerShell as Administrator: `nvm install 18.15.0`
- Use NodeJS `18.15.0` using NVM via PowerShell as Administrator: `nvm use 18.15.0`
- Check NodeJS installed properly (should be `18.15.0`): `node -v`
- Check NPM installed properly (should be `9.5.0`): `npm -v`
- Restore node modules: `npm ci`
- Install Angular CLI globally: `npm install -g @angular/cli@15.2.9`
- Open PowerShell as Administrator and type: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`
- Check that Angular CLI installed properly: `ng version`
- Start Angular project: `ng serve --open`
- Navigate to the root url: `https://localhost:5001/app`