import pg from "pg";
import "dotenv/config";
import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const { PrismaClient } = pkg;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Resetando tabela...");

  // Remove todos os registros
  await prisma.livro.deleteMany();

  console.log("📦 Inserindo Dados Do Livro...");

  await prisma.livro.create({
    data: {
      titulo: "Olhos d'Água",
      capa: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/bookCover/olhos-dagua.png",
      autor: "Conceição Evaristo",
      anoPublicacao: 2014,
      genero_pt:
        "Contos, Escrevivência, Literatura Afro-Brasileira, Realismo Social",
      genero_en:
        "Short Stories, Life-writing, Afro-Brazilian Literature, Social Realism",
      resumo_pt:
        "Olhos D'Água, de Conceição Evaristo, é um poderoso mosaico de narrativas que mergulha nas profundezas da experiência de mulheres negras no Brasil. Mais do que apenas histórias, a obra é um manifesto de resistência e humanidade. Através de contos que exploram temas como pobreza, violência urbana, racismo e ancestralidade, Evaristo constrói um retrato vívido e multifacetado da vida dessas mulheres. Cada personagem é uma janela para a complexidade de suas vidas, revelando suas lutas, sonhos e resiliência. O livro é uma celebração da força e da diversidade das mulheres negras, desafiando estereótipos e convidando o leitor a refletir sobre as injustiças sociais que ainda persistem. Com uma escrita envolvente e poética, Conceição Evaristo nos presenteia com uma obra que é ao mesmo tempo dolorosa e inspiradora, mostrando que, mesmo diante das adversidades, a esperança e a humanidade podem florescer. Olhos D'Água é uma leitura essencial para quem deseja compreender a riqueza e a complexidade da experiência negra no Brasil, e é um testemunho do poder da literatura como ferramenta de resistência e transformação social.",
      resumo_en:
        "Olhos D'Água, by Conceição Evaristo, is a powerful mosaic of narratives that dives into the depths of Black women’s experiences in Brazil. More than just a collection of stories, the work stands as a manifesto of resistance and humanity. Through short stories that explore themes such as poverty, urban violence, racism, and ancestry, Evaristo constructs a vivid and multifaceted portrayal of these women’s lives. Each character serves as a window into the complexity of their existence, revealing their struggles, dreams, and resilience. The book celebrates the strength and diversity of Black women, challenging stereotypes and inviting readers to reflect on the social injustices that still persist. With an engaging and poetic style, Conceição Evaristo offers a work that is both painful and inspiring, showing that even in the face of adversity, hope and humanity can flourish. Olhos D'Água is essential reading for anyone seeking to understand the richness and complexity of the Black experience in Brazil, and it stands as a testament to the power of literature as a tool for resistance and social transformation.",
      personagens: [
        "A Mãe",
        "Ana Davenga",
        "Dito",
        "Vó Bina",
        "Maria",
        "Cida",
        "Lumbiá",
        "Zaíta",
        "Duzu-Querença",
        "Arnaldo",
        "Luamanda",
        "Ayoluwa",
      ],
      contextoHistorico_pt:
        "O contexto histórico de Olhos D'Água, publicado em 2014, é marcado por um período de intensa efervescência social e política no Brasil. Embora a obra tenha sido lançada em pleno século XXI, ela carrega as cicatrizes da redemocratização e o eco da Constituição de 1988, evidenciando o abismo entre os direitos civis prometidos e a realidade de violência e abandono vivenciada nas periferias. A escrita de Conceição Evaristo emerge em um momento de consolidação das políticas de ações afirmativas e das cotas raciais, que permitiram a ascensão de uma nova intelectualidade negra e abriram brechas, ainda que tímidas, no mercado editorial tradicional para vozes historicamente silenciadas.",
      contextoHistorico_en:
        "The historical context of Olhos D'Água, published in 2014, is marked by a period of intense social and political effervescence in Brazil. Although the work was released in the 21st century, it carries the scars of redemocratization and echoes the 1988 Constitution, highlighting the gap between the civil rights it promised and the reality of violence and neglect experienced in the outskirts. Conceição Evaristo’s writing emerges at a moment when affirmative action policies and racial quotas were becoming consolidated, enabling the rise of a new Black intellectual community and opening, albeit modestly, spaces within the traditional publishing market for voices that had long been silenced.",
      analise_pt:
        "Olhos D'Água é uma obra de escrevivência que humaniza a mulher negra, deslocando-a de estereótipos históricos para o centro da narrativa como sujeito de sua própria história. Através de uma linguagem que equilibra a crueza do realismo social com um lirismo profundo, Conceição Evaristo transforma vivências coletivas em literatura de resistência. A autora utiliza a escrita como um ato de afirmação e resistência, dando voz a personagens que, embora fictícios, representam as experiências reais de muitas mulheres negras no Brasil. A obra é um convite à reflexão sobre as estruturas sociais que perpetuam a marginalização e a violência, ao mesmo tempo em que celebra a força, a resiliência e a humanidade dessas mulheres. Olhos D'Água é um testemunho do poder da literatura como ferramenta de transformação social e um chamado à empatia e à solidariedade.",
      analise_en:
        "Olhos D'Água is a work of life-writing that humanizes Black women, moving them from historical stereotypes to the center of the narrative as subjects of their own stories. Through a language that balances the harshness of social realism with deep lyricism, Conceição Evaristo transforms collective experiences into literature of resistance. The author uses writing as an act of affirmation and resistance, giving voice to characters who, although fictional, represent the real experiences of many Black women in Brazil. The work invites reflection on the social structures that perpetuate marginalization and violence, while also celebrating the strength, resilience, and humanity of these women. Olhos D'Água is a testament to the power of literature as a tool for social transformation and a call for empathy and solidarity.",
    },
  });

    console.log("Inserindo Autor...");

  await prisma.autor.deleteMany();
  await prisma.autor.create({
    data: {
      nome: "Conceição Evaristo",
      fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/author/conceicao-evaristo.png",
      nascimento: "29 de novembro de 1946, nascida em Belo Horizonte (MG)",
      nacionalidade: "Brasileira",
      biografia_pt:
        "Maria da Conceição Evaristo de Brito (Belo Horizonte, 1946) é uma das maiores vozes da literatura brasileira contemporânea. De origem humilde, trabalhou como empregada doméstica enquanto concluía seus estudos, mudando-se para o Rio de Janeiro, onde se formou em Letras e, mais tarde, tornou-se Mestra e Doutora em Literatura. Sua escrita é marcada pelo conceito que ela própria criou: a escrevivência — a escrita que nasce da vivência profunda das mulheres negras na sociedade brasileira. Em obras como \"Olhos D'água\" e \"Ponciá Vicêncio\", ela mistura a realidade crua da violência e do racismo com uma sensibilidade poética ancestral. Suas histórias não são apenas ficção; são gritos de resistência, memória e esperança de um povo que, através da sua voz, deixa de ser objeto e passa a ser protagonista da própria história.",
      biografia_en:
        "Maria da Conceição Evaristo de Brito (Belo Horizonte, 1946) is one of the greatest voices in contemporary Brazilian literature. Born into humble origins, she worked as a domestic servant while finishing her studies, later moving to Rio de Janeiro where she graduated in Literature and later became a Master's and Doctorate holder in Literature. Her writing is marked by the concept she created herself: escrevivência — the writing that is born from the deep lived experience of Black women in Brazilian society. In works such as \"Olhos D'água\" and \"Ponciá Vicêncio\", she mixes the raw reality of violence and racism with an ancestral poetic sensibility. Her stories are not just fiction; they are cries of resistance, memory, and hope from a people who, through her voice, stop being objects and become protagonists of their own history.",
      estilo_escrita_pt:
        "A escrita de Conceição Evaristo nasce diretamente de sua trajetória de vida, criando uma ligação profunda que dá autenticidade à sua obra através do conceito de escrevivência. Mais do que narrar histórias, ela escreve a partir da própria experiência, transformando vivências marcadas pela pobreza e pelo racismo em uma literatura potente. Sua linguagem equilibra a realidade crua com a poesia, preservando a oralidade das ruas e das memórias familiares. Através de metáforas ligadas à natureza — como água, sangue e terra — ela aborda temas como o luto e o abandono, tornando a dor profundamente humana. Seu trabalho dá protagonismo às vozes silenciadas, conferindo dignidade a personagens que a sociedade costuma ignorar. Além disso, sua narrativa rompe o tempo linear para resgatar a ancestralidade, mostrando que a memória é um ato de resistência e esperança.",
      estilo_escrita_en:
        "Conceição Evaristo’s writing arises directly from her life journey, creating a deep connection that gives authenticity to her work through the concept of escrevivência. More than narrating stories, she writes from her own experience, transforming lives marked by poverty and racism into powerful literature. Her language balances raw reality with poetry, preserving the oral quality of the streets and family memories. Through metaphors linked to nature — such as water, blood, and earth — she addresses themes like grief and abandonment, making pain deeply human. Her work gives protagonism to silenced voices, granting dignity to characters that society often ignores. Furthermore, her narrative breaks linear time to recover ancestry, showing that memory is an act of resistance and hope.",
    },
  });

  console.log("📚 Inserindo contos...");

  await prisma.conto.deleteMany();

  await prisma.conto.createMany({
    data: [
      {
        titulo_pt: "Prefácio",
        titulo_en: "Foreword",
        resumo_pt: "O prefácio estabelece o pacto da autora com o leitor. Conceição apresenta o conceito de 'escrevivência', deixando claro que as histórias a seguir não nascem de uma observação distante, mas do 'sangramento' da experiência da população negra no Brasil. A introdução prepara o terreno para uma leitura que vai incomodar, resgatando a memória coletiva de dor, mas também de uma resistência feroz.",
        resumo_en: "The foreword establishes the author's pact with the reader. Conceição introduces the concept of 'escrevivência' (life-writing), making it clear that the stories to follow are not born from distant observation, but from the 'bleeding' of the experience of Black people in Brazil. The introduction prepares the ground for reading that will disturb, rescuing the collective memory of pain, but also of fierce resistance.",
        analise_pt: "O prefácio é um ato político. Conceição avisa que escrever, para ela, é um ato de vingança contra o silenciamento histórico. Ela não oferece uma Literatura com L maiúsculo, deslocada da vida; ela oferece escrevivência — uma escrita que pulsa com o coração de quem viveu. É o chamado à empatia e à responsabilidade do leitor.",
        analise_en: "The foreword is a political act. Conceição warns that writing, for her, is an act of revenge against historical silencing. She does not offer a Literature with a capital L, detached from life; she offers escrevivência — a writing that pulses with the heart of those who lived it. It is a call for the reader's empathy and responsibility.",
      },
      {
        titulo_pt: "Introdução",
        titulo_en: "Introduction",
        resumo_pt: "A introdução contextualiza a obra dentro da trajetória de Conceição Evaristo e da literatura afro-brasileira. Ela situa o leitor na importância de reconhecer as vozes silenciadas e a necessidade urgente de ouvir as histórias daqueles que foram historicamente marginalizados. É um chamado para que o leitor abandone a comodidade de uma leitura passiva.",
        resumo_en: "The introduction contextualizes the work within Conceição Evaristo's trajectory and Afro-Brazilian literature. It positions the reader in the importance of recognizing silenced voices and the urgent need to hear the stories of those who were historically marginalized. It is a call for the reader to abandon the comfort of passive reading.",
        analise_pt: "A análise da introdução revela o compromisso de Evaristo com a verdade e a dignidade. Ela não escreve para agradar, mas para libertar. A introdução é o aviso: 'Prepare-se, você será desconfortável, mas será transformado'. Ela situa a escrita como ferramenta de transformação social.",
        analise_en: "The analysis of the introduction reveals Evaristo's commitment to truth and dignity. She does not write to please, but to liberate. The introduction is the warning: 'Prepare yourself, you will be uncomfortable, but you will be transformed.' She situates writing as a tool for social transformation.",
      },
      {
        titulo_pt: "Olhos d'água",
        titulo_en: "Water Eyes",
        resumo_pt: "A narradora vive atormentada pela dúvida sobre qual era a cor dos olhos de sua mãe. Ao retornar à casa materna, ela mergulha em uma jornada de autodescoberta e ancestralidade. Ela finalmente compreende que os olhos da mãe eram 'cor de olhos d'água': uma imagem poética que funde o rio, o mar e, principalmente, a umidade constante das lágrimas — tanto as de sofrimento pela fome quanto as de alegria pela sobrevivência de suas filhas.",
        resumo_en: "The narrator lives tormented by doubt about the color of her mother's eyes. Upon returning to her mother's house, she immerses herself in a journey of self-discovery and ancestrality. She finally understands that her mother's eyes were 'water-colored eyes': a poetic image that merges the river, the sea, and above all, the constant moisture of tears — both from suffering caused by hunger and from joy for the survival of her daughters.",
        analise_pt: "A análise foca no conceito de ancestralidade. A busca da narradora pela cor dos olhos da mãe é uma metáfora para a busca das raízes da população negra, que muitas vezes foram apagadas. A água simboliza tanto a dor (lágrimas) quanto a vida (fertilidade e renovação), consolidando a ideia de que o trauma e a força caminham juntos na história das mulheres negras.",
        analise_en: "The analysis focuses on the concept of ancestrality. The narrator's search for the color of her mother's eyes is a metaphor for the quest for the roots of the Black population, which have often been erased. Water symbolizes both pain (tears) and life (fertility and renewal), consolidating the idea that trauma and strength walk together in the history of Black women.",
      },
      {
        titulo_pt: "Ana Davenga",
        titulo_en: "Ana Davenga",
        resumo_pt: "Ana vive um amor intenso e marginal com Davenga em uma favela. O barraco deles é o único refúgio contra um mundo que os hostiliza. No entanto, a felicidade do casal é interrompida brutalmente por uma operação policial de madrugada. O conto descreve com crueza o momento em que as balas atravessam o corpo de Ana, que estava grávida, simbolizando como a violência do Estado extermina o futuro das comunidades periféricas.",
        resumo_en: "Ana lives an intense and marginal love with Davenga in a favela. Their shack is the only refuge against a world that hostilizes them. However, the couple's happiness is brutally interrupted by a police operation in the early morning. The short story describes with harshness the moment when bullets pierce Ana's body, who was pregnant, symbolizing how State violence exterminates the future of peripheral communities.",
        analise_pt: "Este conto analisa a criminalização da pobreza e a desumanização dos corpos negros. A morte de Ana, uma mulher grávida e inocente, demonstra que, para o braço armado do Estado, não há distinção entre 'criminoso' e 'morador'. A análise destaca como o amor periférico é constantemente atravessado pela tragédia e pela falta de direito à paz.",
        analise_en: "This short story analyzes the criminalization of poverty and the dehumanization of Black bodies. The death of Ana, a pregnant and innocent woman, demonstrates that, for the armed branch of the State, there is no distinction between 'criminal' and 'resident'. The analysis highlights how peripheral love is constantly crossed by tragedy and the lack of right to peace.",
      },
      {
        titulo_pt: "Duzu-Querença",
        titulo_en: "Duzu-Querença",
        resumo_pt: "Duzu é uma mulher marcada pela loucura e pela exposição constante ao tempo e à crueldade das ruas. Ela vive em um estado de transe, onde o passado de dores se mistura com o presente de privações. O conto obriga o leitor a olhar diretamente para aqueles que desviamos o olhar no dia a dia, revelando a alma ferida de quem foi empurrado para as margens da sanidade.",
        resumo_en: "Duzu is a woman marked by madness and constant exposure to time and the cruelty of the streets. She lives in a trance state, where a past of pain mingles with a present of deprivation. The short story forces the reader to look directly at those we avert our gaze from in everyday life, revealing the wounded soul of one who was pushed to the margins of sanity.",
        analise_pt: "Este conto analisa a loucura como refúgio. Para Duzu, a realidade é tão insuportável que a mente se fragmenta. A análise aponta para a intersecção entre gênero, raça e abandono social, mostrando que a sanidade é quase um luxo impossível para quem vive no limite da exclusão.",
        analise_en: "This short story analyzes madness as refuge. For Duzu, reality is so unbearable that the mind fragments. The analysis points to the intersection of gender, race, and social abandonment, showing that sanity is almost an impossible luxury for those living at the limit of exclusion.",
      },
      {
        titulo_pt: "Maria",
        titulo_en: "Maria",
        resumo_pt: "Maria é uma trabalhadora doméstica que, ao pegar o ônibus para voltar para casa, é confundida com uma cúmplice de um assalto ou simplesmente se torna o alvo da fúria da multidão. O conto descreve a passividade dos passageiros enquanto Maria é linchada verbal e fisicamente. É uma denúncia dolorosa sobre a fragilidade da vida negra em espaços públicos e a rapidez com que a sociedade condena sem provas.",
        resumo_en: "Maria is a domestic worker who, when getting on the bus to go back home, is mistaken for an accomplice to a robbery or simply becomes the target of the crowd's fury. The short story describes the passivity of passengers while Maria is lynched verbally and physically. It is a painful denunciation of the fragility of Black life in public spaces and the speed with which society condemns without proof.",
        analise_pt: "A análise é uma denúncia da indiferença social. O linchamento de Maria dentro de um transporte público serve como uma metáfora da omissão da sociedade brasileira diante da violência contra a mulher negra. Mostra como o preconceito pré-julga e condena sem dar direito à voz ou à defesa.",
        analise_en: "The analysis is a denunciation of social indifference. Maria's lynching inside public transportation serves as a metaphor for Brazilian society's omission in the face of violence against Black women. It shows how prejudice prejudges and condemns without giving the right to voice or defense.",
      },
      {
        titulo_pt: "Quantos filhos Natalina teve?",
        titulo_en: "How Many Children Did Natalina Have?",
        resumo_pt: "Uma reflexão angustiante sobre a negação da maternidade plena. Natalina engravida repetidas vezes, mas seus filhos são frutos de abusos ou lhe são arrancados pela miséria, pelo sistema ou pela morte precoce. Ela não consegue nomear ou contar seus filhos vivos; ela os contabiliza pelas ausências, pelas dores do parto que não resultaram em vida compartilhada. O conto escancara a falta de autonomia reprodutiva e a ruptura dos laços familiares impostas às mulheres negras.",
        resumo_en: "An anguishing reflection on the denial of full motherhood. Natalina becomes pregnant repeatedly, but her children are the fruit of abuse or torn from her by poverty, the system, or premature death. She cannot name or count her living children; she counts them by absences, by the pains of labor that did not result in shared life. The short story lays bare the lack of reproductive autonomy and the breaking of family bonds imposed on Black women.",
        analise_pt: "A análise foca na reprodução forçada e no luto materno. A pergunta 'Quantos filhos Natalina teve?' é impossível de responder porque a maternidade negra é constantemente interrompida. O conto revela como a violência estrutural rouba de mulheres negras o direito fundamental de ser mãe de seus filhos, tornando a maternidade um espaço de dor em vez de alegria.",
        analise_en: "The analysis focuses on forced reproduction and maternal grief. The question 'How many children did Natalina have?' is impossible to answer because Black motherhood is constantly interrupted. The short story reveals how structural violence steals from Black women the fundamental right to be mothers to their children, making motherhood a space of pain instead of joy.",
      },
      {
        titulo_pt: "Beijo na face",
        titulo_en: "Kiss on the Face",
        resumo_pt: "Em contraste com a violência masculina muito presente na obra, este conto foca na solidariedade e no afeto entre mulheres. A narrativa acompanha a aproximação de duas mulheres marcadas pela brutalidade de seus parceiros. Em um ambiente de confiança, elas encontram consolo uma na outra. O 'beijo na face' simboliza a ternura, o acolhimento e a descoberta de um espaço seguro onde o amor e a amizade servem como escudo contra a hostilidade do mundo.",
        resumo_en: "In contrast with the male violence very present in the work, this short story focuses on solidarity and affection between women. The narrative follows the approach of two women marked by the brutality of their partners. In an environment of trust, they find solace in each other. The 'kiss on the face' symbolizes tenderness, care, and the discovery of a safe space where love and friendship serve as a shield against the world's hostility.",
        analise_pt: "O ponto central aqui é a humanização através do afeto. Em uma sociedade que vê a mulher negra apenas como força de trabalho, o direito ao carinho é uma conquista política. A análise explora como pequenos gestos de ternura podem restaurar a psique de indivíduos que foram condicionados a apenas suportar a dor.",
        analise_en: "The central point here is humanization through affection. In a society that sees Black women only as a labor force, the right to care is a political achievement. The analysis explores how small gestures of tenderness can restore the psyche of individuals who have been conditioned to only endure pain.",
      },
      {
        titulo_pt: "Luamanda",
        titulo_en: "Luamanda",
        resumo_pt: "Luamanda é uma mulher madura que recusa o apagamento de seus desejos. O conto é uma ode à sensualidade e ao direito ao prazer da mulher negra mais velha. Apesar das adversidades financeiras e das desilusões amorosas do passado, ela se permite viver a paixão e a sexualidade de forma plena e afirmativa. É uma quebra de estereótipos, mostrando uma protagonista que se apropria do próprio corpo e busca a alegria no afeto e na intimidade.",
        resumo_en: "Luamanda is a mature woman who refuses the erasure of her desires. The short story is an ode to sensuality and the right to pleasure of the older Black woman. Despite financial hardships and romantic disappointments of the past, she allows herself to live passion and sexuality fully and affirmatively. It is a breaking of stereotypes, showing a protagonist who appropriates her own body and seeks joy in affection and intimacy.",
        analise_pt: "A análise encerra a primeira metade do livro com o tema da emancipação sexual. Luamanda representa o despertar da consciência sobre o direito ao prazer. Ela para de trabalhar para os outros e começa a olhar para si. É uma análise sobre o 'basta' necessário para que a mulher negra deixe de ser um objeto e se torne protagonista de sua vida.",
        analise_en: "The analysis ends the first half of the book with the theme of sexual emancipation. Luamanda represents the awakening of consciousness about the right to pleasure. She stops working for others and begins to look at herself. It is an analysis of the 'enough' necessary for Black women to stop being an object and become protagonists of their own lives.",
      },
      {
        titulo_pt: "O cooper de Cida",
        titulo_en: "Cida's Run",
        resumo_pt: "Cida é uma mulher negra que tenta se inserir em um padrão de vida e saúde de classe média, correndo (fazendo cooper) pelas ruas de um bairro nobre. Durante a corrida, ela reflete sobre seu corpo, seu suor e o olhar constante e julgador dos moradores brancos da região. O conto discute o deslocamento social, a objetificação do corpo negro e a exaustão de tentar pertencer a espaços que foram projetados para excluir pessoas como ela.",
        resumo_en: "Cida is a Black woman who tries to fit into a middle-class lifestyle and health pattern by running through the streets of an upscale neighborhood. During the run, she reflects on her body, her sweat, and the constant and judgmental gaze of the white residents in the area. The short story discusses social displacement, the objectification of the Black body, and the exhaustion of trying to belong to spaces designed to exclude people like her.",
        analise_pt: "Este texto analisa a territorialidade e o corpo. O corpo negro 'em movimento' em um bairro de elite gera pânico moral. A análise explora o racismo recreativo e a vigilância constante que recai sobre pessoas negras quando elas tentam usufruir de espaços públicos destinados ao lazer da classe alta.",
        analise_en: "This text analyzes territoriality and the body. The Black body 'in motion' in an elite neighborhood generates moral panic. The analysis explores recreational racism and the constant surveillance that falls on Black people when they try to enjoy public spaces intended for the leisure of the upper class.",
      },
      {
        titulo_pt: "Zaíta esqueceu de guardar os brinquedos",
        titulo_en: "Zaíta Forgot to Put Away the Toys",
        resumo_pt: "De forma brutal e rápida, o conto narra a tarde de Zaíta, uma menina cheia de imaginação brincando no terreiro de casa. A inocência da brincadeira é subitamente rasgada pelo som de um tiroteio. Zaíta é atingida por uma bala perdida. A imagem final dos brinquedos espalhados no chão condensa a tragédia da infância roubada nas favelas, denunciando o genocídio de crianças negras e a banalidade da morte nos territórios marginalizados.",
        resumo_en: "In a brutal and quick manner, the short story narrates Zaíta's afternoon, an imaginative girl playing in her home's yard. The innocence of play is suddenly torn by the sound of gunshots. Zaíta is hit by a stray bullet. The final image of toys scattered on the ground condenses the tragedy of stolen childhood in favelas, denouncing the genocide of Black children and the banality of death in marginalized territories.",
        analise_pt: "A análise foca no impacto do trauma na infância. A morte de Zaíta é apresentada de forma seca e brutal para gerar indignação. O brinquedo esquecido simboliza a vida que não pôde ser vivida plenamente, denunciando a barbárie cotidiana que acontece nas periferias sob o pretexto de 'combate ao crime'.",
        analise_en: "The analysis focuses on the impact of trauma on childhood. Zaíta's death is presented in a dry and brutal way to generate indignation. The forgotten toy symbolizes the life that could not be fully lived, denouncing the daily barbarity that happens in the peripheries under the guise of 'fighting crime'.",
      },
      {
        titulo_pt: "Di lixão",
        titulo_en: "Di of the Landfill",
        resumo_pt: "O cenário é o aterro sanitário, onde a sobrevivência depende daquilo que a cidade vomita. Di é um menino que cresce disputando comida e objetos com urubus e caminhões de lixo. A narrativa mostra a desumanização completa, onde pessoas são tratadas como os resíduos que recolhem. O conto não poupa o leitor do cheiro, da sujeira e da desesperança, mostrando o limite extremo da exclusão social e a perda da infância no meio da miséria.",
        resumo_en: "The setting is the landfill, where survival depends on what the city vomits. Di is a boy who grows up competing for food and objects with vultures and garbage trucks. The narrative shows complete dehumanization, where people are treated as the waste they collect. The short story does not spare the reader from the smell, the filth, and despair, showing the extreme limit of social exclusion and the loss of childhood amid misery.",
        analise_pt: "A análise revela a desumanização absoluta. Di não é uma criança; é um animal lutando por sobrevivência. O conto expõe como o capitalismo reduz pessoas inteiras a zero, tornando-as descartáveis. O lixão é a metáfora perfeita: a sociedade os vê como lixo, resíduos que precisam ser escondidos.",
        analise_en: "The analysis reveals absolute dehumanization. Di is not a child; he is an animal struggling for survival. The short story exposes how capitalism reduces entire people to zero, making them disposable. The landfill is the perfect metaphor: society sees them as garbage, waste that needs to be hidden.",
      },
      {
        titulo_pt: "Lumbiá",
        titulo_en: "Lumbiá",
        resumo_pt: "Lumbiá é um menino de rua que, às vésperas do Natal, fica hipnotizado pela vitrine de uma loja rica que exibe um presépio exuberante. Ele não quer apenas um brinquedo; ele deseja roubar o Menino Jesus para roubar também a vida digna, limpa e sagrada que a estatueta representa, uma vida que lhe é negada. Ao fugir com a imagem, Lumbiá é atropelado no trânsito caótico. A ironia e a tragédia se misturam na morte de um menino real que só queria a dignidade de um menino de gesso.",
        resumo_en: "Lumbiá is a street boy who, on the eve of Christmas, becomes hypnotized by the window display of a rich store that displays an exuberant nativity scene. He does not just want a toy; he wishes to steal the Baby Jesus to also steal the dignified, clean, and sacred life that the statue represents, a life denied to him. As he flees with the image, Lumbiá is run over in chaotic traffic. Irony and tragedy mix in the death of a real boy who only wanted the dignity of a plaster boy.",
        analise_pt: "O conto analisa a classe, a fé e o direito à dignidade. O presépio é a representação simbólica de um mundo que Lumbiá nunca poderá acessar. Sua morte é a resposta do sistema capitalista ao seu roubo: a morte é mais provável que a misericórdia. A ironia brutal é que ele rouba um símbolo de salvação, mas é condenado à morte.",
        analise_en: "The short story analyzes class, faith, and the right to dignity. The nativity scene is the symbolic representation of a world Lumbiá will never be able to access. His death is the capitalist system's response to his theft: death is more likely than mercy. The brutal irony is that he steals a symbol of salvation, but is condemned to death.",
      },
      {
        titulo_pt: "Os amores de Kimbá",
        titulo_en: "The Loves of Kimbá",
        resumo_pt: "O conto explora a complexidade da masculinidade negra. Kimbá é um homem que deseja amar e ser amado, mas se vê preso em uma teia de estereótipos raciais e expectativas sociais que o hiperssexualizam ou o marginalizam. Suas relações são marcadas por desencontros e pela incapacidade de construir um afeto duradouro, refletindo como o racismo estrutural também destrói a saúde emocional e as pontes afetivas dos homens negros.",
        resumo_en: "The short story explores the complexity of Black masculinity. Kimbá is a man who desires to love and be loved, but finds himself trapped in a web of racial stereotypes and social expectations that hypersexualize or marginalize him. His relationships are marked by mismatches and the inability to build lasting affection, reflecting how structural racism also destroys the emotional health and emotional bridges of Black men.",
        analise_pt: "A análise revela como o racismo fragmenta não apenas corpos, mas também corações. Kimbá representa todos os homens negros que tentam amar dentro de um sistema que os criminaliza. O conto mostra que o racismo não apenas mata fisicamente; ele mata a capacidade de amar. Seus amores são sempre incompletos, sempre em risco.",
        analise_en: "The analysis reveals how racism fragments not just bodies, but also hearts. Kimbá represents all Black men who try to love within a system that criminalizes them. The short story shows that racism does not just kill physically; it kills the capacity to love. His loves are always incomplete, always at risk.",
      },
      {
        titulo_pt: "Ei, Ardoca",
        titulo_en: "Hey, Ardoca",
        resumo_pt: "Um relato de esgotamento e ruptura. A protagonista, após anos sofrendo violência doméstica e psicológica nas mãos de seu parceiro Ardoca, chega ao seu limite. O conto é estruturado quase como um monólogo de confronto, onde ela finalmente rompe o silêncio e exige que ele vá embora. É uma narrativa sobre a retomada do controle, a demarcação de limites e a coragem necessária para quebrar o ciclo de abuso dentro do próprio lar.",
        resumo_en: "An account of exhaustion and rupture. The protagonist, after years of suffering domestic and psychological violence at the hands of her partner Ardoca, reaches her limit. The short story is structured almost as a monologue of confrontation, where she finally breaks the silence and demands that he leave. It is a narrative about reclaiming control, setting boundaries, and the courage needed to break the cycle of abuse within one's own home.",
        analise_pt: "A análise foca no grito de libertação. 'Ei, Ardoca' é um chamado para ser ouvida. A mulher deixa de ser vítima passiva e se torna agente de sua libertação. O conto é um hino à resistência doméstica, mostrando que o fim do abuso começa quando a mulher diz 'não' com toda a força de sua voz.",
        analise_en: "The analysis focuses on the cry for liberation. 'Hey, Ardoca' is a call to be heard. The woman stops being a passive victim and becomes an agent of her liberation. The short story is a hymn to domestic resistance, showing that the end of abuse begins when the woman says 'no' with all the strength of her voice.",
      },
      {
        titulo_pt: "A gente combinamos de não morrer",
        titulo_en: "We Agreed Not to Die",
        resumo_pt: "O título, de uma força ímpar, resume o espírito de resistência do povo negro. A história acompanha Bica e a comunidade diante da perda constante de seus jovens para a violência urbana e policial. Diante do extermínio sistemático, eles fazem um pacto simbólico de sobrevivência. A morte física pode levá-los aos poucos, mas eles 'combinam de não morrer' na memória, na cultura e na dignidade, reafirmando que a existência coletiva continuará a pulsar.",
        resumo_en: "The title, of unparalleled force, sums up the spirit of Black people's resistance. The story follows Bica and the community facing constant loss of their young to urban and police violence. Facing systematic extermination, they make a symbolic pact of survival. Death may take them little by little, but they 'agree not to die' in memory, culture, and dignity, reaffirming that collective existence will continue to pulse.",
        analise_pt: "A análise celebra a resistência. 'A gente combinamos de não morrer' é um manifesto. Mostra que diante do extermínio, o povo negro responde com a afirmação de que sua morte não é inevitável, que sua vida importa, que sua memória será guardada. É um ato de recusa absoluta ao apagamento.",
        analise_en: "The analysis celebrates resistance. 'We agreed not to die' is a manifesto. It shows that in the face of extermination, Black people respond by affirming that their death is not inevitable, that their life matters, that their memory will be preserved. It is an act of absolute refusal to erasure.",
      },
      {
        titulo_pt: "Ayoluwa, a alegria de nosso povo",
        titulo_en: "Ayoluwa, the Joy of Our People",
        resumo_pt: "O livro se encerra quebrando a sequência de luto e dor. Ayoluwa é uma criança que nasce, e seu nome de origem africana significa 'a alegria do nosso povo'. O conto descreve a celebração da comunidade em torno desse nascimento. É um final que projeta esperança, apontando para o futuro e para a continuidade da ancestralidade. Mostra que, apesar de todo o derramamento de sangue e sofrimento narrados ao longo da obra, a vida, a beleza e a alegria preta continuam resistindo e renascendo.",
        resumo_en: "The book closes by breaking the sequence of grief and pain. Ayoluwa is a child who is born, and her African-origin name means 'the joy of our people.' The short story describes the community's celebration around this birth. It is an ending that projects hope, pointing to the future and the continuity of ancestry. It shows that, despite all the bloodshed and suffering narrated throughout the work, Black life, beauty, and joy continue to resist and be reborn.",
        analise_pt: "Esta é uma análise sobre esperança e futurismo negro. Em um livro cercado de mortes, Ayoluwa representa a vitória da vida. O nascimento é tratado como uma promessa de que, apesar de todas as tentativas de apagamento, o povo negro continuará nascendo, crescendo e ocupando o mundo com alegria. É o final que diz: 'Nós persistimos'.",
        analise_en: "This is an analysis of hope and Black futurism. In a book surrounded by deaths, Ayoluwa represents the victory of life. Birth is treated as a promise that, despite all attempts at erasure, Black people will continue being born, growing, and occupying the world with joy. It is the ending that says: 'We persist.'",
      },
    ],
  });

  console.log("👥 Inserindo personagens...");

  await prisma.personagem.deleteMany();

  await prisma.personagem.createMany({
    data: [
      {
        nome: "A Mãe",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/mae.png",
        caracteristicas_pt: "Aparência: Uma mulher de idade avançada, com a pele retinta e profundamente marcada por rugas que parecem contar histórias. Suas mãos são grossas e calejadas pelo trabalho de lavadeira, com unhas gastas pela água e pelo sabão. Destaque: O olhar é sua característica principal; olhos úmidos, profundos e expressivos, que parecem estar sempre prestes a transbordar, mas que mantêm uma lucidez cortante.",
        caracteristicas_en: "Appearance: An elderly woman with deep dark skin deeply marked by wrinkles that seem to tell stories. Her hands are thick and calloused from her work as a washerwoman, with nails worn down by water and soap. Highlight: The gaze is her main characteristic; moist, deep and expressive eyes that seem always on the verge of overflowing, yet maintain sharp lucidity.",
        descricao_pt:
          "É a figura matriarcal que sustenta toda a carga simbólica da obra. Ela não é apenas uma genitora, mas o próprio tronco de uma árvore genealógica marcada pela sobrevivência. Suas mãos, calejadas pelo trabalho braçal de lavadeira, e seus olhos, que a narradora descreve como 'cor de olhos d'água', carregam a memória coletiva de um povo que chora para não sufocar. Ela personifica a 'escrevivência' de Conceição Evaristo: uma vida que se escreve com o sangue e o suor de quem veio antes.",
        descricao_en:
          "She is the matriarchal figure who sustains all the symbolic weight of the work. She is not merely a mother, but the very trunk of a family tree marked by survival. Her hands, calloused by the hard labor of a washerwoman, and her eyes, which the narrator describes as 'the color of water eyes,' carry the collective memory of a people who cry so as not to suffocate. She embodies Conceição Evaristo's 'life-writing': a life written in the blood and sweat of those who came before.",
      },
      {
        nome: "Ana Davenga",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/maria.png",
        caracteristicas_pt: "Etnia: Jovem mulher negra, pele de tom marrom-médio a escuro (subtom quente). Cabelo: Cabelo crespo volumoso, estilo black power curto ou preso com uma fita colorida. Rosto: Traços negros harmoniosos, lábios cheios e bem desenhados, nariz de base larga. Corpo: Curvilíneo, postura de quem é vibrante e cheia de vida. Veste um vestido de algodão simples ou regata. O Diferencial: Ela está visivelmente grávida. O olhar é apaixonado e sonhador, contrastando com o ambiente de uma favela ao fundo.",
        caracteristicas_en: "Ethnicity: Young Black woman, skin tone medium to dark brown (warm undertone). Hair: Voluminous curly hair, short black power style or tied with a colorful ribbon. Face: Harmonious Black features, full and well-drawn lips, wide-based nose. Body: Curvilinear, posture of someone who is vibrant and full of life. Wears a simple cotton dress or tank top. The Differentiator: She is visibly pregnant. The gaze is passionate and dreamy, contrasting with the favela environment in the background.",
        descricao_pt:
          "Protagonista de um dos contos mais viscerais, Ana representa a busca pelo afeto em meio ao caos da periferia. Seu amor por Davenga é o que lhe dá identidade e um sentido de pertencimento. Ela vive a dualidade de ser uma mulher comum que deseja a paz de um lar, mas que é tragada pela violência estrutural. Sua morte, grávida e dentro de seu próprio barraco, simboliza o extermínio de gerações inteiras e a interrupção violenta do ciclo da vida negra pelo braço armado do Estado.",
        descricao_en:
          "Protagonist of one of the most visceral tales, Ana represents the search for affection amidst the chaos of the periphery. Her love for Davenga is what gives her identity and a sense of belonging. She lives the duality of being an ordinary woman who desires the peace of a home, yet is engulfed by structural violence. Her death, pregnant and inside her own shack, symbolizes the extermination of entire generations and the violent interruption of the cycle of Black life by the armed hand of the State.",
      },
      {
        nome: "Dito",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/dito.png",
        caracteristicas_pt: "Etnia: Homem negro jovem, pele tom marrom-escuro (subtom quente/avermelhado). Cabelo: Cabelo crespo cortado bem baixo ou com um desenho de 'disfarce' (fade), típico de quem vive na periferia. Rosto: Traços marcantes, olhar intenso e vigilante, mas que se abranda quando olha para Ana. Pode ter uma pequena cicatriz ou marca que indique uma vida de conflitos. Corpo: Porte físico robusto, ombros largos. Veste roupas casuais de morro: uma regata ou camisa de time, e talvez uma corrente de prata no pescoço. O Diferencial: O ambiente é o interior de um barraco simples, com luz de penumbra ou luz de fim de tarde entrando pela janela. Ele representa o amor marginal — um homem perigoso para o mundo, mas doce para a sua mulher.",
        caracteristicas_en: "Ethnicity: Young Black man, dark brown skin tone (warm/reddish undertone). Hair: Curly hair cut very short or with a 'fade' design, typical of those living in the periphery. Face: Striking features, intense and vigilant gaze, but softens when looking at Ana. May have a small scar or mark indicating a life of conflict. Body: Robust physical stature, broad shoulders. Wears casual hill clothes: a tank top or team shirt, and perhaps a silver chain around his neck. The Differentiator: The setting is the interior of a simple shack, with dim light or late afternoon light entering through the window. He represents marginal love—a man dangerous to the world, but sweet to his woman.",
        descricao_pt:
          "Companheiro de Ana Davenga, Dito é o homem negro que vive na marginalidade não por escolha, mas como uma consequência de um sistema que oferece poucas saídas. Apesar da sua vida no crime, ele é humanizado através do seu cuidado e proteção para com Ana. Sua figura serve para discutir como a masculinidade negra é frequentemente empurrada para a violência e como o Estado responde a isso com o aniquilamento, em vez de justiça ou oportunidade.",
        descricao_en:
          "Ana Davenga's companion, Dito is the Black man who lives on the margins not by choice, but as a consequence of a system that offers few alternatives. Despite his life in crime, he is humanized through his care and protection of Ana. His figure serves to discuss how Black masculinity is often pushed toward violence and how the State responds to this with annihilation, rather than justice or opportunity.",
      },
      {
        nome: "Vó Bina",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/Vo-bina.png",
        caracteristicas_pt: "Etnia: Mulher negra idosa, pele retinta (muito escura) e extremamente rugosa, com brilho acetinado. Cabelo: Cabelos crespos totalmente brancos, curtos e finos, aparecendo por baixo de um turbante de tecido rústico. Rosto: Rosto magro, maçãs do rosto salientes, olhos pequenos que brilham com sabedoria ancestral. Corpo: Magra e levemente curvada. Mãos longas com veias aparentes, segurando um terço de sementes ou ervas. O Diferencial: Transmite uma aura de mistério e autoridade espiritual.",
        caracteristicas_en: "Ethnicity: Elderly Black woman, very dark skin and extremely wrinkled, with a satiny shine. Hair: Completely white curly hair, short and fine, appearing beneath a rustic fabric turban. Face: Thin face, prominent cheekbones, small eyes that shine with ancestral wisdom. Body: Thin and slightly bent. Long hands with visible veins, holding a string of seeds or herbs. The Differentiator: Transmits an aura of mystery and spiritual authority.",
        descricao_pt:
          "Vó Bina é o arquivo vivo da ancestralidade africana no Brasil. Ela é a guardiã das memórias que o tempo e o racismo tentaram apagar. Sua personagem destaca a importância da tradição oral e do saber ancestral (curas, rezas e histórias de família). Ela representa a resistência silenciosa das idosas negras que, através do afeto e da memória, garantem que as novas gerações saibam quem são e de onde vieram, conectando o presente com as raízes de antes da diáspora.",
        descricao_en:
          "Grandmother Bina is the living archive of African ancestry in Brazil. She is the guardian of memories that time and racism tried to erase. Her character highlights the importance of oral tradition and ancestral knowledge (cures, prayers, and family stories). She represents the silent resistance of elderly Black women who, through affection and memory, ensure that new generations know who they are and where they came from, connecting the present to the roots before the diaspora.",
      },
      {
        nome: "Maria",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/maria.png",
        caracteristicas_pt: "Etnia: Mulher negra de meia-idade, pele tom café com leite (parda a preta). Cabelo: Cabelo crespo bem rente à cabeça ou preso de forma funcional para o trabalho. Rosto: Expressão de cansaço profundo e resignação. Olheiras leves e lábios cerrados. Corpo: Postura curvada, ombros baixos, carregando uma sacola de compras ou marmita. Veste uniforme de doméstica ou roupa de cores neutras e gastas. O Diferencial: O olhar é de quem tenta ser invisível para evitar o perigo.",
        caracteristicas_en: "Ethnicity: Middle-aged Black woman, coffee-with-milk skin tone (brown to Black). Hair: Curly hair close to the head or tied functionally for work. Face: Expression of deep tiredness and resignation. Light dark circles and closed lips. Body: Bent posture, low shoulders, carrying shopping bags or lunch boxes. Wears a maid's uniform or neutral-colored worn-out clothes. The Differentiator: The gaze is of someone trying to be invisible to avoid danger.",
        descricao_pt:
          "Maria é a personificação da vulnerabilidade da mulher negra no cotidiano urbano. Trabalhadora doméstica, sua vida é marcada pela invisibilidade até o momento em que se torna alvo de um ódio irracional. Sua personagem revela a face cruel do racismo estrutural: a rapidez com que a sociedade condena um corpo negro sem provas e a passividade daqueles que assistem à violência sem intervir. Ela é o símbolo do 'linchamento cotidiano', seja ele físico ou moral.",
        descricao_en:
          "Maria is the embodiment of the vulnerability of Black women in urban daily life. A domestic worker, her life is marked by invisibility until the moment she becomes the target of irrational hatred. Her character reveals the cruel face of structural racism: the speed with which society condemns a Black body without proof and the passivity of those who witness violence without intervening. She is the symbol of 'everyday lynching,' whether physical or moral.",
      },
      {
        nome: "Cida",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/cida.png",
        caracteristicas_pt: "Etnia: Mulher negra jovem/adulta, pele retinta e brilhante de suor. Cabelo: Cabelo crespo curto (estilo tapered cut) ou tranças curtas. Rosto: Expressão de foco e determinação. Mandíbula marcada. Corpo: Forte, atlético, músculos das pernas e braços definidos. Veste roupas de ginástica modernas (top e bermuda de compressão). O Diferencial: Ela está em movimento (correndo). O contraste é a postura altiva dela contra um fundo de calçadão de praia de luxo.",
        caracteristicas_en: "Ethnicity: Young/adult Black woman, dark skin glistening with sweat. Hair: Short curly hair (tapered cut style) or short braids. Face: Expression of focus and determination. Marked jawline. Body: Strong, athletic, defined leg and arm muscles. Wears modern gym clothes (top and compression shorts). The Differentiator: She is in motion (running). The contrast is her proud posture against a backdrop of a luxurious beach promenade.",
        descricao_pt:
          "Cida representa o corpo negro em movimento e a conquista de espaços de poder e lazer. Ao praticar seu 'cooper' na orla marítima — um espaço higienizado e ocupado pela elite — ela desafia a norma social que reserva esses locais apenas para brancos ou para negros em posição de serviço. Sua personagem é fundamental para analisar o racismo geográfico e a vigilância constante que tenta 'enquadrar' e constranger pessoas negras que ousam ocupar a cidade com liberdade.",
        descricao_en:
          "Cida represents the Black body in motion and the conquest of spaces of power and leisure. By practicing her 'running' on the waterfront—a sanitized space occupied by the elite—she challenges the social norm that reserves these spaces only for white people or for Black people in service positions. Her character is fundamental to analyzing geographical racism and the constant surveillance that tries to 'frame' and constrain Black people who dare to occupy the city with freedom.",
      },
      {
        nome: "Lumbiá",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/lumbia.png",
        caracteristicas_pt: "Etnia: Homem negro idoso, pele muito escura e castigada pelo sol (aspecto ressecado). Cabelo: Barba e cabelos crespos longos, totalmente grisalhos e desgrenhados. Rosto: Sorriso largo que revela a falta de alguns dentes, mas demonstra uma alegria infantil. Olhos muito vivos. Corpo: Veste várias camadas de roupas velhas e coloridas, como um 'andarilho iluminado'. O Diferencial: Ele deve estar segurando um objeto 'inútil' (um pedaço de espelho ou uma flor de plástico) como se fosse um tesouro real.",
        caracteristicas_en: "Ethnicity: Elderly Black man, very dark skin weathered by the sun (dried appearance). Hair: Long curly beard and hair, completely gray and disheveled. Face: Wide smile that reveals missing teeth, but shows childlike joy. Very bright eyes. Body: Wears several layers of old and colorful clothes, like an 'enlightened wanderer'. The Differentiator: He should be holding a 'useless' object (a piece of mirror or plastic flower) as if it were a real treasure.",
        descricao_pt:
          "Um personagem que transita entre o realismo e o lúdico. Lumbiá é um homem em situação de rua que subverte a lógica do descarte. Enquanto a sociedade o vê como lixo, ele vê beleza e sagrado nos objetos que recolhe. Ele é a prova de que a sensibilidade artística e a conexão espiritual não podem ser confiscadas pela miséria material. Lumbiá representa a resistência do imaginário e a capacidade humana de criar novos mundos, mesmo quando o mundo real é hostil.",
        descricao_en:
          "A character who moves between realism and playfulness. Lumbiá is a homeless man who subverts the logic of disposability. While society sees him as garbage, he sees beauty and the sacred in the objects he collects. He is proof that artistic sensitivity and spiritual connection cannot be confiscated by material misery. Lumbiá represents the resistance of imagination and the human capacity to create new worlds, even when the real world is hostile.",
      },
      {
        nome: "Zaíta",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/zaita.png",
        caracteristicas_pt: "Etnia: Criança negra (menina de uns 7 anos), pele tom chocolate. Cabelo: Cabelo crespo em vários 'birotinhos' (coques pequenos) com elásticos coloridos. Rosto: Rosto redondo, nariz batatinha, sorriso aberto e olhar de pura curiosidade infantil. Corpo: Magrinha, veste uma camiseta de personagem ou vestido simples. O Diferencial: Deve estar cercada de brinquedos simples no chão, em um cenário de quintal de terra ou beco.",
        caracteristicas_en: "Ethnicity: Black child (girl around 7 years old), chocolate-toned skin. Hair: Curly hair in several 'small buns' with colorful elastic bands. Face: Round face, button nose, open smile and look of pure childlike curiosity. Body: Thin, wears a character t-shirt or simple dress. The Differentiator: Should be surrounded by simple toys on the ground, in a scene of a dirt yard or alley.",
        descricao_pt:
          "A pequena Zaíta é o símbolo da infância roubada. Sua personagem é construída com delicadeza para contrastar com o final brutal de sua história. Ela representa todas as crianças cujos sonhos e brincadeiras são interrompidos por balas que atravessam as paredes de zinco. O 'esquecimento dos brinquedos' após sua morte é uma metáfora poderosa para o futuro que foi deixado para trás e para a negligência da sociedade com a vida das crianças periféricas.",
        descricao_en:
          "Little Zaíta is the symbol of stolen childhood. Her character is constructed with delicacy to contrast with the brutal ending of her story. She represents all children whose dreams and play are interrupted by bullets that pierce metal walls. The 'forgetting of toys' after her death is a powerful metaphor for the future left behind and for society's neglect of the lives of peripheral children.",
      },
      {
        nome: "Duzu-Querença",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/duzu-querenca.png",
        caracteristicas_pt: "Etnia: Mulher negra idosa, pele retinta e opaca. Cabelo: Cabelo crespo grisalho, muito curto e desleixado. Rosto: Olhar fixo no vazio (olhar de transe), boca levemente aberta como se falasse sozinha. Corpo: Envolta em panos velhos e mantas, postura sentada no chão ou encostada em uma parede descascada. O Diferencial: Representa a solidão absoluta; parece uma estátua de dor.",
        caracteristicas_en: "Ethnicity: Elderly Black woman, very dark and opaque skin. Hair: Gray curly hair, very short and neglected. Face: Gaze fixed in the void (trance-like gaze), mouth slightly open as if talking to herself. Body: Wrapped in old cloths and blankets, posture sitting on the ground or leaning against a peeling wall. The Differentiator: Represents absolute loneliness; seems like a statue of pain.",
        descricao_pt:
          "Duzu é a representação da exclusão total. Mulher, negra, idosa e considerada 'louca' pela sociedade, ela vive nas margens da sanidade como uma forma de escapar de uma realidade de dores insuportáveis. Sua personagem obriga o leitor a confrontar o abandono social e a solidão profunda. Duzu é o espelho de um Brasil que empurra seus indivíduos mais vulneráveis para o esquecimento, tratando o trauma social como se fosse apenas doença mental.",
        descricao_en:
          "Duzu is the representation of total exclusion. A woman, Black, elderly, and considered 'mad' by society, she lives on the margins of sanity as a way to escape from a reality of unbearable suffering. Her character forces the reader to confront social abandonment and profound loneliness. Duzu is the mirror of a Brazil that pushes its most vulnerable individuals into oblivion, treating social trauma as if it were merely mental illness.",
      },
      {
        nome: "Arnaldo",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/arnaldo.png",
        caracteristicas_pt: "Etnia: Homem negro de pele retinta (tom muito escuro), porém com um aspecto opaco e ressecado devido à exposição ao tempo. Cabelo/Barba: Cabelo crespo curto e grisalho, com falhas. A barba é por fazer, também grisalha, dando um ar de desleixo involuntário. Rosto: Olhos profundos com olheiras marcadas, transmitindo uma tristeza 'vazia' ou desorientação. Os traços são fortes, mas o rosto parece ter 'emagrecido' pela desilusão. Corpo: Postura curvada, ombros caídos. Veste um casaco velho ou uma camisa surrada de cores desbotadas. O Diferencial: Deve parecer uma 'sombra' em meio à multidão de uma cidade grande. O foco é a invisibilidade social.",
        caracteristicas_en: "Ethnicity: Black man with very dark skin, but with an opaque and dried appearance due to exposure to the elements. Hair/Beard: Short and graying curly hair with gaps. The beard is unshaven, also gray, giving an air of involuntary neglect. Face: Deep eyes with marked dark circles, transmitting an 'empty' sadness or disorientation. The features are strong, but the face seems to have 'thinned' from disillusionment. Body: Bent posture, slumped shoulders. Wears an old coat or tattered shirt in faded colors. The Differentiator: Should seem like a 'shadow' amid the crowd of a big city. The focus is on social invisibility.",
        descricao_pt:
          "Arnaldo ilustra a falência das expectativas sociais para o homem negro. Narrado por alguém que o conheceu em tempos melhores, ele é o retrato da desintegração de um indivíduo sob o peso do racismo e da falta de perspectivas. Sua queda representa o 'nó na garganta' de muitos que tentaram vencer o sistema e acabaram sendo vencidos por ele, tornando-se sombras invisíveis que habitam as ruas das grandes metrópoles.",
        descricao_en:
          "Arnaldo illustrates the collapse of social expectations for the Black man. Narrated by someone who knew him in better times, he is the portrait of an individual's disintegration under the weight of racism and lack of prospects. His fall represents the 'lump in the throat' of many who tried to overcome the system and ended up being defeated by it, becoming invisible shadows that haunt the streets of great metropolises.",
      },
      {
        nome: "Luamanda",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/luamanda.png",
        caracteristicas_pt: "Etnia: Mulher negra adulta (30-40 anos), pele escura e reluzente. Cabelo: Cabelo com tranças nagô (rente ao couro cabeludo) ou um turbante alto e elegante. Rosto: Maquiagem leve, destacando os lábios cheios. Expressão de quem acabou de acordar para a própria força. Corpo: Postura ereta, mãos na cintura ou braços cruzados. Transmite poder e autossuficiência. O Diferencial: Uma aura de libertação; ela não olha mais para o chão.",
        caracteristicas_en: "Ethnicity: Adult Black woman (30-40 years old), dark and gleaming skin. Hair: Hair with nagô braids (close to the scalp) or a tall and elegant turban. Face: Light makeup, highlighting full lips. Expression of someone who has just awakened to their own strength. Body: Upright posture, hands on hips or arms crossed. Transmits power and self-sufficiency. The Differentiator: An aura of liberation; she no longer looks at the ground.",
        descricao_pt:
          "Luamanda é a força do despertar. Ela representa a mulher negra que decide dizer 'não' à exploração histórica de seu corpo e de sua força de trabalho. Sua jornada é de libertação interna: ela deixa de ser a engrenagem que serve aos outros para se tornar o centro de sua própria existência. Ela simboliza a quebra do ciclo de servidão e a reconquista da autonomia sobre seus próprios desejos, tempo e destino.",
        descricao_en:
          "Luamanda is the force of awakening. She represents the Black woman who decides to say 'no' to the historical exploitation of her body and her labor. Her journey is one of inner liberation: she stops being the cog that serves others to become the center of her own existence. She symbolizes the breaking of the cycle of servitude and the reclaiming of autonomy over her own desires, time, and destiny.",
      },
      {
        nome: "Ayoluwa",
        fotoUrl: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/ayoluwa.png",
        caracteristicas_pt: "Etnia: Bebê negro, pele retinta, muito lisa e saudável. Cabelo: Pequenos fios de cabelo crespo bem macios começando a crescer. Rosto: Bochechas grandes, olhos negros imensos e brilhantes. Corpo: Bebê gordinho, enrolado em um tecido de estampa africana (tipo Kente ou Ankara). O Diferencial: Transmite uma pureza absoluta e uma esperança que ilumina o ambiente.",
        caracteristicas_en: "Ethnicity: Black baby, very dark, smooth and healthy skin. Hair: Small soft curly hair beginning to grow. Face: Large cheeks, huge and bright black eyes. Body: Chubby baby, wrapped in African-patterned fabric (like Kente or Ankara). The Differentiator: Transmits absolute purity and a hope that illuminates the environment.",
        descricao_pt:
          "Ayoluwa é o raio de sol que encerra a obra. Seu nome, que em iorubá significa 'a alegria do nosso povo', define sua função na narrativa: ela é a prova de que o projeto de morte não venceu. Sua personagem é uma mensagem de futurismo negro, indicando que, apesar das águas de lágrimas que banham o livro, novas vidas continuarão a nascer com a missão de renovar a esperança e a alegria da comunidade.",
        descricao_en:
          "Ayoluwa is the ray of sunshine that closes the work. Her name, which in Yoruba means 'the joy of our people,' defines her role in the narrative: she is proof that the project of death has not triumphed. Her character is a message of Black futurism, indicating that despite the waters of tears that bathe the book, new lives will continue to be born with the mission to renew hope and joy in the community.",
      },
    ],
  });

  console.log("✅ Seed concluído!");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
