const LEVEL2_DATA = {
    id: 2,
    title: "ストーリー構成",
    icon: "&#128214;",
    description: "PREP法、起承転結、ピラミッド構造で論理的に組み立てる",
    modules: [
        {
            id: 201,
            title: "ストーリー構成",
            duration: "15分",
            content: "<h2>なぜストーリー構成が重要なのか</h2>" +
                "<p>人間の脳は、バラバラな情報よりもストーリー（物語）として構造化された情報の方が、最大22倍記憶に残りやすいと言われています。プレゼンにおいて「何を言うか」だけでなく「どの順番で言うか」が極めて重要です。構成が整理されたプレゼンは、聴衆が迷子にならず、メッセージが確実に伝わります。</p>" +
                "<h2>PREP法 - ビジネスプレゼンの基本構成</h2>" +
                "<p><strong>PREP法</strong>は、最も汎用性の高いプレゼン構成フレームワークです。</p>" +
                "<table><thead><tr><th>要素</th><th>内容</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>P</strong>oint（結論）</td><td>最初に結論を述べる</td><td>「リモートワーク制度を導入すべきです」</td></tr>" +
                "<tr><td><strong>R</strong>eason（理由）</td><td>なぜそう言えるのか</td><td>「生産性向上と人材確保の両面で効果があるからです」</td></tr>" +
                "<tr><td><strong>E</strong>xample（具体例）</td><td>データや事例で裏付ける</td><td>「A社では導入後、生産性が15%向上しました」</td></tr>" +
                "<tr><td><strong>P</strong>oint（結論の再確認）</td><td>最後にもう一度結論</td><td>「以上の理由から、導入を提案します」</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'>" +
                "<p><strong>PREP法のメリット：</strong>結論ファーストなので忙しいビジネスパーソンに好まれます。短いプレゼン（5〜10分）に最適です。</p>" +
                "</div>" +
                "<h2>起承転結 - 日本的なストーリー構成</h2>" +
                "<p>起承転結は、聴衆の関心を引きつけながら展開する構成法です。特にスピーチやプレゼンの導入部分で効果を発揮します。</p>" +
                "<ul>" +
                "<li><strong>起：</strong>テーマの提示、問題提起で聴衆の興味を引く</li>" +
                "<li><strong>承：</strong>背景情報や現状分析で理解を深める</li>" +
                "<li><strong>転：</strong>新しい視点や驚きの事実を提示し、注意を引き直す</li>" +
                "<li><strong>結：</strong>結論とアクションプランを示す</li>" +
                "</ul>" +
                "<h2>ピラミッド構造 - マッキンゼー式ロジカル構成</h2>" +
                "<p>ピラミッド構造（ピラミッドプリンシプル）は、バーバラ・ミントが提唱した論理的な文書・プレゼン構成法です。トップダウンで情報を整理します。</p>" +
                "<ul>" +
                "<li><strong>頂点：</strong>メインメッセージ（最も伝えたいこと）</li>" +
                "<li><strong>第2層：</strong>メインメッセージを支える3つの柱（サブメッセージ）</li>" +
                "<li><strong>第3層：</strong>各柱を裏付ける根拠・データ・事例</li>" +
                "</ul>" +
                "<div class='info-box warning'>" +
                "<p><strong>注意：</strong>ピラミッド構造では「So What?（だから何？）」と「Why So?（なぜそう言える？）」を常に自問しながら構成を作ります。論理の飛躍がないか確認しましょう。</p>" +
                "</div>" +
                "<h2>構成法の使い分け</h2>" +
                "<table><thead><tr><th>構成法</th><th>適したシーン</th><th>所要時間の目安</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>PREP法</td><td>短い報告、提案、エレベーターピッチ</td><td>3〜10分</td></tr>" +
                "<tr><td>起承転結</td><td>スピーチ、啓発セミナー、ストーリーテリング</td><td>10〜30分</td></tr>" +
                "<tr><td>ピラミッド構造</td><td>経営層への戦略提案、コンサルレポート</td><td>15〜60分</td></tr>" +
                "</tbody></table>" +
                "<p>場面に応じて構成法を使い分けることで、聴衆に最適な形でメッセージを届けることができます。まずはPREP法をマスターし、徐々にレパートリーを広げていきましょう。</p>",
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "PREP法の「R」は何を意味しますか？",
                    options: ["Result（結果）", "Reason（理由）", "Reference（参考）", "Review（振り返り）"],
                    answer: 1,
                    explanation: "PREP法のRはReason（理由）です。結論（Point）の後に、なぜそう言えるのかの理由を述べます。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "ピラミッド構造で常に自問すべき2つの問いはどれですか？",
                    options: ["Who?とWhen?", "So What?とWhy So?", "How?とHow Much?", "What If?とWhat Next?"],
                    answer: 1,
                    explanation: "ピラミッド構造では「So What?（だから何？）」と「Why So?（なぜそう言える？）」を自問し、論理の飛躍がないか確認します。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "短い報告や提案（5〜10分）に最も適した構成法はどれですか？",
                    options: ["起承転結", "PREP法", "ピラミッド構造", "時系列構成"],
                    answer: 1,
                    explanation: "PREP法は結論ファーストで簡潔にまとめられるため、短い報告や提案に最適です。"
                }
            ]
        }
    ]
};