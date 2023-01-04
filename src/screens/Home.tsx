import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {ScreenProps} from '../components/Navigation';
import {Logo} from '../components/Logo';
import {FloatButton} from '../components/FloatButton';
import {Task} from '../components/Task';
import {useAppDispatch, useAppSelector} from '../redux';
import {completeTask, deleteTask} from '../redux/taskSlice';
import {Swipable} from '../components/Swipable';

import {uuid4} from '../uuid4';

export const Home = ({navigation}: ScreenProps) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.task.tasks);

  const handleAddTask = () => navigation.navigate('AddTask');

  const handleCompleteTask = (id: number) => {
    dispatch(completeTask(id));
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  const taskList = tasks.map(task => (
    <Swipable key={uuid4()} onSwipe={() => handleDeleteTask(task.id)}>
      <Task
        label={task.label}
        completed={task.completed}
        onComplete={() => handleCompleteTask(task.id)}
      />
    </Swipable>
  ));

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}
        stickyHeaderIndices={[0]}>
        <View style={styles.header}>
          <Logo />
        </View>
        {taskList}
        {!tasks.length && <Text style={styles.empty}>Список пуст</Text>}
      </ScrollView>
      <FloatButton icon="add" onPress={handleAddTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFE',
  },
  header: {
    marginTop: 90,
    paddingTop: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    backgroundColor: '#FAFAFE',
    marginBottom: 5,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: -10,
    paddingBottom: 120,
  },
  empty: {
    fontSize: 24,
    color: '#c7c7c7',
  },
});
