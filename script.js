const promptCards = ["Use no máximo 10 palavras.", "Escreva uma história sem usar pronomes.", "Sua história deve ter exatamente 20 palavras.", "Use apenas frases curtas.", "Sua frase deve conter uma metáfora.",
    "Escreva um poema.", "Escreva uma música curta ao invés de um texto.", "Escreva como se fosse um diário.", "Crie um diálogo entre dois personagens.", "Conte uma história apenas com diálogos.",
    "Comece com 'Era uma vez...'.", "A história deve ter um plot twist.", "A história deve ser um monólogo interno.", "A história deve ser uma metáfora para algo maior.", "Escreva um final alternativo para uma história conhecida.",
    "Comece com 'E se...'.", "Comece com uma pergunta.", "A primeira frase deve ser um aviso misterioso.", "Comece com um diálogo impactante.", "Comece com alguém cometendo um erro.",
    "A história acontece em um lugar onde a gravidade funciona de forma estranha.", "Toda a história acontece em uma viagem de metrô.", "A história se passa inteiramente dentro de um elevador.", "Recrie um conto de fadas em um cenário moderno.", "Escreva uma fábula com uma moral no final.",
    "Inspire-se em um ditado popular.", "Misture dois gêneros de histórias completamente diferentes.", "A história deve ser completamente absurda.", "Algo inesperado deve acontecer no final.", "Alguém tem uma habilidade inútil, mas muito específica.",
    "Algo minúsculo se torna a coisa mais importante.", "A história deve terminar do mesmo jeito que começou.", "O protagonista não pode falar, apenas se expressar de outra forma.", "Todos os personagens acreditam em algo que claramente não é verdade.", "Alguém faz uma descoberta chocante."
];

const complementCards = ["Triste", "Feliz", "Melancólico", "Nostálgico", "Esperançoso", "Dramático", "Cômico", "Romântico", "Revoltante", "Assustador",
    "Futurista", "Medieval", "Épico", "Filosófico", "Poético", "Científico", "Psicodélico", "Experimental", "Surrealista", "Minimalista",
    "Distópico", "Utopista", "Fantasioso", "Apocalíptico", "Cibernético", "Parece um sonho", "Espacial", "Tecnológico", "Paranormal", "Gótico",
    "Agitado", "Atmosférico", "Intenso", "Misterioso", "Caótico", "Estranhamente calmo", "Frenético", "Obscuro", "Intrigante", "Reflexivo",
    "Pré-histórico", "Idade Média", "Renascimento", "Era vitoriana", "Anos 1920", "Guerra Fria", "Anos 1980", "Pós-apocalipse", "Num mundo subaquático", "Numa sociedade subterrânea",
    "Uma amizade improvável", "Um grande rival", "Uma relação complicada", "Um reencontro inesperado", "Uma parceria arriscada", "Um mentor e um aprendiz", "Um laço familiar inesperado", "Uma rivalidade acirrada",
    "Sociedade utópica", "Sociedade decadente", "Regras rígidas e opressoras", "Um mundo sem leis", "Tradições antigas ainda dominam", "Revolução e mudança", "Conflito entre gerações", "Uma descoberta tecnológica",
    "Um personagem muda drasticamente", "Algo pequeno se torna grandioso", "Uma tecnologia muda a sociedade", "Alguém descobre um talento oculto", "O protagonista perde algo importante", "O mundo muda para sempre"
];

