<!-- ELUCENIA technical documentation · ganho-de-peso-gestacional · de · no clinical/professional/rights approval -->

# Gewichtszunahme in der Schwangerschaft (IOM 2009)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/ganho-de-peso-gestacional)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Gewicht vor der Schwangerschaft

`peso_pre`

kg · Bereich: 30–250

### Körpergröße

`altura`

cm · Bereich: 130–200

### Schwangerschaft

`gemelar`

- `0` — Einlingsschwangerschaft
- `1` — Zwillings-

### Aktuelles Gewicht (optional)

`peso_atual`

kg · optional · Bereich: 30–280

### Aktuelles Gestationsalter (optional)

`ig_sem`

Wochen · optional · Bereich: 4–42

## Fassung der Methode

IOM/NRC 2009: BMI vor Schwangerschaft, Gesamtbereich/Wochenrate; lokale Projektion nach 13 Wochen

## Dokumentierte Formel

BMI vor Schwangerschaft = Gewicht ÷ Größe² (kg/m²), nach WHO klassifiziert. Gesamtbereich und Wochenrate im 2. und 3. Trimenon aus IOM (2009).

Erwartete Zunahme nach Gestationsalter (Einlingsschwangerschaft): bis 13 Wochen bis 2 kg; danach von 0,5 kg + Mindestrate × (Wochen − 13) bis 2 kg + Höchstrate × (Wochen − 13), da IOM im 1. Trimenon 0,5 bis 2 kg annimmt.

## Grenzen und Population

Die Bereiche stammen aus den IOM-Empfehlungen von 2009 und wurden für Schwangere in den Vereinigten Staaten entwickelt; es sind nicht die brasilianischen Perzentilkurven von Kac. Verwenden Sie den BMI vor der Schwangerschaft. Die Bereiche für Zwillingsschwangerschaften sind vorläufig; für untergewichtige Schwangere mit Zwillingen enthält diese Quelle keinen festgelegten Bereich. Die wöchentliche Schätzung der Oberfläche kombiniert Annahmen zur Gewichtszunahme im ersten Trimester mit späteren Zunahmeraten; sie ist weder eine individuelle Perzentile noch eine Vorhersage des Ausgangs. Die Anwendung bei Populationen mit wesentlichen Unterschieden in Körpergröße, Ernährung oder geburtshilflicher Versorgung erfordert eine kontextbezogene Beurteilung.

## Referenzen

- [Institute of Medicine; National Research Council. Weight Gain During Pregnancy: Reexamining the Guidelines. National Academies Press, 2009.](https://doi.org/10.17226/12584)

- [Kac G et al. Gestational weight gain charts: results from the Brazilian Maternal and Child Nutrition Consortium. Am J Clin Nutr, 2021.](https://doi.org/10.1093/ajcn/nqaa402)

- [IOM/NRC2009,WeightGainDuringPregnancy,chapter7](https://www.nationalacademies.org/read/12584/chapter/9)

- [IOM2009 official report brief](https://nap.nationalacademies.org/resource/12584/Resource-Page---Weight-Gain-During-Pregnancy.pdf)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Empfohlene Gesamtzunahme: 11,5 bis 16,0 kg

| Ergebnisdetails | |
| --- | --- |
| BMI vor der Schwangerschaft | 22,0 kg/m² · Normalgewicht (18,5 ≤ BMI < 25) |
| Rate im 2. und 3. Trimenon | 0,35 bis 0,50 kg/Woche |


### 2

Empfohlene Gesamtzunahme: 11,5 bis 16,0 kg · aktuelle Zunahme im erwarteten Bereich

| Ergebnisdetails | |
| --- | --- |
| BMI vor der Schwangerschaft | 22,0 kg/m² · Normalgewicht (18,5 ≤ BMI < 25) |
| Rate im 2. und 3. Trimenon | 0,35 bis 0,50 kg/Woche |
| Bisherige Zunahme | 6,0 kg in 26 Wochen |
| Erwarteter Bereich in diesem Gestationsalter | 5,1 bis 8,5 kg |


### 3

Empfohlene Gesamtzunahme: 11,5 bis 16,0 kg · aktuelle Zunahme über dem Erwarteten

| Ergebnisdetails | |
| --- | --- |
| BMI vor der Schwangerschaft | 22,0 kg/m² · Normalgewicht (18,5 ≤ BMI < 25) |
| Rate im 2. und 3. Trimenon | 0,35 bis 0,50 kg/Woche |
| Bisherige Zunahme | 12,0 kg in 26 Wochen |
| Erwarteter Bereich in diesem Gestationsalter | 5,1 bis 8,5 kg |

Für das Gestationsalter übermäßige Zunahme: Ernährung, körperliche Aktivität und Ödeme (Präeklampsie) erneut beurteilen.


### 4

Empfohlene Gesamtzunahme: 5,0 bis 9,0 kg

| Ergebnisdetails | |
| --- | --- |
| BMI vor der Schwangerschaft | 37,1 kg/m² · Adipositas (BMI ≥ 30) |
| Rate im 2. und 3. Trimenon | 0,17 bis 0,27 kg/Woche |


### 5

Empfohlene Gesamtzunahme: 12,5 bis 18,0 kg

| Ergebnisdetails | |
| --- | --- |
| BMI vor der Schwangerschaft | 16,5 kg/m² · Untergewicht (BMI < 18,5) |
| Rate im 2. und 3. Trimenon | 0,44 bis 0,58 kg/Woche |


### 6

Empfohlene Gesamtzunahme: 17,0 bis 25,0 kg

| Ergebnisdetails | |
| --- | --- |
| BMI vor der Schwangerschaft | 22,0 kg/m² · Normalgewicht (18,5 ≤ BMI < 25) |

