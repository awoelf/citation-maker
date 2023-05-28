import React, { useContext, useState } from 'react';
import { ThemeContext } from '@/contexts/themeContext';

import { MoonStars, Sun } from 'react-bootstrap-icons';
import { Switch } from 'antd';

function Header() {
  const [theme, setTheme] = useState(useContext(ThemeContext));

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={(e) => {
          setTheme(e.valueOf() ? 'dark' : 'light');
        }}
        checkedChildren={<MoonStars className='h-6 w-6' />}
        unCheckedChildren={<Sun className='h-6 w-6' />}
      />
    </>
  );
}

export default Header;
