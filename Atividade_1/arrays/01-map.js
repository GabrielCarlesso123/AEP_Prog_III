// const nums = [1, 2, 3, 4, 5]

// const dobro = (n) => n * 2

// console.log(nums.map(dobro))


// const nomes = ['Ana','Guilherme', 'Tiago', 'Luana', 'Soldado', 'Versales']

// const letras = nomes.map(text => text[0])

// console.log(letras)

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]
const getNome = carrinho.map(produto => produto.nome)
const getValor = carrinho.map(produto => produto.qtde * produto.preco)

console.log(getNome)

console.log(getValor)