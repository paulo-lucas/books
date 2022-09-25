import React from 'react';
import { useThemeMode, Button } from '@rneui/themed';

export const ToggleTheme = () => {
  const { mode, setMode } = useThemeMode();

  const toggle = () => setMode(mode === 'light' ? 'dark' : 'light');

  return <Button onPress={toggle} title={mode} />;
};
