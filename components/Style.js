import { StyleSheet } from 'react-native';

export const light = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    tasksWrapper: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    sectionSubtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#777',
    },
    items: {
      marginTop: 30,
      marginBottom: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 2,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderColor: '#e0e0e0',
      paddingVertical: 10,
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#f2f2f2',
      borderRadius: 60,
      borderColor: '#c8c8c8',
      borderWidth: 1,
      width: '70%',
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      marginBottom: 15,
    },
    addWrapper: {
      width: 50,
      height: 50,
      backgroundColor: '#f2f2f2',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#c8c8c8',
      marginBottom: 15,
    },
    addText: {
      fontSize: 26,
      color: '#55BCF6',
    },
    trashIcon: {
      color: 'red',
      opacity: 0.8,
    },
    trashWrapper: {
      flexDirection: 'row',
      width: 100,
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#c8c8c8',
      position: 'absolute',
      bottom: 15,
      right: 5,
    },
    deleteText: {
      color: 'red',
      fontWeight: 'bold',
      marginLeft: 10,
    },
    statusBar: {
      color: 'dark-content',
    },
});

// TODO: Add dark theme