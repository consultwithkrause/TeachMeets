import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  ImageBackground,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LandingScreen = ({ navigation }) => {
  // Placeholder data - replace with actual user data
  const userData = {
    name: 'Jane Smith',
    teacherType: 'Special Education',
    gradeLevels: '6-8',
    followers: 245,
    networkSize: 128,
    apples: 892,
    username: '@jsmith_edu',
    email: 'jane.smith@education.org',
    profileImage: 'https://via.placeholder.com/150'
  };

  const navigationLinks = [
    { id: 1, title: 'About Me', icon: 'person' },
    { id: 2, title: 'My Classroom', icon: 'school' },
    { id: 3, title: 'Post', icon: 'create' },
    { id: 4, title: 'Expertise', icon: 'star' },
    { id: 5, title: 'Resources', icon: 'folder' },
    { id: 6, title: 'Reposts', icon: 'repeat' },
    { id: 7, title: 'Message', icon: 'mail' },
    { id: 8, title: 'My Teacher Shop', icon: 'cart' },
    { id: 9, title: 'Favorites', icon: 'heart' },
  ];

  const renderNavigationGrid = () => {
    return (
      <View style={styles.gridContainer}>
        {navigationLinks.map((link) => (
          <TouchableOpacity 
            key={link.id} 
            style={styles.gridItem}
            onPress={() => navigation.navigate(link.title.replace(/\s+/g, ''))}
          >
            <Image
              source={{ uri: `https://via.placeholder.com/220x40?text=${link.title}` }}
              style={styles.gridItemImage}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/800x200' }}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Image
            source={{ uri: userData.profileImage }}
            style={styles.profileImage}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userData.name}</Text>
            <Text style={styles.teacherType}>{userData.teacherType}</Text>
            <Text style={styles.gradeLevels}>Grades {userData.gradeLevels}</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userData.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userData.networkSize}</Text>
          <Text style={styles.statLabel}>Network</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userData.apples}</Text>
          <Text style={styles.statLabel}>Apples</Text>
        </View>
      </View>

      <View style={styles.userDetails}>
        <Text style={styles.username}>{userData.username}</Text>
        <Text style={styles.email}>{userData.email}</Text>
      </View>

      {renderNavigationGrid()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  banner: {
    height: 200,
    justifyContent: 'flex-end',
  },
  bannerContent: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  userInfo: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Futura',
  },
  teacherType: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Futura',
  },
  gradeLevels: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Futura',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    fontFamily: 'Futura',
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Futura',
  },
  userDetails: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Futura',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Futura',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '32%',
    aspectRatio: 220/40,
    marginBottom: 10,
  },
  gridItemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default LandingScreen;
