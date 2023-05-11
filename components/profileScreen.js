import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faX } from '@fortawesome/free-solid-svg-icons';

const ProfileScreen = ({ isVisible, closeProfile }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={closeProfile}
    >
      <View style={{ paddingTop: 50, paddingLeft: 50, }}>
        <Text style={{ flexDirection: 'row', fontSize: 24, fontWeight: 'bold', justifyContent: 'center' }}>Profile Screen</Text>
        <TouchableOpacity onPress={closeProfile}>
            <View style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 30, alignItems: 'center' }}>
            <FontAwesomeIcon icon={faX} style={{ paddingLeft: 50, marginBottom: 50 }} />
            </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const ProfileButton = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const openProfile = () => {
    setIsProfileVisible(true);
  };

  const closeProfile = () => {
    setIsProfileVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={openProfile}>
        <View>
          <FontAwesomeIcon icon={faUser} style={{paddingLeft: 50, marginBottom: 50}} />
        </View>
      </TouchableOpacity>
      <ProfileScreen isVisible={isProfileVisible} closeProfile={closeProfile} />
    </View>
  );
};

export default ProfileButton;
