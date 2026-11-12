import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="produtos"
        options={{
          title: "Produtos",
          headerShown: false,
          tabBarIcon: () => <Ionicons name="list" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="carrinho"
        options={{
          title: "Carrinho",
          tabBarIcon: () => <Ionicons name="cart" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}