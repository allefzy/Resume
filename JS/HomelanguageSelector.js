
$(function() {
    $(".en").click(function() {
            //nav
        $('.navItems a:eq(0)').text("Home");
        $('.navItems a:eq(1)').text("About");
        $('.navItems a:eq(2)').text("Projects");
        $(".language-selected").text("English");
        //wrapper
        $('.topline').text("Hi!");
        $('.mainText h1').text("I'm");
        $('.mainText p').html("As a full-stack developer and designer, I'm eager to put my skills to work and help bring your ideas to life.<br><br> I thrive on connecting with people and fostering teamwork all around the world. I am passionate about what I do and always strive to be the best I can be.<br><br> Thank you for visiting my website and I'm looking forward to work with you!")
        $('button:eq(0)').text("See CV");
        $('button:eq(1)').text("Contact");
    })
});

//Português

$(function() {
    $(".br").click(function() {
        //nav
        $("html lang").text("pt-br");
        $('.navItems a:eq(0)').text("Home");
        $('.navItems a:eq(1)').text("Sobre");
        $('.navItems a:eq(2)').text("Projetos");
        $(".language-selected").text("Português");
        //wrapper
        $('.topline').text("Olá!");
        $('.mainText h1').text("Sou");
        $('.mainText p').html("Como desenvolvedor e designer full-stack, estou ansioso para colocar minhas habilidades em prática e ajudar a dar vida às suas ideias.<br><br> Gosto de me conectar com as pessoas e promover o trabalho em equipe em todo o mundo. Sou apaixonado pelo que faço e sempre me esforço para ser o melhor que posso.<br><br> Obrigado por visitar meu site e estou ansioso para trabalhar com você!");
        $('button:eq(0)').text("Ver CV");
        $('button:eq(1)').text("Contato");
    });
});


//Español
$(function() {
    $(".es").click(function() {
        //nav
        $('.navItems a:eq(0)').text("Home");
        $('.navItems a:eq(1)').text("Sobre");
        $('.navItems a:eq(2)').text("Proyectos");
        $(".language-selected").text("Español");
        //wrapper
        $('.topline').text("Hola!");
        $('.mainText h1').text("Soy");
        $('.mainText p').html("Como desarrollador y diseñador full-stack, estoy ansioso por poner mis habilidades a trabajar y ayudar a hacer realidad sus ideas.<br><br> disfruto conectando con la gente y fomentando el trabajo en equipo. En todo el mundo. Me apasiona lo que hago y siempre me esfuerzo por ser lo mejor que puedo ser.<br><br> ¡Gracias por visitar mi sitio web y espero trabajar con usted!");
        $('button:eq(0)').text("Ver CV");
        $('button:eq(1)').text("Contacto");
    });
});

 //日本語
$(function() {
    $(".jp").click(function() {
        //nav
        $('.navItems a:eq(0)').text("ホーム");
        $('.navItems a:eq(1)').text("だいたい");
        $('.navItems a:eq(2)').text("プロジェクト");
        $(".language-selected").text("日本語");
        //wrapper
        $('.topline').text("ちわっす!");
        $('.mainText h1').text("僕は");
        $('.mainText p').html("フルスタックの開発者およびデザイナーとして、私は自分のスキルを活かして、そちら様のアイデアを形にするお手伝いをしたいと思っています。<br><br> 世界中の人々とつながり、チームワークを育むことに力を注いでいます。 私は自分がしていることに情熱を傾けており、常に自分ができる最高のものになるよう努めています.<br><br> 私のウェブサイトを訪問していただきありがとうございます。そちら様と一緒に働くことを楽しみにしています!")
        $('button:eq(0)').text("履歴書見る");
        $('button:eq(1)').text("相接");
    });
});