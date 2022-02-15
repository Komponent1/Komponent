import React, { useState } from 'react';
import * as style from './style';

const BtnMenu: React.FC = () => {
  const [display, setDisplay] = useState<boolean>();

  return (
    <style.div>
      =
      <style.ul>
        <style.li></style.li>
        <style.li></style.li>
        <style.li></style.li>
      </style.ul>
    </style.div>
  );
};

export default BtnMenu;
