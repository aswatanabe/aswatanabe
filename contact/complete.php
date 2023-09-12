<?php

session_start();

if( !empty($_SESSION['page']) && $_SESSION['page'] === true ) {
    // セッションの削除
    unset($_SESSION['page']);


    // 変数とタイムゾーンを初期化
    $header = null;
    $auto_reply_subject = null;
    $auto_reply_text = null;
    $admin_reply_subject = null;
    $admin_reply_text = null;

    date_default_timezone_set('Asia/Tokyo');

    // ヘッダー情報を設定
    $header = "MIME-Version: 1.0\n";
    $header .= "From: Asuka Watanabe <noreply@aswatanabe.com>\n";
    $header .= "Reply-To: Asuka Watanabe <noreply@aswatanabe.com>\n";

    // 件名を設定
    $auto_reply_subject = 'お問い合わせありがとうございます';

    // 本文を設定
    $auto_reply_text = "この度は、お問い合わせ頂き誠にありがとうございます。下記の内容でお問い合わせを受け付けました。\n\n";
    $auto_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
    $auto_reply_text .= "氏名：" . $_POST['name'] . "\n";
    $auto_reply_text .= "メールアドレス：" . $_POST['email01'] . "\n";
    $auto_reply_text .= "お問い合わせの種類：" . $_POST['querytitle'] . "\n";
    $auto_reply_text .= "お問い合わせの内容：" . $_POST['query'] . "\n\n";
    $auto_reply_text .= "渡辺明日香";

    // メール送信
    mb_send_mail( $_POST['email01'], $auto_reply_subject, $auto_reply_text, $header);

    // 運営側へ送るメールの件名
    $admin_reply_subject = "お問い合わせを受け付けました";

    // 本文を設定
    $admin_reply_text = "下記の内容でお問い合わせがありました。\n\n";
    $admin_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
    $admin_reply_text .= "氏名：" . $_POST['name'] . "\n";
    $admin_reply_text .= "メールアドレス：" . $_POST['email01'] . "\n";
    $admin_reply_text .= "お問い合わせの種類：" . $_POST['querytype'] . "\n";
    $admin_reply_text .= "お問い合わせの内容：" . $_POST['query'] . "\n";

    // 運営側へメール送信
    mb_send_mail( 'info@aswatanabe.com', $admin_reply_subject, $admin_reply_text, $header);
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
    <body class="complete">
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
        <main>
            <h1>問合せ完了</h1>
            <p>お問い合わせありがとうございました。</p>
            <p>確認のため、自動返信メールをお送りいたします。</p>
            <p>ご入力いただいた内容を確認後、２－３日以内に返信いたしますので、しばらくお待ちください。</p>
            <p class="btn"><a href="../">TOPページへ戻る</a></p>
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
