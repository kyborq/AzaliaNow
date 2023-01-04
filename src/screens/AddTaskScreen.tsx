import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
import {Header} from '../components/Header';
import {Input} from '../components/Input';
import {RootStackParamList} from '../components/Navigation';
import {useAppDispatch} from '../redux';
import {addTask} from '../redux/taskSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'AddTask', 'MyStack'>;

export const AddTaskScreen = ({navigation}: Props) => {
  const [task, setTask] = useState('');

  const dispatch = useAppDispatch();

  const handleBack = () => navigation.goBack();
  const handleAddTask = () => {
    dispatch(addTask(task));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header onBack={handleBack} title="Вернуться назад" />

      <ScrollView
        contentContainerStyle={styles.content}
        style={styles.container}>
        <Input
          value={task}
          onChange={setTask}
          placeholder="Текст новой задачи"
        />
        <Button
          label="Добавить"
          onPress={handleAddTask}
          disabled={!task.replace(/\s/g, '')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFE',
    paddingHorizontal: 20,
  },
  content: {
    flexGrow: 1,
    padding: 10,
    margin: -10,
    justifyContent: 'center',
  },
  container: {padding: 10, margin: -10},
});
