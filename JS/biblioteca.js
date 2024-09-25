class Livro  {
    constructor(titulo, autor, anoPublicacao, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    };
};

class Biblioteca {
    adicionarLivro(livro){
        this.biblioteca = [];
        this.biblioteca.push(livro);
    };

    listarLivro(){
        return this.biblioteca;
    };

    excluirLivro(livro){
        encontrar_livro = livro.titulo
        indice = this.biblioteca.findIndex(livro => livro.titulo === encontrar_livro);
        this.biblioteca.splice(0, indice)
    }
};
