import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.prompt.deleteMany();

  await prisma.prompt.create({
    data: {
      title: "Título YouTube",
      template: `Seu papel é gerar três títulos para um vídeo do YouTube.

Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar os títulos.
Abaixo você também receberá uma lista de títulos, use essa lista como referência para os títulos a serem gerados.

Os títulos devem ter no máximo 60 caracteres.
Os títulos devem ser chamativos e atrativos para maximizar os cliques.

Retorne APENAS os três títulos em formato de lista como no exemplo abaixo:
'''
- Título 1
- Título 2
- Título 3
'''

Transcrição:
'''
{transcription}
'''`.trim(),
    },
  });

  await prisma.prompt.create({
    data: {
      title: "Descrição YouTube",
      template: `Seu papel é gerar uma descrição para um vídeo do YouTube.
  
Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a descrição.

A descrição deve possuir 3 parágrafos contendo os pontos principais do vídeo.

Use palavras chamativas para cativar a atenção de quem está lendo.

Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.

O retorno deve seguir o seguinte formato:
'''
Descrição.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcrição:
'''
{transcription}
'''`.trim(),
    },
  });

  await prisma.prompt.create({
    data: {
      title: "Thumbnail YouTube",
      template:
        `Seu papel consiste em criar três propostas de capas visualmente atraentes para um vídeo do YouTube, utilizando a transcrição fornecida como referência.

      As capas devem ser projetadas de forma a destacar-se visualmente e atrair a atenção do público-alvo, com o objetivo de maximizar a quantidade de cliques recebidos.  Além disso, cada capa deve incluir uma sugestão de título com até 6 palavras que seja relevante para o conteúdo do vídeo.
      
      É importante que as capas sejam capazes de evocar emoções ou criar conexões emocionais com os futuros espectadores do vídeo, tornando assim mais provável que eles decidam assistir ao conteúdo.
      
      Transcrição:
      '''
      {transcription}
      '''"`.trim(),
    },
  });
  await prisma.prompt.create({
    data: {
      title: "Resumo YouTube",
      template: `Seu papel é gerar um resumo sucinto para um vídeo do YouTube.
  
Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a descrição.

O resumo deve possuir no máximo 80 palavras em primeira pessoa contendo os pontos principais do vídeo.

Use palavras chamativas e que cativam a atenção de quem está lendo.


Transcrição:
'''
{transcription}
'''`.trim(),
    },
  });

  await prisma.prompt.create({
    data: {
      title: "Post para Redes Sociais",
      template:
        `Seu papel consiste em criar um post conciso e cativante de até 100 palavras para promover um vídeo no YouTube nas redes sociais O objetivo é atrair a atenção do público-alvo e incentivá-los a assistir ao vídeo. Use emojis para estabelecer conexão emocional. Inclua uma chamada para ação (CTA) para direcionar os leitores para o vídeo no YouTube.

      O post deve ser baseado na transcrição do vídeo abaixo:
      
           Transcrição:
            '''
            {transcription}
            '''"`.trim(),
    },
  });
  await prisma.prompt.create({
    data: {
      title: "Post para Blog ou Site",
      template:
        `Seu papel é criar um post altamente atraente e otimizado para mecanismos de busca (SEO) em um blog ou site, com o objetivo de promover um vídeo no YouTube. Seu público-alvo deve ser envolvido de forma eficaz para incentivá-los a assistir ao vídeo. Utilize palavras-chave relevantes para garantir uma melhor classificação nos resultados de pesquisa. O conteúdo do post deve ser fundamentado na transcrição do vídeo abaixo para oferecer contexto. Certifique-se de incluir uma chamada para ação (CTA) persuasiva na conclusão do post, direcionando os leitores para o vídeo do YouTube.
      
           Transcrição:
            '''
            {transcription}
            '''`.trim(),
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
