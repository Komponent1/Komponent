import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  useLayout, LayoutProvider, Header, Footer,
} from '../../component/layout';

function Page() {
  return (
    <div style={{ height: '1000px' }}>
      test
      <button onClick={() => updateHeader(false)}>sss</button>;
    </div>
  );
}

function App() {
  return (
    <>
      <Header design="scroll">
        this is Header
      </Header>
      <Page />
      <Footer>
        This is Footer
      </Footer>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
