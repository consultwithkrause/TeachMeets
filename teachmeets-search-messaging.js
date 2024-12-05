// screens/SearchScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([
    { 
      id: '1', 
      name: 'John Doe', 
      subject: 'Computer Science', 
      gradeLevel: 'High School' 
    },
    { 
      id: '2', 
      name: 'Sarah Johnson', 
      subject: 'Mathematics', 
      gradeLevel: 'Middle School' 
    }
  ]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    // TODO: Implement actual search logic
  };

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity style={styles.resultItem}>
      <View style={styles.resultContent}>
        <Text style={styles.resultName}>{item.name}</Text>
        <Text style={styles.resultDetails}>
          {item.subject} | {item.gradeLevel}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#007BFF" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons 
          name="search" 
          size={20} 
          color="#999" 
          style={styles.searchIcon} 
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search teachers, content, resources..."
          value={searchTerm}
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={searchResults}
        renderItem={renderSearchResult}
        keyExtractor={(item) => item.id}
        style={styles.resultsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  searchIcon: {
    marginRight: 10
  },
  searchInput: {
    flex: 1,
    height: 50
  },
  resultsList: {
    paddingHorizontal: 10
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5
  },
  resultName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  resultDetails: {
    color: '#666',
    marginTop: 5
  }
});

export default SearchScreen;

// screens/MessagingScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

const MessagingScreen = () => {
  const [conversations, setConversations] = useState([
    { 
      id: '1', 
      name: 'Emily Rodriguez', 
      lastMessage: 'Have you tried that new math curriculum?',
      timestamp: '2h ago'
    },
    { 
      id: '2', 
      name: 'Michael Chen', 
      lastMessage: 'Thanks for sharing your lesson plan!',
      timestamp: '1d ago'
    }
  ]);

  const renderConversation = ({ item }) => (
    <TouchableOpacity style={styles.conversationItem}>
      <View style={styles.conversationContent}>
        <Text style={styles.conversationName}>{item.name}</Text>
        <Text style={styles.conversationMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
      <Text style={styles.conversationTimestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  conversationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  conversationContent: {
    flex: 1,
    marginRight: 10
  },
  conversationName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  conversationMessage: {
    color: '#666'
  },
  conversationTimestamp: {
    color: '#999'
  }
});

export default MessagingScreen;
