import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function FormEntrar() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [loading, setLoading] = useState(false); // Novo estado de loading
  const navigation = useNavigation();

  // Validação
  const handleSubmit = async () => {
    try {
      if (!email || !password) {
        setMensagemErro('Preencha todos os campos.');
        return;
      }

      setLoading(true); // Ativando o estado de loading

      const resposta = await fetch('http://192.168.0.2:3000/api/entrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, senha: password }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        navigation.navigate('Mapa');
      } else {
        setMensagemErro(dados.mensagem);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      setMensagemErro('Erro na conexão com o servidor. Tente novamente mais tarde.');
    } finally {
      setLoading(false); // Desativando o estado de loading, independentemente do resultado
    }
  };

  const navegarParaOutraPagina = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={onChangePassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.botao, { backgroundColor: 'green' }]}
        onPress={handleSubmit}
        disabled={loading} // Desativar o botão enquanto estiver carregando
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Text>
      </TouchableOpacity>
      <View style={styles.divLinks}>
        <TouchableOpacity onPress={navegarParaOutraPagina}>
          <Text style={styles.cadastre}>Não possui cadastro? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 52,
    width: "70%",
    marginBottom: 18,
    borderWidth: 1,
    padding: 14,
    borderRadius: 8,
    borderColor: "brown",
  },
  botao: {
    borderRadius: 7,
    padding: 14,
    marginTop: 10,
  },
  divLinks: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cadastre: {
    paddingTop: 40,
    color: "green",
  },
});

export default FormEntrar;