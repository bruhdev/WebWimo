      
    
  console.log('JS rodando');

let dados = [

  // Array de objetos, cada um representando um dia com informações sobre a fase da lua

  {

    titulo: "Sep 01 2024",

    descricao: "Waning Moon: The Moon is decreasing in size, time for release, letting go, and banishing negativity. Clean the floor with rue tea. Fumigate the house with sage. Take off your shoes and walk on the earth. Write down everything you want to banish and burn it."

  },

  {

    titulo: "Sep 02 2024",

    descricao: "New Moon: The Moon is not visible, time for new beginnings, setting intentions, and planting seeds. Define or conclude new projects. Do something manual. Light candles and take a basil bath. Drink a rosemary tea."

  },

  {

    titulo: "Sep 03 2024",

    descricao: "New Moon: The Moon is not visible, time for new beginnings, setting intentions, and planting seeds. Define or conclude new projects. Do something manual. Light candles and take a basil bath. Drink a rosemary tea."

  },

  {

    titulo: "Sep 04 2024",

    descricao: "New Moon: The Moon is not visible, time for new beginnings, setting intentions, and planting seeds. Define or conclude new projects. Do something manual. Light candles and take a basil bath. Drink a rosemary tea."

  },

  {

    titulo: "Sep 05 2024",

    descricao: "New Moon: The Moon is not visible, time for new beginnings, setting intentions, and planting seeds. Define or conclude new projects. Do something manual. Light candles and take a basil bath. Drink a rosemary tea."

  },

  {

    titulo: "Sep 06 2024",

    descricao: "New Moon: The Moon is not visible, time for new beginnings, setting intentions, and planting seeds. Define or conclude new projects. Do something manual. Light candles and take a basil bath. Drink a rosemary tea."

  },

  {

    titulo: "Sep 07 2024",

    descricao: "New Moon: The Moon is not visible, time for new beginnings, setting intentions, and planting seeds. Define or conclude new projects. Do something manual. Light candles and take a basil bath. Drink a rosemary tea."

  },

  {

    titulo: "Sep 08 2024",

    descricao: "New Moon: The Moon is not visible, time for new beginnings, setting intentions, and planting seeds. Define or conclude new projects. Do something manual. Light candles and take a basil bath. Drink a rosemary tea."

  },

  {

    titulo: "Sep 09 2024",

    descricao: "New Moon: The Moon is not visible, time for new beginnings, setting intentions, and planting seeds. Define or conclude new projects. Do something manual. Light candles and take a basil bath. Drink a rosemary tea."

  },

  {

    titulo: "Sep 10 2024",

    descricao: "New Moon: The Moon is not visible, time for new beginnings, setting intentions, and planting seeds. Define or conclude new projects. Do something manual. Light candles and take a basil bath. Drink a rosemary tea."

  },

  {

    titulo: "Sep 11 2024",

    descricao: "Crescent Moon: The Moon is growing, time of new beginnings, growth, and setting intentions. Manifest your intentions. Fumigate the house with rosemary. Connect with nature. Light candles and take a relaxing bath."

  },

  {

    titulo: "Sep 12 2024",

  descricao: "Crescent Moon: The Moon is growing, time of new beginnings, growth, and setting intentions. Manifest your intentions. Fumigate the house with rosemary. Connect with nature. Light candles and take a relaxing bath."

  },

  {

    titulo: "Sep 13 2024",

    descricao: "Crescent Moon: The Moon is growing, time of new beginnings, growth, and setting intentions. Manifest your intentions. Fumigate the house with rosemary. Connect with nature. Light candles and take a relaxing bath."

  },

  {

    titulo: "Sep 14 2024",

  descricao: "Crescent Moon: The Moon is growing, time of new beginnings, growth, and setting intentions. Manifest your intentions. Fumigate the house with rosemary. Connect with nature. Light candles and take a relaxing bath."

  },

  {

    titulo: "Sep 15 2024",

    descricao: "Crescent Moon: The Moon is growing, time of new beginnings, growth, and setting intentions. Manifest your intentions. Fumigate the house with rosemary. Connect with nature. Light candles and take a relaxing bath."

  },

  {

    titulo: "Sep 16 2024",

    descricao: "Crescent Moon: The Moon is growing, time of new beginnings, growth, and setting intentions. Manifest your intentions. Fumigate the house with rosemary. Connect with nature. Light candles and take a relaxing bath."

  },

  {

    titulo: "Sep 17 2024",

    descricao: "Full Moon: The Moon is at its fullest, time of peak energy, manifestation, and abundance. Consult the tarot. Make moon water. Energize your crystals overnight. Make potions or rituals for love."

  },

  {

    titulo: "Sep 18 2024",

    descricao: "Full Moon: The Moon is at its fullest, time of peak energy, manifestation, and abundance. Consult the tarot. Make moon water. Energize your crystals overnight. Make potions or rituals for love."

  },

  {

    titulo: "Sep 19 2024",

    descricao: "Full Moon: The Moon is at its fullest, time of peak energy, manifestation, and abundance. Consult the tarot. Make moon water. Energize your crystals overnight. Make potions or rituals for love."

  },

  {

    titulo: "Sep 20 2024",

    descricao: "Full Moon: The Moon is at its fullest, time of peak energy, manifestation, and abundance. Consult the tarot. Make moon water. Energize your crystals overnight. Make potions or rituals for love."

  },

  {

    titulo: "Sep 21 2024",

    descricao: "Full Moon: The Moon is at its fullest, time of peak energy, manifestation, and abundance. Consult the tarot. Make moon water. Energize your crystals overnight. Make potions or rituals for love."

  },

  {

    titulo: "Sep 22 2024",

    descricao: "Full Moon: The Moon is at its fullest, time of peak energy, manifestation, and abundance. Consult the tarot. Make moon water. Energize your crystals overnight. Make potions or rituals for love."

  },

  {

    titulo: "Sep 23 2024",

    descricao: "Full Moon: The Moon is at its fullest, time of peak energy, manifestation, and abundance. Consult the tarot. Make moon water. Energize your crystals overnight. Make potions or rituals for love."

  },

  {

    titulo: "Sep 24 2024",

    descricao: "Waning Moon: The Moon is decreasing in size, time for release, letting go, and banishing negativity. Clean the floor with rue tea. Fumigate the house with sage. Take off your shoes and walk on the earth. Write down everything you want to banish and burn it."

  },

  {

    titulo: "Sep 25 2024",

    descricao: "Waning Moon: The Moon is decreasing in size, time for release, letting go, and banishing negativity. Clean the floor with rue tea. Fumigate the house with sage. Take off your shoes and walk on the earth. Write down everything you want to banish and burn it."

  },

  {

    titulo: "Sep 26 2024",

    descricao: "Waning Moon: The Moon is decreasing in size, time for release, letting go, and banishing negativity. Clean the floor with rue tea. Fumigate the house with sage. Take off your shoes and walk on the earth. Write down everything you want to banish and burn it."

  },

  {

    titulo: "Sep 27 2024",

    descricao: "Waning Moon: The Moon is decreasing in size, time for release, letting go, and banishing negativity. Clean the floor with rue tea. Fumigate the house with sage. Take off your shoes and walk on the earth. Write down everything you want to banish and burn it."

  },

  {

    titulo: "Sep 28 2024",

    descricao: "Waning Moon: The Moon is decreasing in size, time for release, letting go, and banishing negativity. Clean the floor with rue tea. Fumigate the house with sage. Take off your shoes and walk on the earth. Write down everything you want to banish and burn it."

    },

  {

  titulo: "Sep 29 2024",

  descricao: "Waning Moon: The Moon is decreasing in size, time for release, letting go, and banishing negativity. Clean the floor with rue tea. Fumigate the house with sage. Take off your shoes and walk on the earth. Write down everything you want to banish and burn it."

},

{

  titulo: "Sep 30 2024",

  descricao: "Waning Moon: The Moon is decreasing in size, time for release, letting go, and banishing negativity. Clean the floor with rue tea. Fumigate the house with sage. Take off your shoes and walk on the earth. Write down everything you want to banish and burn it."

}

  ];


 //about function 
  
