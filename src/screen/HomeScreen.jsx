import React from 'react';
import { View, Text, StyleSheet, SafeAreaView,  ImageBackground,
 TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import CustomProgressBar from './ProgressBar';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleRemider = () =>{
    navigation.navigate("Reminder"); 
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/signupBg.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Overlay */}
        <View style={styles.overlay}></View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
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

        {/* Health Score Card */}
        <View style={styles.healthCard}>
          <View style={styles.healthCardContent}>
                    <Text style={styles.welcomeMessage}>Welcome Back, John!</Text>

            <Text style={styles.cardText}>Your Health Score</Text>
            <Text style={styles.cardSubText}>Keep up the great work!</Text>
          </View>
          <View style={styles.healthScoreCircle}>
            <CustomProgressBar
              size={100}
              strokeWidth={10}
              progress={75}
              color="yellow"
              backgroundColor="red"
            />
          </View>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today</Text>
          <MaterialIcons name="more-vert" size={24} color="white" />
        </View>

        {/* Cards Section */}
        <View style={styles.cardsContainer}>
          <View style={styles.cardItem}>
            <FontAwesome name="cutlery" size={40} color="#FF6347" style={{...styles.icon, marginEnd:27}} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Daily Caloriess</Text>
              <Text style={styles.cardCount}>1200 kcal</Text>
            </View>
          </View>

          <View style={styles.cardItem}>
            <FontAwesome name="tint" size={40} color="#4682B4" style={{...styles.icon, marginEnd:33}} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Water Updates</Text>
              <Text style={styles.cardCount}>Daily 3L</Text>
            </View>
          </View>

          <View style={styles.cardItem}>
            <Ionicons name="walk" size={40} color="#32CD32" style={styles.icon} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Daily Steps</Text>
              <Text style={styles.cardCount}>8000 steps</Text>
            </View>
          </View>

          <View style={styles.cardItem} onPress={handleRemider}>
            <MaterialIcons name="notifications-active" size={40} color="#FFD700" style={styles.icon} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Reminder</Text>
              <Text style={styles.cardCount}>Stay Hydrated!</Text>
            </View>
          </View>

        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNavContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Ionicons name="home" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Ionicons name="person" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={34} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Ionicons name="stats-chart" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Ionicons name="settings" size={28} color="white" />
          </TouchableOpacity>
        </View>

      </ScrollView>
                    </ImageBackground>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
   background: {
    // flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,  // Ensure content inside the screen is not stretched to the edges
  },
  
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop:15, 
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
  // container: {
  //   flex: 1,
  //   backgroundColor: 'gray', // Changed background color to black
  //   paddingHorizontal: 16,
  // },
  scrollContainer: {
    paddingBottom: 80, // Add some padding for the bottom nav bar
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  backgroundColor: 'white', // Changed background to dark gray
    borderRadius: 35,
    padding: 4,
    // marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,  },
  icon: {
    marginHorizontal: 20,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Changed text color to white
  },
  healthCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333333', // Changed background to dark gray
    borderRadius: 10,
    padding: 16,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBlock:45
  },
  healthCardContent: {
    flex: 1,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Changed text color to white
  },
  cardSubText: {
    fontSize: 14,
    color: '#bbb', // Changed color to lighter gray
  },
  healthScoreCircle: {
    alignItems: 'center',
    justifyContent: 'center',
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
    // marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Changed text color to white
  },
  cardsContainer: {
    marginVertical: 20,
  },
  cardItem: {
    flexDirection: 'row',
    backgroundColor: '#333333', // Changed background color to dark gray
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
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Changed text color to white
  },
  cardCount: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bbb', // Changed color to lighter gray
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333333', // Changed background color to dark gray
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
    backgroundColor: '#FF6347', // Button background color
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  }, 
}); 
