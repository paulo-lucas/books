import React from 'react';
import { Icon, useThemeMode } from '@rneui/themed';

export const ToggleTheme = () => {
  const { mode, setMode } = useThemeMode();

  const isDark = () => mode === 'dark';
  const toggle = () => setMode(isDark() ? 'light' : 'dark');

  return (
    <Icon name={isDark() ? 'moon' : 'sun'} type="feather" onPress={toggle} />
  );
};
