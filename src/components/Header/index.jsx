import React, { useState } from 'react';
import { useGithub } from "../hooks"
import * as S from './styled'

export const Header = () => {
  const { getUser } = useGithub();
  const [username, setUsername] = useState();

  const submitUser = () => {
    if(!username) return;
    return getUser(username);
  }

  return (
    <S.wrapper>
      <input 
      type="text"
      placeholder="Digite o Username para pesquisa...."
      onChange={event => setUsername(event.target.value)}
      value={username}
      />
      <button
      type="submit"
      onClick={submitUser}
      >
      buscar
      </button>
    </S.wrapper>
  );
}
