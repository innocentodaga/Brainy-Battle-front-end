import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import COLORS from '../components/Colors';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const selectImage = () => {
    launchImageLibrary({}, response => {
      if (response.assets) {
        setProfileImage(response.assets[0].uri);
      }
      setModalVisible(false);
    });
  };

  const takePhoto = () => {
    launchCamera({}, response => {
      if (response.assets) {
        setProfileImage(response.assets[0].uri);
      }
      setModalVisible(false);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../../assets/profile.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.label}>Name: John Doe</Text>
        <Text style={styles.label}>Email: john.doe@example.com</Text>
        <Text style={styles.label}>Password: ••••••••</Text>
        <Text style={styles.label}>Marks Scored: 95</Text>
        <Text style={styles.label}>Username: johndoe</Text>
        <Text style={styles.label}>Age: 20</Text>
        <Text style={styles.label}>Class: 12</Text>
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Button title="Choose from Library" onPress={selectImage} />
            <Button title="Take Photo" onPress={takePhoto} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBackground: {
    height: 180,
    backgroundColor:COLORS.PINK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  bottomSection: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    
  },
  modalContent: {
    width: 300,
    padding: 20,
  },
});

export default Profile;
