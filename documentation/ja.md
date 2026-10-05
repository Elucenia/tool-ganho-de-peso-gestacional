<!-- ELUCENIA technical documentation · ganho-de-peso-gestacional · ja · no clinical/professional/rights approval -->

# 妊娠中の体重増加（IOM 2009）

[条件・出典・許諾](https://elucenia.org/ja/tools/ganho-de-peso-gestacional)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 妊娠前体重

`peso_pre`

kg · 範囲: 30–250

### 身長

`altura`

cm · 範囲: 130–200

### 妊娠

`gemelar`

- `0` — 単胎
- `1` — 双胎

### 現在の体重 （任意）

`peso_atual`

kg · 任意 · 範囲: 30–280

### 現在の妊娠週数 （任意）

`ig_sem`

週 · 任意 · 範囲: 4–42

## 方法の版

IOM/NRC 2009：妊娠前BMI，総範囲/週間率；13週後のローカル推算

## 記載された計算式

妊娠前BMI = 体重 ÷ 身長² (kg/m²)，WHO分類。総増加範囲と第2・3三半期の週間増加量はIOM（2009）。

妊娠週数の期待増加量（単胎）：13週まで最大2 kg；以後0.5 kg + 最小増加率 × (週数 − 13)から2 kg + 最大増加率 × (週数 − 13)。IOMは第1三半期に0.5〜2 kgを想定するため。

## 限界・対象集団

範囲は米国の妊婦を対象に作成されたIOM 2009によるもので、ブラジルのKacのパーセンタイル曲線ではありません。妊娠前BMIを使用してください。双胎妊娠の範囲は暫定的で、この資料には低体重の双胎妊娠の確立した範囲がありません。画面の週別推定は妊娠初期の増加量の仮定とその後の増加率を組み合わせたもので、個人のパーセンタイルや転帰予測ではありません。身長、栄養、産科医療に大きな違いのある集団への適用には状況に応じた評価が必要です。

## 参考文献

- [Institute of Medicine; National Research Council. Weight Gain During Pregnancy: Reexamining the Guidelines. National Academies Press, 2009.](https://doi.org/10.17226/12584)

- [Kac G et al. Gestational weight gain charts: results from the Brazilian Maternal and Child Nutrition Consortium. Am J Clin Nutr, 2021.](https://doi.org/10.1093/ajcn/nqaa402)

- [IOM/NRC2009,WeightGainDuringPregnancy,chapter7](https://www.nationalacademies.org/read/12584/chapter/9)

- [IOM2009 official report brief](https://nap.nationalacademies.org/resource/12584/Resource-Page---Weight-Gain-During-Pregnancy.pdf)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
