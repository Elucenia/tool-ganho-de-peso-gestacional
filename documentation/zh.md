<!-- ELUCENIA technical documentation · ganho-de-peso-gestacional · zh · no clinical/professional/rights approval -->

# 孕期体重增加（IOM 2009）

[条件、来源与许可](https://elucenia.org/zh/tools/ganho-de-peso-gestacional)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 孕前体重

`peso_pre`

kg · 范围: 30–250

### 身高

`altura`

cm · 范围: 130–200

### 妊娠

`gemelar`

- `0` — 单胎
- `1` — 双胎

### 当前体重 （可选）

`peso_atual`

kg · 选填 · 范围: 30–280

### 当前孕周 （可选）

`ig_sem`

周 · 选填 · 范围: 4–42

## 方法版本

IOM/NRC 2009：孕前BMI、总范围/每周速度；13周后本地推算

## 已记录的公式

孕前BMI = 体重 ÷ 身高² (kg/m²)，按WHO分类。总增重范围及第2、3孕期每周速度来自IOM（2009）。

孕周预期增重（单胎）：至13周最多2 kg；之后从0.5 kg + 最低速度 × (周数 − 13)至2 kg + 最高速度 × (周数 − 13)，因IOM假设第1孕期增重0.5至2 kg。

## 限制与适用人群

这些范围来自IOM 2009，为美国孕妇制定，并非巴西Kac百分位曲线。请使用孕前BMI。双胎妊娠范围为暂定建议，该来源未建立孕前低体重双胎的范围。界面的每周估计结合了孕早期增重假设和后续增重速率，并非个人百分位或结局预测。若人群在身高、营养或产科照护方面有显著差异，应用时需结合背景评估。

## 参考文献

- [Institute of Medicine; National Research Council. Weight Gain During Pregnancy: Reexamining the Guidelines. National Academies Press, 2009.](https://doi.org/10.17226/12584)

- [Kac G et al. Gestational weight gain charts: results from the Brazilian Maternal and Child Nutrition Consortium. Am J Clin Nutr, 2021.](https://doi.org/10.1093/ajcn/nqaa402)

- [IOM/NRC2009,WeightGainDuringPregnancy,chapter7](https://www.nationalacademies.org/read/12584/chapter/9)

- [IOM2009 official report brief](https://nap.nationalacademies.org/resource/12584/Resource-Page---Weight-Gain-During-Pregnancy.pdf)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

建议总增重：11.5 至 16.0 kg

| 结果详情 | |
| --- | --- |
| 孕前体重指数 | 22.0 kg/m² · 正常体重（18.5 ≤ BMI < 25） |
| 第2和第3孕期的增重速率 | 0.35 至 0.50 kg/周 |


### 2

建议总增重：11.5 至 16.0 kg · 当前增重在预期范围内

| 结果详情 | |
| --- | --- |
| 孕前体重指数 | 22.0 kg/m² · 正常体重（18.5 ≤ BMI < 25） |
| 第2和第3孕期的增重速率 | 0.35 至 0.50 kg/周 |
| 迄今增重 | 6.0 kg，历时26周 |
| 该孕周的预期范围 | 5.1 至 8.5 kg |


### 3

建议总增重：11.5 至 16.0 kg · 当前增重高于预期

| 结果详情 | |
| --- | --- |
| 孕前体重指数 | 22.0 kg/m² · 正常体重（18.5 ≤ BMI < 25） |
| 第2和第3孕期的增重速率 | 0.35 至 0.50 kg/周 |
| 迄今增重 | 12.0 kg，历时26周 |
| 该孕周的预期范围 | 5.1 至 8.5 kg |

高于该孕周预期的增重：重新评估饮食、体力活动和水肿（子痫前期）。


### 4

建议总增重：5.0 至 9.0 kg

| 结果详情 | |
| --- | --- |
| 孕前体重指数 | 37.1 kg/m² · 肥胖（BMI ≥ 30） |
| 第2和第3孕期的增重速率 | 0.17 至 0.27 kg/周 |


### 5

建议总增重：12.5 至 18.0 kg

| 结果详情 | |
| --- | --- |
| 孕前体重指数 | 16.5 kg/m² · 低体重（BMI < 18.5） |
| 第2和第3孕期的增重速率 | 0.44 至 0.58 kg/周 |


### 6

建议总增重：17.0 至 25.0 kg

| 结果详情 | |
| --- | --- |
| 孕前体重指数 | 22.0 kg/m² · 正常体重（18.5 ≤ BMI < 25） |

