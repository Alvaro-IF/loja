import { Alert, Button, StyleSheet, Text, View } from "react-native";

type PromocaoProps = {
  mensagem: string;
  cor?: string;
  tamanho?: number;
  destaque?: boolean;
  corBotao?: string;
};

export default function Promocao(props: PromocaoProps) {
  const exibirMsg = () => {
    Alert.alert("Promoção", props.mensagem);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: props.cor ? props.cor : "red",
          fontSize: props.tamanho,
          fontWeight: props.destaque ? "bold" : "normal",
        }}
      >
        {props.mensagem}
      </Text>
      <Button title="Exibir" color={props.corBotao} onPress={exibirMsg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    margin: 12,
    borderRadius: 8,
    width: "90%",
  },
});