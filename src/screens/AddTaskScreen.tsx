import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from '../components/Button';
import {Header} from '../components/Header';
import {Icon} from '../components/Icon';
import {Input} from '../components/Input';
import {RootStackParamList} from '../components/Navigation';
import {Spinner} from '../components/Spinner';

type Props = NativeStackScreenProps<RootStackParamList, 'AddTask', 'MyStack'>;

export const AddTaskScreen = ({navigation}: Props) => {
  const [task, setTask] = useState('');

  const handleBack = () => navigation.goBack();
  const handleAddTask = () => {
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
