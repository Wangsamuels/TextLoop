import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
  StatusBar,
  Image,
} from 'react-native';
import { SearchBar } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const socialApps = [
  { id: 'add', icon: 'plus', label: 'Add New', notifications: 0, color: '#E74C3C' },
  { id: 'whatsapp', icon: 'whatsapp', label: 'Whatsapp', notifications: 25, color: '#25D366' },
  { id: 'x', icon: 'twitter', label: 'X', notifications: 3, color: '#000000' },
  { id: 'telegram', icon: 'telegram', label: 'Telegram', notifications: 25, color: '#0088cc' },
  { id: 'instagram', icon: 'instagram', label: 'Instagram', notifications: 12, color: '#E1306C' },
];

const priorityMessages = [
  {
    id: 1,
    name: 'Mark Doe',
    message: 'Hello, would you like to...',
    time: '13:06',
    unread: true,
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: 2,
    name: 'Mary Jane',
    message: 'Hello, would you like to...',
    time: '10:57',
    unread: false,
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 3,
    name: 'Phoebe Peterson',
    message: 'Hello, would you like to...',
    time: 'Yesterday',
    unread: true,
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    id: 4,
    name: 'Frank Davids',
    message: 'Hello, would you like to...',
    time: 'Yesterday',
    unread: true,
    avatar: 'https://i.pravatar.cc/100?img=4',
  },
];

const MessageItem = ({ item }) => (
  <TouchableOpacity style={styles.messageItem}>
    <View style={styles.avatarContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.onlineIndicator} />
    </View>
    <View style={styles.messageContent}>
      <Text style={styles.messageName}>{item.name}</Text>
      <Text style={styles.messagePreview}>{item.message}</Text>
    </View>
    <View style={styles.messageMetadata}>
      <Text style={styles.messageTime}>{item.time}</Text>
      {item.unread && <View style={styles.unreadBadge} />}
    </View>
  </TouchableOpacity>
);

const SocialAppIcon = ({ app }) => (
  <View style={styles.socialIconContainer}>
    <View style={[styles.socialIcon, { backgroundColor: app.color }]}>
      <Icon name={app.icon} size={24} color="white" />
      {app.notifications > 0 && (
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>{app.notifications}</Text>
        </View>
      )}
    </View>
    <Text style={styles.socialLabel}>{app.label}</Text>
  </View>
);

const InboxScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
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

      {/* Social Apps Row */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.socialAppsContainer}
      >
        {socialApps.map(app => (
          <SocialAppIcon key={app.id} app={app} />
        ))}
      </ScrollView>

      {/* Messages Section */}
      <ScrollView style={styles.messagesContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Priority</Text>
        </View>
        {priorityMessages.map(message => (
          <MessageItem key={message.id} item={message} />
        ))}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Messages</Text>
        </View>
        {priorityMessages.map(message => (
          <MessageItem key={`all-${message.id}`} item={message} />
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="message-text" size={24} color="white" />
        <View style={styles.fabBadge}>
          <Text style={styles.fabBadgeText}>6</Text>
        </View>
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
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 8,
  },
  searchInputContainer: {
    backgroundColor: '#f5f5f5',
  },
  socialAppsContainer: {
    flexGrow: 0,
    padding: 16,
  },
  socialIconContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  socialIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLabel: {
    marginTop: 4,
    fontSize: 12,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#E74C3C',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  messagesContainer: {
    flex: 1,
  },
  sectionHeader: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  messageItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#25D366',
    borderWidth: 2,
    borderColor: 'white',
  },
  messageContent: {
    flex: 1,
    marginLeft: 12,
  },
  messageName: {
    fontSize: 16,
    fontWeight: '600',
  },
  messagePreview: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  messageMetadata: {
    alignItems: 'flex-end',
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
  },
  unreadBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E74C3C',
    marginTop: 4,
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
  fabBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabBadgeText: {
    color: '#E74C3C',
    fontSize: 12,
    fontWeight: 'bold',
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

export default InboxScreen;
