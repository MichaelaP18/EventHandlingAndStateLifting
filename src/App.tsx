import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


const App = () => {
  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to gym',
    'Walk dog'
    ]);

  const addTask = (taskText) => {
    if (tasks.includes(taskText)) {
      alert('Task already exists!');
      return;
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
        <View>
            <Text style={styles.title}>My To Do List</Text>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
