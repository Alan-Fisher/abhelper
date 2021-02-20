/* eslint-disable */
export const pageExample = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="">
    <link rel="icon" href="/frontend/img/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Велостанции</title>
    <!-- Bootstrap core CSS -->
    <link href="/frontend/css/style.css" rel="stylesheet" type="text/css" media="all">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="/frontend/js/jquery-1.9.1.min.js"></script>
    <script src="https://widget.cloudpayments.kz/bundles/cloudpayments"></script>
    <style>
        .modal{z-index: 10500;}
    </style>
</head>
<body>
<div id="wrapper">

    <!-- Sidebar -->
<div id="sidebar-wrapper" class="hidden-md hidden-lg">
    <ul class="sidebar-nav">
        <li class="sidebar-brand">
            <a href="#"><img src="/frontend/img/logo.png" class="img-responsive"></a>
        </li>
                    <li><a href="#" class="login-panel page-scroll">ВХОД</a></li>
                <li><a href="/" class="page-scroll">ГЛАВНАЯ</a></li>
        <li><a href="/velostation" class="page-scroll">Велостанции</a></li>
        <li><a href="/tarif" class="page-scroll">Тарифы</a></li>
        <li><a href="/news" class="page-scroll">Новости</a></li>
        <li><a href="/faq" class="page-scroll">FAQ</a></li>
        <li><a href="/contacts" class="page-scroll">Контакты</a></li>
    </ul>
</div>
    <!-- /#sidebar-wrapper -->
    <div id="page-content-wrapper">
        <a href="#menu-toggle" class="btn btn-menu hidden-md hidden-lg" id="menu-toggle">☰</a>
<section id="header">
            <div class="login-drop">
            <div class="container">
                <div class="cont-in">
                    <div class="close-drop login-panel"></div>
                    <form class="form-inline" action="/member/login" method="post">
                        <div class="form-group">
                            <label class="sr-only" for="Email">Email</label>
                            <input type="email" name="email" class="form-control" id="Email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="password">Пароль</label>
                            <input type="password" name="password" class="form-control" id="password"
                                   placeholder="Пароль">
                        </div>
                        <button type="submit" class="btn btn-login">ВХОД</button>
                        <a href="/register" class="btn btn-register">Регистрация</a>


                        <div class="clear"></div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox"> Запомнить меня                            </label>
                        </div>
                        <a href="/member/password/forgot" class="forgot">Забыли пароль?</a>
                    </form>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    
    <div class="lang-mobile hidden-md hidden-lg">
        <div class="lang-cov-mobile">
            <div class="lang-in-mobile">
                <a href="/index/index/kz">kz</a>
                <a href="/index/index/ru">ru</a>
                <a href="/index/index/en">en</a>
            </div>
        </div>
    </div>

    <nav id="navigation" class="navbar hidden-xs hidden-sm">
        <div class="container">
            <div class="row">
                <div class="nav-top">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                        <div class="row">
                            <ul class="nav navbar-nav">
                                <li><a href="/" class="page-scroll">ГЛАВНАЯ</a></li>
                                <li><a href="/velostation" class="page-scroll">Велостанции</a>
                                </li>
                                <li><a href="/tarif" class="page-scroll">Тарифы</a></li>
                                <li><a href="/news" class="page-scroll">Новости</a></li>
                                <li class="logo"><a href="/" class="page-scroll"><img src="/frontend/img/logo.png"
                                                                                      class="img-responsive"></a></li>

                                <li><a href="/faq" class="page-scroll">FAQ</a></li>
                                <li><a href="/contacts" class="page-scroll">Контакты</a></li>
                                <li style="position: absolute;right: 0;top: 20px;">
                                                                            <a href="#" class="login-panel page-scroll">ВХОД</a>
                                                                    </li>
                            </ul>
                            <div class="lang">
                                <div class="lang-cov">
                                    <div class="lang-in">
                                                                                    <a href='/velostation/index/ru'>ru</a>
                                            <a href='/velostation/index/kz'>kz</a>
                                            <a href='/velostation/index/en'>en</a>
                                                                            </div>
                                </div>
                            </div>
                        </div>
                    </div><!--/.nav-collapse -->
                </div>
            </div>
        </div>
    </nav>
</section>

        <section id="map-block">
    <div class="container">
        <div class="section-title-center"><span>Карта велостанций</span></div>
    </div>
    <div id="map" style="width:100%; height:460px"></div>
</section>

