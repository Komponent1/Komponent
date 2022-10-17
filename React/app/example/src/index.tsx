import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '../../component';
import {
  Card, CardContent, CardHeader, CardMedia, CardLoading
} from '../../component/card';

function App() {
  const datas = [
    { title: '1', src: '', content: 'text1' },
    { title: '2', src: '', content: 'text2' },
    { title: '3', src: '', content: 'text3' },
    { title: '4', src: '', content: 'text4' },
  ];

  return (
    <Grid breakPoint={[1024, 900, 800, 700, 600]}>
      {datas.map((data) => (
        <CardLoading content={['media', 'header', 'content']} />
      ))}
    </Grid>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