const elementCards = [
    { Objeto: "Computador", Profissional: "Bombeiro", Ação: "Navegar", Animal: "Tartaruga", Local: "Escritório" },
    { Objeto: "Espelho", Profissional: "Mecânico", Ação: "Pintar", Animal: "Corvo", Local: "Laboratório" },
    { Objeto: "Bola", Profissional: "Professor", Ação: "Correr", Animal: "Elefante", Local: "Navio" },
    { Objeto: "Óculos", Profissional: "Pintor", Ação: "Calcular", Animal: "Golfinho", Local: "Garagem" },
    { Objeto: "Chave", Profissional: "Policial", Ação: "Desenhar", Animal: "Canguru", Local: "Ateliê" },
    { Objeto: "Relógio", Profissional: "Programador", Ação: "Cozinhar", Animal: "Pavão", Local: "Circo" },
    { Objeto: "Livro", Profissional: "Garçom", Ação: "Fotografar", Animal: "Lobo", Local: "Quartel" },
    { Objeto: "Martelo", Profissional: "Fotógrafo", Ação: "Performar", Animal: "Pinguim", Local: "Teatro" },
    { Objeto: "Celular", Profissional: "Caixa", Ação: "Digitar", Animal: "Águia", Local: "Museu" },
    { Objeto: "Lâmpada", Profissional: "Surfista", Ação: "Guiar", Animal: "Cervo", Local: "Praia" },
    { Objeto: "Câmera", Profissional: "Esteticista", Ação: "Medir", Animal: "Cachorro", Local: "Garagem" },
    { Objeto: "Garrafa", Profissional: "Enfermeiro", Ação: "Trocar", Animal: "Leopardo", Local: "Restaurante" },
    { Objeto: "Telefone", Profissional: "Estudante", Ação: "Misturar", Animal: "Rato", Local: "Spa" },
    { Objeto: "Violão", Profissional: "Engenheiro", Ação: "Examinar", Animal: "Macaco", Local: "Hospital" },
    { Objeto: "Bicicleta", Profissional: "Atendente", Ação: "Servir", Animal: "Peixe", Local: "Call Center" },
    { Objeto: "Tesoura", Profissional: "Arquiteto", Ação: "Responder", Animal: "Formiga", Local: "Obra" },
    { Objeto: "Pincel", Profissional: "Recepcionista", Ação: "Escrever", Animal: "Urso", Local: "Feira" },
    { Objeto: "Calculadora", Profissional: "Chef", Ação: "Prender", Animal: "Coelho", Local: "Restaurante" },
    { Objeto: "Microscópio", Profissional: "Golfista", Ação: "Ler", Animal: "Elefante", Local: "Campo de Golfe" },
    { Objeto: "Fita Métrica", Profissional: "Cabeleireiro", Ação: "Jogar", Animal: "Papagaio", Local: "Salão de Beleza" },
    { Objeto: "Bússola", Profissional: "Contador", Ação: "Tocar", Animal: "Girafa", Local: "Parque" },
    { Objeto: "Espelho", Profissional: "Explorador", Ação: "Medir", Animal: "Castor", Local: "Escola" },
    { Objeto: "Livro de Receitas", Profissional: "Pianista", Ação: "Limpar", Animal: "Coruja", Local: "Universidade" },
    { Objeto: "Prancha de Surf", Profissional: "Diretor", Ação: "Aplicar", Animal: "Golfinho", Local: "Set de Filmagem" },
    { Objeto: "Termômetro", Profissional: "Gamer", Ação: "Filmar", Animal: "Tigre", Local: "Quarto" },
    { Objeto: "Mapa", Profissional: "Músico", Ação: "Saltar", Animal: "Tubarão", Local: "Praça" },
    { Objeto: "Caderno", Profissional: "Zelador", Ação: "Trocar", Animal: "Leão", Local: "Escola" },
    { Objeto: "Régua", Profissional: "Surfista", Ação: "Trocar", Animal: "Macaco", Local: "Aeroporto" },
    { Objeto: "Bola de Cristal", Profissional: "Vidente", Ação: "Desenhar", Animal: "Raposa", Local: "Feira" },
    { Objeto: "Vassoura", Profissional: "Chef", Ação: "Correr", Animal: "Cavalo-marinho", Local: "Cozinha" },
    { Objeto: "Carrinho de Compras", Profissional: "Bombeiro", Ação: "Medir", Animal: "Gato", Local: "Supermercado" },
    { Objeto: "Mochila", Profissional: "Caixa", Ação: "Guiar", Animal: "Tartaruga", Local: "Escola" },
    { Objeto: "Bandeira", Profissional: "Bibliotecário", Ação: "Escrever", Animal: "Pinguim", Local: "Biblioteca" },
    { Objeto: "Piano", Profissional: "Médico", Ação: "Cozinhar", Animal: "Urso", Local: "Hospital" },
    { Objeto: "Varinha", Profissional: "Soldado", Ação: "Calcular", Animal: "Galo", Local: "Quartel" },
    { Objeto: "Raquete", Profissional: "Cantor", Ação: "Atender", Animal: "Camaleão", Local: "Circo" },
    { Objeto: "Prancheta", Profissional: "Fotógrafo", Ação: "Fotografar", Animal: "Papagaio", Local: "Estúdio" },
    { Objeto: "Seringa", Profissional: "Policial", Ação: "Registrar", Animal: "Lobo", Local: "Clínica" },
    { Objeto: "Joystick", Profissional: "Enfermeiro", Ação: "Prever", Animal: "Canguru", Local: "Quarto" },
    { Objeto: "Microfone", Profissional: "Arquiteto", Ação: "Navegar", Animal: "Águia", Local: "Teatro" },
    { Objeto: "Bússola", Profissional: "Atendente", Ação: "Cortar", Animal: "Tigre", Local: "Navio" },
    { Objeto: "Câmera de Vídeo", Profissional: "Gamer", Ação: "Cantar", Animal: "Pássaro", Local: "Set de Filmagem" },
    { Objeto: "Taco de Golfe", Profissional: "Mágico", Ação: "Servir", Animal: "Girafa", Local: "Campo de Golfe" },
    { Objeto: "Chave de Fenda", Profissional: "Recepcionista", Ação: "Jogar", Animal: "Peixe", Local: "Garagem" },
    { Objeto: "Alicate", Profissional: "Ciclista", Ação: "Consertar", Animal: "Ostra", Local: "Escritório" },
    { Objeto: "Faca", Profissional: "Contador", Ação: "Performar", Animal: "Camaleão", Local: "Cozinha" },
    { Objeto: "Lupa", Profissional: "Cientista", Ação: "Calcular", Animal: "Cavalo", Local: "Laboratório" },
    { Objeto: "Serrote", Profissional: "Engenheiro", Ação: "Misturar", Animal: "Panda", Local: "Obra" },
    { Objeto: "Lanterna", Profissional: "Chef", Ação: "Cozinhar", Animal: "Macaco", Local: "Restaurante" },
    { Objeto: "Flauta", Profissional: "Zelador", Ação: "Fotografar", Animal: "Elefante", Local: "Escola" },
    { Objeto: "Cadeado", Profissional: "Atendente", Ação: "Prender", Animal: "Urso", Local: "Aeroporto" },
    { Objeto: "Chave Inglesa", Profissional: "Eletricista", Ação: "Trocar", Animal: "Rato", Local: "Garagem" },
    { Objeto: "Espátula", Profissional: "Padeiro", Ação: "Servir", Animal: "Coelho", Local: "Padaria" },
    { Objeto: "Rolo de Pintura", Profissional: "Artista", Ação: "Pintar", Animal: "Tartaruga", Local: "Ateliê" },
    { Objeto: "Escova de Dentes", Profissional: "Dentista", Ação: "Escovar", Animal: "Cachorro", Local: "Clínica" }
];

