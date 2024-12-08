import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import { TimePickerModal } from 'react-native-paper-dates';
import { Switch } from 'react-native-paper';

const ReminderPage = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [time, setTime] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [isReminderOn, setIsReminderOn] = useState(false);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const saveReminder = () => {
    if (!selectedDay || !time) {
      Alert.alert("Error", "Please select a day and time for the reminder.");
      return;
    }
    setReminders(prev => [...prev, { day: selectedDay, time }]);
    setSelectedDay(null);
    setTime(null);
    setIsReminderOn(true);
  };

  const toggleReminder = () => {
    setIsReminderOn(!isReminderOn);
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setShowTimePicker(true);
  };

  const handleTimeConfirm = (time) => {
    setTime(time);
    setShowTimePicker(false);
  };

  const handleTimeCancel = () => {
    setShowTimePicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Set a Reminder</Text>
      
      <View style={styles.dayList}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dayItem, selectedDay === day && styles.selectedDay]}
            onPress={() => handleDaySelect(day)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {showTimePicker && (
        <TimePickerModal
          visible={showTimePicker}
          onConfirm={handleTimeConfirm}
          onDismiss={handleTimeCancel}
        />
      )}

      {time && (
        <Text style={styles.timeText}>
          Reminder set for {selectedDay} at {time}
        </Text>
      )}

      <TouchableOpacity style={styles.saveButton} onPress={saveReminder}>
        <Text style={styles.saveButtonText}>Save Reminder</Text>
      </TouchableOpacity>

      <View style={styles.remindersList}>
        <Text style={styles.remindersTitle}>Your Reminders</Text>
        <FlatList
          data={reminders}
          renderItem={({ item }) => (
            <View style={styles.reminderItem}>
              <Text style={styles.reminderText}>{item.day}: {item.time}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Turn Reminder {isReminderOn ? "Off" : "On"}</Text>
        <Switch value={isReminderOn} onValueChange={toggleReminder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  dayList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dayItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedDay: {
    backgroundColor: '#FF6347',
    borderColor: '#FF6347',
  },
  dayText: {
    fontSize: 18,
    color: '#333',
  },
  timeText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  remindersList: {
    marginTop: 20,
  },
  remindersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  reminderItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  reminderText: {
    fontSize: 16,
    color: '#333',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ReminderPage;