<section id="velobike-list">
    <div class="container-fluid">
        <div class="block">
            <div class="section-title-center"><span>Список велостанций</span></div>
        </div>
        <div class="table-responsive">
            <table class="table table-stations">
                <thead>
                <tr>
                    <th>Номер<br>станции</th>
                    <th>Краткое<br>наименование станции</th>
                    <th>Место<br>расположения станции</th>
                    <th>Доступно<br>велосипедов</th>
                    <th>Количество<br>свободных<br>замков</th>
                </tr>
                </thead>
                <tbody>

                
                    <tr data-latitude="43.223566" data-longitude="76.967225"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1001                                                </th>

                        <td class="name">
                                                            Терренкур 1                                                        
                        </td>
                        <td class="address">
                                                            ул. Омарова - ул.Луганского (речка Терренкур)                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.226664" data-longitude="76.961225"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1002                                                </th>

                        <td class="name">
                                                            пр.Достык – ул.Хаджымукана                                                        
                        </td>
                        <td class="address">
                                                            пр.Достык – ул.Хаджымукана                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            12                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.224545" data-longitude="76.953318"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1003                                                </th>

                        <td class="name">
                                                            ул. Назарбаева–ул.Хаджымукана                                                        
                        </td>
                        <td class="address">
                                                            ул. Назарбаева–ул.Хаджымукана                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2287" data-longitude="76.9541"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1004                                                </th>

                        <td class="name">
                                                            Кафе Менд-Аль ( пр.Аль-Фараби-ул.Мендикулова)                                                        
                        </td>
                        <td class="address">
                                                            Кафе Менд-Аль ( пр.Аль-Фараби-ул.Мендикулова)                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2324" data-longitude="76.9532"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1005                                                </th>

                        <td class="name">
                                                            Kcell center                                                        
                        </td>
                        <td class="address">
                                                            ул. Мендикулова - ул. Бектурова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.234857" data-longitude=" 76.958203"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1006                                                </th>

                        <td class="name">
                                                            пр. Достык - ул. Жолдасбекова                                                         
                        </td>
                        <td class="address">
                                                            пр. Достык - ул. Жолдасбекова                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2390" data-longitude="76.9577"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1007                                                </th>

                        <td class="name">
                                                            Дворец школьников (ул.Сатпаева-пр.Достык)                                                        
                        </td>
                        <td class="address">
                                                            Дворец школьников (ул.Сатпаева-пр.Достык)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2391" data-longitude="76.9492"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1008                                                </th>

                        <td class="name">
                                                            ул. Сатпаева - пр. Назарбаева                                                        
                        </td>
                        <td class="address">
                                                            ул. Сатпаева - пр. Назарбаева                                                    </td>
                        <td class="avl-bikes">
                                                            5                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2432182" data-longitude="76.9563740"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1009                                                </th>

                        <td class="name">
                                                            пр. Абая - пр. Достык                                                        
                        </td>
                        <td class="address">
                                                            пр. Абая - пр. Достык                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2428603" data-longitude="76.9514523"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1010                                                </th>

                        <td class="name">
                                                            ст.Метро Абай                                                          
                        </td>
                        <td class="address">
                                                            пр. Абая 27                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.245" data-longitude="76.9513889"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1011                                                </th>

                        <td class="name">
                                                            ул.Кунаева – ул.Курмангазы                                                        
                        </td>
                        <td class="address">
                                                            ул.Кунаева – ул.Курмангазы                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2473" data-longitude="76.9566"
                        data-total-slots="0" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    1012                                                </th>

                        <td class="name">
                                                            Магазин одежды Albione                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            пр. Достык - ул. Шевченко                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            0                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2466" data-longitude="76.9480"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1013                                                </th>

                        <td class="name">
                                                            пр. Назарбаева - ул. Шевченко                                                         
                        </td>
                        <td class="address">
                                                            пр. Назарбаева - ул. Шевченко                                                     </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.248479" data-longitude="76.950893"
                        data-total-slots="8" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    1014                                                </th>

                        <td class="name">
                                                            ул. Жамбыла - ул.Кунаева                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            ул. Жамбыла - ул.Кунаева                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2505" data-longitude="76.9541"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1015                                                </th>

                        <td class="name">
                                                            Салон красоты Алма                                                        
                        </td>
                        <td class="address">
                                                            ул. Пушкина - ул. Кабанбай батыра                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2497" data-longitude="76.9476"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1016                                                </th>

                        <td class="name">
                                                            Кафетерий My cafe                                                        
                        </td>
                        <td class="address">
                                                            пр. Назарбаева - ул. Кабанбай батыра                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2531079" data-longitude="76.9558322"
                        data-total-slots="0" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    1017                                                </th>

                        <td class="name">
                                                            Магазин детской одежды Baby Junior                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            пр. Достык - ул. Богенбай батыра                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            0                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2556474" data-longitude="76.9555526"
                        data-total-slots="6" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    1018                                                </th>

                        <td class="name">
                                                            ул. Толе би - пр.Достык                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            пр. Достык -ул.  Кабанбай батыра                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2551105" data-longitude="76.9469313"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1019                                                </th>

                        <td class="name">
                                                            ул. Толе би - пр. Назарбаева                                                        
                        </td>
                        <td class="address">
                                                            ул. Толе би - пр. Назарбаева                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            13                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2584736" data-longitude="76.9499674"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1020                                                </th>

                        <td class="name">
                                                            ул. Кунаева - ул. Айтеке би                                                        
                        </td>
                        <td class="address">
                                                            ул. Кунаева - ул. Айтеке би                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2611111" data-longitude="76.9657778"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1021                                                </th>

                        <td class="name">
                                                            Центральный парк культуры и отдыха им.Горького                                                        
                        </td>
                        <td class="address">
                                                            Центральный парк культуры и отдыха им.Горького                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2610278" data-longitude="76.961"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1022                                                </th>

                        <td class="name">
                                                            ул.Гоголя – ул.Кайырбекова                                                        
                        </td>
                        <td class="address">
                                                            ул.Гоголя – ул.Кайырбекова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2604168" data-longitude="76.9548231"
                        data-total-slots="24" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1023                                                </th>

                        <td class="name">
                                                            ул. Гоголя - пр. Достык                                                        
                        </td>
                        <td class="address">
                                                            ул. Гоголя - пр. Достык                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            23                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2646944" data-longitude="76.9575"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1024                                                </th>

                        <td class="name">
                                                            ул.Макатаева – ул.Жангельдина                                                        
                        </td>
                        <td class="address">
                                                            ул.Макатаева – ул.Жангельдина                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2678056" data-longitude="76.9530556"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1025                                                </th>

                        <td class="name">
                                                            ул.Пушкина – ул.Маметова                                                        
                        </td>
                        <td class="address">
                                                            ул.Пушкина – ул.Маметова                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2675833" data-longitude="76.9482222"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1026                                                </th>

                        <td class="name">
                                                            Ул. Маметовой – ул.Кунаева                                                        
                        </td>
                        <td class="address">
                                                            Ул. Маметовой – ул.Кунаева                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2705416" data-longitude="76.9514357"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    1027                                                </th>

                        <td class="name">
                                                            ул.Пушкина – пр.Райымбека                                                         
                        </td>
                        <td class="address">
                                                            ул.Пушкина – пр.Райымбека                                                     </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            13                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2286197" data-longitude="76.9479147"
                        data-total-slots="32" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2001                                                </th>

                        <td class="name">
                                                            БЦ Нурлы тау                                                        
                        </td>
                        <td class="address">
                                                            пр. Аль-Фараби 19                                                    </td>
                        <td class="avl-bikes">
                                                            4                                                    </td>
                        <td class="free-slots">
                                                            28                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2270" data-longitude="76.9412"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2002                                                </th>

                        <td class="name">
                                                            АО Народный банк ( пр.Аль-Фараби -пр.Сейфуллина)                                                        
                        </td>
                        <td class="address">
                                                            АО Народный банк ( пр.Аль-Фараби -пр.Сейфуллина)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2232" data-longitude="76.9360"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2003                                                </th>

                        <td class="name">
                                                            АО Банк Астаны (По Аль-Фараби между ул.Маркова и ул. Шашкина)                                                        
                        </td>
                        <td class="address">
                                                            АО Банк Астаны (По Аль-Фараби между ул.Маркова и ул. Шашкина)                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            4                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2205" data-longitude="76.9318"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2004                                                </th>

                        <td class="name">
                                                            ТРЦ Esentai Mall                                                        
                        </td>
                        <td class="address">
                                                            ТРЦ Esentai Mall                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2177435" data-longitude="76.9281458"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2005                                                </th>

                        <td class="name">
                                                            ТРЦ Esentai Mall                                                        
                        </td>
                        <td class="address">
                                                            ТРЦ Esentai Mall                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.215427" data-longitude="76.924373"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2006                                                </th>

                        <td class="name">
                                                            пр.Аль-Фараби–ул.Ремизовка                                                        
                        </td>
                        <td class="address">
                                                            пр.Аль-Фараби–ул.Ремизовка                                                    </td>
                        <td class="avl-bikes">
                                                            5                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.210718" data-longitude="76.917639"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2007                                                </th>

                        <td class="name">
                                                            пр.Аль-Фараби Университет "Нур Мубарак"                                                        
                        </td>
                        <td class="address">
                                                            пр.Аль-Фараби Университет "Нур Мубарак"                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2067540" data-longitude="76.9133196"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2008                                                </th>

                        <td class="name">
                                                            ул.Ходжанова - пр.Аль-Фараби                                                          
                        </td>
                        <td class="address">
                                                            ул.Ходжанова - пр.Аль-Фараби                                                      </td>
                        <td class="avl-bikes">
                                                            4                                                    </td>
                        <td class="free-slots">
                                                            4                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.1976668" data-longitude="76.9067830"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2009                                                </th>

                        <td class="name">
                                                            Мкр Казахфильм                                                        
                        </td>
                        <td class="address">
                                                            Мкр Казахфильм                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2108069" data-longitude="76.9076899"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2010                                                </th>

                        <td class="name">
                                                            ул.Ходжанова ниже пр.Аль-Фараби                                                        
                        </td>
                        <td class="address">
                                                            ул.Ходжанова ниже пр.Аль-Фараби                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2039355" data-longitude="76.9042977"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2011                                                </th>

                        <td class="name">
                                                            ул.Жарокова - пр.Левитана                                                        
                        </td>
                        <td class="address">
                                                            ул.Жарокова - пр.Левитана                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.200750" data-longitude="76.899056"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2012                                                </th>

                        <td class="name">
                                                            По ул.Гагарина (ЖК) ниже Аль-Фараби                                                        
                        </td>
                        <td class="address">
                                                            По ул.Гагарина (ЖК) ниже Аль-Фараби                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.196861" data-longitude="76.894539"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2013                                                </th>

                        <td class="name">
                                                            ул.Розыбакиева – пр. Аль-Фараби                                                        
                        </td>
                        <td class="address">
                                                            ул.Розыбакиева – пр. Аль-Фараби                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.201913" data-longitude="76.894507"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2014                                                </th>

                        <td class="name">
                                                            ул.Розыбакиева (ТРЦ MEGA Alma-Ata)                                                        
                        </td>
                        <td class="address">
                                                            ул.Розыбакиева (ТРЦ MEGA Alma-Ata)                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            13                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.1993470" data-longitude="76.8868310"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2015                                                </th>

                        <td class="name">
                                                            ул.Биржана – ул.Навои                                                        
                        </td>
                        <td class="address">
                                                            ул.Биржана – ул.Навои                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.194999" data-longitude="76.880626"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2016                                                </th>

                        <td class="name">
                                                            пр.Аль-Фараби – ул.Мустафина                                                         
                        </td>
                        <td class="address">
                                                            пр.Аль-Фараби – ул.Мустафина                                                     </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.198143" data-longitude="76.880540"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2017                                                </th>

                        <td class="name">
                                                            ул.Биржана – ул.Мустафина                                                         
                        </td>
                        <td class="address">
                                                            ул.Биржана – ул.Мустафина                                                     </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2105876" data-longitude="76.9035454"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2018                                                </th>

                        <td class="name">
                                                            ул.Ходжанова - Жарокова                                                        
                        </td>
                        <td class="address">
                                                            ул.Ходжанова - Жарокова                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            4                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.214858" data-longitude="76.902449"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2019                                                </th>

                        <td class="name">
                                                            ул.Жарокова - ул.Байкадамова                                                        
                        </td>
                        <td class="address">
                                                            ул.Жарокова - ул.Байкадамова                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2098099" data-longitude="76.8983398"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2020                                                </th>

                        <td class="name">
                                                            по ул.Гагарина (ресторан Космос)                                                        
                        </td>
                        <td class="address">
                                                            по ул.Гагарина (ресторан Космос)                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2062702" data-longitude="76.8988118"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2021                                                </th>

                        <td class="name">
                                                            по ул.Гагарина (Супермаркет Magnum)                                                        
                        </td>
                        <td class="address">
                                                            по ул.Гагарина (Супермаркет Magnum)                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            14                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.206113" data-longitude="76.889727"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2022                                                </th>

                        <td class="name">
                                                            ул Каблукова (остановка школа интернат)                                                        
                        </td>
                        <td class="address">
                                                            ул Каблукова (остановка школа интернат)                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2039" data-longitude="76.8851"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2023                                                </th>

                        <td class="name">
                                                            ул.Торайгырова - ул.Навои                                                        
                        </td>
                        <td class="address">
                                                            ул.Торайгырова - ул.Навои                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2026430" data-longitude="76.8784486"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2024                                                </th>

                        <td class="name">
                                                            ул.Мустафина – ул.Торайгырова                                                        
                        </td>
                        <td class="address">
                                                            ул.Мустафина – ул.Торайгырова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2020" data-longitude="76.8754"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2025                                                </th>

                        <td class="name">
                                                            по ул.Торайгырова между ул.Саина и ул.Мустафина                                                        
                        </td>
                        <td class="address">
                                                            по ул.Торайгырова между ул.Саина и ул.Мустафина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2021" data-longitude="76.8685"
                        data-total-slots="10" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    2026                                                </th>

                        <td class="name">
                                                            ул.Торайгырова – ул.Саина                                                                                         <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            ул.Торайгырова – ул.Саина                                                     </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.206051" data-longitude="76.877711"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2027                                                </th>

                        <td class="name">
                                                            ул.Рыскулбекова – ул.Мустафина                                                        
                        </td>
                        <td class="address">
                                                            ул.Рыскулбекова – ул.Мустафина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.219364" data-longitude="76.901815"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2028                                                </th>

                        <td class="name">
                                                            ул. Утепова - ул. Жарокова                                                        
                        </td>
                        <td class="address">
                                                            ул. Утепова - ул. Жарокова                                                    </td>
                        <td class="avl-bikes">
                                                            4                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2187418" data-longitude="76.8970730"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2029                                                </th>

                        <td class="name">
                                                            ул. Утепова - ул. Гагарина                                                        
                        </td>
                        <td class="address">
                                                            ул. Утепова - ул. Гагарина                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.218817" data-longitude="76.892202"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2030                                                </th>

                        <td class="name">
                                                            ул. Утепова - ул. Розыбакиева                                                        
                        </td>
                        <td class="address">
                                                            ул. Утепова - ул. Розыбакиева                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2152166" data-longitude="76.8881223"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2031                                                </th>

                        <td class="name">
                                                            ул Каблуковапо ул.Каблукова (Напротив Коррекционной школы-интернат №9)                                                        
                        </td>
                        <td class="address">
                                                            по ул.Каблукова (Напротив Коррекционной школы-интернат №9)                                                    </td>
                        <td class="avl-bikes">
                                                            5                                                    </td>
                        <td class="free-slots">
                                                            11                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2215068" data-longitude="76.8970087"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2032                                                </th>

                        <td class="name">
                                                            ул.Гагарина – ул.Басенова                                                        
                        </td>
                        <td class="address">
                                                            ул.Гагарина – ул.Басенова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2369" data-longitude="76.9457"
                        data-total-slots="24" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2033                                                </th>

                        <td class="name">
                                                            Акимат города Алматы                                                        
                        </td>
                        <td class="address">
                                                            Акимат города Алматы                                                    </td>
                        <td class="avl-bikes">
                                                            5                                                    </td>
                        <td class="free-slots">
                                                            19                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2313" data-longitude="76.9345"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2034                                                </th>

                        <td class="name">
                                                            Управление дорожной полиции                                                        
                        </td>
                        <td class="address">
                                                            ул. Тимирязева - ул. Байтурсынова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2266" data-longitude="76.9228"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2035                                                </th>

                        <td class="name">
                                                            КазНУ им.Аль-Фараби                                                        
                        </td>
                        <td class="address">
                                                            ул. Тимирязева                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            11                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2261" data-longitude="76.9110"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2036                                                </th>

                        <td class="name">
                                                            КазНУ (ул. Тимирязева - ул.Манаса)                                                        
                        </td>
                        <td class="address">
                                                            КазНУ (ул. Тимирязева - ул.Манаса)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2257" data-longitude="76.9064"
                        data-total-slots="24" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2037                                                </th>

                        <td class="name">
                                                            Атакент                                                        
                        </td>
                        <td class="address">
                                                            Атакент                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            20                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.225355" data-longitude="76.900758"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2038                                                </th>

                        <td class="name">
                                                            ул. Тимирязева - ул. Жарокова                                                        
                        </td>
                        <td class="address">
                                                            ул. Тимирязева - ул. Жарокова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2249749" data-longitude="76.8917251"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2039                                                </th>

                        <td class="name">
                                                            ул.Розыбакиева – ул.Тимирязева                                                        
                        </td>
                        <td class="address">
                                                            ул.Розыбакиева – ул.Тимирязева                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2377719" data-longitude="76.9382913"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2040                                                </th>

                        <td class="name">
                                                            Ул.Наурызбай батыра – ул.Сатпаева                                                        
                        </td>
                        <td class="address">
                                                            Ул.Наурызбай батыра – ул.Сатпаева                                                    </td>
                        <td class="avl-bikes">
                                                            4                                                    </td>
                        <td class="free-slots">
                                                            2                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2377384" data-longitude="76.9348354"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2041                                                </th>

                        <td class="name">
                                                            ул.Сатпаева – пр.Сейфуллина                                                        
                        </td>
                        <td class="address">
                                                            ул.Сатпаева – пр.Сейфуллина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2373" data-longitude="76.9310"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2042                                                </th>

                        <td class="name">
                                                            ул. Сатпаева - ул. Масанчи                                                        
                        </td>
                        <td class="address">
                                                            пр. Сатпаева - ул. Масанчи                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2336566" data-longitude="76.9315733"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2043                                                </th>

                        <td class="name">
                                                            ул.Байтурсынова – ул.Габдуллина                                                        
                        </td>
                        <td class="address">
                                                            ул.Байтурсынова – ул.Габдуллина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2362" data-longitude="76.9280"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2044                                                </th>

                        <td class="name">
                                                            КазНИТУ                                                        
                        </td>
                        <td class="address">
                                                            ул. Бухар жырау - Байтурсынова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2317921" data-longitude="76.9201793"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2045                                                </th>

                        <td class="name">
                                                            ул. Бухар жырау - р. Весновка                                                        
                        </td>
                        <td class="address">
                                                            ул. Бухар жырау - р. Весновка                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2280" data-longitude="76.9058"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2046                                                </th>

                        <td class="name">
                                                            ул.Ауэзова - ул.Габдулина                                                         
                        </td>
                        <td class="address">
                                                            ул.Ауэзова - ул.Габдулина                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2309643" data-longitude="76.9047660"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2047                                                </th>

                        <td class="name">
                                                            ул.Ауэзова - ул.Бухар Жырау                                                        
                        </td>
                        <td class="address">
                                                            ул.Ауэзова - ул.Бухар Жырау                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2322375" data-longitude="76.9001810"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2048                                                </th>

                        <td class="name">
                                                            ул.Жандосова – ул.Жарокова                                                        
                        </td>
                        <td class="address">
                                                            ул.Жандосова – ул.Жарокова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2303" data-longitude="76.8958"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2049                                                </th>

                        <td class="name">
                                                            ул.Жандосова - ул.Гагарина                                                         
                        </td>
                        <td class="address">
                                                            ул.Жандосова - ул.Гагарина                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.227652" data-longitude="76.890985"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2050                                                </th>

                        <td class="name">
                                                            ул.Жандосова – ул.Розыбакиева                                                        
                        </td>
                        <td class="address">
                                                            ул.Жандосова – ул.Розыбакиева                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2366" data-longitude="76.9217"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2051                                                </th>

                        <td class="name">
                                                            Ресторан Тюбетейка (ул.Сатпаева-река Весновка)                                                        
                        </td>
                        <td class="address">
                                                            Ресторан Тюбетейка (ул.Сатпаева-река Весновка)                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.236758" data-longitude="76.914953"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2052                                                </th>

                        <td class="name">
                                                            ул.Сатпаева - ул.Байзакова                                                        
                        </td>
                        <td class="address">
                                                            ул.Сатпаева - ул.Байзакова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2357" data-longitude="76.9043"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2054                                                </th>

                        <td class="name">
                                                            ул.Сатпаева –  ул.Ауэзова                                                        
                        </td>
                        <td class="address">
                                                            ул.Сатпаева –  ул.Ауэзова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.234934" data-longitude="76.899823"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2055                                                </th>

                        <td class="name">
                                                            ул.Сатпаева – ул.Жарокова                                                        
                        </td>
                        <td class="address">
                                                            ул.Сатпаева – ул.Жарокова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2350" data-longitude="76.8950"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2056                                                </th>

                        <td class="name">
                                                            ул.Сатпаева - ул.Гагарина                                                        
                        </td>
                        <td class="address">
                                                            ул.Сатпаева - ул.Гагарина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.234815" data-longitude="76.890101"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2057                                                </th>

                        <td class="name">
                                                            ул.Сатпаева – ул.Розыбакиева                                                        
                        </td>
                        <td class="address">
                                                            ул.Сатпаева – ул.Розыбакиева                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.233986" data-longitude="76.879300"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2058                                                </th>

                        <td class="name">
                                                            ул.Сатпаева – ул.Брусиловского                                                        
                        </td>
                        <td class="address">
                                                            ул.Сатпаева – ул.Брусиловского                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2395908" data-longitude="76.9272288"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2059                                                </th>

                        <td class="name">
                                                            СК Балуан Шолака                                                        
                        </td>
                        <td class="address">
                                                            пр. Абая - ул. Байтурсынова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            16                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2402" data-longitude="76.9172"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2060                                                </th>

                        <td class="name">
                                                            Казахский государственный цирк                                                        
                        </td>
                        <td class="address">
                                                            Казахский государственный цирк                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            12                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2400" data-longitude="76.9140"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2061                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Байзакова                                                        
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Байзакова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.239595" data-longitude="76.908447"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2062                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Манаса                                                        
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Манаса                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2392" data-longitude="76.9038"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2063                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Ауэзова                                                        
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Ауэзова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2387569" data-longitude="76.8983679"
                        data-total-slots="20" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2064                                                </th>

                        <td class="name">
                                                            пр. Абая - ул. Джандарбекова (вх метро Алатау)                                                        
                        </td>
                        <td class="address">
                                                            пр. Абая - ул. Джандарбекова (вх метро Алатау)                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            17                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2387" data-longitude="76.8955"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2065                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Гагарина                                                         
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Гагарина                                                     </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2383" data-longitude="76.8904"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2066                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Розыбакиева                                                        
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Розыбакиева                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2378" data-longitude="76.8835"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2067                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Тургут Озала                                                        
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Тургут Озала                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2368" data-longitude="76.8785"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2068                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Брусиловского                                                        
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Брусиловского                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2359466" data-longitude="76.8758721"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    2069                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Тлендиева                                                        
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Тлендиева                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            16                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2423882" data-longitude="76.9432418"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3001                                                </th>

                        <td class="name">
                                                            ГАРТД им. М.Ю. Лермонтова                                                        
                        </td>
                        <td class="address">
                                                            пр. Абая - ул. Абылай хана                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2433401" data-longitude="76.9236961"
                        data-total-slots="8" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    3002                                                </th>

                        <td class="name">
                                                            ул.Курмангазы - ул.Шарипова                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            ул.Курмангазы - ул.Шарипова                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2424" data-longitude="76.9165"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3003                                                </th>

                        <td class="name">
                                                            ул.Курмангазы - ул.Муканова                                                        
                        </td>
                        <td class="address">
                                                            ул.Курмангазы - ул.Муканова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2461" data-longitude="76.9411"
                        data-total-slots="10" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    3004                                                </th>

                        <td class="name">
                                                            ул. Желтоксан - ул. Шевченко                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            ул. Желтоксан - ул.Шевченко                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2456" data-longitude="76.9337"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3005                                                </th>

                        <td class="name">
                                                            ул.Шевченко - пр.Сейфуллина                                                        
                        </td>
                        <td class="address">
                                                            ул.Шевченко - пр.Сейфуллина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.245598" data-longitude="76.926952"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3006                                                </th>

                        <td class="name">
                                                            ул. Шевченко  - ул. Байтурсынова                                                        
                        </td>
                        <td class="address">
                                                            ул. Шевченко  - ул. Байтурсынова                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2444" data-longitude="76.9163"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3007                                                </th>

                        <td class="name">
                                                            ул.Шевченко - ул.Муканова                                                        
                        </td>
                        <td class="address">
                                                            ул.Шевченко - ул.Муканова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2433" data-longitude="76.9038"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3008                                                </th>

                        <td class="name">
                                                            ул.Шевченко - ул.Ауэзова                                                        
                        </td>
                        <td class="address">
                                                            ул.Шевченко - ул.Ауэзова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2428198" data-longitude="76.8944969"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3009                                                </th>

                        <td class="name">
                                                            ул.Гагарина - ул.Шевченко                                                        
                        </td>
                        <td class="address">
                                                            ул.Гагарина - ул.Шевченко                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.242258" data-longitude="76.889494"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3010                                                </th>

                        <td class="name">
                                                            ул.Розыбакиева (ТД Саламат)                                                        
                        </td>
                        <td class="address">
                                                            ул.Розыбакиева (ТД Саламат)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2459" data-longitude="76.9198"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3011                                                </th>

                        <td class="name">
                                                            ул.Жамбыла - ул.Муратбаева                                                         
                        </td>
                        <td class="address">
                                                            ул.Жамбыла - ул.Муратбаева                                                     </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2450" data-longitude="76.9077"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3012                                                </th>

                        <td class="name">
                                                            ул.Жамбула–ул.Манаса                                                        
                        </td>
                        <td class="address">
                                                            ул.Жамбула–ул.Манаса                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2449" data-longitude="76.8984"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3013                                                </th>

                        <td class="name">
                                                            ул.Жарокова - ул.Жамбыла                                                        
                        </td>
                        <td class="address">
                                                            ул.Жарокова - ул.Жамбыла                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.242347" data-longitude="76.877691"
                        data-total-slots="14" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3014                                                </th>

                        <td class="name">
                                                            ул.Шакарима – ул.Брусиловского                                                        
                        </td>
                        <td class="address">
                                                            ул.Шакарима – ул.Брусиловского                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            12                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2494" data-longitude="76.9402"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3015                                                </th>

                        <td class="name">
                                                            Магазин одежды Cottonshop.kz                                                        
                        </td>
                        <td class="address">
                                                            ул. Желтоксан - ул. Кабанбай батыра                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            4                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2491" data-longitude="76.9368"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3016                                                </th>

                        <td class="name">
                                                            Уйгурский театр                                                        
                        </td>
                        <td class="address">
                                                            ул. Наурызбай батыра - ул. Кабанбай батыра                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2500" data-longitude="76.9264"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3017                                                </th>

                        <td class="name">
                                                            ул.Карасай - ул.Байтурсынова                                                         
                        </td>
                        <td class="address">
                                                            ул.Карасай - ул.Байтурсынова                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2479529" data-longitude="76.9230966"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3018                                                </th>

                        <td class="name">
                                                            ул. Кабанбай батыра – ул.Шарипова                                                        
                        </td>
                        <td class="address">
                                                            ул. Кабанбай батыра – ул.Шарипова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2497069" data-longitude="76.9190883"
                        data-total-slots="8" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    3019                                                </th>

                        <td class="name">
                                                            ул.Карасай батыр – ул.Муратбаева                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            ул.Карасай батыр – ул.Муратбаева                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2490" data-longitude="76.9123"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3020                                                </th>

                        <td class="name">
                                                            ул.Карасай батыра - ул.Байзакова                                                        
                        </td>
                        <td class="address">
                                                            ул.Карасай батыра - ул.Байзакова                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2481622" data-longitude="76.9008683"
                        data-total-slots="24" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3021                                                </th>

                        <td class="name">
                                                            Ул. Карасай батыра - ул. Клочкова                                                        
                        </td>
                        <td class="address">
                                                            Ул. Карасай батыра - ул. Клочкова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            23                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2479" data-longitude="76.8934"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3022                                                </th>

                        <td class="name">
                                                            ул.Гагарина - ул.Карасай батыра                                                        
                        </td>
                        <td class="address">
                                                            ул.Гагарина - ул.Карасай батыра                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2476" data-longitude="76.8888"
                        data-total-slots="8" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    3023                                                </th>

                        <td class="name">
                                                            ул.Розыбакиева - ул.Карасай батыра                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            ул.Розыбакиева - ул.Карасай батыра                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2544444" data-longitude="76.9394444"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3024                                                </th>

                        <td class="name">
                                                            ул.Толе би – ул.Желтоксан                                                        
                        </td>
                        <td class="address">
                                                            ул.Толе би – ул.Желтоксан                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2541" data-longitude="76.9360"
                        data-total-slots="14" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3025                                                </th>

                        <td class="name">
                                                            КазУМОиМЯ им Абылай-хана (ул.Толе би - ул.Наурызбай батыра)                                                        
                        </td>
                        <td class="address">
                                                            КазУМОиМЯ им Абылай-хана (ул.Толе би - ул.Наурызбай батыра)                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            13                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.252327" data-longitude="76.932883"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3026                                                </th>

                        <td class="name">
                                                            пр.Сейфуллина - ул.Богенбай батыр                                                        
                        </td>
                        <td class="address">
                                                            пр.Сейфуллина - ул.Богенбай батыр                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2540810" data-longitude="76.9324839"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3027                                                </th>

                        <td class="name">
                                                            ул. Толе би – пр. Сейфуллина (Остановка)                                                        
                        </td>
                        <td class="address">
                                                            ул. Толе би – пр. Сейфуллина (Остановка)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2536111" data-longitude="76.9258333"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3028                                                </th>

                        <td class="name">
                                                            ул.Толе би – ул Байтурсынова                                                        
                        </td>
                        <td class="address">
                                                            ул.Толе би – ул Байтурсынова                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2532487" data-longitude="76.9188743"
                        data-total-slots="20" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3029                                                </th>

                        <td class="name">
                                                            ул. Толе би- ул. Муратбаева (Магазин beautymania)                                                        
                        </td>
                        <td class="address">
                                                            ул. Толе би- ул. Муратбаева (Магазин beautymania)                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            17                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2525725" data-longitude="76.9108289"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3030                                                </th>

                        <td class="name">
                                                            ул.Толе би – ул.Байзакова                                                        
                        </td>
                        <td class="address">
                                                            ул.Толе би – ул.Байзакова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2509873" data-longitude="76.8976369"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3031                                                </th>

                        <td class="name">
                                                            ул.Толе би – ул.Жарокова                                                        
                        </td>
                        <td class="address">
                                                            ул.Толе би – ул.Жарокова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2510202" data-longitude="76.8930637"
                        data-total-slots="24" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3032                                                </th>

                        <td class="name">
                                                            пр. Толе би - ул. Гагарина                                                        
                        </td>
                        <td class="address">
                                                            пр. Толе би - ул. Гагарина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            24                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.250707" data-longitude="76.888421"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3033                                                </th>

                        <td class="name">
                                                            ул.Толе би – ул.Розыбакиева                                                        
                        </td>
                        <td class="address">
                                                            ул.Толе би – ул.Розыбакиева                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.250288" data-longitude="76.882933"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3034                                                </th>

                        <td class="name">
                                                            ул.Толе би – ул.Гайдара                                                        
                        </td>
                        <td class="address">
                                                            ул.Толе би – ул.Гайдара                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2594725" data-longitude="76.9358375"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3035                                                </th>

                        <td class="name">
                                                            ул.Наурызбай батыра – ул.Гоголя                                                        
                        </td>
                        <td class="address">
                                                            ул.Наурызбай батыра – ул.Гоголя                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2594768" data-longitude="76.9323405"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3036                                                </th>

                        <td class="name">
                                                            ул.Гоголя – пр.Сейфуллина                                                         
                        </td>
                        <td class="address">
                                                            ул.Гоголя – пр.Сейфуллина                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            12                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2586389" data-longitude="76.9253333"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3037                                                </th>

                        <td class="name">
                                                            ул.Гоголя – ул.Байтурсынова                                                        
                        </td>
                        <td class="address">
                                                            ул.Гоголя – ул.Байтурсынова                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2581944" data-longitude="76.9182778"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3038                                                </th>

                        <td class="name">
                                                            ул.Муратбаева – ул.Гоголя                                                         
                        </td>
                        <td class="address">
                                                            ул.Муратбаева – ул.Гоголя                                                     </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2573056" data-longitude="76.9109722"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3039                                                </th>

                        <td class="name">
                                                            ул.Гоголя – ул.Байзакова                                                         
                        </td>
                        <td class="address">
                                                            ул.Гоголя – ул.Байзакова                                                     </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2565278" data-longitude="76.9018333"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3040                                                </th>

                        <td class="name">
                                                            ул.Гоголя – ул.Ауезова                                                         
                        </td>
                        <td class="address">
                                                            ул.Гоголя – ул.Ауезова                                                     </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2628805" data-longitude="76.9441494"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3041                                                </th>

                        <td class="name">
                                                            пр. Жибек жолы - ул. Панфилова                                                        
                        </td>
                        <td class="address">
                                                            пр. Жибек жолы - ул. Панфилова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.261615" data-longitude="76.938959"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3042                                                </th>

                        <td class="name">
                                                            пр.Жибек жолы (ТК Аэровокзал)                                                        
                        </td>
                        <td class="address">
                                                            пр.Жибек жолы (ТК Аэровокзал)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2633611" data-longitude="76.9352778"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3043                                                </th>

                        <td class="name">
                                                            ул. Макатаева – ул.Наурызбай батыра                                                        
                        </td>
                        <td class="address">
                                                            ул. Макатаева – ул.Наурызбай батыра                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2626944" data-longitude="76.9314722"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3044                                                </th>

                        <td class="name">
                                                            ул. Макатаева – пр.Сейфуллина                                                        
                        </td>
                        <td class="address">
                                                            ул. Макатаева – пр.Сейфуллина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            12                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2624328" data-longitude="76.9247442"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3045                                                </th>

                        <td class="name">
                                                            ул.Макатаева–ул.Байтурсынова                                                        
                        </td>
                        <td class="address">
                                                            ул.Макатаева–ул.Байтурсынова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2673056" data-longitude="76.9435278"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3046                                                </th>

                        <td class="name">
                                                            ул.Маметовой – ул.Панфилова;                                                        
                        </td>
                        <td class="address">
                                                            ул.Маметовой – ул.Панфилова;                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2659558" data-longitude="76.9399602"
                        data-total-slots="24" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3047                                                </th>

                        <td class="name">
                                                            ул.Маметова – ул.Абылай хана                                                         
                        </td>
                        <td class="address">
                                                            ул.Маметова – ул.Абылай хана                                                     </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            23                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2701102" data-longitude="76.9445219"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3048                                                </th>

                        <td class="name">
                                                            пр.Райымбека – пр. Назарбаева                                                        
                        </td>
                        <td class="address">
                                                            пр.Райымбека – пр. Назарбаева                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            16                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2696385" data-longitude="76.9397759"
                        data-total-slots="20" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    3049                                                </th>

                        <td class="name">
                                                            пр.Райымбека – ул.Абылай хана                                                         
                        </td>
                        <td class="address">
                                                            пр.Райымбека – ул.Абылай хана                                                     </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            17                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2074536" data-longitude="76.8839551"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4001                                                </th>

                        <td class="name">
                                                            ул.Рыскулбекова – ул.Навои                                                         
                        </td>
                        <td class="address">
                                                            ул.Рыскулбекова – ул.Навои                                                     </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.210852" data-longitude="76.878189"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4002                                                </th>

                        <td class="name">
                                                            ул.Сулейменова – ул.Токтабаева                                                        
                        </td>
                        <td class="address">
                                                            ул.Сулейменова – ул.Токтабаева                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.217714" data-longitude="76.875977"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4003                                                </th>

                        <td class="name">
                                                            ул.Жандосова – ул.Алтынсарина                                                        
                        </td>
                        <td class="address">
                                                            ул.Жандосова – ул.Алтынсарина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.214657" data-longitude="76.872855"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4004                                                </th>

                        <td class="name">
                                                            по ул.Жандосова Университет «Нархоз»                                                        
                        </td>
                        <td class="address">
                                                            по ул.Жандосова Университет «Нархоз»                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.212124" data-longitude="76.869465"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4005                                                </th>

                        <td class="name">
                                                            ул.Жандосова – ул.Берегового                                                        
                        </td>
                        <td class="address">
                                                            ул.Жандосова – ул.Берегового                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.208042" data-longitude="76.864047"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4006                                                </th>

                        <td class="name">
                                                            ул.Жандосова – ул.Саина                                                        
                        </td>
                        <td class="address">
                                                            ул.Жандосова – ул.Саина                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.219831" data-longitude="76.871953"
                        data-total-slots="12" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    4007                                                </th>

                        <td class="name">
                                                            ул.Алтынсарина – ул.Юрия Кима                                                                                         <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            ул.Алтынсарина – ул.Юрия Кима                                                     </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            12                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.210849" data-longitude="76.860071"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4008                                                </th>

                        <td class="name">
                                                            по ул.Саина ул.Ю.Ким                                                        
                        </td>
                        <td class="address">
                                                            по ул.Саина ул.Ю.Ким                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.227076" data-longitude="76.874311"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4009                                                </th>

                        <td class="name">
                                                            ул.Шаляпина - ул.Щепеткова                                                        
                        </td>
                        <td class="address">
                                                            ул.Шаляпина - ул.Щепеткова                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2212580" data-longitude="76.8689577"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4010                                                </th>

                        <td class="name">
                                                            ул.Шаляпина – ул.Алтынсарина                                                        
                        </td>
                        <td class="address">
                                                            ул.Шаляпина – ул.Алтынсарина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.217428" data-longitude="76.863722"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4011                                                </th>

                        <td class="name">
                                                            ул.Шаляпина – ул.Берегового                                                        
                        </td>
                        <td class="address">
                                                            ул.Шаляпина – ул.Берегового                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2113403" data-longitude="76.8497692"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4013                                                </th>

                        <td class="name">
                                                            Салон красоты                                                         
                        </td>
                        <td class="address">
                                                            Мамыр 2 дом 3                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2096950" data-longitude="76.8426902"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4014                                                </th>

                        <td class="name">
                                                            Ул. Шаляпина - ул. Момышулы                                                        
                        </td>
                        <td class="address">
                                                            пр.Сейфуллина - ул.Толе би                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2311" data-longitude="76.8685"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4017                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Отеген батыр (ст.метро Москва)                                                        
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Отеген батыр (ст.метро Москва)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            16                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2265" data-longitude="76.8626"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4018                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Алтынсарина                                                         
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Алтынсарина                                                     </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2236" data-longitude="76.8586"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4019                                                </th>

                        <td class="name">
                                                            по пр.Абая (магазин Kimex, напротив Family park)                                                        
                        </td>
                        <td class="address">
                                                            по пр.Абая (магазин Kimex, напротив Family park)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2202" data-longitude="76.8524"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4020                                                </th>

                        <td class="name">
                                                            пр.Абая – ул.Саина                                                        
                        </td>
                        <td class="address">
                                                            пр.Абая – ул.Саина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2184331" data-longitude="76.8457678"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4021                                                </th>

                        <td class="name">
                                                            Банк Китая в Казахстане                                                        
                        </td>
                        <td class="address">
                                                            Банк Китая в Казахстане                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2093534" data-longitude="76.8413406"
                        data-total-slots="6" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    4022                                                </th>

                        <td class="name">
                                                            АТФ Банк (ул.Шаляпина - ул.Момышулы)                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            АТФ Банк (ул.Шаляпина - ул.Момышулы)                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2178308" data-longitude="76.8390507"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4023                                                </th>

                        <td class="name">
                                                            Магазин Cotton                                                        
                        </td>
                        <td class="address">
                                                            КЦДС Атакент                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2211087" data-longitude="76.8377471"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4024                                                </th>

                        <td class="name">
                                                            Школа-гимназия №153 им. А. Розыбакиева                                                        
                        </td>
                        <td class="address">
                                                            Садвакасова, 27                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.229063" data-longitude="76.858985"
                        data-total-slots="16" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4025                                                </th>

                        <td class="name">
                                                            ул.Алтынсарина (к-т Сарыарка)                                                        
                        </td>
                        <td class="address">
                                                            ул.Алтынсарина (к-т Сарыарка)                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            14                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.226683" data-longitude="76.845741"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4026                                                </th>

                        <td class="name">
                                                            ул.Саина – ул.Улыкбек                                                        
                        </td>
                        <td class="address">
                                                            ул.Саина – ул.Улыкбек                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2224107" data-longitude="76.8495909"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4027                                                </th>

                        <td class="name">
                                                            по ул.Саина ниже пр.Абая (ТД Торнадо)                                                         
                        </td>
                        <td class="address">
                                                            по ул.Саина ниже пр.Абая (ТД Торнадо)                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2252573" data-longitude="76.8395711"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4028                                                </th>

                        <td class="name">
                                                            По ул.Улыкбека ( между ул. Сайна и ул.Момышулы)                                                        
                        </td>
                        <td class="address">
                                                            По ул.Улыкбека ( между ул. Сайна и ул.Момышулы)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2247834" data-longitude="76.8364792"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4029                                                </th>

                        <td class="name">
                                                            ул. Момышулы - ул. Улыкбека                                                        
                        </td>
                        <td class="address">
                                                            Жетысу 1-й микрорайон, 16/3                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            4                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.236583" data-longitude="76.860434"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4030                                                </th>

                        <td class="name">
                                                            ул.Жубанова - ул.Утеген батыра                                                        
                        </td>
                        <td class="address">
                                                            ул.Жубанова - ул.Утеген батыра                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            8                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.234918" data-longitude="76.853492"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4031                                                </th>

                        <td class="name">
                                                            ул.Жубанова - ул.Алтынсарина                                                        
                        </td>
                        <td class="address">
                                                            ул.Жубанова - ул.Алтынсарина                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2366900" data-longitude="76.8523605"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4032                                                </th>

                        <td class="name">
                                                            ул.Кабдолова (ТРК Grandpark) - ул.Алтынсарина                                                        
                        </td>
                        <td class="address">
                                                            ул.Кабдолова (ТРК Grandpark) - ул.Алтынсарина                                                    </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.232651" data-longitude="76.842677"
                        data-total-slots="12" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4033                                                </th>

                        <td class="name">
                                                            ул.Жубанова - ул. Саина                                                        
                        </td>
                        <td class="address">
                                                            ул.Жубанова - ул. Саина                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            11                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2309197" data-longitude="76.8372824"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4034                                                </th>

                        <td class="name">
                                                            ул.Жубанова (между ул.Саина и ул.Момышулы)                                                        
                        </td>
                        <td class="address">
                                                            ул.Жубанова (между ул.Саина и ул.Момышулы)                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            5                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2300690" data-longitude="76.8337237"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4035                                                </th>

                        <td class="name">
                                                            ул. Момышулы - ул. Жубанова                                                        
                        </td>
                        <td class="address">
                                                            ул. Момышулы - ул. Жубанова                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2327304" data-longitude="76.8327054"
                        data-total-slots="6" data-inactive="1"
                        data-sales="0"  style="color: #ccc" >

                        <th scope="row" class="code">
                                                    4036                                                </th>

                        <td class="name">
                                                            Ул. Момышулы - ул. Маргулан                                                                                        <span style="display: block;color: red;">
                                По техническим причинам данная станция не активна                                </span>
                            
                        </td>
                        <td class="address">
                                                            Ул. Момышулы - ул. Маргулан                                                    </td>
                        <td class="avl-bikes">
                                                            0
                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.238599" data-longitude="76.859327"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4037                                                </th>

                        <td class="name">
                                                            ул.Кабдолова – ул.Утеген батыр                                                         
                        </td>
                        <td class="address">
                                                            ул.Кабдолова – ул.Утеген батыр                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2349429" data-longitude="76.8416592"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4038                                                </th>

                        <td class="name">
                                                            ул.Кабдолова - ул.Саина                                                         
                        </td>
                        <td class="address">
                                                            ул.Кабдолова - ул.Саина                                                     </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.246017" data-longitude="76.855386"
                        data-total-slots="20" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4039                                                </th>

                        <td class="name">
                                                            ул.Толе би – ул.Утеген батыр                                                        
                        </td>
                        <td class="address">
                                                            ул.Толе би – ул.Утеген батыр                                                    </td>
                        <td class="avl-bikes">
                                                            2                                                    </td>
                        <td class="free-slots">
                                                            18                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.241531" data-longitude="76.839078"
                        data-total-slots="14" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4040                                                </th>

                        <td class="name">
                                                            ул.Толе би – ул.Саина                                                        
                        </td>
                        <td class="address">
                                                            ул.Толе би – ул.Саина                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            13                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2397901" data-longitude="76.8337014"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4041                                                </th>

                        <td class="name">
                                                            Ресторан McDonald's                                                        
                        </td>
                        <td class="address">
                                                            Автовокзал                                                     </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2390595" data-longitude="76.8308196"
                        data-total-slots="14" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4042                                                </th>

                        <td class="name">
                                                            ул. Толе би - ул. Момышулы                                                        
                        </td>
                        <td class="address">
                                                            ул. Толе би - ул. Момышулы                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            13                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2376570" data-longitude="76.8244169"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4043                                                </th>

                        <td class="name">
                                                            ул. Толе би- ул. Яссауи                                                        
                        </td>
                        <td class="address">
                                                                                                                </td>
                        <td class="avl-bikes">
                                                            3                                                    </td>
                        <td class="free-slots">
                                                            3                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2404187" data-longitude="76.8287032"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    4044                                                </th>

                        <td class="name">
                                                            ТЦ Достар (Dapanji)                                                        
                        </td>
                        <td class="address">
                                                            Аксай1а дом 13                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2699444" data-longitude="76.9305"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    5001                                                </th>

                        <td class="name">
                                                            пр. Райымбека - пр.Сейфуллина                                                        
                        </td>
                        <td class="address">
                                                            пр. Райымбека - пр.Сейфуллина                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            9                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2505285" data-longitude="76.8244697"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    6001                                                </th>

                        <td class="name">
                                                            Magnum Сash&Сarry                                                        
                        </td>
                        <td class="address">
                                                            Хан шатыр,273                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2536278" data-longitude="76.8212847"
                        data-total-slots="10" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    6002                                                </th>

                        <td class="name">
                                                            Нуркент (Торгово - административный комплекс)                                                        
                        </td>
                        <td class="address">
                                                            Нуркент 57                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            10                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2564219" data-longitude="76.8220150"
                        data-total-slots="6" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    6003                                                </th>

                        <td class="name">
                                                            остановка Наурыз(мкр. Нуркент дом 37)                                                        
                        </td>
                        <td class="address">
                                                            остановка Наурыз(мкр. Нуркент дом 37)                                                    </td>
                        <td class="avl-bikes">
                                                            0                                                    </td>
                        <td class="free-slots">
                                                            6                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2601354" data-longitude="76.8203982"
                        data-total-slots="8" data-inactive="0"
                        data-sales="0" >

                        <th scope="row" class="code">
                                                    6004                                                </th>

                        <td class="name">
                                                            "Алатау" Театр традиционного искусства                                                        
                        </td>
                        <td class="address">
                                                            "Алатау" Театр традиционного искусства                                                    </td>
                        <td class="avl-bikes">
                                                            1                                                    </td>
                        <td class="free-slots">
                                                            7                                                    </td>

                    </tr>

                
                    <tr data-latitude="43.2391010" data-longitude="76.9268076"
                        data-total-slots="" data-inactive="0"
                        data-sales="1" >

                        <th scope="row" class="code">
                        
                                                </th>

                        <td class="name">
                                                            Отдел продаж                                                        
                        </td>
                        <td class="address">
                                                            ДС им. Балуан Шолака                                                    </td>
                        <td class="avl-bikes">
                                                                                                                </td>
                        <td class="free-slots">
                                                                                                                </td>

                    </tr>

                                </tbody>
            </table>
        </div>

    </div>
