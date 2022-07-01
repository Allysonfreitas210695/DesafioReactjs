import React, { createContext, useCallback, useState} from 'react';
import api from "../../services/Api"

export const GithubContext = createContext({
  loading: false,
  user: {

  },
  repositories:[],
  starred: []
})

export const GithubProvider = ({children}) => {
  const [ githubState, setGithubState ] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      login: undefined,
      avatar_url: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0
    },
    repositories: [],
    starred: []
  });

  const getUser = (username) => {
    
    setGithubState(prevState => ({
      ...prevState,
      loading: !prevState.loading,
    }))

    api.get(`users/${username}`).then((user) => {
      setGithubState(prevState => ({
        ...prevState, 
        hasUser: true,
        user: {
        id: user.data.id,
        login: user.data.login,
        avatar_url: user.data.avatar_url,
        name: user.data.name,
        html_url: user.data.html_url,
        blog: user.data.blog,
        company: user.data.company,
        location: user.data.location,
        followers: user.data.followers,
        following: user.data.following,
        public_gists: user.data.public_gists,
        public_repos: user.data.public_repos
      }}))
    });
  };

  const getUserRepos = (username) => {
    api.get(`users/${username}/repos`).then(({data}) => {
      setGithubState(prevState => ({
        ...prevState, 
        repositories: data
       }))
    });
  };

  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({data}) => {
      setGithubState(prevState => ({
        ...prevState, 
        starred: data
       }))
    });
  };

  const contextvalue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), [])
  }

  return (
    <GithubContext.Provider value={contextvalue}>
      {children}
    </GithubContext.Provider>
  );
}

