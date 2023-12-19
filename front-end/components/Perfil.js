import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function Perfil() {
  //Função para redirecionar à página de login
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToLogin}>
      <View>
        <Icon style={styles.avatar} name="user" size={47} color="brown" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  avatar: {
    backgroundColor: "#98FB98",
    padding: 15,
    borderRadius: 27,
    paddingVertical: 8,
  }
});

export default Perfil;