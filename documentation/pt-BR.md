<!-- ELUCENIA technical documentation · ganho-de-peso-gestacional · pt-BR · no clinical/professional/rights approval -->

# Ganho de peso gestacional (IOM 2009)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/ganho-de-peso-gestacional)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Peso pré-gestacional

`peso_pre`

kg · intervalo: 30–250

### Altura

`altura`

cm · intervalo: 130–200

### Gestação

`gemelar`

- `0` — Única
- `1` — Gemelar

### Peso atual (opcional)

`peso_atual`

kg · opcional · intervalo: 30–280

### Idade gestacional atual (opcional)

`ig_sem`

semanas · opcional · intervalo: 4–42

## Edição do método

IOMNRC 2009:IMCprégestação, faixatotal/ritmosemanal; projeção local após 13 semanas

## Fórmula documentada

IMC pré-gestacional = peso ÷ altura² (kg/m²), classificado pela OMS. A faixa de ganho total e o ritmo semanal no 2º e 3º trimestres vêm da tabela do IOM (2009).

Ganho esperado na idade gestacional (gestação única): até 13 semanas, até 2 kg; depois, de 0,5 kg + ritmo mínimo × (semanas − 13) a 2 kg + ritmo máximo × (semanas − 13), porque o IOM supõe ganho de 0,5 a 2 kg no 1º trimestre.

## Limites e população

As faixas são da IOM 2009, elaboradas para gestantes nos Estados Unidos; não são as curvas percentílicas brasileiras de Kac. Use IMC pré-gestacional. As faixas para gestação gemelar são provisórias e não há faixa estabelecida para gemelares com baixo peso nesta fonte. A estimativa por semana da interface combina pressupostos de ganho no primeiro trimestre e taxas posteriores; não é percentil individual nem previsão de desfecho. A aplicação em populações com diferenças importantes de estatura, nutrição ou assistência obstétrica exige avaliação contextual.

## Referências

- [Institute of Medicine; National Research Council. Weight Gain During Pregnancy: Reexamining the Guidelines. National Academies Press, 2009.](https://doi.org/10.17226/12584)

- [Kac G et al. Gestational weight gain charts: results from the Brazilian Maternal and Child Nutrition Consortium. Am J Clin Nutr, 2021.](https://doi.org/10.1093/ajcn/nqaa402)

- [IOM/NRC2009,WeightGainDuringPregnancy,chapter7](https://www.nationalacademies.org/read/12584/chapter/9)

- [IOM2009 official report brief](https://nap.nationalacademies.org/resource/12584/Resource-Page---Weight-Gain-During-Pregnancy.pdf)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Ganho total recomendado: 11,5 a 16,0 kg

| Detalhes do resultado | |
| --- | --- |
| IMC pré-gestacional | 22,0 kg/m² · eutrofia (18,5 ≤ IMC < 25) |
| Ritmo no 2º e 3º trimestres | 0,35 a 0,50 kg/semana |


### 2

Ganho total recomendado: 11,5 a 16,0 kg · ganho atual dentro do esperado

| Detalhes do resultado | |
| --- | --- |
| IMC pré-gestacional | 22,0 kg/m² · eutrofia (18,5 ≤ IMC < 25) |
| Ritmo no 2º e 3º trimestres | 0,35 a 0,50 kg/semana |
| Ganho até agora | 6,0 kg em 26 semanas |
| Faixa esperada nesta idade gestacional | 5,1 a 8,5 kg |


### 3

Ganho total recomendado: 11,5 a 16,0 kg · ganho atual acima do esperado

| Detalhes do resultado | |
| --- | --- |
| IMC pré-gestacional | 22,0 kg/m² · eutrofia (18,5 ≤ IMC < 25) |
| Ritmo no 2º e 3º trimestres | 0,35 a 0,50 kg/semana |
| Ganho até agora | 12,0 kg em 26 semanas |
| Faixa esperada nesta idade gestacional | 5,1 a 8,5 kg |

Ganho acima do esperado para a idade gestacional: reavalie dieta, atividade física e edema (pré-eclâmpsia).


### 4

Ganho total recomendado: 5,0 a 9,0 kg

| Detalhes do resultado | |
| --- | --- |
| IMC pré-gestacional | 37,1 kg/m² · obesidade (IMC ≥ 30) |
| Ritmo no 2º e 3º trimestres | 0,17 a 0,27 kg/semana |


### 5

Ganho total recomendado: 12,5 a 18,0 kg

| Detalhes do resultado | |
| --- | --- |
| IMC pré-gestacional | 16,5 kg/m² · baixo peso (IMC < 18,5) |
| Ritmo no 2º e 3º trimestres | 0,44 a 0,58 kg/semana |


### 6

Ganho total recomendado: 17,0 a 25,0 kg

| Detalhes do resultado | |
| --- | --- |
| IMC pré-gestacional | 22,0 kg/m² · eutrofia (18,5 ≤ IMC < 25) |

