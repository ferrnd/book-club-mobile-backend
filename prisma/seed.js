import pg from 'pg';
import 'dotenv/config';
import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const { PrismaClient } = pkg;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Resetando tabela...');

    // Remove todos os registros
    await prisma.projeto.deleteMany();
    await prisma.livro.deleteMany();
    await prisma.autor.deleteMany();
    await prisma.conto.deleteMany();
    await prisma.personagem.deleteMany();
    await prisma.citacao.deleteMany();
    await prisma.quiz.deleteMany();
    await prisma.dica.deleteMany();
    await prisma.membro.deleteMany();

    console.log('📦 Inserindo Dados Do Projeto...');

    await prisma.projeto.create({
        data: {
            nome_pt: "Olhos D'Água",
            nome_en: 'watery eyes',
            apresentacao_pt:
                "O projeto Conexão Literária é uma plataforma mobile desenvolvida em parceria entre SENAI e SESI, unindo tecnologia e literatura para facilitar o estudo de obras obrigatórias. Nosso foco é a obra 'Olhos D’água', de Conceição Evaristo. Através desta interface, buscamos democratizar o acesso a análises profundas, contextos históricos e simulados, preparando estudantes para os desafios do vestibular com uma abordagem moderna e bilíngue.",
            apresentacao_en:
                "The Literary Connection project is a mobile platform created through a partnership between SENAI and SESI. By merging technology and literature, we aim to streamline the study of mandatory reading lists. Our focus is the powerful book 'Olhos D’água' by Conceição Evaristo. This app provides in-depth analysis, historical context, and practice quizzes, equipping students for university entrance exams through a modern, bilingual experience.",
            objetivo_pt:
                'O objetivo central deste projeto é integrar o desenvolvimento de sistemas (Backend em Node.js e Mobile em React Native) com a análise crítica literária. Visamos construir uma ferramenta que não apenas exiba dados, mas que sirva como um guia de estudo colaborativo. Além de explorar o universo de Conceição Evaristo, o aplicativo integra-se às APIs de outras equipes, formando uma biblioteca digital completa para o estudante.',
            objetivo_en:
                "The core goal of this project is to integrate systems development (Node.js Backend and React Native Mobile) with critical literary analysis. We aim to build a tool that goes beyond displaying data, serving as a collaborative study guide. In addition to exploring Conceição Evaristo’s work, the app connects with other teams' APIs, creating a comprehensive digital library for students.",
        },
    });

    console.log('📦 Inserindo Dados Do Livro...');

    await prisma.livro.create({
        data: {
            titulo: "Olhos d'Água",
            capa: 'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/bookCover/olhos-dagua.png',
            autor: 'Conceição Evaristo',
            anoPublicacao: 2014,
            genero_pt: 'Contos, Escrevivência, Literatura Afro-Brasileira, Realismo Social',
            genero_en: 'Short Stories, Life-writing, Afro-Brazilian Literature, Social Realism',
            resumo_pt:
                "Olhos D'Água, de Conceição Evaristo, é um poderoso mosaico de narrativas que mergulha nas profundezas da experiência de mulheres negras no Brasil. Mais do que apenas histórias, a obra é um manifesto de resistência e humanidade. Através de contos que exploram temas como pobreza, violência urbana, racismo e ancestralidade, Evaristo constrói um retrato vívido e multifacetado da vida dessas mulheres. Cada personagem é uma janela para a complexidade de suas vidas, revelando suas lutas, sonhos e resiliência. O livro é uma celebração da força e da diversidade das mulheres negras, desafiando estereótipos e convidando o leitor a refletir sobre as injustiças sociais que ainda persistem. Com uma escrita envolvente e poética, Conceição Evaristo nos presenteia com uma obra que é ao mesmo tempo dolorosa e inspiradora, mostrando que, mesmo diante das adversidades, a esperança e a humanidade podem florescer. Olhos D'Água é uma leitura essencial para quem deseja compreender a riqueza e a complexidade da experiência negra no Brasil, e é um testemunho do poder da literatura como ferramenta de resistência e transformação social.",
            resumo_en:
                "Olhos D'Água, by Conceição Evaristo, is a powerful mosaic of narratives that dives into the depths of Black women’s experiences in Brazil. More than just a collection of stories, the work stands as a manifesto of resistance and humanity. Through short stories that explore themes such as poverty, urban violence, racism, and ancestry, Evaristo constructs a vivid and multifaceted portrayal of these women’s lives. Each character serves as a window into the complexity of their existence, revealing their struggles, dreams, and resilience. The book celebrates the strength and diversity of Black women, challenging stereotypes and inviting readers to reflect on the social injustices that still persist. With an engaging and poetic style, Conceição Evaristo offers a work that is both painful and inspiring, showing that even in the face of adversity, hope and humanity can flourish. Olhos D'Água is essential reading for anyone seeking to understand the richness and complexity of the Black experience in Brazil, and it stands as a testament to the power of literature as a tool for resistance and social transformation.",
            personagens: [
                'A Mãe',
                'Ana Davenga',
                'Dito',
                'Vó Bina',
                'Maria',
                'Cida',
                'Lumbiá',
                'Zaíta',
                'Duzu-Querença',
                'Arnaldo',
                'Luamanda',
                'Ayoluwa',
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

    console.log('Inserindo Autor...');

    await prisma.autor.create({
        data: {
            nome: 'Conceição Evaristo',
            fotoUrl:
                'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/author/conceicao-evaristo.png',
            nascimento: '29 de novembro de 1946, nascida em Belo Horizonte (MG)',
            nacionalidade: 'Brasileira',
            biografia_pt:
                'Maria da Conceição Evaristo de Brito (Belo Horizonte, 1946) é uma das maiores vozes da literatura brasileira contemporânea. De origem humilde, trabalhou como empregada doméstica enquanto concluía seus estudos, mudando-se para o Rio de Janeiro, onde se formou em Letras e, mais tarde, tornou-se Mestra e Doutora em Literatura. Sua escrita é marcada pelo conceito que ela própria criou: a escrevivência — a escrita que nasce da vivência profunda das mulheres negras na sociedade brasileira. Em obras como "Olhos D\'água" e "Ponciá Vicêncio", ela mistura a realidade crua da violência e do racismo com uma sensibilidade poética ancestral. Suas histórias não são apenas ficção; são gritos de resistência, memória e esperança de um povo que, através da sua voz, deixa de ser objeto e passa a ser protagonista da própria história.',
            biografia_en:
                'Maria da Conceição Evaristo de Brito (Belo Horizonte, 1946) is one of the greatest voices in contemporary Brazilian literature. Born into humble origins, she worked as a domestic servant while finishing her studies, later moving to Rio de Janeiro where she graduated in Literature and later became a Master\'s and Doctorate holder in Literature. Her writing is marked by the concept she created herself: escrevivência — the writing that is born from the deep lived experience of Black women in Brazilian society. In works such as "Olhos D\'água" and "Ponciá Vicêncio", she mixes the raw reality of violence and racism with an ancestral poetic sensibility. Her stories are not just fiction; they are cries of resistance, memory, and hope from a people who, through her voice, stop being objects and become protagonists of their own history.',
            estilo_escrita_pt:
                'A escrita de Conceição Evaristo nasce diretamente de sua trajetória de vida, criando uma ligação profunda que dá autenticidade à sua obra através do conceito de escrevivência. Mais do que narrar histórias, ela escreve a partir da própria experiência, transformando vivências marcadas pela pobreza e pelo racismo em uma literatura potente. Sua linguagem equilibra a realidade crua com a poesia, preservando a oralidade das ruas e das memórias familiares. Através de metáforas ligadas à natureza — como água, sangue e terra — ela aborda temas como o luto e o abandono, tornando a dor profundamente humana. Seu trabalho dá protagonismo às vozes silenciadas, conferindo dignidade a personagens que a sociedade costuma ignorar. Além disso, sua narrativa rompe o tempo linear para resgatar a ancestralidade, mostrando que a memória é um ato de resistência e esperança.',
            estilo_escrita_en:
                'Conceição Evaristo’s writing arises directly from her life journey, creating a deep connection that gives authenticity to her work through the concept of escrevivência. More than narrating stories, she writes from her own experience, transforming lives marked by poverty and racism into powerful literature. Her language balances raw reality with poetry, preserving the oral quality of the streets and family memories. Through metaphors linked to nature — such as water, blood, and earth — she addresses themes like grief and abandonment, making pain deeply human. Her work gives protagonism to silenced voices, granting dignity to characters that society often ignores. Furthermore, her narrative breaks linear time to recover ancestry, showing that memory is an act of resistance and hope.',
        },
    });

    console.log('📚 Inserindo contos...');

    const contos = await prisma.conto.createMany({
        data: [
            {
                titulo_pt: 'Prefácio',
                titulo_en: 'Foreword',
                resumo_pt:
                    "O prefácio estabelece o pacto da autora com o leitor. Conceição apresenta o conceito de 'escrevivência', deixando claro que as histórias a seguir não nascem de uma observação distante, mas do 'sangramento' da experiência da população negra no Brasil. A introdução prepara o terreno para uma leitura que vai incomodar, resgatando a memória coletiva de dor, mas também de uma resistência feroz.",
                resumo_en:
                    "The foreword establishes the author's pact with the reader. Conceição introduces the concept of 'escrevivência' (life-writing), making it clear that the stories to follow are not born from distant observation, but from the 'bleeding' of the experience of Black people in Brazil. The introduction prepares the ground for reading that will disturb, rescuing the collective memory of pain, but also of fierce resistance.",
                analise_pt:
                    'O prefácio é um ato político. Conceição avisa que escrever, para ela, é um ato de vingança contra o silenciamento histórico. Ela não oferece uma Literatura com L maiúsculo, deslocada da vida; ela oferece escrevivência — uma escrita que pulsa com o coração de quem viveu. É o chamado à empatia e à responsabilidade do leitor.',
                analise_en:
                    "The foreword is a political act. Conceição warns that writing, for her, is an act of revenge against historical silencing. She does not offer a Literature with a capital L, detached from life; she offers escrevivência — a writing that pulses with the heart of those who lived it. It is a call for the reader's empathy and responsibility.",
            },
            {
                titulo_pt: 'Introdução',
                titulo_en: 'Introduction',
                resumo_pt:
                    'A introdução contextualiza a obra dentro da trajetória de Conceição Evaristo e da literatura afro-brasileira. Ela situa o leitor na importância de reconhecer as vozes silenciadas e a necessidade urgente de ouvir as histórias daqueles que foram historicamente marginalizados. É um chamado para que o leitor abandone a comodidade de uma leitura passiva.',
                resumo_en:
                    "The introduction contextualizes the work within Conceição Evaristo's trajectory and Afro-Brazilian literature. It positions the reader in the importance of recognizing silenced voices and the urgent need to hear the stories of those who were historically marginalized. It is a call for the reader to abandon the comfort of passive reading.",
                analise_pt:
                    "A análise da introdução revela o compromisso de Evaristo com a verdade e a dignidade. Ela não escreve para agradar, mas para libertar. A introdução é o aviso: 'Prepare-se, você será desconfortável, mas será transformado'. Ela situa a escrita como ferramenta de transformação social.",
                analise_en:
                    "The analysis of the introduction reveals Evaristo's commitment to truth and dignity. She does not write to please, but to liberate. The introduction is the warning: 'Prepare yourself, you will be uncomfortable, but you will be transformed.' She situates writing as a tool for social transformation.",
            },
            {
                titulo_pt: "Olhos d'água",
                titulo_en: 'Water Eyes',
                resumo_pt:
                    "A narradora vive atormentada pela dúvida sobre qual era a cor dos olhos de sua mãe. Ao retornar à casa materna, ela mergulha em uma jornada de autodescoberta e ancestralidade. Ela finalmente compreende que os olhos da mãe eram 'cor de olhos d'água': uma imagem poética que funde o rio, o mar e, principalmente, a umidade constante das lágrimas — tanto as de sofrimento pela fome quanto as de alegria pela sobrevivência de suas filhas.",
                resumo_en:
                    "The narrator lives tormented by doubt about the color of her mother's eyes. Upon returning to her mother's house, she immerses herself in a journey of self-discovery and ancestrality. She finally understands that her mother's eyes were 'water-colored eyes': a poetic image that merges the river, the sea, and above all, the constant moisture of tears — both from suffering caused by hunger and from joy for the survival of her daughters.",
                analise_pt:
                    'A análise foca no conceito de ancestralidade. A busca da narradora pela cor dos olhos da mãe é uma metáfora para a busca das raízes da população negra, que muitas vezes foram apagadas. A água simboliza tanto a dor (lágrimas) quanto a vida (fertilidade e renovação), consolidando a ideia de que o trauma e a força caminham juntos na história das mulheres negras.',
                analise_en:
                    "The analysis focuses on the concept of ancestrality. The narrator's search for the color of her mother's eyes is a metaphor for the quest for the roots of the Black population, which have often been erased. Water symbolizes both pain (tears) and life (fertility and renewal), consolidating the idea that trauma and strength walk together in the history of Black women.",
            },
            {
                titulo_pt: 'Ana Davenga',
                titulo_en: 'Ana Davenga',
                resumo_pt:
                    'Ana vive um amor intenso e marginal com Davenga em uma favela. O barraco deles é o único refúgio contra um mundo que os hostiliza. No entanto, a felicidade do casal é interrompida brutalmente por uma operação policial de madrugada. O conto descreve com crueza o momento em que as balas atravessam o corpo de Ana, que estava grávida, simbolizando como a violência do Estado extermina o futuro das comunidades periféricas.',
                resumo_en:
                    "Ana lives an intense and marginal love with Davenga in a favela. Their shack is the only refuge against a world that hostilizes them. However, the couple's happiness is brutally interrupted by a police operation in the early morning. The short story describes with harshness the moment when bullets pierce Ana's body, who was pregnant, symbolizing how State violence exterminates the future of peripheral communities.",
                analise_pt:
                    "Este conto analisa a criminalização da pobreza e a desumanização dos corpos negros. A morte de Ana, uma mulher grávida e inocente, demonstra que, para o braço armado do Estado, não há distinção entre 'criminoso' e 'morador'. A análise destaca como o amor periférico é constantemente atravessado pela tragédia e pela falta de direito à paz.",
                analise_en:
                    "This short story analyzes the criminalization of poverty and the dehumanization of Black bodies. The death of Ana, a pregnant and innocent woman, demonstrates that, for the armed branch of the State, there is no distinction between 'criminal' and 'resident'. The analysis highlights how peripheral love is constantly crossed by tragedy and the lack of right to peace.",
            },
            {
                titulo_pt: 'Duzu-Querença',
                titulo_en: 'Duzu-Querença',
                resumo_pt:
                    'Duzu é uma mulher marcada pela loucura e pela exposição constante ao tempo e à crueldade das ruas. Ela vive em um estado de transe, onde o passado de dores se mistura com o presente de privações. O conto obriga o leitor a olhar diretamente para aqueles que desviamos o olhar no dia a dia, revelando a alma ferida de quem foi empurrado para as margens da sanidade.',
                resumo_en:
                    'Duzu is a woman marked by madness and constant exposure to time and the cruelty of the streets. She lives in a trance state, where a past of pain mingles with a present of deprivation. The short story forces the reader to look directly at those we avert our gaze from in everyday life, revealing the wounded soul of one who was pushed to the margins of sanity.',
                analise_pt:
                    'Este conto analisa a loucura como refúgio. Para Duzu, a realidade é tão insuportável que a mente se fragmenta. A análise aponta para a intersecção entre gênero, raça e abandono social, mostrando que a sanidade é quase um luxo impossível para quem vive no limite da exclusão.',
                analise_en:
                    'This short story analyzes madness as refuge. For Duzu, reality is so unbearable that the mind fragments. The analysis points to the intersection of gender, race, and social abandonment, showing that sanity is almost an impossible luxury for those living at the limit of exclusion.',
            },
            {
                titulo_pt: 'Maria',
                titulo_en: 'Maria',
                resumo_pt:
                    'Maria é uma trabalhadora doméstica que, ao pegar o ônibus para voltar para casa, é confundida com uma cúmplice de um assalto ou simplesmente se torna o alvo da fúria da multidão. O conto descreve a passividade dos passageiros enquanto Maria é linchada verbal e fisicamente. É uma denúncia dolorosa sobre a fragilidade da vida negra em espaços públicos e a rapidez com que a sociedade condena sem provas.',
                resumo_en:
                    "Maria is a domestic worker who, when getting on the bus to go back home, is mistaken for an accomplice to a robbery or simply becomes the target of the crowd's fury. The short story describes the passivity of passengers while Maria is lynched verbally and physically. It is a painful denunciation of the fragility of Black life in public spaces and the speed with which society condemns without proof.",
                analise_pt:
                    'A análise é uma denúncia da indiferença social. O linchamento de Maria dentro de um transporte público serve como uma metáfora da omissão da sociedade brasileira diante da violência contra a mulher negra. Mostra como o preconceito pré-julga e condena sem dar direito à voz ou à defesa.',
                analise_en:
                    "The analysis is a denunciation of social indifference. Maria's lynching inside public transportation serves as a metaphor for Brazilian society's omission in the face of violence against Black women. It shows how prejudice prejudges and condemns without giving the right to voice or defense.",
            },
            {
                titulo_pt: 'Quantos filhos Natalina teve?',
                titulo_en: 'How Many Children Did Natalina Have?',
                resumo_pt:
                    'Uma reflexão angustiante sobre a negação da maternidade plena. Natalina engravida repetidas vezes, mas seus filhos são frutos de abusos ou lhe são arrancados pela miséria, pelo sistema ou pela morte precoce. Ela não consegue nomear ou contar seus filhos vivos; ela os contabiliza pelas ausências, pelas dores do parto que não resultaram em vida compartilhada. O conto escancara a falta de autonomia reprodutiva e a ruptura dos laços familiares impostas às mulheres negras.',
                resumo_en:
                    'An anguishing reflection on the denial of full motherhood. Natalina becomes pregnant repeatedly, but her children are the fruit of abuse or torn from her by poverty, the system, or premature death. She cannot name or count her living children; she counts them by absences, by the pains of labor that did not result in shared life. The short story lays bare the lack of reproductive autonomy and the breaking of family bonds imposed on Black women.',
                analise_pt:
                    "A análise foca na reprodução forçada e no luto materno. A pergunta 'Quantos filhos Natalina teve?' é impossível de responder porque a maternidade negra é constantemente interrompida. O conto revela como a violência estrutural rouba de mulheres negras o direito fundamental de ser mãe de seus filhos, tornando a maternidade um espaço de dor em vez de alegria.",
                analise_en:
                    "The analysis focuses on forced reproduction and maternal grief. The question 'How many children did Natalina have?' is impossible to answer because Black motherhood is constantly interrupted. The short story reveals how structural violence steals from Black women the fundamental right to be mothers to their children, making motherhood a space of pain instead of joy.",
            },
            {
                titulo_pt: 'Beijo na face',
                titulo_en: 'Kiss on the Face',
                resumo_pt:
                    "Em contraste com a violência masculina muito presente na obra, este conto foca na solidariedade e no afeto entre mulheres. A narrativa acompanha a aproximação de duas mulheres marcadas pela brutalidade de seus parceiros. Em um ambiente de confiança, elas encontram consolo uma na outra. O 'beijo na face' simboliza a ternura, o acolhimento e a descoberta de um espaço seguro onde o amor e a amizade servem como escudo contra a hostilidade do mundo.",
                resumo_en:
                    "In contrast with the male violence very present in the work, this short story focuses on solidarity and affection between women. The narrative follows the approach of two women marked by the brutality of their partners. In an environment of trust, they find solace in each other. The 'kiss on the face' symbolizes tenderness, care, and the discovery of a safe space where love and friendship serve as a shield against the world's hostility.",
                analise_pt:
                    'O ponto central aqui é a humanização através do afeto. Em uma sociedade que vê a mulher negra apenas como força de trabalho, o direito ao carinho é uma conquista política. A análise explora como pequenos gestos de ternura podem restaurar a psique de indivíduos que foram condicionados a apenas suportar a dor.',
                analise_en:
                    'The central point here is humanization through affection. In a society that sees Black women only as a labor force, the right to care is a political achievement. The analysis explores how small gestures of tenderness can restore the psyche of individuals who have been conditioned to only endure pain.',
            },
            {
                titulo_pt: 'Luamanda',
                titulo_en: 'Luamanda',
                resumo_pt:
                    'Luamanda é uma mulher madura que recusa o apagamento de seus desejos. O conto é uma ode à sensualidade e ao direito ao prazer da mulher negra mais velha. Apesar das adversidades financeiras e das desilusões amorosas do passado, ela se permite viver a paixão e a sexualidade de forma plena e afirmativa. É uma quebra de estereótipos, mostrando uma protagonista que se apropria do próprio corpo e busca a alegria no afeto e na intimidade.',
                resumo_en:
                    'Luamanda is a mature woman who refuses the erasure of her desires. The short story is an ode to sensuality and the right to pleasure of the older Black woman. Despite financial hardships and romantic disappointments of the past, she allows herself to live passion and sexuality fully and affirmatively. It is a breaking of stereotypes, showing a protagonist who appropriates her own body and seeks joy in affection and intimacy.',
                analise_pt:
                    "A análise encerra a primeira metade do livro com o tema da emancipação sexual. Luamanda representa o despertar da consciência sobre o direito ao prazer. Ela para de trabalhar para os outros e começa a olhar para si. É uma análise sobre o 'basta' necessário para que a mulher negra deixe de ser um objeto e se torne protagonista de sua vida.",
                analise_en:
                    "The analysis ends the first half of the book with the theme of sexual emancipation. Luamanda represents the awakening of consciousness about the right to pleasure. She stops working for others and begins to look at herself. It is an analysis of the 'enough' necessary for Black women to stop being an object and become protagonists of their own lives.",
            },
            {
                titulo_pt: 'O cooper de Cida',
                titulo_en: "Cida's Run",
                resumo_pt:
                    'Cida é uma mulher negra que tenta se inserir em um padrão de vida e saúde de classe média, correndo (fazendo cooper) pelas ruas de um bairro nobre. Durante a corrida, ela reflete sobre seu corpo, seu suor e o olhar constante e julgador dos moradores brancos da região. O conto discute o deslocamento social, a objetificação do corpo negro e a exaustão de tentar pertencer a espaços que foram projetados para excluir pessoas como ela.',
                resumo_en:
                    'Cida is a Black woman who tries to fit into a middle-class lifestyle and health pattern by running through the streets of an upscale neighborhood. During the run, she reflects on her body, her sweat, and the constant and judgmental gaze of the white residents in the area. The short story discusses social displacement, the objectification of the Black body, and the exhaustion of trying to belong to spaces designed to exclude people like her.',
                analise_pt:
                    "Este texto analisa a territorialidade e o corpo. O corpo negro 'em movimento' em um bairro de elite gera pânico moral. A análise explora o racismo recreativo e a vigilância constante que recai sobre pessoas negras quando elas tentam usufruir de espaços públicos destinados ao lazer da classe alta.",
                analise_en:
                    "This text analyzes territoriality and the body. The Black body 'in motion' in an elite neighborhood generates moral panic. The analysis explores recreational racism and the constant surveillance that falls on Black people when they try to enjoy public spaces intended for the leisure of the upper class.",
            },
            {
                titulo_pt: 'Zaíta esqueceu de guardar os brinquedos',
                titulo_en: 'Zaíta Forgot to Put Away the Toys',
                resumo_pt:
                    'De forma brutal e rápida, o conto narra a tarde de Zaíta, uma menina cheia de imaginação brincando no terreiro de casa. A inocência da brincadeira é subitamente rasgada pelo som de um tiroteio. Zaíta é atingida por uma bala perdida. A imagem final dos brinquedos espalhados no chão condensa a tragédia da infância roubada nas favelas, denunciando o genocídio de crianças negras e a banalidade da morte nos territórios marginalizados.',
                resumo_en:
                    "In a brutal and quick manner, the short story narrates Zaíta's afternoon, an imaginative girl playing in her home's yard. The innocence of play is suddenly torn by the sound of gunshots. Zaíta is hit by a stray bullet. The final image of toys scattered on the ground condenses the tragedy of stolen childhood in favelas, denouncing the genocide of Black children and the banality of death in marginalized territories.",
                analise_pt:
                    "A análise foca no impacto do trauma na infância. A morte de Zaíta é apresentada de forma seca e brutal para gerar indignação. O brinquedo esquecido simboliza a vida que não pôde ser vivida plenamente, denunciando a barbárie cotidiana que acontece nas periferias sob o pretexto de 'combate ao crime'.",
                analise_en:
                    "The analysis focuses on the impact of trauma on childhood. Zaíta's death is presented in a dry and brutal way to generate indignation. The forgotten toy symbolizes the life that could not be fully lived, denouncing the daily barbarity that happens in the peripheries under the guise of 'fighting crime'.",
            },
            {
                titulo_pt: 'Di lixão',
                titulo_en: 'Di of the Landfill',
                resumo_pt:
                    'O cenário é o aterro sanitário, onde a sobrevivência depende daquilo que a cidade vomita. Di é um menino que cresce disputando comida e objetos com urubus e caminhões de lixo. A narrativa mostra a desumanização completa, onde pessoas são tratadas como os resíduos que recolhem. O conto não poupa o leitor do cheiro, da sujeira e da desesperança, mostrando o limite extremo da exclusão social e a perda da infância no meio da miséria.',
                resumo_en:
                    'The setting is the landfill, where survival depends on what the city vomits. Di is a boy who grows up competing for food and objects with vultures and garbage trucks. The narrative shows complete dehumanization, where people are treated as the waste they collect. The short story does not spare the reader from the smell, the filth, and despair, showing the extreme limit of social exclusion and the loss of childhood amid misery.',
                analise_pt:
                    'A análise revela a desumanização absoluta. Di não é uma criança; é um animal lutando por sobrevivência. O conto expõe como o capitalismo reduz pessoas inteiras a zero, tornando-as descartáveis. O lixão é a metáfora perfeita: a sociedade os vê como lixo, resíduos que precisam ser escondidos.',
                analise_en:
                    'The analysis reveals absolute dehumanization. Di is not a child; he is an animal struggling for survival. The short story exposes how capitalism reduces entire people to zero, making them disposable. The landfill is the perfect metaphor: society sees them as garbage, waste that needs to be hidden.',
            },
            {
                titulo_pt: 'Lumbiá',
                titulo_en: 'Lumbiá',
                resumo_pt:
                    'Lumbiá é um menino de rua que, às vésperas do Natal, fica hipnotizado pela vitrine de uma loja rica que exibe um presépio exuberante. Ele não quer apenas um brinquedo; ele deseja roubar o Menino Jesus para roubar também a vida digna, limpa e sagrada que a estatueta representa, uma vida que lhe é negada. Ao fugir com a imagem, Lumbiá é atropelado no trânsito caótico. A ironia e a tragédia se misturam na morte de um menino real que só queria a dignidade de um menino de gesso.',
                resumo_en:
                    'Lumbiá is a street boy who, on the eve of Christmas, becomes hypnotized by the window display of a rich store that displays an exuberant nativity scene. He does not just want a toy; he wishes to steal the Baby Jesus to also steal the dignified, clean, and sacred life that the statue represents, a life denied to him. As he flees with the image, Lumbiá is run over in chaotic traffic. Irony and tragedy mix in the death of a real boy who only wanted the dignity of a plaster boy.',
                analise_pt:
                    'O conto analisa a classe, a fé e o direito à dignidade. O presépio é a representação simbólica de um mundo que Lumbiá nunca poderá acessar. Sua morte é a resposta do sistema capitalista ao seu roubo: a morte é mais provável que a misericórdia. A ironia brutal é que ele rouba um símbolo de salvação, mas é condenado à morte.',
                analise_en:
                    "The short story analyzes class, faith, and the right to dignity. The nativity scene is the symbolic representation of a world Lumbiá will never be able to access. His death is the capitalist system's response to his theft: death is more likely than mercy. The brutal irony is that he steals a symbol of salvation, but is condemned to death.",
            },
            {
                titulo_pt: 'Os amores de Kimbá',
                titulo_en: 'The Loves of Kimbá',
                resumo_pt:
                    'O conto explora a complexidade da masculinidade negra. Kimbá é um homem que deseja amar e ser amado, mas se vê preso em uma teia de estereótipos raciais e expectativas sociais que o hiperssexualizam ou o marginalizam. Suas relações são marcadas por desencontros e pela incapacidade de construir um afeto duradouro, refletindo como o racismo estrutural também destrói a saúde emocional e as pontes afetivas dos homens negros.',
                resumo_en:
                    'The short story explores the complexity of Black masculinity. Kimbá is a man who desires to love and be loved, but finds himself trapped in a web of racial stereotypes and social expectations that hypersexualize or marginalize him. His relationships are marked by mismatches and the inability to build lasting affection, reflecting how structural racism also destroys the emotional health and emotional bridges of Black men.',
                analise_pt:
                    'A análise revela como o racismo fragmenta não apenas corpos, mas também corações. Kimbá representa todos os homens negros que tentam amar dentro de um sistema que os criminaliza. O conto mostra que o racismo não apenas mata fisicamente; ele mata a capacidade de amar. Seus amores são sempre incompletos, sempre em risco.',
                analise_en:
                    'The analysis reveals how racism fragments not just bodies, but also hearts. Kimbá represents all Black men who try to love within a system that criminalizes them. The short story shows that racism does not just kill physically; it kills the capacity to love. His loves are always incomplete, always at risk.',
            },
            {
                titulo_pt: 'Ei, Ardoca',
                titulo_en: 'Hey, Ardoca',
                resumo_pt:
                    'Um relato de esgotamento e ruptura. A protagonista, após anos sofrendo violência doméstica e psicológica nas mãos de seu parceiro Ardoca, chega ao seu limite. O conto é estruturado quase como um monólogo de confronto, onde ela finalmente rompe o silêncio e exige que ele vá embora. É uma narrativa sobre a retomada do controle, a demarcação de limites e a coragem necessária para quebrar o ciclo de abuso dentro do próprio lar.',
                resumo_en:
                    "An account of exhaustion and rupture. The protagonist, after years of suffering domestic and psychological violence at the hands of her partner Ardoca, reaches her limit. The short story is structured almost as a monologue of confrontation, where she finally breaks the silence and demands that he leave. It is a narrative about reclaiming control, setting boundaries, and the courage needed to break the cycle of abuse within one's own home.",
                analise_pt:
                    "A análise foca no grito de libertação. 'Ei, Ardoca' é um chamado para ser ouvida. A mulher deixa de ser vítima passiva e se torna agente de sua libertação. O conto é um hino à resistência doméstica, mostrando que o fim do abuso começa quando a mulher diz 'não' com toda a força de sua voz.",
                analise_en:
                    "The analysis focuses on the cry for liberation. 'Hey, Ardoca' is a call to be heard. The woman stops being a passive victim and becomes an agent of her liberation. The short story is a hymn to domestic resistance, showing that the end of abuse begins when the woman says 'no' with all the strength of her voice.",
            },
            {
                titulo_pt: 'A gente combinamos de não morrer',
                titulo_en: 'We Agreed Not to Die',
                resumo_pt:
                    "O título, de uma força ímpar, resume o espírito de resistência do povo negro. A história acompanha Bica e a comunidade diante da perda constante de seus jovens para a violência urbana e policial. Diante do extermínio sistemático, eles fazem um pacto simbólico de sobrevivência. A morte física pode levá-los aos poucos, mas eles 'combinam de não morrer' na memória, na cultura e na dignidade, reafirmando que a existência coletiva continuará a pulsar.",
                resumo_en:
                    "The title, of unparalleled force, sums up the spirit of Black people's resistance. The story follows Bica and the community facing constant loss of their young to urban and police violence. Facing systematic extermination, they make a symbolic pact of survival. Death may take them little by little, but they 'agree not to die' in memory, culture, and dignity, reaffirming that collective existence will continue to pulse.",
                analise_pt:
                    "A análise celebra a resistência. 'A gente combinamos de não morrer' é um manifesto. Mostra que diante do extermínio, o povo negro responde com a afirmação de que sua morte não é inevitável, que sua vida importa, que sua memória será guardada. É um ato de recusa absoluta ao apagamento.",
                analise_en:
                    "The analysis celebrates resistance. 'We agreed not to die' is a manifesto. It shows that in the face of extermination, Black people respond by affirming that their death is not inevitable, that their life matters, that their memory will be preserved. It is an act of absolute refusal to erasure.",
            },
            {
                titulo_pt: 'Ayoluwa, a alegria de nosso povo',
                titulo_en: 'Ayoluwa, the Joy of Our People',
                resumo_pt:
                    "O livro se encerra quebrando a sequência de luto e dor. Ayoluwa é uma criança que nasce, e seu nome de origem africana significa 'a alegria do nosso povo'. O conto descreve a celebração da comunidade em torno desse nascimento. É um final que projeta esperança, apontando para o futuro e para a continuidade da ancestralidade. Mostra que, apesar de todo o derramamento de sangue e sofrimento narrados ao longo da obra, a vida, a beleza e a alegria preta continuam resistindo e renascendo.",
                resumo_en:
                    "The book closes by breaking the sequence of grief and pain. Ayoluwa is a child who is born, and her African-origin name means 'the joy of our people.' The short story describes the community's celebration around this birth. It is an ending that projects hope, pointing to the future and the continuity of ancestry. It shows that, despite all the bloodshed and suffering narrated throughout the work, Black life, beauty, and joy continue to resist and be reborn.",
                analise_pt:
                    "Esta é uma análise sobre esperança e futurismo negro. Em um livro cercado de mortes, Ayoluwa representa a vitória da vida. O nascimento é tratado como uma promessa de que, apesar de todas as tentativas de apagamento, o povo negro continuará nascendo, crescendo e ocupando o mundo com alegria. É o final que diz: 'Nós persistimos'.",
                analise_en:
                    "This is an analysis of hope and Black futurism. In a book surrounded by deaths, Ayoluwa represents the victory of life. Birth is treated as a promise that, despite all attempts at erasure, Black people will continue being born, growing, and occupying the world with joy. It is the ending that says: 'We persist.'",
            },
        ],
    });

    console.log('👥 Inserindo personagens...');

    const contos = await prisma.conto.findMany({
        select: { id: true, titulo_pt: true },
    });

    await prisma.personagem.createMany({
        data: [
            {
                nome: 'Ana Davenga',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/ana-davenga-novo.png',
                caracteristicas_pt:
                    'Mulher negra adulta, de corpo cheio e exuberante. Seios grandes e salientes, quadris marcados. Pele negra. Presença física imponente — quando dança no samba, seu corpo se move com graça e sensualidade natural. Veste-se de forma simples, como moradora de favela. Expressão no rosto que alterna entre a preocupação e o afeto profundo.',
                caracteristicas_en:
                    'An adult Black woman with a full, exuberant body. She has large, prominent breasts and shapely hips. Deep black skin. A commanding physical presence—when she dances samba, her body moves with grace and natural sensuality. She dresses simply, like a resident of the favela. Her facial expression shifts between worry and profound affection.',
                descricao_pt:
                    "Companheira de Davenga, chefe de uma quadrilha numa favela. Aprende a conviver com a vida do crime sem se envolver diretamente — 'cega, surda e muda' quanto aos assuntos dos homens. Tem presença firme e é respeitada. Apaixonada por Davenga, enxuga as lágrimas dele no 'gozo-pranto'. Sua noite de paz se rompe com a chegada dos companheiros sem o marido — prenúncio trágico.",
                descricao_en:
                    "Companion to Davenga, leader of a criminal gang in a favela. She learns to live with the life of crime without directly involving herself — 'blind, deaf and mute' to the affairs of men. She has a firm presence and is respected. In love with Davenga, she wipes his tears in the 'climax-tears'. Her night of peace is shattered by the arrival of his companions without him — a tragic omen.",
                contoId: contos.find((c) => c.titulo_pt === 'Ana Davenga')?.id,
            },
            {
                nome: 'Maria',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/maria.png',
                caracteristicas_pt:
                    'Mulher negra e periférica, moradora de favela. Vestimenta simples de quem trabalha como doméstica. Corpo cansado pela rotina do trabalho e pelo peso das longas esperas nos pontos de ônibus — corpo marcado pela invisibilidade social que lhe é imposta.',
                caracteristicas_en:
                    'Black peripheral woman, favela resident. Simple clothing of someone who works as a domestic servant. Body tired from work routine and the weight of long waits at bus stops — a body marked by the social invisibility imposed on her.',
                descricao_pt:
                    'Trabalhadora doméstica que mora numa favela e serve numa casa de família rica. Enfrenta violência simbólica e física no transporte e nas ruas. Seu cotidiano revela as múltiplas camadas de opressão — de classe, raça e gênero — que recaem sobre mulheres negras que sustentam casas alheias enquanto lutam para manter a sua.',
                descricao_en:
                    "A domestic worker who lives in a favela and serves a wealthy family. She faces symbolic and physical violence in transportation and on the streets. Her daily life reveals the multiple layers of oppression — of class, race, and gender — that fall upon Black women who sustain other people's homes while struggling to maintain their own.",
                contoId: contos.find((c) => c.titulo_pt === 'Maria')?.id,
            },
            {
                nome: 'Cida',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/cida.png',
                caracteristicas_pt:
                    "Mulher negra periférica cuja aparência está intimamente ligada à sua rotina diária. Corpo que se move na 'corda bamba do tempo' — a 'frágil vara' da existência. Seu cooper (corrida leve) é uma imagem do corpo negro feminino que precisa se mover constantemente para não cair do fio tenso da sobrevivência.",
                caracteristicas_en:
                    "A peripheral Black woman whose appearance is intimately linked to her daily routine. A body that moves on the 'tightrope of time' — the 'fragile rod' of existence. Her cooper (light running) is an image of the Black female body that must constantly move not to fall from the tense thread of survival.",
                descricao_pt:
                    "Doméstica cuja rotina de trabalho é retratada como uma corrida sem fim. O 'cooper' do título é metáfora poderosa: ela corre o tempo todo, mas no mesmo lugar. Representa o esforço exaustivo de mulheres negras trabalhadoras que equilibram o sustento da família com as demandas de patrões, transporte, casa e filhos — tudo isso na 'corda bamba do tempo'.",
                descricao_en:
                    "A domestic worker whose work routine is portrayed as an endless race. The 'cooper' of the title is a powerful metaphor: she runs all the time, but in the same place. She represents the exhausting effort of working Black women who balance family sustenance with the demands of employers, transportation, home, and children — all of this on the 'tightrope of time'.",
                contoId: contos.find((c) => c.titulo_pt === 'O cooper de Cida')?.id,
            },
            {
                nome: 'Lumbiá',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/lumbia-novo.png',
                caracteristicas_pt:
                    "Menino negro da rua, descrito como 'pivete'. Corpo de criança que se encolhe, se enrosca — em uma das passagens mais simbólicas do livro, Lumbiá 'foi se encolhendo, se enroscando até ganhar a posição de feto'. Seu corpo regride à posição mais vulnerável e primordial — o nascituro que nunca deveria ter saído do ventre para o mundo que o aguardava.",
                caracteristicas_en:
                    "Street Black boy, described as an 'urchin'. A child's body that shrinks, coils — in one of the most symbolic passages in the book, Lumbiá 'kept shrinking, coiling until he gained the position of a fetus'. His body regresses to the most vulnerable and primordial position — the unborn who should never have left the womb to the world that awaited him.",
                descricao_pt:
                    "Menino abandonado pela sociedade, símbolo do extermínio da infância negra pobre nas grandes cidades. Sua regressão física ao estado fetal é descrita pelo prefácio como uma 'síntese irreparável' — não há saída, não há futuro possível para quem nasceu onde ele nasceu. Representa os meninos perdidos que são 'herdeiros de mães sem nome, herança que as mulheres deixaram e que ninguém quis receber'.",
                descricao_en:
                    "A boy abandoned by society, a symbol of the extermination of poor Black childhood in big cities. His physical regression to the fetal state is described by the foreword as an 'irreparable synthesis' — there is no way out, no possible future for one born where he was born. He represents the lost boys who are 'heirs of mothers without names, an inheritance that women left behind and no one wanted to receive'.",
                contoId: contos.find((c) => c.titulo_pt === 'Lumbiá')?.id,
            },
            {
                nome: 'Zaíta',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/zaita.png',
                caracteristicas_pt:
                    "Menina negra pequena, criança da favela com a inocência inscrita no corpo de 'borboleta-menina'. Tem uma irmã gêmea, Naíta. Seu corpo de criança contrasta com o ambiente de violência em que está inserida — os brinquedos espalhados pelo chão são o símbolo de sua infância interrompida.",
                caracteristicas_en:
                    "Small Black girl, favela child with innocence inscribed in her body as a 'butterfly-girl'. She has a twin sister, Naíta. Her child's body contrasts with the violent environment she is inserted into — the toys scattered on the ground are the symbol of her interrupted childhood.",
                descricao_pt:
                    "Criança que vive numa favela dominada por tiroteios entre grupos rivais. Seu irmão mais velho é líder do grupo mais armado. Zaíta procura uma figurinha em forma de flor — símbolo da inocência que persiste no meio da tragédia. É assassinada por uma bala perdida num confronto. A última frase da irmã — 'Zaíta, você esqueceu de guardar os brinquedos!' — é um dos momentos mais devastadores da literatura brasileira contemporânea.",
                descricao_en:
                    "A child living in a favela dominated by shootouts between rival groups. Her older brother is the leader of the most armed group. Zaíta searches for a small figure in the shape of a flower — a symbol of innocence that persists amid tragedy. She is killed by a stray bullet in a confrontation. The last phrase of her sister — 'Zaíta, you forgot to put away the toys!' — is one of the most devastating moments in contemporary Brazilian literature.",
                contoId: contos.find(
                    (c) => c.titulo_pt === 'Zaíta esqueceu de guardar os brinquedos',
                )?.id,
            },
            {
                nome: 'Duzu-Querença',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/duzu-querenca-novo.png',
                caracteristicas_pt:
                    "Mendiga descrita como uma 'palavra siamesa' — Duzu é o nome, Querença é o sonho que ela carrega consigo. Corpo marcado pelas ruas, pelo tempo e pela miséria. Figura que habita as margens invisíveis da cidade.",
                caracteristicas_en:
                    "A beggar described as a 'Siamese word' — Duzu is the name, Querença is the dream she carries with her. A body marked by the streets, time, and misery. A figure that inhabits the invisible margins of the city.",
                descricao_pt:
                    "Ex-prostituta que viveu anos nas ruas. Carrega em si a 'querença' — o desejo fundo de reinventar a vida. Umedecia seus sonhos para que eles 'florescessem e se cumprissem vivos e reais'. Representa a resistência silenciosa de quem sobrevive à margem da sociedade, guardando dentro de si uma chama de dignidade que o mundo tenta apagar.",
                descricao_en:
                    "A former prostitute who lived on the streets for years. She carries within her the 'querença' — the deep desire to reinvent her life. She moistened her dreams so that they 'would flourish and come true, alive and real.' She represents the silent resistance of one who survives on society's margins, keeping within herself a flame of dignity that the world tries to extinguish.",
                contoId: contos.find((c) => c.titulo_pt === 'Duzu-Querença')?.id,
            },
            {
                nome: 'Luamanda',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/luamanda.png',
                caracteristicas_pt:
                    "Cinquentona que aparenta ser muito mais jovem. 'Estava inteirinha, apesar de tantos trambolhões e acidentes de percurso em sua vida-estrada.' Corpo que desmentiu o tempo, preservando uma vitalidade que surpreendia a si mesma diante do espelho. Negra, marcada pela beleza que atravessou cinco décadas.",
                caracteristicas_en:
                    "A fifty-year-old woman who appears much younger. 'She was whole, despite so many stumbles and accidents along her life-road.' A body that defied time, preserving a vitality that surprised even herself in the mirror. Black, marked by the beauty that spanned five decades.",
                descricao_pt:
                    "Mulher em processo de rememoração profunda de sua vida amorosa e erótica. Seu nome é uma aglutinação de 'lua' e 'mandar' — ela é regida pela lua e pelo desejo. Reflete sobre seus amores: o platônico aos onze anos, o primeiro relacionamento aos treze, a grande paixão que lhe deu cinco filhos, e também amores em 'braços iguais aos seus'. Questiona sem pudor: 'O amor se guarda só na ponta de um falo ou nasce também dos lábios vaginais de um coração de uma mulher para a outra?'",
                descricao_en:
                    "A woman in a process of deep remembrance of her romantic and erotic life. Her name is an agglutination of 'moon' and 'to command' — she is governed by the moon and desire. She reflects on her loves: the platonic one at eleven, her first relationship at thirteen, the great passion that gave her five children, and also loves in 'arms like her own.' She questions without shame: 'Is love kept only at the tip of a phallus or is it also born from the vaginal lips of a woman's heart to another woman's?'",
                contoId: contos.find((c) => c.titulo_pt === 'Luamanda')?.id,
            },
            {
                nome: 'Ayoluwa',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/ayoluwa.png',
                caracteristicas_pt:
                    'Etnia: Bebê negro, pele retinta, muito lisa e saudável. Cabelo: Pequenos fios de cabelo crespo bem macios começando a crescer. Rosto: Bochechas grandes, olhos negros imensos e brilhantes. Corpo: Bebê gordinho, enrolado em um tecido de estampa africana (tipo Kente ou Ankara). O Diferencial: Transmite uma pureza absoluta e uma esperança que ilumina o ambiente.',
                caracteristicas_en:
                    'Ethnicity: Black baby, very dark, smooth and healthy skin. Hair: Small soft curly hair beginning to grow. Face: Large cheeks, huge and bright black eyes. Body: Chubby baby, wrapped in African-patterned fabric (like Kente or Ankara). The Differentiator: Transmits absolute purity and a hope that illuminates the environment.',
                descricao_pt:
                    "Ayoluwa é o raio de sol que encerra a obra. Seu nome, que em iorubá significa 'a alegria do nosso povo', define sua função na narrativa: ela é a prova de que o projeto de morte não venceu. Sua personagem é uma mensagem de futurismo negro, indicando que, apesar das águas de lágrimas que banham o livro, novas vidas continuarão a nascer com a missão de renovar a esperança e a alegria da comunidade.",
                descricao_en:
                    "Ayoluwa is the ray of sunshine that closes the work. Her name, which in Yoruba means 'the joy of our people,' defines her role in the narrative: she is proof that the project of death has not triumphed. Her character is a message of Black futurism, indicating that despite the waters of tears that bathe the book, new lives will continue to be born with the mission to renew hope and joy in the community.",
                contoId: contos.find((c) => c.titulo_pt === 'Ayoluwa, a alegria de nosso povo')?.id,
            },
            {
                nome: 'Natalina',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/natalina.png',
                caracteristicas_pt:
                    "Negra, começa a história ainda quase menina — 'ia fazer catorze anos' na primeira gravidez, com 'corpão de moça' aos onze. Corpo que amadurece precocemente, marcado pelas gestações repetidas, pelos chás que tomou, pelas náuseas do terceiro filho. Corpo jovem obrigado a envelhecer rápido demais.",
                caracteristicas_en:
                    "Black, begins the story still almost a girl — 'she was about to turn fourteen' in her first pregnancy, with a 'voluptuous body' at eleven. A body that matures prematurely, marked by repeated pregnancies, the teas she took, the nausea of the third child. A young body forced to age far too quickly.",
                descricao_pt:
                    'Protagonista de uma trajetória de maternidades não escolhidas. Sua história questiona radicalmente a maternidade compulsória: grávida pela primeira vez quase criança, tentou interromper a gestação com chás que a mãe preparava. Viveu a tensão entre o que o corpo carregava e o que a alma desejava. Representa mulheres que nunca tiveram o direito de dizer quantos filhos queriam ter.',
                descricao_en:
                    'Protagonist of a trajectory of unchosen motherhood. Her story radically questions compulsory maternity: pregnant for the first time as almost a child, she tried to interrupt the pregnancy with teas that her mother prepared. She lived the tension between what her body carried and what her soul desired. She represents women who never had the right to say how many children they wanted to have.',
                contoId: contos.find((c) => c.titulo_pt === 'Quantos filhos Natalina teve?')?.id,
            },
            {
                nome: 'Salinda',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/salinda.png',
                caracteristicas_pt:
                    'Mulher negra marcada fisicamente pelo sofrimento de uma violência sofrida. Corpo que carrega as marcas do que foi feito a ela sem consentimento. Aparência que guarda, na face, o paradoxo do título — um beijo que não deveria existir, dado onde não devia ser dado.',
                caracteristicas_en:
                    'Black woman physically marked by the suffering of violence endured. A body that carries the marks of what was done to her without consent. An appearance that holds, in her face, the paradox of the title — a kiss that should not exist, given where it should not be given.',
                descricao_pt:
                    'Personagem que atravessa o tema da violência sexual e do abuso. Sua história denuncia a violação do corpo feminino negro como algo corriqueiro e silenciado. Representa a dor de tantas mulheres que carregam no rosto e no corpo memórias de violências que o mundo prefere ignorar. Sua resistência é a de quem sobrevive ao insuportável e ainda assim continua existindo.',
                descricao_en:
                    'Character who traverses the theme of sexual violence and abuse. Her story denounces the violation of the Black female body as something routine and silenced. She represents the pain of so many women who carry in their faces and bodies memories of violence that the world prefers to ignore. Her resistance is that of one who survives the unbearable and still continues to exist.',
                contoId: contos.find((c) => c.titulo_pt === 'Beijo na face')?.id,
            },
            {
                nome: 'Di Lixão',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/di-lixao.png',
                caracteristicas_pt:
                    'Menino negro cuja alcunha já diz tudo sobre o lugar que a sociedade lhe reservou — ele veio do lixo, vive no lixo, é tratado como lixo. Corpo de criança marcado pela fome, pela rua e pelo abandono. Sua aparência carrega a sujeira literal e simbólica do descarte social.',
                caracteristicas_en:
                    "Black boy whose nickname says everything about the place society has reserved for him — he came from garbage, lives in garbage, is treated as garbage. A child's body marked by hunger, the street, and abandonment. His appearance carries the literal and symbolic dirt of social discarding.",
                descricao_pt:
                    "Menino de rua que representa o abandono completo do Estado em relação à infância negra periférica. Assim como Lumbiá, Di Lixão é um dos 'meninos perdidos' da obra. Seu nome é sua sentença social. A brutalidade poética de Conceição Evaristo o retrata sem sentimentalismos, mas com toda a força de quem denuncia que essa criança existiu — e que a sociedade decidiu descartá-la.",
                descricao_en:
                    "Street boy who represents the complete abandonment by the State in relation to peripheral Black childhood. Like Lumbiá, Di Lixão is one of the 'lost boys' of the work. His name is his social sentence. The poetic brutality of Conceição Evaristo portrays him without sentimentalisms, but with all the force of one who denounces that this child existed — and that society decided to discard him.",
                contoId: contos.find((c) => c.titulo_pt === 'Di lixão')?.id,
            },
            {
                nome: 'Kimbá',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/characters/kimba.png',
                caracteristicas_pt:
                    'Jovem negro alto, forte e visivelmente bonito — ele próprio tem consciência disso e gosta. Corpo atlético e imponente. Caminha com passos firmes e calmos. Antes chamado Zezinho, ganhou o apelido Kimbá de um amigo que o achava parecido com alguém da Nigéria. Tem presença física marcante, do tipo que atrai olhares — de mulheres e, para seu próprio desconforto, de homens também.',
                caracteristicas_en:
                    'A tall, strong, and strikingly handsome young Black man—he is well aware of his looks and embraces them. He has an athletic, imposing physique and walks with firm, calm strides. Formerly known as Zezinho, he was nicknamed Kimbá by a friend who thought he resembled someone from Nigeria. He has a powerful physical presence that draws eyes—from women and, to his own discomfort, from men as well.',
                descricao_pt:
                    "Jovem que acorda antes de todos num barraco onde vivem sua vó Lidumira, mãe, tias e duas irmãs, além do irmão mais velho Raimundo — sempre bêbado. Kimbá decide que é preciso 'movimentar a vida até a morte' e parte. A descoberta de que era atraente também para homens é descrita como 'perturbadora' para ele. Representa o jovem negro que tenta construir um caminho próprio fora da violência do morro, carregando ao mesmo tempo a beleza e a vulnerabilidade de existir num mundo que criminaliza corpos como o seu.",
                descricao_en:
                    "Young man who wakes before everyone else in a shack where his grandmother Lidumira, mother, aunts, and two sisters live, as well as his older brother Raimundo — always drunk. Kimbá decides that it is necessary to 'move life until death' and leaves. The discovery that he was also attractive to men is described as 'disturbing' for him. He represents the young Black man who tries to build his own path outside the violence of the favela, carrying at the same time the beauty and vulnerability of existing in a world that criminalizes bodies like his.",
                contoId: contos.find((c) => c.titulo_pt === 'Os amores de Kimbá')?.id,
            },
        ],
    });

    console.log('💬 Inserindo citações...');

    const citacoes = await prisma.conto.findMany({
        select: { id: true, titulo_pt: true },
    });

    await prisma.citacao.createMany({
        data: [
            {
                texto_pt:
                    'O amor se guarda só na ponta de um falo, ou nasce também dos lábios vaginais de um coração de uma mulher para outra?',
                texto_en:
                    "Is love kept only at the tip of a phallus, or is it also born from the vaginal lips of a woman's heart to another woman's?",
                explicacao_pt:
                    "A frase aparece logo após Luamanda experimentar, pela primeira vez, o amor com outra mulher. No texto, ela encontra um 'falo ausente' no corpo da outra, mas se afunda num 'doce e feminil carinho', sem sentir vazio algum. A pergunta surge imediatamente depois dessa experiência, como uma reflexão do narrador sobre o que Luamanda está vivendo.",
                explicacao_en:
                    "The phrase appears right after Luamanda experiences love with another woman for the first time. In the text, she finds an 'absent phallus' in the other's body, but sinks into a 'sweet and feminine care' without feeling any emptiness. The question emerges immediately after this experience, as the narrator's reflection on what Luamanda is experiencing.",
                personagem: 'narrador onisciente',
                contoId: citacoes.find((c) => c.titulo_pt === 'Luamanda')?.id,
            },
            {
                texto_pt:
                    'Querença, haveria de sempre umedecer seus sonhos para que eles florescessem e se cumprissem vivos e reais. Era preciso reinventar a vida, encontrar novos caminhos.',
                texto_en:
                    'Querença, she would always have to moisten her dreams so that they would flourish and come true, alive and real. It was necessary to reinvent life, to find new paths.',
                explicacao_pt:
                    'Pensamento atribuído a Duzu-Querença pelo narrador onisciente. Não é uma fala direta da personagem, mas o que vive dentro dela. A frase é o coração do conto.',
                explicacao_en:
                    'A thought attributed to Duzu-Querença by the omniscient narrator. It is not a direct speech from the character, but what lives within her. The phrase is the heart of the story.',
                personagem: 'narrador onisciente',
                contoId: citacoes.find((c) => c.titulo_pt === 'Duzu-Querença')?.id,
            },
            {
                texto_pt:
                    "Vi só lágrimas e lágrimas. Entretanto, ela sorria feliz. Mas eram tantas lágrimas, que eu me perguntei se minha mãe tinha olhos ou rios caudalosos sobre a face. E só então compreendi. Minha mãe trazia, serenamente em si, águas correntezas. Por isso, prantos e prantos a enfeitar o seu rosto. A cor dos olhos de minha mãe era cor de olhos d'água. Águas de Mamãe Oxum!",
                texto_en:
                    "I saw only tears and tears. Yet, she smiled happily. But there were so many tears that I wondered if my mother had eyes or rushing rivers on her face. And only then did I understand. My mother carried, serenely within herself, flowing waters. That's why tears and tears adorned her face. The color of my mother's eyes was the color of water eyes. Waters of Mother Oxum!",
                explicacao_pt:
                    'A filha que narrou a história inteira finalmente encontra a resposta para a pergunta que a atormentava. É o clímax do conto que abre e nomeia o livro.',
                explicacao_en:
                    'The daughter who narrated the entire story finally finds the answer to the question that tormented her. It is the climax of the story that opens and names the book.',
                personagem: 'narradora',
                contoId: citacoes.find((c) => c.titulo_pt === "Olhos d'água")?.id,
            },
            {
                texto_pt:
                    'E um leve e fugaz beijo na face, sombra rasurada de uma asa amarela de borboleta, se tornava uma certeza, uma presença incrustada nos poros da pele e da memória.',
                texto_en:
                    "And a light and fleeting kiss on the face, the faint shadow of a yellow butterfly's wing, became a certainty, a presence embedded in the pores of skin and memory.",
                explicacao_pt:
                    'Conclusão poética do conto, ainda sobre Salinda e sua amiga. Um dos trechos mais líricos do livro inteiro.',
                explicacao_en:
                    'A poetic conclusion to the story, still about Salinda and her friend. One of the most lyrical passages in the entire book.',
                personagem: 'narrador',
                contoId: citacoes.find((c) => c.titulo_pt === 'Beijo na face')?.id,
            },
            {
                texto_pt:
                    'Lembrou-se então de que era uma mulher e não uma máquina desenfreada, louca, programada para corrercorrer.',
                texto_en:
                    'Then she remembered that she was a woman and not a wild, mad machine programmed to runrun.',
                explicacao_pt:
                    "Narrado em 3ª pessoa sobre Cida. O verbo 'corrercorrer' (sem espaço) é um dos neologismos da autora — a fusão da palavra imita visualmente o ritmo exaustivo e ininterrupto da vida da personagem.",
                explicacao_en:
                    "Narrated in the third person about Cida. The verb 'runrun' (without a space) is one of the author's neologisms — the fusion of the word visually imitates the exhausting and uninterrupted rhythm of the character's life.",
                personagem: 'narrador',
                contoId: citacoes.find((c) => c.titulo_pt === 'O cooper de Cida')?.id,
            },
            {
                texto_pt: 'A mãe só ria, de uma maneira triste e com um sorriso molhado.',
                texto_en: 'The mother only laughed, in a sad way and with a wet smile.',
                explicacao_pt:
                    "A narradora descreve a mãe durante as brincadeiras inventadas para 'distrair a fome' das filhas. A contradição do 'sorriso molhado' é símbolo de toda a maternidade negra e pobre retratada no livro.",
                explicacao_en:
                    "The narrator describes the mother during games invented to 'distract from hunger' of her daughters. The contradiction of the 'wet smile' is a symbol of all the Black and poor motherhood portrayed in the book.",
                personagem: 'narradora',
                contoId: citacoes.find((c) => c.titulo_pt === "Olhos d'água")?.id,
            },
            {
                texto_pt:
                    'Achava também que qualquer vida era um risco e o risco maior era o de não tentar viver.',
                texto_en:
                    'She also believed that any life was a risk and the greatest risk was not trying to live.',
                explicacao_pt:
                    'A frase aparece quando o narrador descreve os pensamentos dela — ela sabia dos riscos que corria ao lado de Davenga, mas achava também que qualquer vida era um risco e o risco maior era o de não tentar viver. É o pensamento interno de Ana, narrado em 3ª pessoa. Não é uma fala em voz alta — é o que ela pensa ao aceitar a vida que escolheu.',
                explicacao_en:
                    "The phrase appears when the narrator describes her thoughts — she knew the risks she was taking by Davenga's side, but she also believed that any life was a risk and the greatest risk was not trying to live. It is Ana's internal thought, narrated in the third person. It is not spoken aloud — it is what she thinks when accepting the life she chose.",
                personagem: 'Ana Davenga',
                contoId: citacoes.find((c) => c.titulo_pt === 'Ana Davenga')?.id,
            },
            {
                texto_pt:
                    'Se ao menos o medo me fizesse recuar, pelo contrário, avanço mais e mais na mesma proporção desse medo. É como se o medo fosse uma coragem ao contrário.',
                texto_en:
                    "If only fear made me retreat, on the contrary, I advance more and more in the same proportion as this fear. It's as if fear were courage in reverse.",
                explicacao_pt:
                    "A frase aparece em meio a uma cena de tiroteio, seguida de 'Medo, coragem, medo, coragemedo, coragemedo de dor e pânico. A festa está se dando. Balas enfeitam o coração da noite.' Este conto é o único do livro com múltiplos narradores em 1ª pessoa — não é possível identificar com precisão qual dos personagens fala esse trecho específico, mas é uma voz masculina jovem da favela.",
                explicacao_en:
                    "The phrase appears in the midst of a shootout scene, followed by 'Fear, courage, fear, fearecourage, fearecourage of pain and panic. The party is happening. Bullets adorn the heart of the night.' This story is the only one in the book with multiple first-person narrators — it is not possible to precisely identify which of the characters speaks this specific passage, but it is a young male voice from the favela.",
                personagem: 'jovem do morro',
                contoId: citacoes.find((c) => c.titulo_pt === 'A gente combinamos de não morrer')
                    ?.id,
            },
        ],
    });

    console.log('📝 Inserindo perguntas...');

    await prisma.quiz.createMany({
        data: [
            {
                pergunta_pt:
                    'Qual pergunta obsessiva abre o conto "Olhos d\'água" e percorre toda a narrativa?',
                pergunta_en:
                    'Which obsessive question opens the story "Olhos d\'água" and runs through the entire narrative?',
                opcaoA_pt: 'Por que minha mãe sempre chorava?',
                opcaoA_en: 'Why did my mother always cry?',
                opcaoB_pt: 'De que cor eram os olhos de minha mãe?',
                opcaoB_en: "What color were my mother's eyes?",
                opcaoC_pt: 'Onde foi parar minha família?',
                opcaoC_en: 'Where did my family end up?',
                opcaoD_pt: 'Quando verei minha mãe novamente?',
                opcaoD_en: 'When will I see my mother again?',
                opcaoE_pt: 'O que minha mãe guardava em segredo?',
                opcaoE_en: 'What was my mother keeping secret?',
                resposta: 'B',
                explicacao_pt:
                    "A pergunta 'De que cor eram os olhos de minha mãe?' é o eixo central do conto. Ela surge como um martelo na mente da narradora, que acorda de madrugada perturbada por não conseguir lembrar a cor dos olhos da própria mãe. A resposta só vem ao final: os olhos da mãe são 'cor de olhos d'água, águas de Mamãe Oxum' — revelação que dá título ao livro inteiro.",
                explicacao_en:
                    "The question 'What color were my mother's eyes?' is the central axis of the story. It appears like a hammer in the narrator's mind, who wakes up at dawn disturbed by not being able to remember the color of her own mother's eyes. The answer only comes at the end: her mother's eyes are 'water-eye-colored, Waters of Mother Oxum' — a revelation that gives title to the entire book.",
            },
            {
                pergunta_pt:
                    'No conto "Ana Davenga", de que forma Ana decide passar a se chamar com esse nome?',
                pergunta_en:
                    'In the story "Ana Davenga", how does Ana decide to start calling herself by that name?',
                opcaoA_pt: 'Seu pai a registrou com esse nome ao nascer.',
                opcaoA_en: 'Her father registered her with that name at birth.',
                opcaoB_pt: 'Ela escolheu o nome ao ingressar na vida do crime.',
                opcaoB_en: 'She chose the name when entering the life of crime.',
                opcaoC_pt:
                    'Ela adota o sobrenome de Davenga por amor, querendo a marca dele no nome e no corpo.',
                opcaoC_en:
                    "She adopts Davenga's surname out of love, wanting his mark on her name and her body.",
                opcaoD_pt: 'Os comparsas de Davenga lhe deram o apelido.',
                opcaoD_en: "Davenga's comrades gave her the nickname.",
                opcaoE_pt: 'O nome foi uma homenagem à mãe de Davenga.',
                opcaoE_en: "The name was a tribute to Davenga's mother.",
                resposta: 'C',
                explicacao_pt:
                    "Na noite em que os dois ficam juntos pela primeira vez, Ana decide que se chamará Ana Davenga. O texto é explícito: 'ela queria a marca do homem dela no seu corpo e no seu nome'. É um gesto de amor e pertencimento — ela escolhe ativamente carregar o nome dele.",
                explicacao_en:
                    "On the night they are together for the first time, Ana decides that she will call herself Ana Davenga. The text is explicit: 'she wanted his mark on her body and on her name.' It is a gesture of love and belonging — she actively chooses to carry his name.",
                resposta: 'C',
            },
            {
                pergunta_pt:
                    'No conto "Maria", o que o encontro no ônibus com o pai de seu filho revela sobre a personagem?',
                pergunta_en:
                    'In the story "Maria", what does the encounter on the bus with her child\'s father reveal about the character?',
                opcaoA_pt: 'Que Maria ainda o amava e queria reatar.',
                opcaoA_en: 'That Maria still loved him and wanted to get back together.',
                opcaoB_pt: 'Que Maria o odiava profundamente.',
                opcaoB_en: 'That Maria hated him deeply.',
                opcaoC_pt:
                    'Que Maria guarda uma mágoa silenciosa e o desejo de que as coisas pudessem ter sido diferentes.',
                opcaoC_en:
                    'That Maria harbors a silent resentment and the wish that things could have been different.',
                opcaoD_pt: 'Que Maria havia esquecido completamente o homem.',
                opcaoD_en: 'That Maria had completely forgotten the man.',
                opcaoE_pt: 'Que Maria pretendia contar ao filho sobre o pai.',
                opcaoE_en: 'That Maria intended to tell her child about his father.',
                resposta: 'C',
                explicacao_pt:
                    "O narrador descreve que 'Maria sentiu uma mágoa imensa. Por que não podia ser de uma outra forma?' Ela não fala, não reage — apenas observa. E 'Maria queria tanto dizer ao filho que o pai havia mandado um abraço', mas não o faz. O silêncio de Maria carrega toda a dor de uma vida que não foi como ela queria.",
                explicacao_en:
                    "The narrator describes that 'Maria felt immense resentment. Why couldn't it be different?' She does not speak, she does not react — she only observes. And 'Maria wanted so much to tell her son that his father had sent a hug,' but she does not. Maria's silence carries all the pain of a life that was not what she wanted.",
                resposta: 'C',
            },
            {
                pergunta_pt: 'O conto "Quantos filhos Natalina teve?" questiona principalmente:',
                pergunta_en:
                    'The story "How many children did Natalina have?" primarily questions:',
                opcaoA_pt: 'A importância do casamento para a estabilidade familiar.',
                opcaoA_en: 'The importance of marriage for family stability.',
                opcaoB_pt: 'O papel do Estado no registro civil de crianças.',
                opcaoB_en: 'The role of the State in registering children.',
                opcaoC_pt:
                    'O direito das mulheres sobre seus próprios corpos e a maternidade compulsória.',
                opcaoC_en: "Women's right over their own bodies and compulsory motherhood.",
                opcaoD_pt: 'A relação entre pobreza e número de filhos.',
                opcaoD_en: 'The relationship between poverty and number of children.',
                opcaoE_pt: 'A dificuldade de criar filhos sozinha na favela.',
                opcaoE_en: 'The difficulty of raising children alone in the favela.',
                resposta: 'C',
                explicacao_pt:
                    'Natalina engravida ainda quase criança, toma chás para interromper a gestação e recusa ficar com o pai do filho mesmo sendo pressionada. O título é uma pergunta irônica: quantos filhos Natalina teve, e quantos ela de fato quis? O conto denuncia a maternidade imposta e reivindica a autonomia da mulher sobre sua própria fertilidade.',
                explicacao_en:
                    "Natalina becomes pregnant while still almost a child, takes teas to interrupt the pregnancy, and refuses to stay with the child's father despite being pressured. The title is an ironic question: how many children did Natalina have, and how many did she actually want? The story denounces imposed motherhood and claims a woman's autonomy over her own fertility.",
                resposta: 'C',
            },
            {
                pergunta_pt:
                    'No conto "Luamanda", qual é a estrutura que organiza a narrativa da protagonista?',
                pergunta_en:
                    'In the story "Luamanda", what structure organizes the protagonist\'s narrative?',
                opcaoA_pt: 'Uma linha do tempo cronológica de seus empregos.',
                opcaoA_en: 'A chronological timeline of her jobs.',
                opcaoB_pt:
                    'Uma série de perguntas sobre o amor em cada fase de sua vida amorosa e erótica.',
                opcaoB_en:
                    'A series of questions about love in each phase of her romantic and erotic life.',
                opcaoC_pt: 'Cartas que Luamanda escreve para seus filhos.',
                opcaoC_en: 'Letters that Luamanda writes to her children.',
                opcaoD_pt: 'Diálogos entre Luamanda e sua mãe sobre o passado.',
                opcaoD_en: 'Dialogues between Luamanda and her mother about the past.',
                opcaoE_pt: 'Um sonho em que Luamanda revisita sua infância.',
                opcaoE_en: 'A dream in which Luamanda revisits her childhood.',
                resposta: 'B',
                explicacao_pt:
                    "O conto é estruturado em perguntas: 'Amor dói?', 'Amor é terra morta?', 'Amor é terremoto?', 'O amor é um poço misterioso?', 'O amor se guarda só na ponta de um falo?' Cada pergunta corresponde a uma fase da vida afetivo-sexual de Luamanda, da infância à maturidade, incluindo uma relação com outra mulher.",
                explicacao_en:
                    "The story is structured as questions: 'Does love hurt?', 'Is love dead land?', 'Is love an earthquake?', 'Is love a mysterious well?', 'Is love kept only at the tip of a phallus?' Each question corresponds to a phase of Luamanda's affective-sexual life, from childhood to maturity, including a relationship with another woman.",
                resposta: 'B',
            },
            {
                pergunta_pt:
                    'O que a frase "Querença haveria de sempre umedecer seus sonhos para que eles florescessem e se cumprissem vivos e reais" revela sobre Duzu-Querença?',
                pergunta_en:
                    'What does the sentence "Querença would always have to moisten her dreams so they would flourish and come true, alive and real" reveal about Duzu-Querença?',
                opcaoA_pt: 'Que Duzu era uma agricultora que cuidava de plantas.',
                opcaoA_en: 'That Duzu was a farmer who tended plants.',
                opcaoB_pt:
                    'Que o desejo de reinventar a vida nunca abandonou Duzu, mesmo nas piores condições.',
                opcaoB_en:
                    'That the desire to reinvent her life never abandoned Duzu, even in the worst conditions.',
                opcaoC_pt: 'Que Duzu tinha medo de que seus sonhos secassem como plantas sem água.',
                opcaoC_en:
                    'That Duzu was afraid her dreams would dry up like plants without water.',
                opcaoD_pt: 'Que Querença era o nome de sua neta preferida.',
                opcaoD_en: 'That Querença was the name of her favorite granddaughter.',
                opcaoE_pt: 'Que Duzu acreditava em horóscopos e profecias.',
                opcaoE_en: 'That Duzu believed in horoscopes and prophecies.',
                resposta: 'B',
                explicacao_pt:
                    "'Querença' significa desejo profundo, anseio. O nome da personagem é uma palavra-siamesa: Duzu (nome próprio) + Querença (o sonho que ela carrega). A frase revela que, apesar de mendiga e ex-prostituta, Duzu nunca deixou de alimentar sua querença — a força interior de quem se recusa a desistir de si mesmo.",
                explicacao_en:
                    "'Querença' means deep desire, longing. The character's name is a Siamese word: Duzu (proper name) + Querença (the dream she carries). The sentence reveals that, despite being a beggar and former prostitute, Duzu never stopped nourishing her querença — the inner strength of someone who refuses to give up on themselves.",
                resposta: 'B',
            },
            {
                pergunta_pt: 'No conto "Beijo na face", o que o espelho representa para Salinda?',
                pergunta_en:
                    'In the story "Kiss on the Face", what does the mirror represent for Salinda?',
                opcaoA_pt:
                    'Um espaço de reconhecimento de si mesma e do amor que sente pela amiga.',
                opcaoA_en: 'A space for recognizing herself and the love she feels for her friend.',
                opcaoB_pt: 'A vaidade que ela precisa abandonar.',
                opcaoB_en: 'The vanity she needs to abandon.',
                opcaoC_pt: 'O medo de envelhecer sozinha.',
                opcaoC_en: 'The fear of growing old alone.',
                opcaoD_pt: 'A culpa que ela carrega pela separação.',
                opcaoD_en: 'The guilt she carries for the separation.',
                opcaoE_pt: 'Um objeto que seu marido usa para vigiá-la.',
                opcaoE_en: 'An object her husband uses to watch her.',
                resposta: 'A',
                explicacao_pt:
                    "Salinda se contempla no espelho após se equilibrar sobre a dor e o susto. No reflexo, em vez do próprio rosto, vê o rosto da amiga — 'para afirmar a força de um amor entre duas iguais'. O espelho é o lugar onde Salinda se reconhece e reconhece o amor que 'se tornava uma certeza, uma presença incrustada nos poros da pele e da memória'.",
                explicacao_en:
                    "Salinda contemplates herself in the mirror after balancing on pain and shock. In the reflection, instead of her own face, she sees her friend's face — 'to affirm the strength of a love between two equals.' The mirror is the place where Salinda recognizes herself and the love that 'became a certainty, a presence embedded in the pores of skin and memory.'",
            },
            {
                pergunta_pt: 'A metáfora do "cooper" no conto "O Cooper de Cida" representa:',
                pergunta_en: 'The metaphor of "cooper" in the story "Cida\'s Run" represents:',
                opcaoA_pt:
                    'O esforço exaustivo e contínuo de Cida para se manter na "corda bamba do tempo", equilibrando trabalho, filhos e casa.',
                opcaoA_en:
                    "The exhausting and continuous effort of Cida to stay on the 'tightrope of time,' balancing work, children, and home.",
                opcaoB_pt: 'A prática de corrida que Cida adota para emagrecer.',
                opcaoB_en: 'The running practice that Cida adopts to lose weight.',
                opcaoC_pt: 'A leveza com que Cida enfrenta a vida.',
                opcaoC_en: 'The lightness with which Cida faces life.',
                opcaoD_pt: 'O transporte público que Cida usa todos os dias.',
                opcaoD_en: 'The public transportation Cida uses every day.',
                opcaoE_pt: 'A rotina de exercícios recomendada pelo médico de Cida.',
                opcaoE_en: "The exercise routine recommended by Cida's doctor.",
                resposta: 'A',
                explicacao_pt:
                    "Cida 'lembrou-se de que era uma mulher e não uma máquina desenfreada, louca, programada para corrercorrer.' O cooper é a metáfora da mulher negra trabalhadora que corre incessantemente — no trabalho doméstico, nos ônibus, na criação dos filhos — mas no mesmo lugar, sem avançar.",
                explicacao_en:
                    "Cida 'remembered that she was a woman and not a wild, mad machine programmed to runrun.' The cooper is the metaphor of the Black working woman who runs incessantly — in domestic work, on buses, raising children — but in the same place, without moving forward.",
                resposta: 'A',
            },
            {
                pergunta_pt:
                    'O que torna o final do conto "Zaíta esqueceu de guardar os brinquedos" tão devastador?',
                pergunta_en:
                    'What makes the ending of the story "Zaíta Forgot to Put Away the Toys" so devastating?',
                opcaoA_pt: 'Zaíta descobre que o irmão é traficante e vai embora de casa.',
                opcaoA_en: 'Zaíta discovers that her brother is a trafficker and leaves home.',
                opcaoB_pt: 'A irmã gêmea Naíta some sem deixar rastros.',
                opcaoB_en: 'The twin sister Naíta disappears without a trace.',
                opcaoC_pt:
                    'Zaíta é morta por uma bala perdida, e a última frase da irmã é sobre os brinquedos esquecidos no chão.',
                opcaoC_en:
                    "Zaíta is killed by a stray bullet, and the sister's final line is about the toys left on the ground.",
                opcaoD_pt: 'Zaíta perde a figurinha-flor que procurava e chora até adormecer.',
                opcaoD_en:
                    'Zaíta loses the flower sticker she was looking for and cries herself to sleep.',
                opcaoE_pt: 'O barraco da família é destruído num tiroteio.',
                opcaoE_en: "The family's shanty is destroyed in a shootout.",
                resposta: 'E',
                explicacao_pt:
                    "Zaíta é assassinada por uma bala perdida num confronto na favela. A frase final — 'Zaíta, você esqueceu de guardar os brinquedos!' — dita pela irmã Naíta, é uma das mais dilacerantes da obra. A crueldade está no contraste: a morte de uma criança é reduzida, aos olhos da irmã que ainda não compreende, a um brinquedo esquecido.",
                explicacao_en:
                    "Zaíta is killed by a stray bullet in a confrontation in the favela. The final line — 'Zaíta, you forgot to put away the toys!' — said by her sister Naíta, is one of the most devastating in the work. The cruelty lies in the contrast: a child's death is reduced, in her sister's still-uncomprehending eyes, to a forgotten toy.",
                resposta: 'E',
            },
            {
                pergunta_pt:
                    'No conto "Os amores de Kimbá", por que o protagonista era chamado de Zezinho antes de ganhar o apelido?',
                pergunta_en:
                    'In the story "The Loves of Kimbá", why was the protagonist called Zezinho before he got the nickname?',
                opcaoA_pt: 'Zezinho era seu nome de batismo, dado pelo pai.',
                opcaoA_en: 'Zezinho was his baptismal name, given by his father.',
                opcaoB_pt: 'Kimbá era apenas um apelido carinhoso da mãe.',
                opcaoB_en: 'Kimbá was just an affectionate nickname from his mother.',
                opcaoC_pt:
                    'Zezinho era seu nome de registro; recebeu o apelido Kimbá de um amigo que o achou parecido com alguém da Nigéria.',
                opcaoC_en:
                    'Zezinho was his registered name; he received the nickname Kimbá from a friend who thought he looked like someone from Nigeria.',
                opcaoD_pt:
                    'Um amigo o apelidou de Kimbá porque o achou parecido com alguém da Nigéria.',
                opcaoD_en:
                    'A friend nicknamed him Kimbá because he thought he looked like someone from Nigeria.',
                opcaoE_pt: 'Kimbá foi o nome que ele escolheu ao sair do morro.',
                opcaoE_en: 'Kimbá was the name he chose when he left the hill.',
                resposta: 'D',
                explicacao_pt:
                    'O protagonista era chamado Zezinho e ganhou o apelido Kimbá de um amigo rico e viajado que o achou parecido com alguém da Nigéria. O apelido carrega uma dimensão de identidade diaspórica — uma ligação simbólica com a África que o amigo enxerga nele, mesmo que Kimbá ainda não a veja em si mesmo.',
                explicacao_en:
                    'The protagonist was called Zezinho and received the nickname Kimbá from a wealthy, well-traveled friend who thought he looked like someone from Nigeria. The nickname carries a dimension of diasporic identity — a symbolic link to Africa that the friend sees in him, even if Kimbá does not yet see it in himself.',
            },
        ],
    });

    console.log('💡 inserindo dicas...');

    await prisma.dica.createMany({
        data: [
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Racismo estrutural no Brasil',
                conteudo_en: 'Structural racism in Brazil',
            },
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Invisibilidade social das mulheres negras',
                conteudo_en: 'The social invisibility of Black women',
            },
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Pobreza e desigualdade social',
                conteudo_en: 'Poverty and social inequality',
            },
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Memória e ancestralidade como resistência',
                conteudo_en: 'Memory and ancestry as forms of resistance',
            },
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Violência urbana e suas consequências',
                conteudo_en: 'Urban violence and its consequences',
            },
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'A fome como problema social e político',
                conteudo_en: 'Hunger as a social and political issue',
            },
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Desumanização de populações marginalizadas',
                conteudo_en: 'The dehumanization of marginalized populations',
            },
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'O papel da literatura na denúncia social',
                conteudo_en: 'The role of literature in social critique',
            },
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Infância em contextos de vulnerabilidade',
                conteudo_en: 'Childhood in contexts of vulnerability',
            },
            {
                tipo_pt: 'Possíveis temas de redação sobre o livro principal',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Resistência e sobrevivência nas periferias',
                conteudo_en: 'Resistance and survival in the outskirts (urban peripheries)',
            },
            {
                tipo_pt: 'Dicas de Vestibular sobre oConteúdo',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Escrevivência (fusão entre escrita e vivência pessoal/coletiva)',
                conteudo_en: 'Writing-life (Experience-based writing)',
            },
            {
                tipo_pt: 'Dicas de Vestibular sobre oConteúdo',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Ancestralidade e busca pelas raízes familiares',
                conteudo_en: 'Ancestry and the search for family roots',
            },
            {
                tipo_pt: 'Dicas de Vestibular sobre oConteúdo',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Racismo estrutural e violência institucional',
                conteudo_en: 'Structural racism and institutional violence',
            },
            {
                tipo_pt: 'Dicas de Vestibular sobre oConteúdo',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Protagonismo feminino negro e sororidade',
                conteudo_en: 'Black female protagonism and sisterhood',
            },
            {
                tipo_pt: 'Dicas de Vestibular sobre oConteúdo',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Fome e vulnerabilidade socioeconômica',
                conteudo_en: 'Hunger and socioeconomic vulnerability',
            },
            {
                tipo_pt: 'Dicas de Vestibular sobre oConteúdo',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Maternidade sob condições de precariedade',
                conteudo_en: 'Motherhood under precarious conditions',
            },
            {
                tipo_pt: 'Dicas de Vestibular sobre oConteúdo',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Memória como ferramenta de resistência',
                conteudo_en: 'Memory as a tool for resistance',
            },
            {
                tipo_pt: 'Dicas de Vestibular sobre oConteúdo',
                tipo_en: 'Potential essay topics for the main book',
                conteudo_pt: 'Subjetividade e humanização de corpos marginalizados',
                conteudo_en: 'Subjectivity and the humanization of marginalized bodies',
            },
        ],
    });

    console.log('👥 Inserindo membros...');

    await prisma.membro.createMany({
        data: [
            {
                nome: 'Fernando Santos',
                curso_pt: 'Desenvolvimento de Sistemas',
                curso_en: 'Systems Development',
                fotoUrl: '',
                github: 'https://github.com/ferrnd',
                linkedin: '',
                email: 'evencio.tech@gmail.com',
            },
            {
                nome: 'Cauã Tupinambá',
                curso_pt: 'Desenvolvimento de Sistemas',
                curso_en: 'Systems Development',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/members/caua-tupinamba.png?token=GHSAT0AAAAAAD4FPUYAPNDTOGHTBQ6QLGUI2PYQOIA',
                github: 'https://github.com/dev-tupizin',
                linkedin: 'https://www.linkedin.com/in/cau%C3%A3-tupinamba-7858a1349/',
                email: 'cauatupinamba@gmail.com',
            },
            {
                nome: 'João Pedro Piva',
                curso_pt: 'Desenvolvimento de Sistemas',
                curso_en: 'Systems Development',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/members/joao-pedro-piva.png?token=GHSAT0AAAAAAD4FPUYAWQWLQHTGID2AOEN22PYQHLQ',
                github: 'https://github.com/jppiva',
                linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-piva-nogueira-2643b835a/',
                email: 'joaopedropiva17@gmail.com',
            },
            {
                nome: 'Ana Clara Cremasco',
                curso_pt: 'Desenvolvimento de Sistemas',
                curso_en: 'Systems Development',
                fotoUrl: '',
                github: 'https://github.com/anaccremasco',
                linkedin:
                    'https://www.linkedin.com/in/ana-clara-cremasco-425799349?utm_source=share_via&utm_content=profile&utm_medium=member_android',
                email: 'anaclara.luizcremasco@gmail.com',
            },
            {
                nome: 'Daniel Casalli',
                curso_pt: 'Desenvolvimento de Sistemas',
                curso_en: 'Systems Development',
                fotoUrl:
                    'https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/members/daniel-casalli.png?token=GHSAT0AAAAAAD4FPUYAXZI63VOAHVWLV5QM2PYQTRQ',
                github: 'https://github.com/daniel-casalli02',
                linkedin: '',
                email: 'casallidan7@gmail.com',
            },
            {
                nome: 'Maria Eduarda de Andrade',
                curso_pt: 'Desenvolvimento de Sistemas',
                curso_en: 'Systems Development',
                fotoUrl: '',
                github: 'https://github.com/mariaeandrade',
                linkedin:
                    'https://www.linkedin.com/in/maria-eduarda-andrade-6878a2349?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
                email: 'dudadeandrade13@gmail.com',
            },
            {
                nome: 'Gustavo Lima',
                curso_pt: 'Eletro Eletronica',
                curso_en: 'Electro Electronics',
                fotoUrl: '',
                github: '',
                linkedin: '',
                email: '',
            },
            {
                nome: 'Leonardo Lima',
                curso_pt: 'Eletro Eletronica',
                curso_en: 'Electro Electronics',
                fotoUrl: '',
                github: '',
                linkedin: '',
                email: '',
            },
            {
                nome: 'Rafaela Barros',
                curso_pt: 'Eletro Eletronica',
                curso_en: 'Electro Electronics',
                fotoUrl: '',
                github: '',
                linkedin: '',
                email: '',
            },
            {
                nome: 'Natalie',
                curso_pt: 'Eletro Eletronica',
                curso_en: 'Electro Electronics',
                fotoUrl: '',
                github: '',
                linkedin: '',
                email: '',
            },
            {
                nome: 'Giovanni Cocielo',
                curso_pt: 'Eletro Eletronica',
                curso_en: 'Electro Electronics',
                fotoUrl: '',
                github: '',
                linkedin: '',
                email: '',
            },
            {
                nome: 'Ana Gabriely Paslauski',
                curso_pt: 'Mecanica',
                curso_en: 'Mechanics',
                fotoUrl: '',
                github: '',
                linkedin: '',
                email: '',
            },
            {
                nome: 'Lucas Magalhaes',
                curso_pt: 'Mecanica',
                curso_en: 'Mechanics',
                fotoUrl: '',
                github: '',
                linkedin: '',
                email: '',
            },
            {
                nome: 'Guilherme Batista',
                curso_pt: 'Mecanica',
                curso_en: 'Mechanics',
                fotoUrl: '',
                github: '',
                linkedin: '',
                email: '',
            },
        ],
    });

    console.log('✅ Seed concluído!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
