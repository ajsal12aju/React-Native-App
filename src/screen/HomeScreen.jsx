import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <MaterialIcons name="dashboard" size={24} color="black" style={styles.icon} />
        <View style={styles.headerRightIcons}>
          <Ionicons name="search" size={24} color="black" style={styles.icon} />
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.profilePic}
          />
        </View>
      </View>

      {/* Welcome Section */}
      <Text style={styles.welcomeMessage}>Welcome Back, John!</Text>

      {/* Health Score Card */}
      <View style={styles.healthCard}>
        <View style={styles.healthCardContent}>
          <Text style={styles.cardText}>Your Health Score</Text>
          <Text style={styles.cardSubText}>Keep up the great work!</Text>
        </View>
        <View style={styles.healthScoreCircle}>
          <Text style={styles.healthScoreText}>85</Text>
        </View>
      </View>

      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today</Text>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>

      {/* Cards Section */}
 <View style={styles.cardsContainer}>
  <View style={styles.cardItem}>
    <FontAwesome name="cutlery" size={40} color="#FF6347" style={styles.icon} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>Daily Calories</Text>
      <Text style={styles.cardCount}>1200 kcal</Text>
    </View>
  </View>
  <View style={styles.cardItem}>
    <FontAwesome name="heartbeat" size={40} color="#4682B4" style={styles.icon} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>Weight Record</Text>
      <Text style={styles.cardCount}>70 kg</Text>
    </View>
  </View>
  <View style={styles.cardItem}>
    <Ionicons name="walk" size={40} color="#32CD32" style={styles.icon} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>Daily Steps</Text>
      <Text style={styles.cardCount}>8000 steps</Text>
    </View>
  </View>
</View>



      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={34} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="stats-chart" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="settings" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,

  },
  headerRightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  healthCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  healthCardContent: {
    flex: 1,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubText: {
    fontSize: 14,
    color: '#666',
  },
  healthScoreCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  healthScoreText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cardsContainer: {
    marginVertical: 20,
  },
  cardItem: {
    flexDirection: 'row', // Icon and content in a row
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center', // Align items vertically
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  icon: {
    marginRight: 25, // Space between icon and content
  },
  cardContent: {
    flex: 1, // Ensure the text stretches to fill the remaining space
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardCount: {
    marginTop: 5,
    fontSize: 18, // Larger font for count
    fontWeight: 'bold', // Bolder font for emphasis
    color: '#666',
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
});
