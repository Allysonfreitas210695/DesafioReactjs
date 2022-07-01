import React from 'react';
import * as S from './styled';

export const Repository_Item = ({ name, linkToRepo, fullname }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name: </S.WrapperFullName>
      <S.Wrapperlink 
        href={linkToRepo}
        target='_blank'
        rel='noreferrer'>
        {fullname}
      </S.Wrapperlink>
    </S.Wrapper>
  );
}

