import React, {
  createContext, ReactNode, useState, useCallback, useMemo,
} from 'react';

type LayoutContextType = {
  hasHeader: boolean;
  hasFooter: boolean;
  layoutConfig: ({ header, footer }: { header: boolean, footer: boolean }) => void
};
type LayoutProviderProps = {
  children: ReactNode;
};
export const LayoutContext = createContext<LayoutContextType>({
  hasFooter: true,
  hasHeader: true,
  layoutConfig: () => {},
});
function LayoutProvider({ children }: LayoutProviderProps) {
  const [hasHeader, setHasHeader] = useState<boolean>(true);
  const [hasFooter, setHasFooter] = useState<boolean>(true);
  const layoutConfig = useCallback(({ header, footer }: { header: boolean, footer: boolean }) => {
    setHasHeader(header);
    setHasFooter(footer);
  }, []);
  const value = useMemo(() => ({
    hasHeader, hasFooter, layoutConfig,
  }), [hasHeader, hasFooter]);

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
