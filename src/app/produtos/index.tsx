import { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import CarrosselProdutos from "../../components/CarrosselProdutos";

export default function Produtos() {
  const [busca, setBusca] = useState("");

  return (
    <View style={styles.tela}>
      <TextInput
        style={styles.input}
        placeholder="Buscar produto"
        value={busca}
        onChangeText={setBusca}
      />
      <ScrollView>
        <CarrosselProdutos categoria="Eletrônico" busca={busca} />
        <CarrosselProdutos categoria="Móveis" busca={busca} />
        <CarrosselProdutos categoria="Infantil" busca={busca} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});