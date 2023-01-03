import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {icons, TIcon} from '../icons';

type Props = {
  icon: TIcon;
};

export const Icon = ({icon}: Props) => {
  const IconComponent = icons[icon];
  return <IconComponent />;
};
