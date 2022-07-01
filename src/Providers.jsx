import React from 'react';
import { App } from './App';
import { GithubProvider } from './components/Providers';
import GlobalCss from './style/Global.css';

export const Providers = () =>{
  return(
    <main>
      <GithubProvider>
        <GlobalCss/>
        <App/>
      </GithubProvider>
    </main>
    
  );
}
