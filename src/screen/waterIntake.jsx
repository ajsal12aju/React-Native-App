// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button, Modal, TextInput, Dimensions, Switch } from 'react-native';
// // import ProgressCircle from 'react-native-progress-circle';
// import { BarChart } from 'react-native-chart-kit';
// import PushNotification from 'react-native-push-notification';

// const WaterIntakeTracker = () => {
//   const dailyGoal = 3000; // in ml
//   const [intake, setIntake] = useState(0);
//   const [customAmount, setCustomAmount] = useState('');
//   const [customInputVisible, setCustomInputVisible] = useState(false);
//   const [reminderEnabled, setReminderEnabled] = useState(false);

//   const handleAddWater = (amount) => {
//     setIntake((prev) => Math.min(prev + parseInt(amount), dailyGoal));
//     setCustomInputVisible(false);
//     setCustomAmount('');
//   };

//   const toggleReminder = () => {
//     setReminderEnabled(!reminderEnabled);
//     if (!reminderEnabled) {
//       PushNotification.localNotificationSchedule({
//         message: 'Time to drink water!',
//         date: new Date(Date.now() + 60 * 60 * 1000), // Next hour
//         repeatType: 'hour',
//       });
//     } else {
//       PushNotification.cancelAllLocalNotifications();
//     }
//   };

//   const weeklyData = [
//     2000, 2500, 3000, 1500, 1800, 2700, 3000, // Example data in ml
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.header}>Water Intake Tracker</Text>n     

//       {/* Add Water Intake */}
//       <View style={styles.buttonGroup}>
//         <Button title="+200ml" onPress={() => handleAddWater(200)} />
//         <Button title="+500ml" onPress={() => handleAddWater(500)} />
//         <Button title="Custom" onPress={() => setCustomInputVisible(true)} />
//       </View>

//       {/* Custom Input Modal */}
//       <Modal visible={customInputVisible} animationType="slide" transparent>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter amount in ml"
//               keyboardType="numeric"
//               value={customAmount}
//               onChangeText={setCustomAmount}
//             />
//             <Button title="Add" onPress={() => handleAddWater(customAmount)} />
//             <Button title="Close" onPress={() => setCustomInputVisible(false)} />
//           </View>
//         </View>
//       </Modal>

//       {/* Weekly History */}
//       <Text style={styles.historyTitle}>Weekly Intake History</Text>
//       <BarChart
//         data={{
//           labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//           datasets: [{ data: weeklyData }],
//         }}
//         width={Dimensions.get('window').width - 40}
//         height={220}
//         chartConfig={{
//           backgroundColor: '#ffffff',
//           backgroundGradientFrom: '#ffffff',
//           backgroundGradientTo: '#ffffff',
//           decimalPlaces: 1,
//           color: (opacity = 1) => `rgba(70, 130, 180, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//         }}
//         style={styles.chart}
//       />

//       {/* Reminder Toggle */}
//       <View style={styles.reminderContainer}>
//         <Text style={styles.reminderText}>Enable Reminders</Text>
//         <Switch value={reminderEnabled} onValueChange={toggleReminder} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   progressText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#4682B4',
//   },
//   buttonGroup: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 20,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: 300,
//     alignItems: 'center',
//   },
//   input: {
//     width: '100%',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//   },
//   historyTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   chart: {
//     borderRadius: 10,
//   },
//   reminderContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20,
//     width: '80%',
//   },
//   reminderText: {
//     fontSize: 16,
//   },
// });

// export default WaterIntakeTracker;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
} from 'react-native';
// import ProgressCircle from 'react-native-progress-circle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WaterIntakeTracker = () => {
  const [dailyGoal, setDailyGoal] = useState(2000); // ml
  const [intake, setIntake] = useState(0); // total intake
  const [entries, setEntries] = useState([]); // list of water entries
  const [modalVisible, setModalVisible] = useState(false);
  const [inputAmount, setInputAmount] = useState('');

  useEffect(() => {
    // Load saved data on app load
    const loadData = async () => {
      const storedEntries = await AsyncStorage.getItem('waterEntries');
      const storedIntake = await AsyncStorage.getItem('totalIntake');
      if (storedEntries) setEntries(JSON.parse(storedEntries));
      if (storedIntake) setIntake(Number(storedIntake));
    };
    loadData();
  }, []);

  const handleAddWater = async () => {
    const amount = parseInt(inputAmount);
    if (!amount || amount <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid water amount in ml.');
      return;
    }

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Update state
    const newEntry = { time, amount };
    const updatedEntries = [...entries, newEntry];
    const updatedIntake = intake + amount;

    setEntries(updatedEntries);
    setIntake(updatedIntake);
    setModalVisible(false);
    setInputAmount('');

    // Save to local storage
    await AsyncStorage.setItem('waterEntries', JSON.stringify(updatedEntries));
    await AsyncStorage.setItem('totalIntake', updatedIntake.toString());
  };

  const renderEntry = ({ item }) => (
    <View style={styles.entry}>
      <Text style={styles.entryText}>{item.time} - {item.amount} ml</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Progress Section */}
      {/* <ProgressCircle
        percent={(intake / dailyGoal) * 100}
        radius={80}
        borderWidth={8}
        color="#4682B4"
        shadowColor="#E0E0E0"
        bgColor="#fff"
      > */}
        <Text style={styles.progressText}>{`${(intake / dailyGoal * 100).toFixed(1)}%`}</Text>
        <Text style={styles.goalText}>{`${intake} ml / ${dailyGoal} ml`}</Text>
      {/* </ProgressCircle> */}

      {/* Add Water Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Water</Text>
      </TouchableOpacity>

      {/* List of Entries */}
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderEntry}
        contentContainerStyle={styles.list}
      />

      {/* Modal for Adding Water */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Water Intake</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount in ml"
              keyboardType="numeric"
              value={inputAmount}
              onChangeText={setInputAmount}
            />
            <Button title="Add" onPress={handleAddWater} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 20,
  },
  progressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4682B4',
  },
  goalText: {
    fontSize: 16,
    color: '#777',
  },
  addButton: {
    backgroundColor: '#4682B4',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
    marginTop: 10,
  },
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  entryText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default WaterIntakeTracker;
