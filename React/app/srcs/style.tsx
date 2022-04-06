import styled, { createGlobalStyle } from 'styled-components';

export const global = createGlobalStyle`
  body {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color: black;
    text-decoration: none;
  }

  #root {
    width: 100%;
    height: 100%;

    position: relative;
    display: flex;
  }
`;
export const header = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(172, 172, 172, 0.4);
  z-index: 1;

  background-color: rgba(256, 256, 256, 0.8);
`;
export const title = styled.h1`
  margin: 10px;
  margin-left: 20px;
`;
export const menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  height: calc(100vh - 180px);
  width: 200px;
  overflow-y: scroll;
  border-right: 1px solid rgba(172, 172, 172, 0.4);

  padding: 90px 20px;

  & .kui_multiopendrawer_drawer {
    padding: 10px 20px;
  }

  & li {
    border-radius: 5px;

    font-size: 0.8rem;
    color: rgb(70, 70, 70);
  }

  & li:hover {
    cursor: pointer;
    background-color: rgba(172, 172, 172, 0.2);
  }

  & .title {
    pointer-events: none;
    cursor: default;
    background-color: none !important;
    font-weight: 800;
    color: grey;
  }

  & li.select {
    background-color: #cacde0;
    color: #2E5FF2;
  }

  & li.select:hover {
    background-color: #bbbed3;
  }
`;
export const menuTitle = styled.h2<{ top: string }>`
  padding-left: 15px;
  color: #2E5FF2;
  margin: 0;
  margin-top: ${({ top }) => top};
`;
export const li = styled.li<{ select: boolean }>`
  list-style-type: none;
  width: calc(100% - 20px);
  padding: 2px 0 2px 20px;
  margin: 4px 0 4px 0;
  border-radius: 5px;

  font-size: 13px;
  color: ${({ select }) => select ? '#2E5FF2': 'rgb(70, 70, 70)'};
  background-color: ${({ select }) => select ? '#cacde0': 'none'};

  &:hover {
    cursor: pointer;
    background-color: rgba(172,172,172,0.2);
  }
`
export const main = styled.div`
  margin-left: 280px;
  margin-top: 100px;
  width: calc(100% - 340px);
  min-width: 500px;
`;
export const mainTitle =  styled.h1`
  font-size: 40px;
`;
export const mainExample = styled.div`
  border: 1px solid rgba(172, 172, 172, 0.4);
  display: flex;
  justify-content: space-around;
  padding: 30px;
`;
