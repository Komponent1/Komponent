import React from 'react';
import ReactDOM from 'react-dom';
import { ImgInput, useFormControl } from '../../component/form';

function App() {
  const control = useFormControl<File, HTMLInputElement>({});

  return (
    <div>
      <ImgInput control={control} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
