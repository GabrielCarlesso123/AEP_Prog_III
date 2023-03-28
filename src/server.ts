//10 - Importou a classe App, ja intanciada de app.ts

import app from "./app";

// 11 - criamos a funcao main que será executada quando o arquivo for chamado | ela será executada por primeiro
function main(){

    let port = 3000

    try{
        app.listen(3000, 'localhost', async() => {
            console.log(`Starting server at port ${port}`)
        })

    } catch(err){
        console.error('Starting server Error', err)
        
    }

}

main()