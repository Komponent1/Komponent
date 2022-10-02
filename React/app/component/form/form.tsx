import React, { FormEventHandler } from 'react';

type Prop = {
  children: React.ReactNode;
  submit: () => void;
};
function Form({ children, submit }: Prop) {
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
