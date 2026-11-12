import { FlatList, StyleSheet, Text, View } from "react-native";
import { produtos } from "../data/produtos";
import Produto from "./produto";

type CarrosselProps = {
  categoria: string;
  busca: string;
};

export default function CarrosselProdutos({ categoria, busca }: CarrosselProps) {
  const produtosFiltrados = produtos.filter(
    (p) =>
      p.categoria.toLowerCase() === categoria.toLowerCase() &&
      (p.nome.toLowerCase().includes(busca.toLowerCase()) ||
       p.descricao.toLowerCase().includes(busca.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{categoria}</Text>
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        renderItem={({ item }) => (
          <Produto
            id={item.id}
            nome={item.nome}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum produto encontrado</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  vazio: {
    marginLeft: 10,
    fontStyle: "italic",
    color: "gray",
  }
});