import React from 'react';
import styled from 'styled-components'

const style = {
  Div: styled.div`
    
  `,
  Title: styled.h1`
    margin: 0;
    padding: 0;
  `
};

const Div: React.FC = ({ title, children }) => (
  <style.Div>
    <style.Title>{title}</style.Title>
    {children}
  </style.Div>
);

export { Div };
