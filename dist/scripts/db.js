// Variables DB
const costume_01 = './assets/img/costumes/costume_01.jpg';
const costume_02 = './assets/img/costumes/costume_02.jpg';
const costume_03 = './assets/img/costumes/costume_03.jpg';
const costume_04 = './assets/img/costumes/costume_04.jpg';
const costume_05 = './assets/img/costumes/costume_05.jpg';
const costume_06 = './assets/img/costumes/costume_06.jpg';
const costume_07 = './assets/img/costumes/costume_07.jpg';
const costume_08 = './assets/img/costumes/costume_08.jpg';
const costume_09 = './assets/img/costumes/costume_09.jpg';
const costume_10 = './assets/img/costumes/costume_10.jpg';
const costume_11 = './assets/img/costumes/costume_11.jpg';
const costume_12 = './assets/img/costumes/costume_12.jpg';
const costume_13 = './assets/img/costumes/costume_13.jpg';
const costume_14 = './assets/img/costumes/costume_14.jpg';
const costume_15 = './assets/img/costumes/costume_15.jpg';
const costume_16 = './assets/img/costumes/costume_16.jpg';
const costume_17 = './assets/img/costumes/costume_17.jpg';
const costume_18 = './assets/img/costumes/costume_18.jpg';
const costume_19 = './assets/img/costumes/costume_19.jpg';

const concept_01 = './assets/img/concepts/concept_01.jpg';
const concept_02 = './assets/img/concepts/concept_02.jpg';
const concept_03 = './assets/img/concepts/concept_03.jpg';
const concept_04 = './assets/img/concepts/concept_04.jpg';
const concept_05 = './assets/img/concepts/concept_05.jpg';
const concept_06 = './assets/img/concepts/concept_06.jpg';
const concept_07 = './assets/img/concepts/concept_07.jpg';
const concept_08 = './assets/img/concepts/concept_08.jpg';
const concept_09 = './assets/img/concepts/concept_09.jpg';
const concept_10 = './assets/img/concepts/concept_10.jpg';
const concept_11 = './assets/img/concepts/concept_11.jpg';

