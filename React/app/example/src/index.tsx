import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Alert, useAlert } from '../../component/alert';
import { Button } from '../../component';

function App() {
  const { alert } = useAlert('rb');

  return (
    <div>
      <Button onClick={() => alert('This is IT', { type: 'warning' })} />
      <Button onClick={() => alert('This is problem This is problem This is problem')} />
      <Alert type="warning" id={0} comment="warming" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
