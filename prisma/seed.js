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
    await prisma.livro.deleteMany();

    console.log('📦 Inserindo novos registros...');

    await prisma.livro.create({
        data: {
            titulo: "Olhos d'Água",
            capa: 'https://m.media-amazon.com/images/I/51RjYjNVpRL._SY425_.jpg',
            autor: 'Conceição Evaristo',
            anoPublicacao: 2014,
            genero_pt: 'Contos, Escrevivência, Literatura Afro-Brasileira, Realismo Social',
            genero_en: 'Short Stories, Life-writing, Afro-Brazilian Literature, Social Realism',
            resumo_pt: "Olhos D'Água, de Conceição Evaristo, é um poderoso mosaico de narrativas que mergulha nas profundezas da experiência de mulheres negras no Brasil. Mais do que apenas histórias, a obra é um manifesto de resistência e humanidade. Através de contos que exploram temas como pobreza, violência urbana, racismo e ancestralidade, Evaristo constrói um retrato vívido e multifacetado da vida dessas mulheres. Cada personagem é uma janela para a complexidade de suas vidas, revelando suas lutas, sonhos e resiliência. O livro é uma celebração da força e da diversidade das mulheres negras, desafiando estereótipos e convidando o leitor a refletir sobre as injustiças sociais que ainda persistem. Com uma escrita envolvente e poética, Conceição Evaristo nos presenteia com uma obra que é ao mesmo tempo dolorosa e inspiradora, mostrando que, mesmo diante das adversidades, a esperança e a humanidade podem florescer. Olhos D'Água é uma leitura essencial para quem deseja compreender a riqueza e a complexidade da experiência negra no Brasil, e é um testemunho do poder da literatura como ferramenta de resistência e transformação social.",
            resumo_en: "Olhos D'Água, by Conceição Evaristo, is a powerful mosaic of narratives that dives into the depths of Black women’s experiences in Brazil. More than just a collection of stories, the work stands as a manifesto of resistance and humanity. Through short stories that explore themes such as poverty, urban violence, racism, and ancestry, Evaristo constructs a vivid and multifaceted portrayal of these women’s lives. Each character serves as a window into the complexity of their existence, revealing their struggles, dreams, and resilience. The book celebrates the strength and diversity of Black women, challenging stereotypes and inviting readers to reflect on the social injustices that still persist. With an engaging and poetic style, Conceição Evaristo offers a work that is both painful and inspiring, showing that even in the face of adversity, hope and humanity can flourish. Olhos D'Água is essential reading for anyone seeking to understand the richness and complexity of the Black experience in Brazil, and it stands as a testament to the power of literature as a tool for resistance and social transformation.",
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
    "Ayoluwa"
],
            contextoHistorico_pt: "O contexto histórico de Olhos D'Água, publicado em 2014, é marcado por um período de intensa efervescência social e política no Brasil. Embora a obra tenha sido lançada em pleno século XXI, ela carrega as cicatrizes da redemocratização e o eco da Constituição de 1988, evidenciando o abismo entre os direitos civis prometidos e a realidade de violência e abandono vivenciada nas periferias. A escrita de Conceição Evaristo emerge em um momento de consolidação das políticas de ações afirmativas e das cotas raciais, que permitiram a ascensão de uma nova intelectualidade negra e abriram brechas, ainda que tímidas, no mercado editorial tradicional para vozes historicamente silenciadas.",
            contextoHistorico_en: "The historical context of Olhos D'Água, published in 2014, is marked by a period of intense social and political effervescence in Brazil. Although the work was released in the 21st century, it carries the scars of redemocratization and echoes the 1988 Constitution, highlighting the gap between the civil rights it promised and the reality of violence and neglect experienced in the outskirts. Conceição Evaristo’s writing emerges at a moment when affirmative action policies and racial quotas were becoming consolidated, enabling the rise of a new Black intellectual community and opening, albeit modestly, spaces within the traditional publishing market for voices that had long been silenced.",
            analise_pt: "Olhos D'Água é uma obra de escrevivência que humaniza a mulher negra, deslocando-a de estereótipos históricos para o centro da narrativa como sujeito de sua própria história. Através de uma linguagem que equilibra a crueza do realismo social com um lirismo profundo, Conceição Evaristo transforma vivências coletivas em literatura de resistência. A autora utiliza a escrita como um ato de afirmação e resistência, dando voz a personagens que, embora fictícios, representam as experiências reais de muitas mulheres negras no Brasil. A obra é um convite à reflexão sobre as estruturas sociais que perpetuam a marginalização e a violência, ao mesmo tempo em que celebra a força, a resiliência e a humanidade dessas mulheres. Olhos D'Água é um testemunho do poder da literatura como ferramenta de transformação social e um chamado à empatia e à solidariedade.",
            analise_en: "Olhos D'Água is a work of life-writing that humanizes Black women, moving them from historical stereotypes to the center of the narrative as subjects of their own stories. Through a language that balances the harshness of social realism with deep lyricism, Conceição Evaristo transforms collective experiences into literature of resistance. The author uses writing as an act of affirmation and resistance, giving voice to characters who, although fictional, represent the real experiences of many Black women in Brazil. The work invites reflection on the social structures that perpetuate marginalization and violence, while also celebrating the strength, resilience, and humanity of these women. Olhos D'Água is a testament to the power of literature as a tool for social transformation and a call for empathy and solidarity.",
        },
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