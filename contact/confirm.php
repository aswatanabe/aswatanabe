<?php

// セッションの書き込み
session_start();
$_SESSION['page'] = true;

// サニタイズ
function h( $str ) {
    return htmlspecialchars( $str, ENT_QUOTES, 'UTF-8' );
}

?>

<!doctype html>
<html lang="ja">
    <head prefix="og:http://ogp.me/ns#">
        <meta charset="UTF-8" />

        <title>Asuka Watanabe</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
            name="description"
            content="渡辺明日香（フロントエンドエンジニア・Webライター・書籍編集者）のポートフォリオサイトです。英語力・プログラミング・教材編集の知識と経験を活かし、使いやすさ・理解のしやすさ・正確性を考慮した、良質なコンテンツを提供いたします。"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content="Asuka Watanabe" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aswatanabe.com" />
        <meta
            property="og:description"
            content="渡辺明日香（フロントエンドエンジニア・Webライター・書籍編集者）のポートフォリオサイトです。英語力・プログラミング・教材編集の知識と経験を活かし、使いやすさ・理解のしやすさ・正確性を考慮した、良質なコンテンツを提供いたします。"
        />
        <meta property="og:image" content="https://aswatanabe.com/images/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <!-- favicon -->
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="stylesheet" href="../css/mainstyle.css" />
        <link rel="stylesheet" href="../css/pages.css" />
        <link rel="stylesheet" href="../css/red.css" />
        <link rel="preload" href="#" as="image" />
        <!-- Font Awesome -->
        <link rel="stylesheet" href="../vendor/fontawesome-free-6.2.0-web/css/all.min.css" />
        <!-- favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png" />
        <link rel="manifest" href="../images/favicon/site.webmanifest" />
        <link rel="mask-icon" href="../images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
    </head>
    <body class="confirm">
        <header id="header">
            <nav>
                <p>
                    <a href="#"><img src="../images/logo.png" alt="logo" /></a>
                </p>
                <h2>NAVIGATION</h2>
                <div id="burger">
                    <div id="burger-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="burger-menu">
                        <ul>
                            <li><a href="../about/">ABOUT</a></li>
                            <li><a href="../works/">WORKS</a></li>
                            <li><a href="../#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main class="form">
            <h1>問合せ確認</h1>
            <p>以下の内容で送信してよろしいでしょうか。</p>
            <dl>
                <dt><label for="name">お名前</label></dt>
                <dd><?php echo h($_POST['name']); ?></dd>
                <dt><label for="email">メールアドレス</label></dt>
                <dd><?php echo h($_POST['email01']); ?></dd>
                <dt><label for="querytitle">お問い合わせの種類</label></dt>
                <dd><?php echo h($_POST['querytitle']); ?></dd>
                <dt><label for="query">お問い合わせ内容</label></dt>
                <dd><?php echo h($_POST['query']); ?></dd>
            </dl>
            <div>
                <p class="btn"><button onClick="history.back()">入力画面に戻る</button></p>
                <form action="./complete.php" enctype="multipart/form-data" method="POST" class="form">
                    <input type="hidden" name="name" value="<?php echo h($_POST['name']); ?>">
                    <input type="hidden" name="email01" value="<?php echo h($_POST['email01']); ?>">
                    <input type="hidden" name="querytitle" value="<?php echo h($_POST['querytitle']); ?>">
                    <input type="hidden" name="query" value="<?php echo h($_POST['query']); ?>">
                    <p class="btn"><input type="submit" name="btn_submit" value="送信" /></p>
                </form>
            </div>
        </main>
        <footer>
            <section>
                <h2>LINKS</h2>
                <ul>
                    <li><a href="../about/">ABOUT</a></li>
                    <li><a href="../works/">WORKS</a></li>
                    <li><a href="../#contact">CONTACT</a></li>
                </ul>
            </section>
            <section>
                <h2>CONTACT</h2>
                <ul>
                    <li>
                        <a href="../#contact"><i class="fa-solid fa-envelope"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/333ACCC"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/aswatanabe"><i class="fa-brands fa-github"></i></a>
                    </li>
                </ul>
            </section>
            <small>© 2023 Asuka Watanabe</small>
        </footer>
        <script src="../js/script.js"></script>
    </body>
</html>
