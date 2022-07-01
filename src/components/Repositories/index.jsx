import React, { useEffect, useState } from 'react';
import { Repository_Item } from '../Repository_Item';
import { useGithub } from '../../components/hooks'
import * as S from './styled';

export const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if(githubState.user.login){
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchRepos(!!githubState.repositories);
  }, [githubState.user])

  return(
    <>
    { hasUserForSearchRepos ?
      <S.WrapperTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
      >
        <S.WrapperTabList>
          <S.WrapperTab>
            Repositories
          </S.WrapperTab>
          <S.WrapperTab>
            Starred
          </S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.repositories.map((repo) => (
              <Repository_Item 
              key={repo.id}
              name={repo.name} 
              linkToRepo={repo.full_name}
              fullname={repo.full_name}
              />
            )
            )}
          </S.WrapperList>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.starred.map((repo) => (
                <Repository_Item 
                key={repo.id}
                name={repo.name} 
                linkToRepo={repo.full_name}
                fullname={repo.full_name}
                />
              )
            )}
          </S.WrapperList>
        </S.WrapperTabPanel>
      </S.WrapperTabs>
    : <></>}
    </>
  );
}
