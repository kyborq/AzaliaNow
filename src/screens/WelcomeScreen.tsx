import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/Navigation';

import {Logo} from '../components/Logo';
import {Spinner} from '../components/Spinner';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome', 'MyStack'>;

export const WelcomeScreen = ({navigation}: Props) => {
  const handleHome = () => navigation.navigate('Home');

  useEffect(() => {
    const timer = setTimeout(() => handleHome(), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Logo style={styles.logo} />
      <Spinner />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 70,
  },
});
