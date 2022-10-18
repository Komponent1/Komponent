import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormControl, AutoChipsInput } from '../../component/form';
import { Card, CardContent, CardMedia } from '../../component/card';
import { Grid } from '../../component';

const tags = [
  { id: 1, name: '컴포넌트' },
  { id: 2, name: '리엑트' },
  { id: 3, name: '원론' },
  { id: 4, name: '알고리즘' },
];
const articles = [
  {
    id: 1,
    next_id: 2,
    path: '',
    src: '',
    title: '리액트 폼',
    publish_date: 'Mon Oct 17 2022 14:08:59 GMT+0900 (일본 표준시)',
    update_date: 'Mon Oct 17 2022 14:08:59 GMT+0900 (일본 표준시)',
    user_email: 'seo2im6492@gmail.com',
  },
  {
    id: 2,
    prev_id: 1,
    next_id: 3,
    path: '',
    src: '',
    title: '리엑트 원리',
    publish_date: 'Mon Oct 17 2022 14:09:59 GMT+0900 (일본 표준시)',
    update_date: 'Mon Oct 17 2022 14:09:59 GMT+0900 (일본 표준시)',
    user_email: 'seo2im6492@gmail.com',
  },
  {
    id: 3,
    prev_id: 2,
    next_id: 4,
    path: '',
    src: '',
    title: '리엑트 알고리즘',
    publish_date: 'Mon Oct 17 2022 14:10:59 GMT+0900 (일본 표준시)',
    update_date: 'Mon Oct 17 2022 14:10:59 GMT+0900 (일본 표준시)',
    user_email: 'seo2im6492@gmail.com',
  },
  {
    id: 4,
    prev_id: 3,
    path: '',
    src: '',
    title: '컴포넌트 원리',
    publish_date: 'Mon Oct 17 2022 14:11:59 GMT+0900 (일본 표준시)',
    update_date: 'Mon Oct 17 2022 14:11:59 GMT+0900 (일본 표준시)',
    user_email: 'seo2im6492@gmail.com',
  },
];

function App() {
  const control = useFormControl<string[], HTMLInputElement>({
    initValue: [],
  });
  
  useEffect(() => {
    console.log(control.value);
  }, [ control.value ]);

  return (
    <section>
      <AutoChipsInput
        control={control}
        controlValue={tags.map(({ name }) => name)}
      />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
