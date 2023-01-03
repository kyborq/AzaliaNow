import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Check} from './components/Check';
import {Icon} from './components/Icon';
import {Task} from './components/Task';

type TTask = {
  id: number;
  label: string;
  completed?: boolean;
};

const App = () => {
  const [todoList, setTodoList] = useState<TTask[]>([
    {id: 0, label: 'Сделать тестовое', completed: true},
    {id: 1, label: 'Сдать тестовое', completed: false},
    {id: 2, label: 'Начать зарабатывать', completed: false},
    {id: 3, label: 'Начать зарабатывать', completed: false},
  ]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222F3E' : '#FAFAFE',
  };

  const completeTask = (id: number) => {
    const todo = todoList.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task,
    );
    setTodoList(todo);
  };

  return (
    <SafeAreaView style={[styles.screen, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}
        style={backgroundStyle}>
        <View style={styles.logo}>
          <Icon icon="logo" />
          <Text style={styles.logoText}>AzaliaNow</Text>
        </View>
        {todoList.map((task, index) => {
          return (
            <Task
              key={index}
              label={task.label}
              completed={task.completed}
              onComplete={() => completeTask(task.id)}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  logoText: {
    color: '#FF003C',
    fontSize: 36,
    marginLeft: 18,
  },
});

export default App;
