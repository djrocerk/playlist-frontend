# <span style="color: #4CAF50;">PlaylistApp</span>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.

## <span style="color: #2196F3;">Description</span>

PlaylistApp is an Angular-based application that interacts with a backend to manage playlists. It provides features like displaying playlists, viewing playlist details, adding songs to playlists, and authenticating users. This application integrates with a music service to fetch available genres.

## <span style="color: #2196F3;">Installation</span>
To install the dependencies, run:
- `npm install`

## <span style="color: #2196F3;">Folder Structure</span>

The project follows a modular structure for better organization and scalability:

- **src/app/core**: Contains core modules, including authentication, models, and interfaces.

- **src/app/modules**: Contains feature modules of the application. Each module represents a distinct feature or section of the application.
  - Example: `home`, `playlist`, and `auth` modules.

- **src/app/shared**: Contains shared components, directives, and services used across multiple modules.
  - Example: Shared components like modals and services for API interaction.

- **src/app/material**: Contains components and modules related to Angular Material, used for UI components and styling.

- **src/environments**: Contains the environment configuration files, such as `environment.ts`, which includes API endpoints and settings for different environments (development, production).

## <span style="color: #2196F3;">Development Server</span>

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## <span style="color: #2196F3;">Code Scaffolding</span>

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## <span style="color: #2196F3;">Build</span>

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## <span style="color: #2196F3;">Running Unit Tests</span>

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## <span style="color: #2196F3;">Running End-to-End Tests</span>

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## <span style="color: #2196F3;">Routes</span>

The application has the following main routes:

- **Playlist Listing**: [http://localhost:4200/home/playlists](http://localhost:4200/home/playlists) - This route displays the list of available playlists.
- **Playlist Details**: [http://localhost:4200/home/playlist/{playlistName}](http://localhost:4200/home/playlist/{playlistName}) - This route provides the details of a specific playlist.
- **Add Playlist**: [http://localhost:4200/home/playlist-add](http://localhost:4200/home/playlist-add) - This route allows you to add a new playlist.
- **Login**: [http://localhost:4200/login](http://localhost:4200/login) - Route for user authentication.

## <span style="color: #2196F3;">Further Help</span>

To get more help on the Angular CLI, use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
