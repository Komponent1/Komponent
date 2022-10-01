import { useContext, useEffect } from 'react';
import { LayoutContext } from './layoutProvider';

export const useLayout = (header: boolean, footer: boolean) => {
  const { layoutConfig, hasHeader, hasFooter } = useContext(LayoutContext);
  useEffect(() => {
    layoutConfig({ header, footer });
  }, []);
  const updateHeader = (state: boolean) => {
    layoutConfig({ header: state, footer: hasFooter });
  };
  const updateFooter = (state: boolean) => {
    layoutConfig({ header: hasHeader, footer: state });
  };

  return { updateHeader, updateFooter };
};
