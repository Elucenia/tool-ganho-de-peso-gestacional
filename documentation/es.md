<!-- ELUCENIA technical documentation · ganho-de-peso-gestacional · es · no clinical/professional/rights approval -->

# Ganancia de peso gestacional (IOM 2009)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/ganho-de-peso-gestacional)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Peso pregestacional

`peso_pre`

kg · intervalo: 30–250

### Estatura

`altura`

cm · intervalo: 130–200

### Embarazo

`gemelar`

- `0` — Única
- `1` — Gemelar

### Peso actual (opcional)

`peso_atual`

kg · opcional · intervalo: 30–280

### Edad gestacional actual (opcional)

`ig_sem`

semanas · opcional · intervalo: 4–42

## Edición del método

IOM/NRC 2009: IMC pregestacional, rango total/ritmo semanal; proyección local tras 13 semanas

## Fórmula documentada

IMC pregestacional = peso ÷ altura² (kg/m²), clasificado por OMS. Rango total y ritmo semanal en 2º y 3º trimestres: IOM (2009).

Ganancia esperada por edad gestacional (gestación única): hasta 13 semanas, hasta 2 kg; después, de 0,5 kg + ritmo mínimo × (semanas − 13) a 2 kg + ritmo máximo × (semanas − 13), pues IOM supone 0,5 a 2 kg en 1º trimestre.

## Límites y población

Los intervalos proceden de la IOM de 2009 y se elaboraron para gestantes en Estados Unidos; no son las curvas percentílicas brasileñas de Kac. Use el IMC pregestacional. Los intervalos para la gestación gemelar son provisionales y esta fuente no establece un intervalo para gestantes con bajo peso y embarazo gemelar. La estimación por semana de la interfaz combina supuestos de ganancia en el primer trimestre y tasas posteriores; no es un percentil individual ni una predicción de desenlace. La aplicación en poblaciones con diferencias importantes de talla, nutrición o atención obstétrica exige una evaluación contextual.

## Referencias

- [Institute of Medicine; National Research Council. Weight Gain During Pregnancy: Reexamining the Guidelines. National Academies Press, 2009.](https://doi.org/10.17226/12584)

- [Kac G et al. Gestational weight gain charts: results from the Brazilian Maternal and Child Nutrition Consortium. Am J Clin Nutr, 2021.](https://doi.org/10.1093/ajcn/nqaa402)

- [IOM/NRC2009,WeightGainDuringPregnancy,chapter7](https://www.nationalacademies.org/read/12584/chapter/9)

- [IOM2009 official report brief](https://nap.nationalacademies.org/resource/12584/Resource-Page---Weight-Gain-During-Pregnancy.pdf)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Aumento total recomendado: 11,5 a 16,0 kg

| Detalles del resultado | |
| --- | --- |
| IMC previo al embarazo | 22,0 kg/m² · normopeso (18,5 ≤ IMC < 25) |
| Ritmo en el 2.º y 3.º trimestre | 0,35 a 0,50 kg/semana |


### 2

Aumento total recomendado: 11,5 a 16,0 kg · aumento actual dentro de lo esperado

| Detalles del resultado | |
| --- | --- |
| IMC previo al embarazo | 22,0 kg/m² · normopeso (18,5 ≤ IMC < 25) |
| Ritmo en el 2.º y 3.º trimestre | 0,35 a 0,50 kg/semana |
| Aumento hasta ahora | 6,0 kg en 26 semanas |
| Rango esperado en esta edad gestacional | 5,1 a 8,5 kg |


### 3

Aumento total recomendado: 11,5 a 16,0 kg · aumento actual por encima de lo esperado

| Detalles del resultado | |
| --- | --- |
| IMC previo al embarazo | 22,0 kg/m² · normopeso (18,5 ≤ IMC < 25) |
| Ritmo en el 2.º y 3.º trimestre | 0,35 a 0,50 kg/semana |
| Aumento hasta ahora | 12,0 kg en 26 semanas |
| Rango esperado en esta edad gestacional | 5,1 a 8,5 kg |

Aumento por encima de lo esperado para la edad gestacional: reevaluar dieta, actividad física y edema (preeclampsia).


### 4

Aumento total recomendado: 5,0 a 9,0 kg

| Detalles del resultado | |
| --- | --- |
| IMC previo al embarazo | 37,1 kg/m² · obesidad (IMC ≥ 30) |
| Ritmo en el 2.º y 3.º trimestre | 0,17 a 0,27 kg/semana |


### 5

Aumento total recomendado: 12,5 a 18,0 kg

| Detalles del resultado | |
| --- | --- |
| IMC previo al embarazo | 16,5 kg/m² · bajo peso (IMC < 18,5) |
| Ritmo en el 2.º y 3.º trimestre | 0,44 a 0,58 kg/semana |


### 6

Aumento total recomendado: 17,0 a 25,0 kg

| Detalles del resultado | |
| --- | --- |
| IMC previo al embarazo | 22,0 kg/m² · normopeso (18,5 ≤ IMC < 25) |