console.log('JS rodando');

let dadosabout = [

  { 

    titulo: "Hello, Witch!",

    descrição: "Wimo stands for Witch Moon or/and Witch Mood. The website was created to guide you about the moon energies. Here goes some witch recommendations:",

    links: [

      "https://youtu.be/bl53QRq2kTM?si=sNVITuS8pkhJWk3_",

      "https://pin.it/2OMvT9WON"

    ],

    descricaoFinal: "From a Witch to another, Stay magical!"

  }

];

function about() {

  let section = document.getElementById("resultados-about");

  console.log(section);

  let resultados = "";

  for (let dado of dadosabout) {

    resultados += `

      <div class="resultados-about">

        <h2>${dado.titulo}</h2>

        <p class="descrição-about">${dado.descrição}</p>

        <a href="${dado.links[0]}" target='_blank'>Witch Playlist</a>

        <a href="${dado.links[1]}" target='_blank'>Pinterest deck</a>

        <p class="descrição-about">${dado.descricaoFinal}</p>

      </div>

    `;
    
  }

  section.innerHTML = resultados;

  }

// end about function 

// begning pesquisar function 


 function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada

    if (!campoPesquisa) {

        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"

        return 

    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados

    let resultados = "";

    let titulo = ""; 

    let descricao = "";

    

    // Itera sobre cada dado da lista de dados

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();

        descricao = dado.descricao.toLowerCase();

    

        // se titulo includes campoPesquisa

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ) {

            // cria um novo elemento

            resultados +=  `

            <div class="item-resultado">

                <h2>

                    ${dado.titulo}

                </h2>

                <p class="descricao-meta">${dado.descricao}</p>

            </div>

        `;

        }

    }

    if (!resultados) {

        resultados = "<p>Nada foi encontrado</p>"

    }

    // Atribui os resultados gerados à seção HTML

    section.innerHTML = resultados;

}
