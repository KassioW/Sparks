import express from "express"
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";


const routes = (app) => {

// Permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());

    // Rota para obter todos os posts
    app.get("/posts", listarPosts);

    // Rota para criar um post
    app.post("/posts", postarNovoPost);
}

export default routes;

  