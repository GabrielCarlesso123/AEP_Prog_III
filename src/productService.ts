import { writeFile, readFile } from 'fs/promises'

class ProductService{

    async createProduct(data){
        
        await writeFile('products.json', JSON.stringify(data, null, 2))

    }

    async listProducts(){
        
        const readProducts = await readFile('products.json', "utf-8")
    
        return JSON.parse(readProducts)
    }

    async getStockList(){

        const readProducts = await this.listProducts()

        const stock = readProducts.map(produto => {
            let obj = {
                nome: produto.nome,
                qtde: produto.qtde,
                preco: produto.preco,
                valor_estoque: produto.qtde * produto.preco
            }
            return obj
        })
        return stock
    }

    async getStockValue(){

        const stockList = await this.getStockList()

        const stockValue = stockList.reduce((acc, atual) => {

            return acc + atual.valor_estoque

        }, 0)
        
        return stockValue
    }

}

export default new ProductService()