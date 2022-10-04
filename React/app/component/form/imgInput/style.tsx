import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const wrapper = styled.div<{
  width?: number;
  height?: number;
}>`
  display: inline-block;
  border: 2px dashed ${theme.color.primary};
  padding: 8px;
  border-radius: 12px;
  width: ${({ width }) => (width ? `${width - 20}px` : '280px')};
  height: ${({ height }) => (height ? `${height - 20}px` : '280px')};
`;
export const pannel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const tip = styled.p`
  color: ${theme.color.black400};
  margin: 0;
  ${theme.typography.body};
`;
export const preview = styled.label<{
  src: string;
  drag: boolean;
}>`
  display: block;
  position: relative;
  
  text-align: center;
  width: 100%;
  height: 100%;
  
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-color 0.2s ease-out;
  background-color: ${({ drag, src }) => (drag && src === '' ? theme.color.white400 : 'none')};
`;
export const input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;
