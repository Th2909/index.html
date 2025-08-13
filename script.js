document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards-container');
    
    const idols = [
        {
            name: "Sócrates",
            image: "https://conteudo.imguol.com.br/c/esporte/futebol/times/corinthians/2022/06/19/socrates-em-acao-pelo-corinthians-em-1982-1655670909168_v2_450x450.jpg",
            description: "Doutor do futebol, líder da Democracia Corinthiana e ídolo eterno."
        },
        {
            name: "Rivelino",
            image: "https://www.lance.com.br/files/article_main/uploads/2023/01/06/63b87f2e4c3a9.jpeg",
            description: "Rei da pedalada, um dos maiores jogadores da história do clube."
        },
        {
            name: "Marcelinho Carioca",
            image: "https://www.cnnbrasil.com.br/esportes/wp-content/uploads/sites/10/2023/04/marcelinho-carioca-corinthians-1999-e1682011263476.jpg?w=450",
            description: "O "Anjo de Pernas Tortas", ídolo dos anos 90 e maior artilheiro do clube no século XX."
        },
        {
            name: "Ronaldo Fenômeno",
            image: "https://www.corinthians.com.br/uploads/noticia/9b3a6c3b6d5c4a8e8d7c6b5a4f3e2d1.jpg",
            description: "O Fenômeno que brilhou no Corinthians e ajudou a conquistar o Mundial de 2000."
        },
        {
            name: "Cássio",
            image: "https://www.corinthians.com.br/uploads/noticia/c9b8a7d6e5f4g3h2i1j0k9l8m7n6o5.jpg",
            description: "Herói do Mundial de 2012 e um dos maiores goleiros da história do clube."
        },
        {
            name: "Neto",
            image: "https://www.lance.com.br/files/article_main/uploads/2021/05/11/609a5e7b1a9e4.jpeg",
            description: "Ex-craque e atual comentarista, sempre com o Corinthians no coração."
        },
        {
            name: "Tévez",
            image: "https://www.corinthians.com.br/uploads/noticia/d8e7f6g5h4i3j2k1l0m9n8o7p6q5r4.jpg",
            description: "O "Apache" que marcou época no clube e foi artilheiro do Brasileirão 2005."
        },
        {
            name: "Biro-Biro",
            image: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2023/04/biro-biro-corinthians.jpg",
            description: "Ídolo dos anos 80, conhecido por seus gols de falta e sua liderança."
        },
        {
            name: "Wladimir",
            image: "https://www.corinthians.com.br/uploads/noticia/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5.jpg",
            description: "O jogador que mais vezes vestiu a camisa do Corinthians, símbolo da Democracia Corinthiana."
        },
        {
            name: "Gilmar",
            image: "https://www.corinthians.com.br/uploads/noticia/p1o2i3u4y5t6r7e8w9q0a1s2d3f4g5.jpg",
            description: "Um dos maiores goleiros da história do futebol brasileiro, ídolo corintiano."
        }
    ];

    idols.forEach(idol => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${idol.image}" alt="${idol.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${idol.name}</h3>
                <p class="card-text">${idol.description}</p>
            </div>
        `;
        
        cardsContainer.appendChild(card);
    });
});
