import React from 'react';

export const Controls = React.createContext<any>(null);

type Prop = {
  children: React.ReactNode;
  controls: { [key: string]: any }[];
};
function Form({ children, controls }: Prop) {
  return (
    <Controls.Provider value={controls}>
      <form>
        {children}
      </form>
    </Controls.Provider>
  );
}

export default Form;
