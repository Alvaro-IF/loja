import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";

export default function(){
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");

    return <ScrollView>
        <View>
            <Text>Nome do Produto</Text>
            <TextInput
            placeholder="Digite o nome"
            value={nome}
            onChangeText={setNome}
            />
        </View>
        <View>
            <Text>Preco do Produto</Text>
            <TextInput
            placeholder="Digite o preco"
            value={preco}
            onChangeText={setPreco}
            />
        </View>
        <View>
            <Text>Categoria do Produto</Text>
            <TextInput
            placeholder="Digite a categoria"
            value={categoria}
            onChangeText={setCategoria}
            />
        </View>
        <View>
            <Text>Descrição do Produto</Text>
            <TextInput
            placeholder="Digite a descrição"
            value={descricao}
            onChangeText={setDescricao}
            />
        </View>
        <View>
            <Text>Imagem do Produto</Text>
            <TextInput
            placeholder="Digite a URL da imagem"
            value={imagem}
            onChangeText={setImagem}
            />
        </View>
        <Button
        title="Enviar"
        onPress={() => validar(nome, preco, categoria, descricao, imagem)}
        />
    </ScrollView>

    function validar(nome: String, preco: String, categoria: String, descricao: String, imagem: String){
        if (nome.trim() === ""){
           alert('Nome é obrigatorio')
           return
        }
        if (preco.trim() === ""){
           alert('Preco é obrigatorio')
           return
        }
        if (categoria.trim() === ""){
           alert('Categoria é obrigatorio')
           return
        }
        alert('Produto Criado')
    }
}