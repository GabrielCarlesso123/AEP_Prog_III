//Importamos o express
import express from 'express';
import routes from './routes';
import cors from 'cors';

//Criamos uma classe App, que irpa conter e prover para quem chama-la as configutações da aplicação
class App{

    //criar um atributo publico chamado express, que é do TIPO express.application
    public express: express.Application

    //criamos um construtor para nossa classe
    public constructor(){
        //Estamos atribuindo para o atributo express, uma instancia 
        this.express = express();

        this.middlewares();
        //this.database();
        this.routes();
        
    }

    public middlewares(): void{
        this.express.use(express.json())
        this.express.use(cors())
        
    }

/*     private async database(){

        try{
            mongoose.set('strictQuery', true)
            await mongoose.connect('mongodb+srv://gabriel383:teste123@cluster0.egqsh.mongodb.net/?retryWrites=true&w=majority')
            console.log('Connect database success')

        } catch(err){

            console.error('Connect database fail, error', err)

        }
    } */

    private routes(): void{
        this.express.use(routes)
        
    }
}

export default new App().express