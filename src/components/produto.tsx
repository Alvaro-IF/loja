import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type ProdutoProps = {
  id: number;
  nome: string;
  descricao: string;
  imagem: any;
};

export default function Produto(props: ProdutoProps) {
  return (
    <Pressable 
      onPress={() => router.push({
        pathname: "/produtos/[id]",
        params: { id: props.id }
      })}
    >
      <View style={styles.card}>
        <Image source={props.imagem} style={styles.imagem} resizeMode="contain" />
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.descricao}>{props.descricao}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    width: 150,
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },
  descricao: {
    color: "gray",
    textAlign: "center",
  },
});