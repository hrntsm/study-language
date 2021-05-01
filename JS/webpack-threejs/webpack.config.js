module.exports = [
    {
        // メインとなるエントリーポイント
        entry: `./src/index.js`,

        output: {
            // 出力ファイルのディレクトリ
            path: `${__dirname}/dist`,
            // 出力ファイル名
            filename: `app.js`
        },
        // モード値
        // production: 最適化された状態でJSファイルを出力
        // develop: ソースマップ有効でJSファイルが出力
        mode: "production",
    }
]