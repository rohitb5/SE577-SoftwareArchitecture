<<<<<<< Updated upstream

=======
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

## oAuth Thoughts
OAuth was interesting. Heard of it a lot as it is used in a lot of applications but never implemented it before. Understanding the workflow within an SPA was a little confusing for myself and had issues with persisting the token and struggled. Was able to get the GitHub personal access token for my account and update the header in the REST calls with it to receive an authenticated response for the first call with a plan object. Accessing it again however loaded an unauthenticated call unless if I refreshed the browser and did it again. I was not able to get ENV variables to work in my set up as I was not able to find a way for TypeScript to directly access it so had to end up adding it into the Datastore as a variable. The process of getting the token itself and adding it into the REST call was simple. OAuth is definitely more security than basic auth and easier to manage with revoking access of breaking out access. 

 
