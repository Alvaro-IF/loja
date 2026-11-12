import { Stack as ExpoStack } from "expo-router";

export default function ProdutosLayout() {
  return (
    <ExpoStack>
      <ExpoStack.Screen name="index" options={{ title: "Produtos", headerShown: true }} />
    </ExpoStack>
  );
}