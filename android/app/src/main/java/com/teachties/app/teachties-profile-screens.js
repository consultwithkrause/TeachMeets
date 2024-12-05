// screens/CreateProfileScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';

const CreateProfileScreen = ({ navigation }) => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    gradeLevel: '',
    subject: '',
    email: '',
    phone: '',
    bio: ''
  });

  const handleSaveProfile = () => {
    // TODO: Implement profile saving logic (e.g., API call, local storage)
    console.log('Profile Data:', profileData);
    navigation.navigate('Profile');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create Your Teacher Profile</Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={profileData.fullName}
          onChangeText={(text) => setProfileData({...profileData, fullName: text})}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Grade Level</Text>
        <TextInput
          style={styles.input}
          value={profileData.gradeLevel}
          onChangeText={(text) => setProfileData({...profileData, gradeLevel: text})}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={styles.input}
          value={profileData.subject}
          onChangeText={(text) => setProfileData({...profileData, subject: text})}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={profileData.email}
          keyboardType="email-address"
          onChangeText={(text) => setProfileData({...profileData, email: text})}
        />
      </View>

      <TouchableOpacity 
        style={styles.saveButton} 
        onPress={handleSaveProfile}
      >
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  inputGroup: {
    marginBottom: 15
  },
  label: {
    marginBottom: 5,
    color: '#333'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default CreateProfileScreen;

// screens/ProfileScreen.js
import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // TODO: Replace with actual user data from authentication/storage
  const userData = {
    name: 'Jane Smith',
    gradeLevel: '3rd Grade',
    subject: 'Elementary Education',
    bio: 'Passionate educator dedicated to innovative teaching methods.',
    favoriteContent: [
      { id: 1, title: 'Math Learning Strategies' },
      { id: 2, title: 'Classroom Management Guide' }
    ]
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.subtitle}>
          {userData.gradeLevel} | {userData.subject}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.bioText}>{userData.bio}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Content</Text>
        {userData.favoriteContent.map(content => (
          <TouchableOpacity 
            key={content.id} 
            style={styles.contentItem}
          >
            <Text>{content.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.editButton}
        onPress={() => navigation.navigate('CreateProfile')}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#666',
    marginTop: 5
  },
  section: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  bioText: {
    color: '#333'
  },
  contentItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default ProfileScreen;
