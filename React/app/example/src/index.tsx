import React from 'react';
import ReactDOM from 'react-dom';
import {
  AreaInput, Form, useForm,
} from '../../component/form';

function App() {
  const { submit, controls } = useForm([
    { id: 'test', type: 'area-input', controlOption: {} },
  ], () => {});

  return (
    <Form submit={submit}>
      <AreaInput
        width={200}
        design='underline'
        control={controls.test}
      />
    </Form>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
