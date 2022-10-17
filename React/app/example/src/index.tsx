import React from 'react';
import ReactDOM from 'react-dom';

import { Select, useFormControl } from '../../component/form';

function App() {
  const validator = () => true;
  const valueSet = ['apple', 'orange', 'peach', 'fruits'];

  const control = useFormControl<string, HTMLDivElement>({
    validator, valueSet,
  });
  return <Select control={control} />;
}

ReactDOM.render(<App />, document.getElementById('root'));
