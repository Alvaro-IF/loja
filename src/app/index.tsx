import { Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Promocao from "../components/Promocao";

export default function Home() {
  const nomeLoja = "LojaIFPE";
  const endereco = "Rua Fictícia, 123 - Centro";

  const handleSair = () => {
    Alert.alert("Saindo da loja...", "Deseja realmente sair?", [
      { text: "Cancelar" },
      { text: "Sair", onPress: () => Alert.alert("Você saiu da loja.") },
    ]);
  };

  return (
    <View style={styles.tela}>
      <View style={styles.header}>
        <Text style={styles.titulo}>{nomeLoja}</Text>
        <Text style={styles.endereco}>{endereco}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Promocao mensagem="30% OFF" cor="purple" corBotao="purple" />
        <Promocao mensagem="Frete grátis!" cor="blue" corBotao="blue" />
        <Promocao mensagem="10% no PIX" cor="green" tamanho={24} destaque={true} corBotao="green" />
        <Promocao mensagem="Queima de estoque!" />
        <Promocao mensagem="Leve 3 pague 2" />

        <View style={{ marginVertical: 20 }}>
          <Button title="Sair" onPress={handleSair} color="red" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  endereco: {
    color: "blue",
    fontSize: 16,
  },
  scroll: {
    alignItems: "center",
    paddingBottom: 40,
  },
});