import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Carrinho() {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <View style={styles.tela}>
      {quantidade === 0 ? (
        <Text style={styles.vazio}>Carrinho vazio</Text>
      ) : (
        <Text style={styles.cheio}>Itens no carrinho: {quantidade}</Text>
      )}

      <View style={styles.botoes}>
        <Button title="Adicionar item" onPress={() => setQuantidade(quantidade + 1)} />
      </View>
      <View style={styles.botoes}>
        <Button
          title="Remover item"
          onPress={() => setQuantidade(quantidade - 1)}
          disabled={quantidade === 0}
        />
      </View>
      <View style={styles.botoes}>
        <Button title="Zerar" onPress={() => setQuantidade(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vazio: {
    color: "red",
    fontSize: 20,
    marginBottom: 20,
  },
  cheio: {
    color: "green",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  botoes: {
    marginVertical: 5,
    width: 200,
  },
});