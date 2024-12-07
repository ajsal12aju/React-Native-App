import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const RemindersPage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Set Your Daily Goals</Text>
      <Text style={styles.subHeader}>Achieve consistency with personalized goals and reminders!</Text>

      {/* Goal Cards */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Ionicons name="walk" size={28} color="#32CD32" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Daily Steps</Text>
            <TextInput
              placeholder="Enter steps goal"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.card}>
          <FontAwesome name="cutlery" size={28} color="#FF6347" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Calorie Burn</Text>
            <TextInput
              placeholder="Enter calorie goal"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.card}>
          <Ionicons name="water" size={28} color="#4682B4" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Water Intake</Text>
            <TextInput
              placeholder="Enter water goal (liters)"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        </View>
      </View>

      {/* Reminders Section */}
      <Text style={styles.sectionTitle}>Reminders</Text>
      <View style={styles.reminderItem}>
        <Text style={styles.reminderText}>Send Reminder Notifications</Text>
        <Switch value={true} />
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardsContainer: {
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  reminderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  reminderText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default RemindersPage;
