import Express from "express" ;
import { router } from "./routes";


const express = Express();

express.use(Express.json());

express.use(router) ;
express.listen(3000,() =>
    console.log("servidor rodando na porta 3000")) ;