</section>

        <footer>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="soc">
                    <div class="title">
                        Мы в соцсетях                    </div>
                    <div>

                        <a style="color:#000;display: block;margin: 5px 5px 5px 0;"
                           href="https://www.facebook.com/velocity.kazakhstan/">
                            <img src="/frontend/img/fb.png">
                            Официальная группа Facebook                        </a>
                        <a style="color:#000;display: block;margin: 5px 5px 5px 0;"
                           href="https://www.instagram.com/velocity_kz/">
                            <img src="/frontend/img/insta.png">
                            Официальный Instagram профайл                        </a>
                        <a style="color:#000;display: block;margin: 5px 5px 5px 0;" href="https://vk.com/velocity_kz">
                            <img src="/frontend/img/vk.png">
                            Официальная группа VK                        </a>
                    </div>
                </div>
                <br>
                <div>
                    <a href="https://play.google.com/store/apps/details?id=kz.mindcore.velobike.almaty&hl=ru"
                       class="android">
                        <img src="/frontend/img/google-play.png" alt='Скачать приложение' class="img-responsive" style="max-height: 50px;margin-bottom: 5px;">
                    </a>



                </div>

                <div class="contract">

                                                <a href="/documents/dogovor29082020/dogovor_almaty_ru.docx">
                                                                Договор аренды велосипеда</a>
                            <a href="#" data-toggle="modal" data-target="#secureModal">Безопасность
                                онлайн платежей</a>
                </div>
                <div class="title">
                    <!-- Modal -->
                    <div class="modal fade" id="secureModal" tabindex="-1" role="dialog" aria-labelledby="secureModal">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"><img src="/frontend/img/x-black.png"></span>
                                    </button>
                                </div>
                                <div class="modal-body" style="text-transform: none;font-weight: normal;">
                                    <h3 class="title" style="width: 100%;">Безопасность онлайн
                                        платежей</h3>
                                    <strong>Платежи. Оплата банковской картой онлайн</strong>
                                    <p style="font-size: 16px;font-weight: normal;">Наш сайт подключен
                                        к интернет-эквайрингу, и Вы можете оплатить Товар банковской картой Visa или
                                        Mastercard. После подтверждения выбранного Товара откроется защищенное окно с
                                        платежной страницей процессингового центра CloudPayments, где Вам необходимо
                                        ввести данные Вашей банковской карты. Для дополнительной аутентификации
                                        держателя карты используется протокол 3D Secure. Если Ваш Банк поддерживает
                                        данную технологию, Вы будете перенаправлены на его сервер для дополнительной
                                        идентификации. Информацию о правилах и методах дополнительной идентификации
                                        уточняйте в Банке, выдавшем Вам банковскую карту.                                    </p>
                                    <strong>Гарантии безопасности</strong>
                                    <p style="font-size: 16px;font-weight: normal;">Процессинговый
                                        центр CloudPayments защищает и обрабатывает данные Вашей банковской карты по
                                        стандарту безопасности PCI DSS 3.0. Передача информации в платежный шлюз
                                        происходит с применением технологии шифрования SSL. Дальнейшая передача
                                        информации происходит по закрытым банковским сетям, имеющим наивысший уровень
                                        надежности. CloudPayments не передает данные Вашей карты нам и иным третьим
                                        лицам. Для дополнительной аутентификации держателя карты используется протокол
                                        3D Secure. В случае, если у Вас есть вопросы по совершенному платежу, Вы можете
                                        обратиться в службу поддержки клиентов по электронной почте
                                        support@cloudpayments.kz.                                    </p>
                                    <strong>Безопасность онлайн платежей</strong>
                                    <p style="font-size: 16px;font-weight: normal;">Предоставляемая
                                        Вами персональная информация (имя, адрес, телефон, e-mail, номер кредитной
                                        карты) является конфиденциальной и не подлежит разглашению. Данные Вашей
                                        кредитной карты передаются только в зашифрованном виде и не сохраняются на нашем
                                        Web-сервере. Безопасность обработки Интернет-платежей гарантирует ТОО
                                        «CloudPayments Kazakhstan». Все операции с платежными картами происходят в
                                        соответствии с требованиями VISA International, MasterCard и других платежных
                                        систем. При передаче информации используется специальные технологии безопасности
                                        карточных онлайн-платежей, обработка данных ведется на безопасном
                                        высокотехнологичном сервере процессинговой компании.                                    </p>
                                    <p style="font-size: 16px;font-weight: normal;">
                                        <img src="/frontend/img/secure.png" class="img-responsive">

                                    </p>
                                    <h3>Конфиденциальность</h3>
                                    <strong>1. Определения</strong>
                                    <p style="font-size: 16px;font-weight: normal;">
                                        Интернет проект https://almatybike.kz (далее – URL, «мы»)
                                        серьезно относится к вопросу конфиденциальности информации своих клиентов и
                                        посетителей сайта https://almatybike.kz (далее – «вы», «посетители сайта»).
                                        Персонифицированной мы называем информацию, содержащую персональные данные
                                        (например: ФИО, логин или название компании) посетителя сайта, а также
                                        информацию о действиях совершаемых вами на сайте URL. (например: заказ
                                        посетителя сайта с его контактной информацией). Анонимными мы называем данные,
                                        которые невозможно однозначно идентифицировать с конкретным посетителем сайта
                                        (например: статистика посещаемости сайта).                                    </p>
                                    <strong>2. Использование информации</strong>
                                    <p style="font-size: 16px;font-weight: normal;">
                                        Мы используем персонифицированную информацию конкретного
                                        посетителя сайта исключительно для обеспечения ему качественного оказания услуг
                                        и их учета. Мы не раскрываем персонифицированных данных одних посетителей сайта
                                        URL другим посетителям сайта. Мы никогда не публикуем персонифицированную
                                        информацию в открытом доступе и не передаем ее третьим лицам Исключением
                                        являются лишь ситуации, когда предоставление такой информации уполномоченным
                                        государственным органам предписано действующим законодательством Республики
                                        Казахстан. Мы публикуем и распространяем только отчеты, построенные на основании
                                        собранных анонимных данных. При этом отчеты не содержат информацию, по которой
                                        было бы возможным идентифицировать персонифицированные данные пользователей
                                        услуг. Мы также используем анонимные данные для внутреннего анализа, целью
                                        которого является развитие продуктов и услуг URL                                    </p>
                                    <strong>3. Ссылки</strong>
                                    <p style="font-size: 16px;font-weight: normal;">
                                        Сайт https://almatybike.kz может содержать ссылки на другие
                                        сайты, не имеющие отношения к нашей компании и принадлежащие третьим лицам. Мы
                                        не несем ответственности за точность, полноту и достоверность сведений,
                                        размещенных на сайтах третьих лиц, и не берем на себя никаких обязательств по
                                        сохранению конфиденциальности информации, оставленной вами на таких сайтах.                                    </p>
                                    <strong>4. Ограничение ответственности</strong>
                                    <p style="font-size: 16px;font-weight: normal;">
                                        Мы делаем все возможное для соблюдения настоящей политики
                                        конфиденциальности, однако, мы не можем гарантировать сохранность информации в
                                        случае воздействия факторов находящихся вне нашего влияния, результатом действия
                                        которых станет раскрытие информации. Сайт https://almatybike.kz и вся
                                        размещенная на нем информация представлены по принципу 'как есть' без каких-либо
                                        гарантий. Мы не несем ответственности за неблагоприятные последствия, а также за
                                        любые убытки, причиненные вследствие ограничения доступа к сайту URL или
                                        вследствие посещения сайта и использования размещенной на нем информации.                                    </p>
                                    <strong>5. Контакты</strong>
                                    <p style="font-size: 16px;font-weight: normal;">
                                        По вопросам, касающимся настоящей политики, просьба обращаться
                                        по адресу info@almatybike.kz                                    <p style="font-size: 16px;font-weight: normal;">Возврат оплаты за
                                        услуги</p>
                                    <p style="font-size: 16px;font-weight: normal;">Возврат ошибочной
                                        суммы оплаты не производится</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-4">
                <div class="title">
                    Отдел продаж                </div>
                <div class="description">

                    









    <strong>Ледовая арена «Олимпик»</strong><br>