let usedPromptCards = new Set();
let usedComplementCards = new Set();
let usedElementCards = new Set();

function generateRandomCard(cardsArray, usedCards) {
    let card;
    do {
        card = cardsArray[Math.floor(Math.random() * cardsArray.length)];
    } while (usedCards.has(card) && usedCards.size < cardsArray.length);
    usedCards.add(card);
    return card;
}

function generateInitialCards() {
    const promptList = document.getElementById('prompt-list');
    const complementList = document.getElementById('complement-list');
    const elementList = document.getElementById('element-list');

    for (let i = 0; i < 3; i++) {
        const promptCard = generateRandomCard(promptCards, usedPromptCards);
        const complementCard = generateRandomCard(complementCards, usedComplementCards);
        const elementCard = generateRandomCard(elementCards, usedElementCards);

        promptList.innerHTML += `<li>${promptCard} <button class="discard-btn" onclick="discardCard('prompt', this)">Descartar</button></li>`;
        complementList.innerHTML += `<li>${complementCard} <button class="discard-btn" onclick="discardCard('complement', this)">Descartar</button></li>`;
        elementList.innerHTML += `<li>${elementCard.Objeto}, ${elementCard.Profissional}, ${elementCard.Ação}, ${elementCard.Animal}, ${elementCard.Local} <button class="discard-btn" onclick="discardCard('element', this)">Descartar</button></li>`;
    }
}

function discardCard(type, button) {
    const listItem = button.parentElement;
    if (type === 'prompt') {
        const newCard = generateRandomCard(promptCards, usedPromptCards);
        listItem.innerHTML = `${newCard} <button class="discard-btn" onclick="discardCard('prompt', this)">Descartar</button>`;
    } else if (type === 'complement') {
        const newCard = generateRandomCard(complementCards, usedComplementCards);
        listItem.innerHTML = `${newCard} <button class="discard-btn" onclick="discardCard('complement', this)">Descartar</button>`;
    } else if (type === 'element') {
        const newCard = generateRandomCard(elementCards, usedElementCards);
        listItem.innerHTML = `${newCard.Objeto}, ${newCard.Profissional}, ${newCard.Ação}, ${newCard.Animal}, ${newCard.Local} <button class="discard-btn" onclick="discardCard('element', this)">Descartar</button>`;
    }
}

// Generate initial set of cards on page load
generateInitialCards();