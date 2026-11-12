import { router } from 'expo-router'
import { Button, StyleSheet, View } from 'react-native'

export default function(){
    return <View>
        <Button
        title='Cadastrar'
        onPress={() => router.push('/produtos/cadastro')}
        />
    </View>
}

const style = StyleSheet.create({
    botao: {
        
    }
})