import React, {useEffect, useState} from 'react';
import { 
  KeyboardAvoidingView, 
  useColorScheme, Text, 
  View, TextInput, 
  TouchableOpacity, 
  Keyboard, 
  ScrollView, TouchableHighlight, 
  StatusBar, SafeAreaView, 
} from 'react-native';
import Task from './components/Task';
import { light, dark } from './components/Style';
import ProfileButton from './components/profileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons/'


function useDarkMode() {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  return isDarkMode ? dark : light;
}

export default function App() {
  const styles = useDarkMode();

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Load saved tasks and completed tasks from AsyncStorage
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasks = await AsyncStorage.getItem('tasks');
        const completed = await AsyncStorage.getItem('completed');
        if (tasks !== null) {
          setTaskItems(JSON.parse(tasks));
        }
        if (completed !== null) {
          setCompletedTasks(JSON.parse(completed));
        }
      } catch (e) {
        console.log("Error loading tasks from AsyncStorage");
      }
    }
    loadTasks();
  }, []);

  // Save tasks and completed tasks to AsyncStorage
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(taskItems));
        await AsyncStorage.setItem('completed', JSON.stringify(completedTasks));
      } catch (e) {
        console.log("Error saving task to AsyncStorage");
      }
    }
    saveTasks();
  }, [taskItems, completedTasks]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    const completedTask = taskItems[index];
    // Only add to completed tasks if it's not already there
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
    // Remove from task items
    let itemsCopy = [...taskItems];
    // Remove the item at index
    itemsCopy.splice(index, 1);
    // Set the new task items
    setTaskItems(itemsCopy);
  }
  
  const clearCompletedTasks = () => {
    setCompletedTasks([]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={styles.statusBar.color} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        {/* Profile Icon */}
        <ProfileButton />

        {/* Default Screen */}
        {taskItems.length === 0 && completedTasks.length === 0 &&
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 25}}>
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold'
            }}>
              Add a task to begin!
            </Text>
          </View>
        }

        {/* Today's Tasks */}
        {taskItems.length > 0 &&
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's Tasks</Text>
            <Text style={styles.sectionSubtitle}>({taskItems.length})</Text>
            
            <View style={styles.items}>
              {/* This is where the tasks will go! */}
              {
                taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                      <Task text={item} />
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>
        }

        {/* Completed Tasks */}
        {completedTasks.length > 0 && 
          <View style={styles.tasksWrapper}>

            <Text style={styles.sectionTitle}>Completed Tasks</Text>          
            <Text style={styles.sectionSubtitle}>({completedTasks.length})</Text>

            <View style={styles.items}>
              {/* This is where all the completed tasks will go */}
              {
                completedTasks.map((item, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                      <Task text={item} completed={true} />
                    </TouchableOpacity>
                  )
                })
              }
            </View>

            <View style={[styles.items, {maxHeight: '40%'}]}>    
              <TouchableHighlight
                style={styles.trashWrapper}
                onPress={clearCompletedTasks}
                underlayColor={'#FEE'}
                activeOpacity={0.8}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesomeIcon style={styles.trashIcon} icon={ faTrash } />
                  <Text style={styles.deleteText}>Delete</Text>
                </View>
              </TouchableHighlight>
            </View>   
          </View>
        }

      </ScrollView>

      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add task...'} 
          value={task} onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <FontAwesomeIcon style={styles.addText} icon={ faPlus } />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}