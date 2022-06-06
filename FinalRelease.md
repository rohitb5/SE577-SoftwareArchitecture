<<<<<<< Updated upstream

=======
## How to run Application via Docker and test Authenticated call
- Pull code from proj-release-4 branch (https://github.com/rohitb5/SE577-SoftwareArchitecture/tree/proj-release-4) 
- Go to project directory via command prompt/terminal and install dependencies via 'npm install' or 'yarn install'.

- Update line 4 in "/src/stores/se577-store.ts" file with personal access token from Blackboard submission. 
    - Line should read something like:

    const GITHUB_ACCESS_TOKEN = "token ghp_XXXXXXXXXXXXXXX";

    - Then save file.

- Then run 'make build-server'
- Then run 'make docker-server'
- Then run 'make docker-run'
- Afterwards you can go to a web browser and navigate to: 
    http://localhost:8080/
- 'Github API' option on the top section of the page right below the nav bar http://localhost:8080/github_api
- Select 'AUTHENTICATED' option and the form should update with data from the Github from the user rohitb5 (with 39 user properties including the plan object)
- Select 'RESET'
- Select 'UNAUTHENTICATED' option, this will display 32 user properties (no plan object) for 'rohitb5'
- "GitHub Info" hosts the GIST info and widget
>>>>>>> Stashed changes

## How to run Application (non Docker) and test Authenticated call
- Pull code from proj-release-4 branch (https://github.com/rohitb5/SE577-SoftwareArchitecture/tree/proj-release-4) 
- Go to project directory via command prompt/terminal and install dependencies via 'npm install' or 'yarn install'.

- Update line 4 in "/src/stores/se577-store.ts" file with personal access token from Blackboard submission. 
    - Line should read something like:

    const GITHUB_ACCESS_TOKEN = "token ghp_XXXXXXXXXXXXXXX";

    - Then save file.

- Then run 'quasar dev'
- Afterwards you will be redirected to a web browser and navigate to: 
    http://localhost
- 'Github API' option on the top section of the page right below the nav bar http://localhost/github_api
- Select 'AUTHENTICATED' option and the form should update with data from the Github from the user rohitb5 (with 39 user properties including the plan object)
- Select 'RESET'
- Select 'UNAUTHENTICATED' option, this will display 32 user properties (no plan object) for 'rohitb5'
- "GitHub Info" page hosts the Gist widget and info

## Architecture Description
- Security and Authorization: limited the scope of the access token within the Application to Read-Only and set expiry date. The Application will work without the token as well, only 1 feature will not fully load without the correct token.
- Modularity, created Modular components and are also decoupled.
- Deployability via Dockerfile. 
- Adaptability, interactive SPA that displays only relevant details to the user after they directly interact with the web app.
- Interoperability, system talks and works with GitHub REST API.
- Functionality, easy to use web app with options that meet GitHub requirements. 

## Architecture Model
![Screenshot](RefArchDiagram.png "Architecture Model")

 
