import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/Navigation';

import {Logo} from '../components/Logo';
import {FloatButton} from '../components/FloatButton';
import {Task} from '../components/Task';

type Props = NativeStackScreenProps<RootStackParamList, 'Home', 'MyStack'>;

export const HomeScreen = ({navigation}: Props) => {
  const handleAddTask = () => navigation.navigate('AddTask');

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}
        stickyHeaderIndices={[0]}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Task label="sfsdf" />
        <Task label="sfsdf" />
        <Task label="sfsdf" />
        <Task label="sfsdf" />
        <Task label="sfsdf" />
        <Task label="sfsdf" />
        <Task label="sfsdf" />
        <Task label="sfsdf" />
        <Task label="sfsdf" />
        <Task label="sfsdf" />
        <Task label="sfsdf" />
      </ScrollView>
      <FloatButton onPress={handleAddTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFE',
  },
  logo: {
    marginTop: 90,
    paddingTop: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    backgroundColor: '#FAFAFE',
    marginBottom: 5,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: -10,
    paddingBottom: 120,
  },
});
