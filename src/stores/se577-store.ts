import { defineStore } from 'pinia';
import axios from 'axios';

export type SE577State = {
  course: string;
  instructor: string;
  repos: string[];
  ghID: string;
  ghProxyURL: string;
};

export const useSE577Store = defineStore('SE577Store', {
  state: () =>
    ({
      course: 'SE577',
      instructor: 'Dr. Mitchell',
      repos: [],
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
  },
  actions: {
    loadTestRepos() {
      this.repos = [];
      this.repos.push('ghrepo1 from local datastore');
      this.repos.push('ghrepo2 from local datastore');
      this.repos.push('ghrepo3 from local datastore');
    },
    // Unauthenticated calls: https://api.github.com
    async loadGHRepos() {
   // const proxyURL = `${this.ghProxyURL}/users/architectingsoftware/repos`;
      const proxyURL = `${this.ghProxyURL}/users/${this.ghID}/repos`;
      console.log('proxy url ', proxyURL);
      const result = await axios.get(proxyURL);
      this.repos = [];
      if (result.status === 200) {
        //it worked
        const repoList = result.data;
        console.log('Number of rows returned ', repoList.length);

        for (const repo of repoList) {
            if(repo.description == null){
                this.repos.push("Name: "+repo.full_name+"\n"+"URL: " + repo.html_url+"\n\n");
            } else
                this.repos.push("Name: "+repo.full_name+"\n"+"Description: "+repo.description +  "\nURL: " + repo.html_url+"\n\n");
        }
      }
    },
  },
});