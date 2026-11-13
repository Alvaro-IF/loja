
export default function(){
    async function carregarProdutos() {
        try{
            const resposta = await fetch(
                "https://lojaapi2.onrender.com/produtos"
            );
            const dados = await resposta.json();
            return dados;
        } catch(erro){
            console.log(erro)
        }
    }
    return console.log(carregarProdutos())
}