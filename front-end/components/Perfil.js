import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function Perfil() {
  //Função para redirecionar à página de login
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Entrar');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToLogin}>
      <View>
        <Icon style={styles.avatar} name="user" size={50} color="green" />
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
    backgroundColor: "#D2B48C",
    padding: 11,
    paddingHorizontal: 16,
    borderRadius: 500,
  }
});

export default Perfil;