<div class="address" data-latitude="43.239022" data-longitude="76.926619" data-title="Отдел продаж"></div>
    Адрес: проспект Абая, 44/1, Ледовая арена «Олимпик», 2 этаж (Вход со стороны ул.Байтурсынова).<br>
    График работы: Понедельник-пятница с 10:00 до 19:00. Перерыв: 14:00-15:00.
    Суббота: с 10:00 до 14:00. <br><br>

                </div>
                <br>

                <div class="soc">
                    <a href="http://velobike.kz/" target="_blank"><img src="/frontend/img/astanabike.png"
                                                                       alt=""> Астанабайк</a>
                    <br>
                    <a href="http://shymkentbike.kz/" target="_blank"><img src="/frontend/img/shymkentbike.png"
                                                                           alt=""> Шымкентбайк</a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="title">
                    Служба поддержки                </div>
                <div class="description">
                    <div class="phone">+7 702 000 80 60 <i class="fa fa-whatsapp" title="Whatsapp"
                                                           style="color: #44ac1c;" aria-hidden="true"></i> <i
                                class="fa fa-telegram" title="Telegram" style="color: #4ca8db;"
                                aria-hidden="true"></i></div>
                    Круглосуточно<br><br>

                    <a href="/contacts/">Обратная связь</a>
                </div>
