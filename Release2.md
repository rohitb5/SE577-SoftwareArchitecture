## Section 1 (Instructions for testing github microservice)
- Pull code from proj-release-2 branch (https://github.com/rohitb5/SE577-SoftwareArchitecture/tree/proj-release-2) 
  and install dependencies via 'npm install' or 'yarn install'
- Run 'quasar dev' from terminal of project directory
- Afterwards a web browser should come up, navigate to 'Github API' option on the top section of the page right below the nav bar
  http://localhost:8080/github_api
- Select 'LOAD FROM TEST' option and the form should update with data from the datastore (3 sample repos)
- Select 'RESET'
- Select 'LOAD FROM GITHUB' option, this will display 30 repos from the GitHub account that is currently entered 'ArchitectingSoftware'
- Update the 'GitHub ID' field on the form to another GitHub account or enter in 'rohitb5' as another test and then select 'LOAD FROM GITHUB'
