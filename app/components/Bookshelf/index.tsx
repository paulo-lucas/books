import React from 'react';
import { FlatList } from 'react-native';
import { Volume } from '@app/interfaces/volume';
import Book from './Book';
import Empty from './Empty';

interface BookshelfProps {
  volumes?: Array<Volume>;
}

interface RenderItemArgs {
  item: any;
}

export const Bookshelf: React.FC<BookshelfProps> = () => {
  const renderItem = ({ item }: RenderItemArgs) => {
    return (
      <Book
        title={item.volumeInfo.title}
        publisher={item.volumeInfo.publisher}
        thumbnail={item.volumeInfo.imageLinks.thumbnail}
        authors={item.volumeInfo.authors}
      />
    );
  };

  return (
    <FlatList
      data={fakeVolumes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListEmptyComponent={Empty}
      numColumns={2}
    />
  );
};

const fakeVolumes = [
  {
    kind: 'books#volume',
    id: '5erxL7J8q8AC',
    etag: 'zgzjNAnZFnE',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/5erxL7J8q8AC',
    volumeInfo: {
      title: 'A linguagem ao vivo',
      publisher: 'Universidade do Porto',
      publishedDate: '2009',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9789728932459',
        },
        {
          type: 'ISBN_10',
          identifier: '9728932456',
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 229,
      printType: 'BOOK',
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.0.1.0.preview.1',
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=5erxL7J8q8AC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=5erxL7J8q8AC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'pt',
      previewLink:
        'http://books.google.com.br/books?id=5erxL7J8q8AC&pg=PA123&dq=a&hl=&cd=11&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=5erxL7J8q8AC&dq=a&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_linguagem_ao_vivo.html?hl=&id=5erxL7J8q8AC',
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=5erxL7J8q8AC&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'panhe <b>a</b> forma visual/gráfica dos grupos de sentido que lhe são lidos, tem em vista, depois de se lhe ter ocultado o modelo, não só <b>a</b> reprodução oral das palavras propostas, mas também <b>a</b> sua possível reprodução gráfica.',
    },
  },
  {
    kind: 'books#volume',
    id: 'ILNkt_DLlXcC',
    etag: '+GXzrXjM0YI',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/ILNkt_DLlXcC',
    volumeInfo: {
      title: 'A escrita em projecto',
      authors: ['Nazaré Trigo Coimbra'],
      publisher: 'Edições Ecopy',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9789898080936',
        },
        {
          type: 'ISBN_10',
          identifier: '9898080930',
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      printType: 'BOOK',
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=ILNkt_DLlXcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=ILNkt_DLlXcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'pt',
      previewLink:
        'http://books.google.com.br/books?id=ILNkt_DLlXcC&pg=PA35&dq=a&hl=&cd=12&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=ILNkt_DLlXcC&dq=a&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_escrita_em_projecto.html?hl=&id=ILNkt_DLlXcC',
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=ILNkt_DLlXcC&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        '<b>A</b> Escrita em Projecto cativas. Como afirma o poeta F. Pessoa (2000, p. 172), <b>a</b> língua é o símbolo maior da pátria, ao possibilitar uma comunicação e identificação comuns, através da criação de uma cultura singular que perdura no tempo.',
    },
  },
  {
    kind: 'books#volume',
    id: 'H0taAAAAYAAJ',
    etag: 'NWeOcb3eenw',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/H0taAAAAYAAJ',
    volumeInfo: {
      title:
        'A Study of Income and Expenditures in Sixty Colleges. Year 1953-54',
      authors: [
        'National Federation of College and University Business Officers Associations',
      ],
      publishedDate: '1955',
      industryIdentifiers: [
        {
          type: 'OTHER',
          identifier: 'CORNELL:31924002268443',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 183,
      printType: 'BOOK',
      categories: ['Universities and colleges'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.2.1.0.preview.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=H0taAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=H0taAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com.br/books?id=H0taAAAAYAAJ&q=a&dq=a&hl=&cd=13&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=H0taAAAAYAAJ&dq=a&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_Study_of_Income_and_Expenditures_in_Si.html?hl=&id=H0taAAAAYAAJ',
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'BR',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=H0taAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'E /A A &#39;A A _ AV A A A AA <b>A</b> \\. A A A A A _ <b>A</b> _ _ <b>A</b> &#39; <b>A</b> _A A A A A A A A A <b>A</b>&#39; A A A J_ B A A AA <b>A</b> . <b>A</b> ~ AA A A I A _ <b>A</b>__A A fi_&#39; _AA A I A &#39;P A A AA A A A A I AA &#39;<b>A</b> &#39; <b>A</b> AA J <b>A</b>&#39; AA B A A A ~_ ~ &#39;AA AA _ A A A A _ . A A AA A  A ~ A I , <b>A</b> &#39;&nbsp;...',
    },
  },
  {
    kind: 'books#volume',
    id: 'YRnPBAAAQBAJ',
    etag: 'mm4vk9wkz1I',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/YRnPBAAAQBAJ',
    volumeInfo: {
      title:
        'EXPERIÊNCIA ESTÉTICA E FORMAÇÃO: articulação a partir da Hans-Georg Gadamer',
      subtitle: '',
      authors: ['Clenio Lago '],
      publisher: 'EDIPUCRS',
      publishedDate: '2014-10-14',
      description:
        'No contexto da crise paradigmática, em que não somente a ideia de verdade mas também os ideais educacionais entram em crise, a própria razão, concebida no racionalismo clássico como autossuficiente, é convidada a colocar-se na escuta do outro, situação em que a experiência estética, antes relegada a segundo plano, emerge como possibilidade de escuta. Em um mundo contemporâneo marcado por inúmeros desafios, dentre eles o desafio da diversidade, da instrumentalização do mundo da vida pela racionalidade técnico-instrumental, é acertado abordar a relação entre experiência estética e for- mação, devido ao fato de a experiência estética constituir-se em um momento significativo ao processo de formação pelo qual aprendemos. A tese defendida é a de que a articulação entre estética e formação, a partir de Gadamer, constitui-se em uma alternativa plausível aos desafios do empobrecimento da experiência em meio à ruptura da metafísica, na medida em que, compreendendo a experiência estética como ontológica, confere atualidade à Bildung.',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788539704026',
        },
        {
          type: 'ISBN_10',
          identifier: '8539704021',
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 115,
      printType: 'BOOK',
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=YRnPBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=YRnPBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'pt',
      previewLink:
        'http://books.google.com.br/books?id=YRnPBAAAQBAJ&pg=PA65&dq=a&hl=&cd=14&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=YRnPBAAAQBAJ&dq=a&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/EXPERI%C3%8ANCIA_EST%C3%89TICA_E_FORMA%C3%87%C3%83O_arti.html?hl=&id=YRnPBAAAQBAJ',
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=YRnPBAAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'Experiência Estética e Formação: Articulação <b>a</b> partir de Hans-Georg Gadamer Kant, na medida em que apenas podemos tentar adivinhar sobre o que contém o interior. Com base no exposto, é importante ter claro que, diferentemente de Kant,&nbsp;...',
    },
  },
  {
    kind: 'books#volume',
    id: 'kfvHeFh3I6QC',
    etag: '7hlYW379uTE',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/kfvHeFh3I6QC',
    volumeInfo: {
      title: 'A Universidade de Coimbra: o tangível e o intangível',
      subtitle: 'o tangível e o intangível',
      authors: ['José Francisco de Faria Costa', 'Maria Helena da Cruz Coelho'],
      publisher:
        'Imprensa da Universidade de Coimbra / Coimbra University Press',
      publishedDate: '2009-11-01',
      description:
        'Tangível e Intangível é um projeto-livro de apresentação e exposição da Universidade de Coimbra ao Mundo. Experiência inédita e longamente maturada, reúne vários dos nossos melhores autores (Aníbal Pinto de Castro, Lélio Quaresma Lobo, Maria José Azevedo Santos, Vítor Serrão), que, sob a coordenação dos Senhores Professores Maria Helena da Cruz Coelho e José Francisco de Faria Costa, nos guiam numa visita inesquecível por três continentes onde se encerram os melhores tesouros da Universidade de Coimbra, fundada em 1290 pelo rei D. Dinis: o Património Artístico, o Património Documental e o Património Científico (incluindo aqui as valiosas coleções dos nossos museus de ciência). Trata-se, portanto, de um livro que fala, profusamente ilustrado por belíssimas fotografias de João Armando Ribeiro, num conjunto muito cuidado e sóbrio, com design e edição de imagem de António Barros, revestido de uma encadernação em capa dura conforme à ambição deste projeto nascido no seio da Universidade de Coimbra há cerca de 10 anos e agora finalmente concretizado. O facto de se tratar de uma edição bilingue (Português-Inglês) dará asas a este sonho e fará chegar ainda mais longe a história e a riqueza patrimonial de uma universidade que foi, durante séculos, única em Portugal. Um livro especial, para ler e para rever sempre, para oferecer em momentos particulares e a destinatários selecionados. Um livro que não se esgota porque é, ele mesmo, um desafio à nossa curiosidade intelectual, à nossa cultura e à nossa vontade de conhecer melhor esse tanto da história de Portugal que a Universidade de Coimbra transporta, com muito orgulho, dentro de si.',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9789898074416',
        },
        {
          type: 'ISBN_10',
          identifier: '9898074418',
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 345,
      printType: 'BOOK',
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.2.1.0.preview.1',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=kfvHeFh3I6QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=kfvHeFh3I6QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'pt',
      previewLink:
        'http://books.google.com.br/books?id=kfvHeFh3I6QC&pg=PA11&dq=a&hl=&cd=15&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=kfvHeFh3I6QC&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=kfvHeFh3I6QC',
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 27.5,
        currencyCode: 'BRL',
      },
      retailPrice: {
        amount: 27.5,
        currencyCode: 'BRL',
      },
      buyLink:
        'https://play.google.com/store/books/details?id=kfvHeFh3I6QC&rdid=book-kfvHeFh3I6QC&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 27500000,
            currencyCode: 'BRL',
          },
          retailPrice: {
            amountInMicros: 27500000,
            currencyCode: 'BRL',
          },
          giftable: true,
        },
      ],
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/A_Universidade_de_Coimbra_o_tang%C3%ADvel_e-sample-pdf.acsm?id=kfvHeFh3I6QC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=kfvHeFh3I6QC&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        '<b>a</b> universidade de Coimbra e as artes uma dimensão do sublime Sentidos da viagem na escultura de Rui Chafes: <b>a</b> praxis da ciência e o sublime Olhemos em primeiro lugar para <b>a</b> escultura de Rui Chafes, moldada em 2000 e destinada <b>a</b> integrar&nbsp;...',
    },
  },
  {
    kind: 'books#volume',
    id: 'frLpLI7_tmIC',
    etag: 'QAYWEJrhgBE',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/frLpLI7_tmIC',
    volumeInfo: {
      title: 'A escola secundária',
      subtitle: 'modelos e planos (Brasil, séculos XIX e XX)',
      publisher: 'Annablume',
      publishedDate: '2003',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8574193453',
        },
        {
          type: 'ISBN_13',
          identifier: '9788574193458',
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 239,
      printType: 'BOOK',
      categories: ['Education, Secondary'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.2.2.0.preview.1',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=frLpLI7_tmIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=frLpLI7_tmIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'pt',
      previewLink:
        'http://books.google.com.br/books?id=frLpLI7_tmIC&pg=PA32&dq=a&hl=&cd=16&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=frLpLI7_tmIC&dq=a&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_escola_secund%C3%A1ria.html?hl=&id=frLpLI7_tmIC',
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=frLpLI7_tmIC&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        '<b>a</b> elas atribuída , de maneira geral , também permaneceu praticamente inalterada . Em relação aos estudos históricos , <b>a</b> reforma de 1870 rompeu com <b>a</b> antiga organização dos estudos que havia sido restaurada em 1862 : <b>a</b> manutenção de&nbsp;...',
    },
  },
  {
    kind: 'books#volume',
    id: 'EacaAQAAIAAJ',
    etag: 'KPkkQqbBZn0',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/EacaAQAAIAAJ',
    volumeInfo: {
      title: 'A Grammar of Yeyi',
      subtitle: 'A Bantu Language of Southern Africa',
      authors: ['Frank Seidel'],
      publishedDate: '2008',
      industryIdentifiers: [
        {
          type: 'OTHER',
          identifier: 'STANFORD:36105122578870',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 464,
      printType: 'BOOK',
      categories: ['Bantu languages'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '1.5.4.0.preview.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=EacaAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=EacaAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com.br/books?id=EacaAQAAIAAJ&q=a&dq=a&hl=&cd=17&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=EacaAQAAIAAJ&dq=a&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_Grammar_of_Yeyi.html?hl=&id=EacaAQAAIAAJ',
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'BR',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=EacaAQAAIAAJ&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'The last examples ( 1310 - 1312 ) show that even nominal phrases marked by prepositional clitics for example in <b>a</b> comitative role , can be relativized . Here are some examples in combination with various tenses .',
    },
  },
  {
    kind: 'books#volume',
    id: 'qMRtAAAAMAAJ',
    etag: 'QGnOTZTyB2Q',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/qMRtAAAAMAAJ',
    volumeInfo: {
      title: 'A Field Guide for Human Skeletal Identification',
      authors: ['Kenneth A. Bennett'],
      publisher: 'Charles C Thomas Pub Limited',
      publishedDate: '1993',
      industryIdentifiers: [
        {
          type: 'OTHER',
          identifier: 'IND:30000038069419',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 113,
      printType: 'BOOK',
      categories: ['Social Science'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '1.2.2.0.preview.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=qMRtAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=qMRtAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com.br/books?id=qMRtAAAAMAAJ&q=a&dq=a&hl=&cd=18&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=qMRtAAAAMAAJ&dq=a&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_Field_Guide_for_Human_Skeletal_Identif.html?hl=&id=qMRtAAAAMAAJ',
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'BR',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=qMRtAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'YEARS 2 c,\\ crown -a c,r dc -<b>a</b> R: -<b>a</b> RJ -<b>a</b> Rl 9 -<b>a</b> R] ROOT -<b>a</b> R, -<b>a</b> At -<b>a A</b>, ROOT APEX -0 CrJ CROWN -*— <b>a</b> Cr, o a « — <b>a</b> — o R; o-a — • — <b>a</b> — o Cull dm, 0 <b>a</b> • &quot; -° R* o a . <b>a</b> □ Rt R00T t&gt; — <b>a</b> — • — a o R i o--<b>a</b> — » <b>a</b> □ Rc <b>a</b> — <b>a</b>&nbsp;...',
    },
  },
  {
    kind: 'books#volume',
    id: '408ic3naRVIC',
    etag: 'siYY8swlDxY',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/408ic3naRVIC',
    volumeInfo: {
      title: 'A Blade of Fern',
      authors: ['Edith L. Tiempo'],
      publishedDate: '1978',
      industryIdentifiers: [
        {
          type: 'OTHER',
          identifier: 'UOM:39015030039377',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 161,
      printType: 'BOOK',
      categories: ['Philippines fiction (English)'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '3.7.2.0.preview.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=408ic3naRVIC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=408ic3naRVIC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com.br/books?id=408ic3naRVIC&q=a&dq=a&hl=&cd=20&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=408ic3naRVIC&dq=a&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_Blade_of_Fern.html?hl=&id=408ic3naRVIC',
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'BR',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=408ic3naRVIC&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'kalaw – <b>a</b> forest bird coloured black , and with <b>a</b> low harsh cry laua - an – <b>a</b> forest tree ; the wood is very commonly used for building houses and for furniture luau – from the Hawaiian ; <b>a</b> feast or festive meal madre - de - cacao – <b>a</b>&nbsp;...',
    },
  },
];
