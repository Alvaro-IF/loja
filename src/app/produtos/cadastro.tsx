import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';


export default function(){
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");

    return <View style={{padding: 5}}>
        <View>
            <Text>Nome</Text>
            <TextInput
                style={{backgroundColor: "white", borderWidth: 2}}
                value={nome}
                onChangeText={setNome}
            />
        </View>

        <View>
            <Text>Preço</Text>
            <TextInput
                style={{backgroundColor: "white", borderWidth: 2}}
                value={preco}
                onChangeText={setPreco}
            />
        </View>

        <View>
            <Text>Categoria</Text>
            <TextInput
                style={{backgroundColor: "white", borderWidth: 2}}
                value={categoria}
                onChangeText={setCategoria}
            />
        </View>
        
        <View>
            <Text>Descricao</Text>
            <TextInput
                style={{backgroundColor: "white", borderWidth: 2}}
                value={descricao}
                onChangeText={setDescricao}
            />
        </View>

        <View>
            <Text>Imagem</Text>
            <TextInput
                style={{backgroundColor: "white", borderWidth: 2}}
                value={imagem}
                onChangeText={setImagem}
            />
        </View>
    </View>
}