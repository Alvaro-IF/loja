import { router } from "expo-router";
import { Button, View } from "react-native";

export default function(){
    return <View>
        <Button
            title="Cadastar Produto"
            onPress={() => {
                router.push("/produtos/cadastro.tsx")
            }}
        ></Button>
    </View>
}