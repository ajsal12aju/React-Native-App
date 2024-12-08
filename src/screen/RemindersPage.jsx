import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
  TextInput,
} from "react-native";
import { TimePickerModal } from "react-native-paper-dates";
import { Switch } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";


const ReminderPage = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [time, setTime] = useState(null);
  const [subject, setSubject] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [isReminderOn, setIsReminderOn] = useState(false);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Load reminders from AsyncStorage on component mount
  useEffect(() => {
    const loadReminders = async () => {
      try { 
        const storedReminders = await AsyncStorage.getItem("reminders");
        if (storedReminders) {
          setReminders(JSON.parse(storedReminders));
        }
      } catch (error) {
        console.log("Failed to load reminders from storage:", error);
      }
    };

    loadReminders();
  }, []);

  const saveReminder = async () => {
    if (!selectedDay || !time || !subject) {
      Alert.alert("Error", "Please select a day, time, and subject for the reminder.");
      return;
    }

    const newReminder = { day: selectedDay, time, subject };
    const updatedReminders = [...reminders, newReminder];

    try {
      // Save to AsyncStorage
      await AsyncStorage.setItem("reminders", JSON.stringify(updatedReminders));
      setReminders(updatedReminders);
    } catch (error) {
      console.log("Failed to save reminder:", error);
    }

    // Reset the state
    setSelectedDay(null);
    setTime(null);
    setSubject(""); // Reset subject
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
    // Format the time object to a readable string (HH:mm)
    const formattedTime = `${time.hours}:${
      time.minutes < 10 ? "0" + time.minutes : time.minutes
    }`;
    setTime(formattedTime);
    setShowTimePicker(false);
  };

  const handleTimeCancel = () => {
    setShowTimePicker(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/signupBg.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Overlay */}
        <View style={styles.overlay} pointerEvents="none"></View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.heading}>Set a Reminder</Text>

          <View style={styles.dayList}>
            {daysOfWeek.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayItem,
                  selectedDay === day && styles.selectedDay,
                ]}
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

          <TextInput
            style={styles.input}
            placeholder="Enter Subject"
            value={subject}
            onChangeText={setSubject}
          />

          <TouchableOpacity style={styles.saveButton} onPress={saveReminder}>
            <Text style={styles.saveButtonText}>Save Reminder</Text>
          </TouchableOpacity>
 {/* <View style={styles.toggleContainer}>
            <Text style={styles.toggleText}>
              Turn Reminder {isReminderOn ? "Off" : "On"}
            </Text>
            <Switch value={isReminderOn} onValueChange={toggleReminder} /> */}
          {/* </View> */}
         
<View style={styles.remindersList}>
  <Text style={styles.remindersTitle}>Your Reminders</Text>
  <FlatList
    data={reminders}
    renderItem={({ item, index }) => (
      <View style={styles.reminderItem}>
        
        <View style={styles.reminderTextContainer}>
          <Text style={styles.reminderText}>
            {item.day}: {item.time} - {item.subject}
          </Text>
        </View>

        <View style={styles.reminderActions}>
          {/* Icon on the right side */}
        

          {/* Toggle switch at the end */}
          <Switch
            value={item.isReminderOn} // Assuming you're managing the toggle state for each reminder
            onValueChange={() => toggleReminderState(index)} // Toggle state function for each reminder
          />
        </View>
      </View>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
</View>

         
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 15,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    zIndex: 1,
  },
  scrollContainer: {
    paddingBottom: 80,
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    marginBlock: 20,
  },
  dayList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dayItem: {
    width: "30%", // 3 cards per row
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#333333",
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
    borderWidth: 1,
    shadowColor: "#000",
  },
  selectedDay: {
    backgroundColor: "#FF6347",
    borderColor: "#FF6347",
  },
  dayText: {
    fontSize: 16,
    color: "white",
  },
  timeText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 15,
    backgroundColor: "#fff",
    color: "#333",
  },
  saveButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    borderRadius: 35,
    marginTop: 20,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  remindersList: {
    marginTop: 20,
  },
  remindersTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  reminderItem: {
    backgroundColor: "#333333",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
      shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between", // Align text and actions to opposite sides
    alignItems: "center", // Vertically align the text and icon
  },
  reminderTextContainer: {
    flex: 1,
    marginLeft:10 // Take available space for text
  },
  reminderText: {
    fontSize: 16,
    color: "white",
  },
  reminderActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10, // Space between icon and toggle
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  toggleText: {
    fontSize: 16,
    color: "white",
  },
});

export default ReminderPage;
