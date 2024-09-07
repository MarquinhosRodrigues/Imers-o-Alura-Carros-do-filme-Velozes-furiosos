let dados = [
    {
        titulo: "1999 Nissan Skyline GT-R R34",
        descricao: "Brian usa seu Nissan Skyline para participar da corrida de rua organizada por Tej Parker .Ele corre contra pessoas como sua amiga Suki e os oponentes Slap Jack e Orange Julius .O Toyota Supra 1993 de Slap Jack compete contra o Skyline com sucesso até que ele faz uma curva muito ampla, permitindo que Brian assuma a liderança.O Skyline faz a ponte saltar com sucesso e vence a corrida, mas todos são forçados a fugir quando os policiais aparecem. Brian consegue escapar da maioria deles, mas o Agente Markham dispara um arpão ESD no Skyline, desligando-o. O carro é apreendido após a prisão de Brian pelo agente da Alfândega dos EUA.",
        link: "https://fastandfurious.fandom.com/wiki/1999_Nissan_Skyline_GT-R_R34#History",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/d/d2/Nissan_Skyline_-_2F2F.jpg/revision/latest/scale-to-width-down/1000?cb=20240901032724"
    },
    {
        titulo: "Mitsubishi Lancer Evolution VII 2002",
        descricao: "Após o interrogatório sobre a situação com Carter Verone e o encontro com Monica Fuentes , Brian pega o Lancer depois que Roman Pearce reivindica o Mitsubishi Eclipse Spyder GTS 2003 para si. Monica acompanha Brian no carro a caminho da mansão de Verone.Sem o conhecimento de Roman ou Brian, o Lancer e o Eclipse foram grampeados com dispositivos de rastreamento que permitiram que os agentes Bilkins e Markham monitorassem cada movimento deles quando não os denunciavam diretamente na missão secreta.Durante a audição de Roman e Brian para se tornarem motoristas de Verone, sua cobertura quase foi descoberta quando Markham presumiu que eles estavam fugindo da custódia com o Lancer e o Eclipse.",
        link: "https://fastandfurious.fandom.com/wiki/2002_Mitsubishi_Lancer_Evolution_VII",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/6/66/2002_EVO_Lancer_-_Front_Side.JPG/revision/latest?cb=20151229185210"
    },
    {
        titulo: "1969 Yenko Camaro SYC",
        descricao: "Korpi , um dos potenciais funcionários de Carter Verone , chega à propriedade de Verone dirigindo seu Yenko Camaro 1969. Quando Verone testa a semelhança de seus potenciais funcionários, fazendo-os invadir o estaleiro para recuperar um pacote de uma Ferrari vermelha, Korpi usa o Yenko em uma tentativa de derrotar Roman Pearce e Brian O'Conner até o local. Ele perde e não é contratado por Verone.",
        link: "https://fastandfurious.fandom.com/wiki/1969_Yenko_Camaro_SYC",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/c/cf/Brian%27s_Yenko_Camaro_-_Side_View.png/revision/latest/scale-to-width-down/1000?cb=20160121163043"
    },
    {
        titulo: "Chevrolet Monte Carlo 1970",
        descricao: "Enquanto estava em prisão domiciliar em Barstow , Roman usou um Monte Carlo 1970 em um derby de Demolição . Durante o derby, o para-brisa é danificado e Rome é forçado a tirar o para-brisa da estrutura do carro para continuar na competição.",
        link: "https://fastandfurious.fandom.com/wiki/1970_Chevrolet_Monte_Carlo",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/7/78/Roman_Pearce_-_Monte_Carlo.png/revision/latest/scale-to-width-down/1000?cb=20160121073235"
    },
    {
        titulo: "Dodge Challenger R/T 1970",
        descricao: "Darden dirige um Dodge Challenger R/T laranja 1970, visto perto do início do filme quando Brian O'Conner e Roman Pearce aparecem no complexo de Carter Verone . Ele o usa durante a corrida de estrada quando todos estão competindo pela chance de trabalhar para Verone, Brian e Roman vencendo a audição.",
        link: "https://fastandfurious.fandom.com/wiki/1970_Dodge_Challenger_R/T",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/8/8e/1970_Dodge_Challenger_-_2F2F.png/revision/latest/scale-to-width-down/1000?cb=20151230233519"
    },
    {
        titulo: "Mazda RX-7 1993",
        descricao: "Quando Brian O'Conner chega a Miami pela primeira vez depois de vencer corridas de rua em seu Nissan Skyline GT-R R34 de 1999 , ele vê um Mazda RX-7 laranja modificado ao lado de um Toyota Supra Turbo MK IV de 1993 circulando na rua.",
        link: "https://fastandfurious.fandom.com/wiki/1993_Mazda_RX-7_(Orange_Julius)",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/4/48/Orange_Julius%27_RX-7_-_Side_View.png/revision/latest/scale-to-width-down/1000?cb=20160121070440"
    },
    {
        titulo: "Toyota Supra Turbo MK IV 1993",
        descricao: "Slap Jack dirigiu um Toyota Supra na corrida organizada por Tej Parker . Ele está à frente de Brian quando vê uma ponte pular e usa nitroso . Slap Jack cai com força do outro lado, fazendo com que seus pneus dianteiros furem e ele bate em um outdoor da Pepsi.",
        link: "https://fastandfurious.fandom.com/wiki/1993_Toyota_Supra_Turbo_MK_IV",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/0/01/Slap_Jack%27s_1993_Toyota_Supra_Mk_IV_-_2Fast2Furious.png/revision/latest/scale-to-width-down/1000?cb=20160121143028"
    },
    {
        titulo: "Chevrolet Corvette C5 1998",
        descricao: "O carro é visto estacionado do lado de fora da casa de Carter Verone e é dirigido por um de seus possíveis motoristas. Uma corrida entre os motoristas começa na rodovia e quando o Saleen Mustang é destruído por dois semirreboques, o Corvette fica preso no fogo cruzado e capota, matando o motorista e destruindo o carro.",
        link: "https://fastandfurious.fandom.com/wiki/1998_Chevrolet_Corvette_C5",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/3/35/98corvettec5.2fast.jpg/revision/latest?cb=20150503021107"
    },
    {
        titulo: "BMW 323iS E36",
        descricao: "O carro correu lado a lado com o Yenko Camaro SYC 1969 e o Dodge Challenger R/T 1970 quando eles saíram da rodovia principal. No entanto, a faixa de saída foi projetada para apenas dois carros, fazendo com que o BMW fizesse um teste de colisão em uma barreira ao sair da rodovia I-95. Portanto, este carro não fez nenhuma aparição futura em toda a franquia.",
        link: "https://fastandfurious.fandom.com/wiki/BMW_323iS_E36",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/f/fe/Bmw.323is.E36.jpg/revision/latest?cb=20150503020032"
    },
    {
        titulo: "Chevrolet Caprice",
        descricao: "Chevrolet Carprices foram mostrados pela primeira vez no começo junto com um Ford Crown Victoria onde eles perseguem corredores de rua após uma corrida que foi recentemente vencida por Dominic Toretto. Depois que Dominic Toretto estaciona seu Mazda RX-7 em uma garagem e começa a andar, um policial em um Ford Crown Victoria o vê quando ele passa por ele. O policial imediatamente vira o carro e grita para Dominic, dizendo para ele não se mover, mas o carro muda de um Crown Victoria para um Chevy Caprice quando o policial vira o carro por erro.",
        link: "https://fastandfurious.fandom.com/wiki/Chevrolet_Caprice",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/3/34/95.chevy.caprice.2fast.jpg/revision/latest?cb=20150503020706"
    },
    {
        titulo: "Chrysler PT Cruiser",
        descricao: "O Chrysler PT Cruiser no filme de carros 2 Fast 2 Furious é um carro hatchback prateado. O PT Cruiser tem sua parte frontal removida e está correndo contra um Mistubishi Ecilipse.",
        link: "https://fastandfurious.fandom.com/wiki/Chrysler_PT_Cruiser",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/a/af/Chrysler_PT_Cruiser.png/revision/latest?cb=20220908202101"
    },
    {
        titulo: "Ferrari 360 Spider",
        descricao: "A Ferrari 360 Spider foi um carro menor apresentado em 2 Fast 2 Furious . Uma Ferrari em particular pertencia a Carter Verone e tinha um pacote especial dentro do porta-luvas.",
        link: "https://fastandfurious.fandom.com/wiki/Ferrari_360_Spider",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/2/22/Ferrari-F360-Spider.jpg/revision/latest?cb=20181028201623"
    },
    {
        titulo: "Ford Crown Victoria",
        descricao: "O Ford Crown Victoria é um carro menor na série Fast & Furious . A maioria das forças policiais usa este veículo em cada uma das parcelas, enquanto a maioria dos taxistas em Nova York usa este veículo em The Fate of the Furious .",
        link: "https://fastandfurious.fandom.com/wiki/Ford_Crown_Victoria",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/4/49/1992_Ford_Crown_Victoria_-_TFatF.jpg/revision/latest?cb=20160114032552"
    },
    {
        titulo: "Dodge Stealth",
        descricao: "Quando Brian O'Conner deixa Los Angeles após a fuga de Dominic Toretto [6] , ele sai do estado em um Dodge Stealth 1991. Fugindo do LAPD e do FBI , Brian usa o Dodge para viajar pelo país. Ele vence várias corridas em Phoenix, Arizona e Albuquerque, Novo México no Dodge. Depois de parar em um hotel, o Dodge de Brian é identificado pela polícia e ele é forçado a deixá-lo para trás. Depois de receber uma carona de um estranho , ele é deixado em uma concessionária de carros usados, onde compra um Nissan Skyline GT-R R34 1999 com o dinheiro que ganhou com o Dodge.",
        link: "https://fastandfurious.fandom.com/wiki/Dodge_Stealth",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/a/aa/Brian%27s_3000GT.jpg/revision/latest?cb=20150124180120"
    },
    {
        titulo: "Dodge Viper SRT-10",
        descricao: "Um dos potenciais funcionários de Carter Verone dirigia um Dodge Viper SRT-10 amarelo de 2003. É um dos veículos que não bate durante a corrida de teste, junto com o Yenko Camaro SYC de 1969 e o Dodge Challenger .",
        link: "https://fastandfurious.fandom.com/wiki/Dodge_Viper_SRT-10",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/1/19/Dodge_Viper_SRT-10_Side_View_-_2F2F.png/revision/latest/scale-to-width-down/1000?cb=20160121092057"
    },
    {
        titulo: "Acura NSX 2000",
        descricao: "Este carro aparece estacionado em frente à Tej's Garage quando Brian e Roman vão testar seus carros com Jimmy e descobrem que eles são rastreados por GPS. O veículo em si não é usado.",
        link: "https://fastandfurious.fandom.com/wiki/2000_Acura_NSX",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/1/1d/2000_Acura_NSX.jpg/revision/latest?cb=20170121114219"
    },
    {
        titulo: "Honda S2000 2000",
        descricao: "Suki dirige um Honda S2000 durante a corrida organizada por Tej Parker . Durante a maior parte da corrida, ela permanece em último lugar atrás do Mazda RX-7 de Orange Julius de 1993 , apesar de seus melhores esforços para ficar à frente dele.",
        link: "https://fastandfurious.fandom.com/wiki/2000_Honda_S2000_(Suki)",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/a/af/PinkHondas2000.jpg/revision/latest?cb=20110107183432"
    },
    {
        titulo: "Toyota MR2 Spyder 2000",
        descricao: "O Toyota MR2 Spyder é um carro que só aparece em 2 Velozes e 2 Furiosos .O Toyota MR2 Spyder, também conhecido como MR-S em alguns mercados, foi um carro esportivo compacto, com motor central e tração traseira produzido pela Toyota de 1999 a 2007. ",
        link: "https://fastandfurious.fandom.com/wiki/2000_Toyota_MR2_Spyder",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/0/08/2000_Toyota_MR2_Spyder.png/revision/latest?cb=20240425030358"
    },
    {
        titulo: "2003 Lincoln Navigator",
        descricao: "Carter Verone possuía dois Lincoln Navigators, um no qual foi usado para transportar a si mesmo e Fuentes para o cais onde eles esperariam a chegada de Brian e Roman com o dinheiro. Um segundo Navigator foi usado como isca para a polícia acreditar que Verone seria transportado para uma pista de pouso. ",
        link: "https://fastandfurious.fandom.com/wiki/2003_Lincoln_Navigator",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/b/be/Verone%27s_Navigator_-_Airstrip_%282%29.png/revision/latest/scale-to-width-down/1000?cb=20160121142744"
    },
    {
        titulo: "Mitsubishi Eclipse Spyder 2003",
        descricao: "Durante a tentativa do ex-policial do LAPD Brian O'Conner de fugir das autoridades, ele encontra a garota que conheceu no restaurante, dirigindo um Mitsubishi Eclipse Spyder 2003. Apesar de saber que ele era um criminoso procurado, a garota usa seu Eclipse para levá-lo a uma concessionária de carros usados ​​em San Antonio , Texas , onde ele compra um Nissan Skyline R34 GT-R 1999 azul-esverdeado usado .",
        link: "https://fastandfurious.fandom.com/wiki/2003_Mitsubishi_Eclipse_Spyder",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/6/6b/2003_Mitsubishi_Eclipse_Spyder_G3.jpg/revision/latest?cb=20150528144109"
    },
    {
        titulo: "Mitsubishi Eclipse Spyder GTS 2003",
        descricao: "Antes de ir disfarçada, Monica Fuentes , informa Roman e Brian O'Conner sobre os detalhes de Carter Verone . Após a revelação do Mitsubishi Eclipse Spyder GTS 2003 e do Mitsubishi Lancer Evolution VII , Roman reivindica o Eclipse Spyder para si.",
        link: "https://fastandfurious.fandom.com/wiki/2003_Mitsubishi_Eclipse_Spyder_GTS",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/c/c5/2003_Mitsubishi_Eclipse_Spyder_GTS_-_2F2F.png/revision/latest?cb=20160121134509"
    },
    {
        titulo: "Mustang Saleen S281-E 2003",
        descricao: "O Saleen Mustang é visto pela primeira vez dando marcha ré na vaga de estacionamento do próprio motorista quando Brian O'Conner e Roman Pearce chegam à casa de Carter Verone .",
        link: "https://fastandfurious.fandom.com/wiki/2003_Saleen_S281-E_Mustang",
        foto: "https://static.wikia.nocookie.net/fastandfurious/images/9/94/Saleen_1.jpg/revision/latest?cb=20200313033541"
    }
];
