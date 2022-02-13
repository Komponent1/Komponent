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
`;
export const title = styled.h1`
  margin: 10px;
  margin-left: 20px;
`;
export const menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  height: 100vh;
  width: 200px;
  overflow-y: scroll;
  border-right: 1px solid rgba(172, 172, 172, 0.4);

  padding: 10px;
`;
export const menuTitle = styled.h2`
  padding-left: 15px;
  color: #2E5FF2;
  margin-top: 100px;
`;
export const li = styled.li<{ select: boolean }>`
  list-style-type: none;
  width: calc(100% - 20px);
  padding: 2px 0 2px 20px;
  margin: 4px 0 4px 0;
  border-radius: 5px;

  background-color: ${({ select }) => select ? '#2E5FF2': 'none'};

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
