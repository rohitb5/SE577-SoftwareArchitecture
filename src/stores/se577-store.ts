import { defineStore } from 'pinia';
import axios from 'axios';

const GITHUB_ACCESS_TOKEN = "";

export type SE577State = {
  course: string;
  instructor: string;
  repos: string[];
  gist: string[];
  githubUserInfo: string[];
  ghID: string;
  ghProxyURL: string;
};

export const useSE577Store = defineStore('SE577Store', {
  state: () =>
    ({
      course: 'SE577',
      instructor: 'Dr. Mitchell',
      repos: [],
      gist: [],
      githubUserInfo: [],
      ghID: 'ArchitectingSoftware',
      ghProxyURL: 'https://api.github.com',
    //  ghProxyURL: 'http://localhost:4080/gh',
    } as SE577State),
  getters: {
    randomRepo: (state) => {
      const max = state.repos.length - 1;
      const min = 0;
      const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      return state.repos[randomIndex];
    },
    repoCount: (state) => state.repos.length,
    gistCount: (state) => state.gist.length,
    userPropCount: (state) => state.githubUserInfo.length,
  },
  
  actions: {
    loadTestRepos() {
      this.repos = [];
      this.repos.push('ghrepo1 from local datastore');
      this.repos.push('ghrepo2 from local datastore');
      this.repos.push('ghrepo3 from local datastore');
    },
    async loadTestGist(){
      this.gist = [];
      const proxyURL = `${this.ghProxyURL}/gists/f4c82e8f57ed2b01eb5117ba34130da7`;
      //f4c82e8f57ed2b01eb5117ba34130da7
    //  this.gist.push('Gist test: Hello World');
      console.log("gist is: "+this.gist);

      const result = await axios.get(proxyURL);
      if (result.status === 200) {
        //it worked
        const gistList = result.data;

        this.gist.push(gistList.html_url);

        // let propValue;
        //   for(const propName in gistList) {
        //       propValue = gistList[propName]

        //       console.log(propName,propValue);
        //       this.gist.push(propName+': '+ propValue+'\n');
        //   }
    }
    },
    async loadGist(){
      console.log("in gist async");
      const proxyURL = `${this.ghProxyURL}/users/${this.ghID}/gists`;
      this.gist = [];



      const result = await axios.get(proxyURL, {
        headers: {
      //   Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
      //   Authorization: "token ghp_XXXXXXXXXXXXXXXXXXXXX"
         Authorization: GITHUB_ACCESS_TOKEN
        }
      });
  //    const result = await axios.get(proxyURL);
      if (result.status === 200) {
        //it worked
        const gistList = result.data;
        console.log('Number of rows returned ', gistList.length);
        console.log('Number of rows returned ', gistList);

        for (const gistL of gistList) {
          if(gistL.language == null && gistL.description == null){
              this.repos.push(gistL.url+'\n\n');
              console.log('1 GIST ');
          }   
          else if(gistL.description == null){
              this.repos.push('Name: '+gistL.full_name+'\n'+'Language: ' + gistL.language+'\n'+'URL: ' + gistL.html_url+'\n\n');
              console.log('2 GIST ');
            } 
          else if(gistL.language == null){
           //   this.repos.push('Name: '+gist.full_name+'\n'+'Description: '+gist.description +'\n'+'URL: ' + gist.html_url+'\n\n');
           //   console.log('3 GIST and url '+ gistL.url);
          } else
              this.gist.push(gistL.url+'\n\n');
             // console.log('4 GIST '+gistL.url);
         //    this.gist.push(gistL.html_url + "|" + gistL.description);
              this.gist.push(gistL.html_url);
              console.log("gist is: "+this.gist);
        }
      }
    },
    // Unauthenticated calls: https://api.github.com
    async loadGHRepos() {
   // const proxyURL = `${this.ghProxyURL}/users/architectingsoftware/repos`;
      const proxyURL = `${this.ghProxyURL}/users/${this.ghID}/repos`;
      console.log('proxy url ', proxyURL);
      this.repos = [];
    //  let result;
   //   console.log("hello jack1");
    //  console.log(process.env);
    //console.log(process.env.TEST);
    try {
     // console.log(`${process.env}`);
      console.log(`${process.env.GITHUB_ACCESS_TOKEN}`);
    }catch(error) {
      console.log("caught error: "+error);
    }

  //    try { 
         const result = await axios.get(proxyURL, {
           headers: {
         //   Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
         
            Authorization: GITHUB_ACCESS_TOKEN
           }
         });
  //    } catch(error) {
    //    console.log("hello Jack error");
     //   throw error;
  //    } 
      /* authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}` */
     // console.log(result);

      
   //   try{ 
      if (result.status === 200) {
        //it worked
        const repoList = result.data;
        console.log('Number of rows returned ', repoList.length);

        for (const repo of repoList) {
          if(repo.language == null && repo.description == null){
              this.repos.push('Name: '+repo.full_name+'\n'+'URL: ' + repo.html_url+'\n\n');
          }   
          else if(repo.description == null){
              this.repos.push('Name: '+repo.full_name+'\n'+'Language: ' + repo.language+'\n'+'URL: ' + repo.html_url+'\n\n');
            } 
          else if(repo.language == null){
              this.repos.push('Name: '+repo.full_name+'\n'+'Description: '+repo.description +'\n'+'URL: ' + repo.html_url+'\n\n');
          } else
              this.repos.push('Name: '+repo.full_name+'\n'+'Language: ' + repo.language+'\n'+'Description: '+repo.description +  '\nURL: ' + repo.html_url+'\n\n');
        }
      }
    // } catch(error) {
    //   console.log(error);
    //   console.log("hello jack");
    //   this.repos.push("User not found"); 
    // }
    },
    async githubAuthStore(){
      const proxyURL = `${this.ghProxyURL}/users/rohitb5`;
      console.log('proxy url ', proxyURL);
      this.repos = [];
      this.githubUserInfo = [];
   //   let result2;
      console.log("hello githubAuth");
    
         const result2 = await axios.get(proxyURL, {
           headers: {
         //   Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
              Authorization: GITHUB_ACCESS_TOKEN
           }
         });
         

         if (result2.status === 200) {
          //it worked
          const authResponse = result2.data;
          console.log("result.data: "+result2.data);
          console.log(result2.data.toString());
          console.log('authResponse object '+ authResponse);

          let propValue;
          for(const propName in authResponse) {
              propValue = authResponse[propName]

              console.log(propName,propValue);
              this.githubUserInfo.push(propName+': '+ propValue+'\n');
}

       //   this.repos.push('Name: '+ authResponse.login+'\n\n');
       //   this.repos.push('Plan: '+ authResponse.plan+'\n\n');
        //  this.repos.push('Plan name: '+ authResponse.plan.name+'\n\n');
        }
//
 //     } catch(error) {
   //     console.log("hello Jack error");
 //     } 
      /* authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}` */
     // console.log(result);

      
     
      
      
    
    },
    async githubNoAuth(){
      console.log("in githubNoAuth async");
      const proxyURL = `${this.ghProxyURL}/users/rohitb5`;
      console.log('proxy url ', proxyURL);
      this.githubUserInfo = [];

      this.repos = [];

      const result = await axios.get(proxyURL);
       
      
      if (result.status === 200) {
        //it worked
        const userInfo = result.data;
        console.log('Number of rows returned ',userInfo.length);
        console.log('userInfo returned ',userInfo);

        console.log('userInfo.url ',userInfo.url);

        let propValue;
          for(const propName in userInfo) {
              propValue = userInfo[propName]

              console.log(propName,propValue);
              this.githubUserInfo.push(propName+': '+ propValue+'\n');
}
         
 
          
      }
  },
},
});