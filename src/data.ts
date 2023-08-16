type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Siciliana",
    desc: "Acenda seu paladar com uma combinação ardente de calabresa picante, jalapeños, flocos de pimenta vermelha esmagados e queijo mussarela derretido, dando um chute a cada mordida.",
    img: "/temporary/p1.png",
    price: 54.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Delicie-se com um hambúrguer de carne grelhada na chama, coberto com bacon crocante, queijo cheddar derretido, cebola caramelizada e um punhado de molho de churrasco picante.",
    img: "/temporary/p2.png",
    price: 59.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napolitana",
    desc: "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromáticas cobertas com alface, tomate e um montão de maionese picante.",
    img: "/temporary/p3.png",
    price: 54.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Apimentada Nervosa",
    desc: "Acenda seu paladar com esta criação de massa ardente, combinando penne em um molho de tomate picante infundido com alho, flocos de pimenta vermelha e manjericão fresco para a melhor experiência de comida caseira.",
    img: "/temporary/p4.png",
    price: 56.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Um suculento hambúrguer de carne, jalapenos ardentes, queijo pepper jack e um molho picante de maionese chipotle e todos os ingredientes clássicos em um pão torrado.",
    img: "/temporary/p5.png",
    price: 59.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Margherita Mágica",
    desc: "Uma pizza atemporal com um toque especial, apresentando uma crosta fina coberta com tomate doce, manjericão fresco, mussarela cremosa e um fiozinho de azeite de oliva extra virgem, rúcula fresca e um fiozinho de glacê balsâmico.",
    img: "/temporary/p6.png",
    price: 54.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Garlic Parmesan Linguine",
    desc: "Uma delícia para os amantes de alho, com espaguete envolto em molho cremoso de parmesão, infundido com alho e guarnecido com salsa picada, pimentão e tomate cereja.",
    img: "/temporary/p7.png",
    price: 58.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Prazer do Mediterrâneo",
    desc: "Embarque em uma jornada culinária com esta criação de inspiração mediterrânea, com queijo feta picante, azeitonas Kalamata, tomate seco e uma pitada de orégano.",
    img: "/temporary/p8.png",
    price: 62.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Teriyaki havaiano",
    desc: "Experimente o sabor dos trópicos com um suculento hambúrguer de carne coberto com molho teriyaki picante, abacaxi grelhado, bacon crocante e alface fresca e todos os acompanhamentos clássicos em um pão torrado.",
    img: "/temporary/p9.png",
    price: 59.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
];




export const pizzas: Products = [
  {
    id: 1,
    title: "Siciliana",
    desc: "Acenda seu paladar com uma combinação ardente de pepperoni picante, jalapeños, flocos de pimenta vermelha esmagados e queijo mussarela derretido, dando um chute a cada mordida.",
    img: "/temporary/p1.png",
    price: 54.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Prazer do Mediterrâneo",
    desc: "Embarque em uma jornada culinária com esta criação de inspiração mediterrânea, com queijo feta picante, azeitonas Kalamata, tomate seco e uma pitada de orégano.",
    img: "/temporary/p8.png",
    price: 62.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napolitana",
    desc: "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromáticas cobertas com alface, tomate e um montão de maionese picante.",
    img: "/temporary/p3.png",
    price: 56.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromáticas cobertas com alface, tomate e um montão de maionese picante.",
    img: "/temporary/p10.png",
    price: 58.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Supremo Vegetariano",
    desc: "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromáticas cobertas com alface, tomate e um montão de maionese picante.",
    img: "/temporary/p11.png",
    price: 54.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Fantasia Quatro Queijos",
    desc: "Experimente a pura felicidade do queijo com uma mistura derretida de queijos mussarela, cheddar, provolone e parmesão, criando uma experiência de pizza rica e saborosa.",
    img: "/temporary/p12.png",
    price: 52.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Siciliana",
  desc: "Acenda seu paladar com uma combinação ardente de pepperoni picante, jalapeños, flocos de pimenta vermelha esmagados e queijo mussarela derretido, dando um chute a cada mordida.",
  img: "/temporary/p1.png",
  price: 54.9,
  options: [
    {
      title: "Pequena",
      additionalPrice: 0,
    },
    {
      title: "Média",
      additionalPrice: 4,
    },
    {
      title: "Grande",
      additionalPrice: 6,
    },
  ],
};


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "massas",
    title: "Massas Italianas",
    desc: "Saboreie o sabor da perfeição com nosso requintado cardápio de massas artesanais italianas.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "hambúrgueres",
    title: "Hambúrgueres Suculentos",
    desc: "Hambúrguer Abençoado: carne suculenta, sabor intenso, e coberturas gourmet em abundância.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Pizza de Queijo",
    desc: "Pizza Paraíso: Fatias irresistíveis, coberturas de dar água na boca e perfeição no queijo.",
    img: "/temporary/m3.png",
    color: "white",
  },
]