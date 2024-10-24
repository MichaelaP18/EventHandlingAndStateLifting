import React from 'react';
import { View, 
        TextInput, 
        Button, 
        StyleSheet,
      } from 'react-native';


function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState('');

  const handleSubmit = () => {
    addTask(taskText);
    setTaskText('');
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default ToDoForm;