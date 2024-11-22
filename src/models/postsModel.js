import conectarAoBanco from "../config/dbConfig.js";


// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Recupera todos os posts da coleção "posts" no banco de dados
export async function getTodosPosts() {
    const db = conexao.db("banco-dados");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
  }

  export async function criarPost(novoPost) {
    const db = conexao.db("banco-dados");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
  }