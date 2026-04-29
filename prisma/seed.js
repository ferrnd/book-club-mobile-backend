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

  console.log("📦 Inserindo novos registros...");

  await prisma.livro.create({
    data: {
      titulo: "Olhos d'Água",
      capa: "https://m.media-amazon.com/images/I/51RjYjNVpRL._SY425_.jpg",
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

  console.log("📚 Inserindo contos...");

  await prisma.conto.createMany({
    data: [
      {
        titulo_pt: "Olhos D'água",
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
        titulo_pt: "A Gente Combinamos de Não Morrer",
        titulo_en: "We Agreed Not to Die",
        resumo_pt: "Neste conto, a morte é uma vizinha constante, mas os personagens estabelecem um pacto silencioso de resistência. Através de uma linguagem que mistura o lírico com o popular, a autora mostra jovens que, apesar de cercados pelo tráfico e pela falta de oportunidades, tentam criar estratégias para continuar respirando. O título é um grito de guerra: a gramática pode ser 'errada' para os padrões, mas a vontade de viver é absoluta e coletiva.",
        resumo_en: "In this short story, death is a constant neighbor, but the characters establish a silent pact of resistance. Through a language that mixes the lyrical with the popular, the author shows young people who, despite being surrounded by drug trafficking and lack of opportunities, try to create strategies to keep breathing. The title is a war cry: grammar may be 'wrong' by standard rules, but the will to live is absolute and collective.",
        analise_pt: "A análise gira em torno da substantividade do verbo. O erro gramatical proposital no título é um ato político: ele valida a língua falada pelo povo e reforça que a sobrevivência é um 'combinado' coletivo. É uma crítica direta ao extermínio da juventude negra e uma exaltação do pacto de proteção mútua nas comunidades.",
        analise_en: "The analysis revolves around the substantivity of the verb. The intentional grammatical error in the title is a political act: it validates the language spoken by the people and reinforces that survival is a collective 'agreement'. It is a direct critique of the extermination of Black youth and an exaltation of the pact of mutual protection in communities.",
      },
      {
        titulo_pt: "Beijo na Face",
        titulo_en: "Kiss on the Face",
        resumo_pt: "A narrativa acompanha uma mulher que passou a vida sendo tratada como um objeto de serviço ou de desejo bruto. Ela redescobre sua própria humanidade através de um gesto simples de carinho: um beijo na face. O conto explora a ideia de que, para quem sempre viveu na dureza da sobrevivência, o afeto é uma forma revolucionária de recuperar a dignidade perdida.",
        resumo_en: "The narrative follows a woman who spent her life being treated as an object of service or crude desire. She rediscovers her own humanity through a simple gesture of affection: a kiss on the face. The short story explores the idea that, for those who have always lived in the harshness of survival, affection is a revolutionary way to recover lost dignity.",
        analise_pt: "O ponto central aqui é a humanização através do afeto. Em uma sociedade que vê a mulher negra apenas como força de trabalho, o direito ao carinho é uma conquista política. A análise explora como pequenos gestos de ternura podem restaurar a psique de indivíduos que foram condicionados a apenas suportar a dor.",
        analise_en: "The central point here is humanization through affection. In a society that sees Black women only as a labor force, the right to care is a political achievement. The analysis explores how small gestures of tenderness can restore the psyche of individuals who have been conditioned to only endure pain.",
      },
      {
        titulo_pt: "Ei, Arnaldo!",
        titulo_en: "Hey, Arnaldo!",
        resumo_pt: "Arnaldo é um homem que se desintegrou sob o peso da desilusão social. O conto é narrado como um apelo desesperado de alguém que o conheceu antes da queda. Através da figura de Arnaldo, Evaristo discute a saúde mental e o abandono de homens negros que, sem perspectivas, acabam se tornando sombras vagando pelas ruas, invisíveis aos olhos de quem passa com pressa.",
        resumo_en: "Arnaldo is a man who disintegrated under the weight of social disillusionment. The short story is narrated as a desperate appeal from someone who knew him before his fall. Through the figure of Arnaldo, Evaristo discusses mental health and the abandonment of Black men who, without prospects, end up becoming shadows wandering the streets, invisible to the eyes of those who pass in haste.",
        analise_pt: "Este conto analisa a solidão do homem negro. Arnaldo representa a falência das promessas sociais e como o racismo pode levar à degradação mental e ao vício. A narrativa em forma de apelo ressalta a importância da rede de apoio e denuncia como a sociedade descarta rapidamente aqueles que não servem mais ao sistema produtivo.",
        analise_en: "This short story analyzes the loneliness of the Black man. Arnaldo represents the failure of social promises and how racism can lead to mental degradation and addiction. The narrative in the form of an appeal highlights the importance of support networks and denounces how society quickly discards those who no longer serve the productive system.",
      },
      {
        titulo_pt: "Di mên",
        titulo_en: "Minors",
        resumo_pt: "O título faz referência à expressão 'menor de idade'. O conto foca em crianças que habitam as frestas da cidade, dormindo em papelões e vivendo de pequenos furtos para aplacar a fome. A autora humaniza esses meninos, mostrando que, por trás do medo que eles causam nos passantes, existem seres humanos que nunca tiveram o direito de brincar ou de ter um lar seguro.",
        resumo_en: "The title refers to the expression 'minor' or 'underage'. The short story focuses on children who inhabit the city's cracks, sleeping on cardboard and living off petty theft to assuage hunger. The author humanizes these boys, showing that, behind the fear they cause in passersby, there are human beings who never had the right to play or have a safe home.",
        analise_pt: "A análise foca na infância interrompida. Evaristo denuncia como o Estado trata a criança negra carente como um 'problema de segurança' antes de tratá-la como um cidadão com direitos. O conto subverte o olhar do leitor, obrigando-o a ver a vulnerabilidade onde o senso comum enxerga apenas ameaça.",
        analise_en: "The analysis focuses on interrupted childhood. Evaristo denounces how the State treats the poor Black child as a 'security problem' before treating it as a citizen with rights. The short story subverts the reader's gaze, forcing them to see vulnerability where common sense sees only threat.",
      },
      {
        titulo_pt: "Lumbiá",
        titulo_en: "Lumbiá",
        resumo_pt: "Lumbiá é um homem que vive da mendicância, mas possui uma riqueza espiritual profunda. Ele cria um mundo particular com objetos que encontra no lixo, transformando o refugo em arte ou objetos sagrados. O conto é uma crítica à sociedade de consumo e mostra que a sensibilidade artística não é privilégio dos ricos, florescendo mesmo na mais profunda miséria.",
        resumo_en: "Lumbiá is a man who lives from begging but possesses a deep spiritual richness. He creates a particular world with objects he finds in the trash, transforming refuse into art or sacred objects. The short story is a critique of consumer society and shows that artistic sensitivity is not a privilege of the rich, flourishing even in the deepest misery.",
        analise_pt: "Aqui, a análise destaca a resistência cultural e espiritual. Lumbiá, embora desprovido de tudo, não é pobre de espírito. O conto sugere que a capacidade de criar beleza e atribuir significado ao mundo é uma ferramenta de sobrevivência que o sistema capitalista não consegue confiscar.",
        analise_en: "Here, the analysis highlights cultural and spiritual resistance. Lumbiá, although deprived of everything, is not poor in spirit. The short story suggests that the ability to create beauty and give meaning to the world is a survival tool that the capitalist system cannot confiscate.",
      },
      {
        titulo_pt: "O Cooper de Cida",
        titulo_en: "Cida's Run",
        resumo_pt: "Cida resolve exercitar-se na orla marítima, um território onde corpos negros geralmente só entram para servir. Enquanto corre, ela sente o peso dos olhares vigilantes e o julgamento silencioso da elite branca. O conto é uma poderosa análise sobre o racismo geográfico e como a presença de uma mulher negra em espaços de lazer ainda é vista como uma 'invasão' que gera desconforto.",
        resumo_en: "Cida decides to exercise herself on the waterfront, a territory where Black bodies generally only enter to serve. As she runs, she feels the weight of watchful gazes and the silent judgment of the white elite. The short story is a powerful analysis of geographic racism and how the presence of a Black woman in leisure spaces is still seen as an 'invasion' that generates discomfort.",
        analise_pt: "Este texto analisa a territorialidade e o corpo. O corpo negro 'em movimento' em um bairro de elite gera pânico moral. A análise explora o racismo recreativo e a vigilância constante que recai sobre pessoas negras quando elas tentam usufruir de espaços públicos destinados ao lazer da classe alta.",
        analise_en: "This text analyzes territoriality and the body. The Black body 'in motion' in an elite neighborhood generates moral panic. The analysis explores recreational racism and the constant surveillance that falls on Black people when they try to enjoy public spaces intended for the leisure of the upper class.",
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
        titulo_pt: "Vó Bina",
        titulo_en: "Grandmother Bina",
        resumo_pt: "Vó Bina é o elo com o passado africano e a memória da escravidão. Ela é a matriarca que guarda os segredos das plantas medicinais e das histórias contadas ao pé do ouvido. A relação com sua neta mostra que, embora o sistema tente apagar a história dos negros no Brasil, a tradição oral e o respeito aos mais velhos mantêm essa herança viva e pulsante.",
        resumo_en: "Grandmother Bina is the link to the African past and the memory of slavery. She is the matriarch who guards the secrets of medicinal plants and stories told in whispers. Her relationship with her granddaughter shows that, although the system tries to erase the history of Black people in Brazil, oral tradition and respect for the elderly keep this heritage alive and pulsating.",
        analise_pt: "Foca na matripotência (o poder das matriarcas). Vó Bina é o arquivo vivo de uma história que os livros didáticos não contam. A análise ressalta que a educação não formal e os laços intergeracionais são os verdadeiros pilares que sustentam a identidade negra através do tempo.",
        analise_en: "Focuses on matriarchal power. Grandmother Bina is the living archive of a history that textbooks do not tell. The analysis emphasizes that non-formal education and intergenerational bonds are the true pillars that sustain Black identity through time.",
      },
      {
        titulo_pt: "Ayoluwa",
        titulo_en: "Ayoluwa",
        resumo_pt: "A chegada de Ayoluwa é aguardada como um evento sagrado por toda a comunidade. Em um ambiente marcado pela escassez, o nascimento desta criança simboliza que a vida insiste em florescer. O nome, que significa 'a alegria do nosso povo', reforça a ideia de que cada nova geração negra é uma vitória contra o projeto de extermínio que tenta silenciá-los.",
        resumo_en: "The arrival of Ayoluwa is awaited as a sacred event by the entire community. In an environment marked by scarcity, the birth of this child symbolizes that life insists on flourishing. The name, which means 'the joy of our people', reinforces the idea that each new Black generation is a victory against the extermination project that tries to silence them.",
        analise_pt: "Esta é uma análise sobre esperança e futurismo negro. Em um livro cercado de mortes, Ayoluwa representa a vitória da vida. O nascimento é tratado como uma promessa de que, apesar de todas as tentativas de apagamento, o povo negro continuará nascendo, crescendo e ocupando o mundo com alegria.",
        analise_en: "This is an analysis of hope and Black futurism. In a book surrounded by deaths, Ayoluwa represents the victory of life. Birth is treated as a promise that, despite all attempts at erasure, Black people will continue being born, growing, and occupying the world with joy.",
      },
      {
        titulo_pt: "A deusa de Piche",
        titulo_en: "The Goddess of Pitch",
        resumo_pt: "A autora constrói uma ode à beleza da mulher retinta. Através de metáforas que exaltam o brilho da pele negra e a força das formas femininas, o conto combate séculos de pregação estética eurocêntrica. É uma celebração do erotismo e do amor-próprio, transformando o que a sociedade muitas vezes marginaliza em um padrão de divindade.",
        resumo_en: "The author builds an ode to the beauty of the dark-skinned woman. Through metaphors that exalt the brightness of Black skin and the strength of feminine forms, the short story combats centuries of Eurocentric aesthetic preaching. It is a celebration of eroticism and self-love, transforming what society often marginalizes into a standard of divinity.",
        analise_pt: "Analisa a estética e o desejo. O conto é uma ferramenta de descolonização do olhar. Ao transformar a 'pele de piche' em algo divino, a autora combate o colorismo e o ódio ao próprio corpo que o padrão de beleza branco impõe às mulheres retintas.",
        analise_en: "Analyzes aesthetics and desire. The short story is a tool for decolonizing the gaze. By transforming 'pitch-colored skin' into something divine, the author combats colorism and self-hatred that the white beauty standard imposes on dark-skinned women.",
      },
      {
        titulo_pt: "Zaíta esqueceu de guardar os brinquedos",
        titulo_en: "Zaíta Forgot to Put Away the Toys",
        resumo_pt: "Zaíta é uma menina que vive a pureza da infância até que o som dos tiros interrompe sua brincadeira. O conto choca pelo contraste entre a inocência dos brinquedos espalhados pelo chão e a brutalidade de uma bala que invade o ambiente doméstico. O final silencioso é um protesto contra a morte prematura de crianças nas favelas brasileiras.",
        resumo_en: "Zaíta is a girl who lives the purity of childhood until the sound of gunshots interrupts her play. The short story shocks with the contrast between the innocence of toys scattered on the ground and the brutality of a bullet that invades the domestic environment. The silent ending is a protest against the premature death of children in Brazilian favelas.",
        analise_pt: "A análise foca no impacto do trauma na infância. A morte de Zaíta é apresentada de forma seca e brutal para gerar indignação. O brinquedo esquecido simboliza a vida que não pôde ser vivida plenamente, denunciando a barbárie cotidiana que acontece nas periferias sob o pretexto de 'combate ao crime'.",
        analise_en: "The analysis focuses on the impact of trauma on childhood. Zaíta's death is presented in a dry and brutal way to generate indignation. The forgotten toy symbolizes the life that could not be fully lived, denouncing the daily barbarity that happens in the peripheries under the guise of 'fighting crime'.",
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
        titulo_pt: "Luamanda",
        titulo_en: "Luamanda",
        resumo_pt: "Luamanda decide que não quer mais ser apenas a engrenagem que faz o mundo dos outros girar. Ela rompe com o cansaço crônico de uma vida de servidão e se redescobre como sujeito de desejos e vontades. O conto encerra o livro com uma nota de libertação individual, mostrando que o autoconhecimento é o primeiro passo para a quebra das correntes sociais.",
        resumo_en: "Luamanda decides she no longer wants to be merely the cog that makes the world of others turn. She breaks with the chronic exhaustion of a life of servitude and rediscovers herself as a subject of desires and will. The short story closes the book on a note of individual liberation, showing that self-knowledge is the first step toward breaking social chains.",
        analise_pt: "A análise encerra o livro com o tema da emancipação. Luamanda representa o despertar da consciência. Ela para de trabalhar para os outros e começa a olhar para si. É uma análise sobre o 'basta' necessário para que a mulher negra deixe de ser um objeto de exploração e se torne protagonista de sua vida.",
        analise_en: "The analysis closes the book with the theme of emancipation. Luamanda represents the awakening of consciousness. She stops working for others and begins to look at herself. It is an analysis of the 'enough' necessary for Black women to stop being an object of exploitation and become protagonists of their own lives.",
      },
    ],
  });

  console.log("👥 Inserindo personagens...");

  await prisma.personagem.deleteMany();

  await prisma.personagem.createMany({
    data: [
      {
        nome: "A Mãe",
        fotoUrl: null,
        descricao_pt:
          "É a figura matriarcal que sustenta toda a carga simbólica da obra. Ela não é apenas uma genitora, mas o próprio tronco de uma árvore genealógica marcada pela sobrevivência. Suas mãos, calejadas pelo trabalho braçal de lavadeira, e seus olhos, que a narradora descreve como 'cor de olhos d'água', carregam a memória coletiva de um povo que chora para não sufocar. Ela personifica a 'escrevivência' de Conceição Evaristo: uma vida que se escreve com o sangue e o suor de quem veio antes.",
        descricao_en:
          "She is the matriarchal figure who sustains all the symbolic weight of the work. She is not merely a mother, but the very trunk of a family tree marked by survival. Her hands, calloused by the hard labor of a washerwoman, and her eyes, which the narrator describes as 'the color of water eyes,' carry the collective memory of a people who cry so as not to suffocate. She embodies Conceição Evaristo's 'life-writing': a life written in the blood and sweat of those who came before.",
      },
      {
        nome: "Ana Davenga",
        fotoUrl: null,
        descricao_pt:
          "Protagonista de um dos contos mais viscerais, Ana representa a busca pelo afeto em meio ao caos da periferia. Seu amor por Davenga é o que lhe dá identidade e um sentido de pertencimento. Ela vive a dualidade de ser uma mulher comum que deseja a paz de um lar, mas que é tragada pela violência estrutural. Sua morte, grávida e dentro de seu próprio barraco, simboliza o extermínio de gerações inteiras e a interrupção violenta do ciclo da vida negra pelo braço armado do Estado.",
        descricao_en:
          "Protagonist of one of the most visceral tales, Ana represents the search for affection amidst the chaos of the periphery. Her love for Davenga is what gives her identity and a sense of belonging. She lives the duality of being an ordinary woman who desires the peace of a home, yet is engulfed by structural violence. Her death, pregnant and inside her own shack, symbolizes the extermination of entire generations and the violent interruption of the cycle of Black life by the armed hand of the State.",
      },
      {
        nome: "Dito",
        fotoUrl: null,
        descricao_pt:
          "Companheiro de Ana Davenga, Dito é o homem negro que vive na marginalidade não por escolha, mas como uma consequência de um sistema que oferece poucas saídas. Apesar da sua vida no crime, ele é humanizado através do seu cuidado e proteção para com Ana. Sua figura serve para discutir como a masculinidade negra é frequentemente empurrada para a violência e como o Estado responde a isso com o aniquilamento, em vez de justiça ou oportunidade.",
        descricao_en:
          "Ana Davenga's companion, Dito is the Black man who lives on the margins not by choice, but as a consequence of a system that offers few alternatives. Despite his life in crime, he is humanized through his care and protection of Ana. His figure serves to discuss how Black masculinity is often pushed toward violence and how the State responds to this with annihilation, rather than justice or opportunity.",
      },
      {
        nome: "Vó Bina",
        fotoUrl: null,
        descricao_pt:
          "Vó Bina é o arquivo vivo da ancestralidade africana no Brasil. Ela é a guardiã das memórias que o tempo e o racismo tentaram apagar. Sua personagem destaca a importância da tradição oral e do saber ancestral (curas, rezas e histórias de família). Ela representa a resistência silenciosa das idosas negras que, através do afeto e da memória, garantem que as novas gerações saibam quem são e de onde vieram, conectando o presente com as raízes de antes da diáspora.",
        descricao_en:
          "Grandmother Bina is the living archive of African ancestry in Brazil. She is the guardian of memories that time and racism tried to erase. Her character highlights the importance of oral tradition and ancestral knowledge (cures, prayers, and family stories). She represents the silent resistance of elderly Black women who, through affection and memory, ensure that new generations know who they are and where they came from, connecting the present to the roots before the diaspora.",
      },
      {
        nome: "Maria",
        fotoUrl: null,
        descricao_pt:
          "Maria é a personificação da vulnerabilidade da mulher negra no cotidiano urbano. Trabalhadora doméstica, sua vida é marcada pela invisibilidade até o momento em que se torna alvo de um ódio irracional. Sua personagem revela a face cruel do racismo estrutural: a rapidez com que a sociedade condena um corpo negro sem provas e a passividade daqueles que assistem à violência sem intervir. Ela é o símbolo do 'linchamento cotidiano', seja ele físico ou moral.",
        descricao_en:
          "Maria is the embodiment of the vulnerability of Black women in urban daily life. A domestic worker, her life is marked by invisibility until the moment she becomes the target of irrational hatred. Her character reveals the cruel face of structural racism: the speed with which society condemns a Black body without proof and the passivity of those who witness violence without intervening. She is the symbol of 'everyday lynching,' whether physical or moral.",
      },
      {
        nome: "Cida",
        fotoUrl: null,
        descricao_pt:
          "Cida representa o corpo negro em movimento e a conquista de espaços de poder e lazer. Ao praticar seu 'cooper' na orla marítima — um espaço higienizado e ocupado pela elite — ela desafia a norma social que reserva esses locais apenas para brancos ou para negros em posição de serviço. Sua personagem é fundamental para analisar o racismo geográfico e a vigilância constante que tenta 'enquadrar' e constranger pessoas negras que ousam ocupar a cidade com liberdade.",
        descricao_en:
          "Cida represents the Black body in motion and the conquest of spaces of power and leisure. By practicing her 'running' on the waterfront—a sanitized space occupied by the elite—she challenges the social norm that reserves these spaces only for white people or for Black people in service positions. Her character is fundamental to analyzing geographical racism and the constant surveillance that tries to 'frame' and constrain Black people who dare to occupy the city with freedom.",
      },
      {
        nome: "Lumbiá",
        fotoUrl: null,
        descricao_pt:
          "Um personagem que transita entre o realismo e o lúdico. Lumbiá é um homem em situação de rua que subverte a lógica do descarte. Enquanto a sociedade o vê como lixo, ele vê beleza e sagrado nos objetos que recolhe. Ele é a prova de que a sensibilidade artística e a conexão espiritual não podem ser confiscadas pela miséria material. Lumbiá representa a resistência do imaginário e a capacidade humana de criar novos mundos, mesmo quando o mundo real é hostil.",
        descricao_en:
          "A character who moves between realism and playfulness. Lumbiá is a homeless man who subverts the logic of disposability. While society sees him as garbage, he sees beauty and the sacred in the objects he collects. He is proof that artistic sensitivity and spiritual connection cannot be confiscated by material misery. Lumbiá represents the resistance of imagination and the human capacity to create new worlds, even when the real world is hostile.",
      },
      {
        nome: "Zaíta",
        fotoUrl: null,
        descricao_pt:
          "A pequena Zaíta é o símbolo da infância roubada. Sua personagem é construída com delicadeza para contrastar com o final brutal de sua história. Ela representa todas as crianças cujos sonhos e brincadeiras são interrompidos por balas que atravessam as paredes de zinco. O 'esquecimento dos brinquedos' após sua morte é uma metáfora poderosa para o futuro que foi deixado para trás e para a negligência da sociedade com a vida das crianças periféricas.",
        descricao_en:
          "Little Zaíta is the symbol of stolen childhood. Her character is constructed with delicacy to contrast with the brutal ending of her story. She represents all children whose dreams and play are interrupted by bullets that pierce metal walls. The 'forgetting of toys' after her death is a powerful metaphor for the future left behind and for society's neglect of the lives of peripheral children.",
      },
      {
        nome: "Duzu-Querença",
        fotoUrl: null,
        descricao_pt:
          "Duzu é a representação da exclusão total. Mulher, negra, idosa e considerada 'louca' pela sociedade, ela vive nas margens da sanidade como uma forma de escapar de uma realidade de dores insuportáveis. Sua personagem obriga o leitor a confrontar o abandono social e a solidão profunda. Duzu é o espelho de um Brasil que empurra seus indivíduos mais vulneráveis para o esquecimento, tratando o trauma social como se fosse apenas doença mental.",
        descricao_en:
          "Duzu is the representation of total exclusion. A woman, Black, elderly, and considered 'mad' by society, she lives on the margins of sanity as a way to escape from a reality of unbearable suffering. Her character forces the reader to confront social abandonment and profound loneliness. Duzu is the mirror of a Brazil that pushes its most vulnerable individuals into oblivion, treating social trauma as if it were merely mental illness.",
      },
      {
        nome: "Arnaldo",
        fotoUrl: null,
        descricao_pt:
          "Arnaldo ilustra a falência das expectativas sociais para o homem negro. Narrado por alguém que o conheceu em tempos melhores, ele é o retrato da desintegração de um indivíduo sob o peso do racismo e da falta de perspectivas. Sua queda representa o 'nó na garganta' de muitos que tentaram vencer o sistema e acabaram sendo vencidos por ele, tornando-se sombras invisíveis que habitam as ruas das grandes metrópoles.",
        descricao_en:
          "Arnaldo illustrates the collapse of social expectations for the Black man. Narrated by someone who knew him in better times, he is the portrait of an individual's disintegration under the weight of racism and lack of prospects. His fall represents the 'lump in the throat' of many who tried to overcome the system and ended up being defeated by it, becoming invisible shadows that haunt the streets of great metropolises.",
      },
      {
        nome: "Luamanda",
        fotoUrl: null,
        descricao_pt:
          "Luamanda é a força do despertar. Ela representa a mulher negra que decide dizer 'não' à exploração histórica de seu corpo e de sua força de trabalho. Sua jornada é de libertação interna: ela deixa de ser a engrenagem que serve aos outros para se tornar o centro de sua própria existência. Ela simboliza a quebra do ciclo de servidão e a reconquista da autonomia sobre seus próprios desejos, tempo e destino.",
        descricao_en:
          "Luamanda is the force of awakening. She represents the Black woman who decides to say 'no' to the historical exploitation of her body and her labor. Her journey is one of inner liberation: she stops being the cog that serves others to become the center of her own existence. She symbolizes the breaking of the cycle of servitude and the reclaiming of autonomy over her own desires, time, and destiny.",
      },
      {
        nome: "Ayoluwa",
        fotoUrl: null,
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