let obj = {
    concepts: [{
            user: '@mosheeno1',
            img: concept_01,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1346971186337640455',
            createdAt: '6 de jan de 2021',
        },
        {
            user: '@mosheeno1',
            img: concept_02,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1351234670030188544',
            createdAt: '18 de jan de 2021',
        },
        {
            user: '@mosheeno1',
            img: concept_03,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1329752224747151366',
            createdAt: '20 de nov de 2020',
        },
        {
            user: '@mosheeno1',
            img: concept_04,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1332000210025844736',
            createdAt: '26 de nov de 2020',
        },
        {
            user: '@mosheeno1',
            img: concept_05,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1349446875993300992',
            createdAt: '13 de jan de 2021',
        },
        {
            user: '@mosheeno1',
            img: concept_06,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1351489025492856832',
            createdAt: '19 de jan de 2021',
        },
        {
            user: '@mosheeno1',
            img: concept_07,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1356295179058229248',
            createdAt: '1 de fev de 2021',
        },
        {
            user: '@mosheeno1',
            img: concept_08,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1340013200352432129',
            createdAt: '18 de dez de 2020',
        },
        {
            user: '@mosheeno1',
            img: concept_09,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1338137627816570882',
            createdAt: '13 de dez de 2020',
        },
        {
            user: '@mosheeno1',
            img: concept_10,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1351489025492856832',
            createdAt: '19 de jan de 2021',
        },
        {
            user: '@mosheeno1',
            img: concept_11,
            tweet: 'https://mobile.twitter.com/mosheeno1/status/1351489025492856832',
            createdAt: '19 de jan de 2021',
        },
    ],
    costumes: [{
            title: 'Capuz Carmesim',
            img: costume_01,
            description: 'A modificação deste traje faz com que os inimigos não escutem mais os Abates com Teia enquanto Camuflado.',
            level: 9,
            fichas: 14
        },
        {
            title: 'Esportivo',
            img: costume_02,
            description: 'Visual inicial da aventura, o Traje Esportivo tem a máscara e peitoral da roupa de Peter Parker.',
            level: 'Free',
            fichas: 'Free'
        },
        {
            title: 'Animado',
            img: costume_03,
            description: 'A modificação deste traje faz com que inimigos demorem mais para escapar das teias.',
            level: 7,
            fichas: 20
        },
        {
            title: 'Brooklyn Visions Academy',
            img: costume_04,
            description: 'A modificação deste traje aumenta a quantidade de Poder Venom adquirido ao realizar acrobacias aéreas.',
            level: 8,
            fichas: 12
        },
        {
            title: 'Clássico',
            img: costume_05,
            description: 'A modificação deste traje cria um impacto quando as armas do Underground são destruídas.',
            level: 'Free',
            fichas: 'Free'
        },
        {
            title: 'A.T.A.C.',
            img: costume_06,
            description: 'A modificação deste traje faz com que a geração de Poder Venom aumente conforme a saúde de Miles diminui.',
            level: 10,
            fichas: 16
        },
        {
            title: 'Inverno',
            img: costume_07,
            description: 'O Traje de Inverno é outra variação do clássico, mas agora com um gorro, protetores de orelhas, pernas e um cachecol para se proteger do frio.',
            level: 'Free',
            fichas: 'Free'
        },
        {
            title: 'Matéria Programável',
            img: costume_08,
            description: 'Visual diferente e inédito de Miles para seu novo jogo, o Traje de Matéria Programável é conquistado ao acabar com todos os esconderijos de Roxxon e Underground no mapa.',
            level: 'Free',
            fichas: 'Free'
        },
        {
            title: 'Fim',
            img: costume_09,
            description: 'A modificação deste traje faz com que a Camuflagem seja drenada mais lentamente ao ficar parado.',
            level: 11,
            fichas: 16
        },
        {
            title: 'Grande Responsabilidade',
            img: costume_10,
            description: 'O nome do uniforme é uma referência à famosa frase do tio Ben, figura paterna de Peter Parker: "com grandes poderes vêm grandes responsabilidades."',
            level: 'Free',
            fichas: 'Free'
        },
        {
            title: 'Into the Spider-verse',
            img: costume_11,
            description: 'O Traje Into the Spiderverse é uma recriação do visual de Miles no filme animado Homem-Aranha: No Aranhaverso.',
            level: 13,
            fichas: 18
        },
        {
            title: 'Miles Morales 2020',
            img: costume_12,
            description: 'Este traje era originalmente uma forma de promover a linha de HQs Iron Man 2020, mas fez sua transição para o mundo dos games.',
            level: 'Free',
            fichas: 'Free'
        },
        {
            title: 'Miles Morales 2099',
            img: costume_13,
            description: 'A modificação deste traje diminui a eficácia das granas arremessadas pelas tropas da Roxxon que limitam a utilização dos Ataques Venom.',
            level: 12,
            fichas: 14
        },
        {
            title: 'Orgulho do Harlem',
            img: costume_14,
            description: 'Esta é essencialmente uma variação do Traje Clássico, mas com detalhes em dourado ao invés de vermelho.',
            level: 'Free',
            fichas: 'Free'
        },
        {
            title: 'Soberania Roxa',
            img: costume_15,
            description: 'A modificação deste traje repõe uma munição de dispositivo durante um Abate Furtivo corpo a corpo em um inimigo.',
            level: 'Free',
            fichas: 'Free'
        },
        {
            title: 'S.P.O.R.T.',
            img: costume_16,
            description: 'A modificação deste traje diminui o dano de ataques à distância sofridos por Miles Morales em 25%.',
            level: 6,
            fichas: 10
        },
        {
            title: 'Amador',
            img: costume_17,
            description: 'A modificação trazida com o Traje Amador aumenta o dano causado por objetos arremessados em inimigos.',
            level: 5,
            fichas: 7
        },
        {
            title: 'Spider-treino',
            img: costume_18,
            description: 'A modificação deste traje permite que você cancele a Camuflagem transferindo o restante da barra para as barras do Poder Venom.',
            level: 'Free',
            fichas: 20
        },
        {
            title: 'Gato da mercearia',
            img: costume_19,
            description: 'Neste traje, Miles terá a oportunidade de ter um companheiro de batalha no forma do Gato-Aranha.',
            level: 'Free',
            fichas: 'Free'
        }
    ]
}

export {
    obj
};