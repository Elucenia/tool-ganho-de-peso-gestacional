<!-- ELUCENIA technical documentation · ganho-de-peso-gestacional · en · no clinical/professional/rights approval -->

# Gestational weight gain (IOM 2009)

[conditions, sources and permissions](https://elucenia.org/en/tools/ganho-de-peso-gestacional)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Prepregnancy weight

`peso_pre`

kg · range: 30–250

### Height

`altura`

cm · range: 130–200

### Pregnancy

`gemelar`

- `0` — Singleton
- `1` — Twin

### Current weight (optional)

`peso_atual`

kg · optional · range: 30–280

### Current gestational age (optional)

`ig_sem`

weeks · optional · range: 4–42

## Method edition

IOM/NRC 2009: prepregnancy BMI, total range/weekly rate; local projection after 13 weeks

## Documented formula

Prepregnancy BMI = weight ÷ height² (kg/m²), classified by WHO. Total gain range and weekly rate in the 2nd and 3rd trimesters come from IOM (2009).

Expected gain for gestational age (singleton pregnancy): up to 13 weeks, up to 2 kg; thereafter, from 0.5 kg + minimum rate × (weeks − 13) to 2 kg + maximum rate × (weeks − 13), since IOM assumes 0.5 to 2 kg in the 1st trimester.

## Limits and population

The ranges are from IOM 2009, developed for pregnant women in the United States; they are not Kac’s Brazilian percentile charts. Use prepregnancy BMI. The ranges for twin pregnancy are provisional, and this source provides no established range for underweight women with twin pregnancies. The interface’s weekly estimate combines assumptions about first-trimester gain and later rates; it is neither an individual percentile nor an outcome prediction. Application in populations with important differences in stature, nutrition or obstetric care requires contextual assessment.

## References

- [Institute of Medicine; National Research Council. Weight Gain During Pregnancy: Reexamining the Guidelines. National Academies Press, 2009.](https://doi.org/10.17226/12584)

- [Kac G et al. Gestational weight gain charts: results from the Brazilian Maternal and Child Nutrition Consortium. Am J Clin Nutr, 2021.](https://doi.org/10.1093/ajcn/nqaa402)

- [IOM/NRC2009,WeightGainDuringPregnancy,chapter7](https://www.nationalacademies.org/read/12584/chapter/9)

- [IOM2009 official report brief](https://nap.nationalacademies.org/resource/12584/Resource-Page---Weight-Gain-During-Pregnancy.pdf)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Recommended total gain: 11.5 to 16.0 kg

| Result details | |
| --- | --- |
| Prepregnancy BMI | 22.0 kg/m² · normal weight (18,5 ≤ BMI < 25) |
| Rate in the 2nd and 3rd trimesters | 0.35 to 0.50 kg/week |


### 2

Recommended total gain: 11.5 to 16.0 kg · current gain within expected range

| Result details | |
| --- | --- |
| Prepregnancy BMI | 22.0 kg/m² · normal weight (18,5 ≤ BMI < 25) |
| Rate in the 2nd and 3rd trimesters | 0.35 to 0.50 kg/week |
| Gain so far | 6.0 kg in 26 weeks |
| Expected range at this gestational age | 5.1 to 8.5 kg |


### 3

Recommended total gain: 11.5 to 16.0 kg · current gain above expected

| Result details | |
| --- | --- |
| Prepregnancy BMI | 22.0 kg/m² · normal weight (18,5 ≤ BMI < 25) |
| Rate in the 2nd and 3rd trimesters | 0.35 to 0.50 kg/week |
| Gain so far | 12.0 kg in 26 weeks |
| Expected range at this gestational age | 5.1 to 8.5 kg |

Gain above expected for gestational age: reassess diet, physical activity and edema (pre-eclampsia).


### 4

Recommended total gain: 5.0 to 9.0 kg

| Result details | |
| --- | --- |
| Prepregnancy BMI | 37.1 kg/m² · obesity (BMI ≥ 30) |
| Rate in the 2nd and 3rd trimesters | 0.17 to 0.27 kg/week |


### 5

Recommended total gain: 12.5 to 18.0 kg

| Result details | |
| --- | --- |
| Prepregnancy BMI | 16.5 kg/m² · underweight (BMI < 18,5) |
| Rate in the 2nd and 3rd trimesters | 0.44 to 0.58 kg/week |


### 6

Recommended total gain: 17.0 to 25.0 kg

| Result details | |
| --- | --- |
| Prepregnancy BMI | 22.0 kg/m² · normal weight (18,5 ≤ BMI < 25) |

