import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { produtos } from "../../data/produtos";

export default function DetalhesProduto() {
  const { id } = useLocalSearchParams();
  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <View style={styles.tela}>
        <Text style={styles.erro}>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.tela}>
      <Stack.Screen options={{ title: produto.nome }} />
      <Image source={produto.imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  erro: {
    fontSize: 18,
    color: "red",
  },
  imagem: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  preco: {
    fontSize: 20,
    color: "green",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
});