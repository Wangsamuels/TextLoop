import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { SearchBar } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const contacts = [
  {
    id: 'add',
    name: 'Add New',
    isAdd: true,
    color: '#E74C3C',
  },
  {
    id: '1',
    name: 'Mark',
    avatar: 'https://i.pravatar.cc/150?img=1',
    isOnline: true,
  },
  {
    id: '2',
    name: 'Mary',
    avatar: 'https://i.pravatar.cc/150?img=2',
    isOnline: true,
  },
  {
    id: '3',
    name: 'Frank',
    avatar: 'https://i.pravatar.cc/150?img=3',
    isOnline: true,
  },
  {
    id: '4',
    name: 'Phoebe',
    avatar: 'https://i.pravatar.cc/150?img=4',
    isOnline: true,
  },
];

const messages = [
  {
    id: 1,
    name: 'Mark Doe',
    message: 'Hello, would you like to...',
    time: '13:06',
    unread: 1,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Mary Jane',
    message: 'Hello, would you like to...',
    time: '10:57',
    unread: 0,
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Phoebe Peterson',
    message: 'Hello, would you like to...',
    time: 'Yesterday',
    unread: 1,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Frank Davids',
    message: 'Hello, would you like to...',
    time: 'Yesterday',
    unread: 1,
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

// Updated ContactItem component with fixed Add New button
const ContactItem = ({ contact }) => (
  <TouchableOpacity style={styles.contactItem}>
    {contact.isAdd ? (
      <View style={styles.addNewButton}>
        <View style={styles.plusIconContainer}>
          <Icon name="plus" size={28} color="white" />
        </View>
      </View>
    ) : (
      <View style={styles.contactAvatarContainer}>
        <Image source={{ uri: contact.avatar }} style={styles.contactAvatar} />
        {contact.isOnline && <View style={styles.onlineIndicator} />}
      </View>
    )}
    <Text style={styles.contactName}>{contact.name}</Text>
  </TouchableOpacity>
);

const MessageItem = ({ message }) => (
  <TouchableOpacity style={styles.messageItem}>
    <View style={styles.messageAvatarContainer}>
      <Image source={{ uri: message.avatar }} style={styles.messageAvatar} />
    </View>
    <View style={styles.messageContent}>
      <Text style={styles.messageName}>{message.name}</Text>
      <Text style={styles.messageText}>{message.message}</Text>
    </View>
    <View style={styles.messageInfo}>
      <Text style={styles.messageTime}>{message.time}</Text>
      {message.unread > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>{message.unread}</Text>
        </View>
      )}
    </View>
  </TouchableOpacity>
);

const TelegramScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Telegram</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="whatsapp" size={24} color="#25D366" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <SearchBar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        round
        lightTheme
      />

      {/* Contacts Row */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.contactsContainer}
        contentContainerStyle={styles.contactsContent}
      >
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ScrollView>

      {/* Messages Section */}
      <View style={styles.messagesHeader}>
        <Text style={styles.messagesTitle}>Messages</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Unread</Text>
          <Icon name="chevron-down" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.messagesList}>
        {messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="message-text" size={24} color="white" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="bell-outline" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Icon name="message-text-outline" size={24} color="#E74C3C" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cog-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: {
    width: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 16,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 8,
    marginHorizontal: 8,
  },
  searchInputContainer: {
    backgroundColor: '#f5f5f5',
  },
  contactsContainer: {
    flexGrow: 0,
    marginVertical: 12,
  },
  contactsContent: {
    paddingHorizontal: 16,
  },
  // Updated contact-related styles
  contactItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 56,
  },
  addNewButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 2 
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  plusIconContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 2,
  },
  contactAvatarContainer: {
    position: 'relative',
    width: 56,
    height: 56,
  },
  contactAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#25D366',
    borderWidth: 2,
    borderColor: 'white',
  },
  contactName: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  messagesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messagesTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginRight: 4,
    color: '#666',
  },
  messagesList: {
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  messageAvatarContainer: {
    position: 'relative',
  },
  messageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    marginLeft: 12,
  },
  messageName: {
    fontSize: 16,
    fontWeight: '600',
  },
  messageText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  messageInfo: {
    alignItems: 'flex-end',
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
  },
  unreadBadge: {
    marginTop: 4,
    backgroundColor: '#E74C3C',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 6,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemActive: {
    borderTopWidth: 2,
    borderTopColor: '#E74C3C',
  },
});

export default TelegramScreen;
