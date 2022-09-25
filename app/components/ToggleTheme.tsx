import React from 'react';
import { useThemeMode, Button } from '@rneui/themed';

const ToggleTheme = () => {
  const { mode, setMode } = useThemeMode();

  return (
    <Button
      onPress={() => {
        setMode('dark');
        console.log(mode);
      }}
      title={mode}
    />
  );
};

export default ToggleTheme;
