import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from '../components/Icon';
import {Spinner} from '../components/Spinner';

export const AddTaskScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 35,
        }}>
        <Icon icon="arrowLeft" />
        <Text
          style={{
            color: '#999999',
            fontSize: 28,
            fontWeight: '600',
            marginLeft: 30,
          }}>
          Вернуться назад
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
          margin: -10,
          justifyContent: 'center',
        }}
        style={{padding: 10, margin: -10}}>
        <TextInput
          style={{
            backgroundColor: '#FAFAFE',
            fontSize: 24,
            color: '#222F3E',
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginBottom: 16,
          }}
          placeholderTextColor="#CBCDD0"
          placeholder="Текст новой задачи"
        />
        <TouchableNativeFeedback>
          <View
            style={{
              backgroundColor: '#222F3E',
              borderRadius: 8,
              paddingVertical: 8,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                color: '#FFFFFF',
              }}>
              Добавить
            </Text>
          </View>
        </TouchableNativeFeedback>
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
});
