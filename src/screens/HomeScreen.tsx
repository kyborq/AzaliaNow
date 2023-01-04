import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/Navigation';

import {Logo} from '../components/Logo';
import {FloatButton} from '../components/FloatButton';
import {Task} from '../components/Task';
import {useAppDispatch, useAppSelector} from '../redux';
import {completeTask, deleteTask} from '../redux/taskSlice';
import {SwipableItem} from '../components/SwipeList';
import {uuid4} from '../uuid4';

type Props = NativeStackScreenProps<RootStackParamList, 'Home', 'MyStack'>;

export const HomeScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.task.tasks);

  const handleAddTask = () => navigation.navigate('AddTask');

  const handleCompleteTask = (id: number) => {
    dispatch(completeTask(id));
  };
  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}
        stickyHeaderIndices={[0]}>
        <View style={styles.logo}>
          <Logo />
        </View>
        {tasks.map(task => (
          <SwipableItem key={uuid4()} onSwipe={() => handleDeleteTask(task.id)}>
            <Task
              label={task.label}
              completed={task.completed}
              onComplete={() => handleCompleteTask(task.id)}
            />
          </SwipableItem>
        ))}
        {!tasks.length && <Text>Список пуст</Text>}
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
    // flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: -10,
    paddingBottom: 120,
  },
});