<strong style="margin-top:10px;display:block;">Сайт сделан по заказу ОФ "Velocity.kz"</strong>
            </div>
        </div>

    </div>
</footer>
    </div>
</div>

<!-- Modal -->
<div class="stations-modals">
<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="/frontend/img/x-black.png"></span>
                </button>
            </div>
            <div class="modal-body">
                <div class="title"></div>
                <div class="inactive-text"></div>
                <div class="description"></div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="bike-info">
                            <img src="/frontend/img/bike-free.png" class="img-responsive">
                            <span class="bike-free"></span>
                            <p>велосипедов свободно</p>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="bike-info">
                            <img src="/frontend/img/lock-free.png" class="img-responsive">
                            <span class="slots-free"></span>
                            <p>свободных замков</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<!-- ================================================== -->
<script src="/frontend/js/bootstrap.min.js"></script>
<script src="/frontend/js/owl.carousel.min.js"></script>
<script src="/frontend/js/scroll.js"></script>
<script src="/frontend/js/jquery.maskedinput.min.js"></script>
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/jquery-jgrowl/1.4.1/jquery.jgrowl.min.css" />
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-jgrowl/1.4.1/jquery.jgrowl.min.js"></script>
<!--<script src="js/nivo-lightbox.min.js"></script>-->
<script src="https://api-maps.yandex.ru/2.1/?load=package.standard&lang=ru-RU" type="text/javascript"></script><script type="text/javascript">
    var bikestationoff = 'По техническим причинам данная станция не активна';
</script>
<script src="/frontend/js/scripts.js?ver=9"></script>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-85451648-1', 'auto');
    ga('send', 'pageview');

</script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter50309098 = new Ya.Metrika2({
                    id:50309098,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/tag.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks2");
</script>
<!-- /Yandex.Metrika counter -->


</body>
</html>
`
