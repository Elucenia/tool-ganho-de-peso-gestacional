<!-- ELUCENIA technical documentation · ganho-de-peso-gestacional · it · no clinical/professional/rights approval -->

# Aumento di peso gestazionale (IOM 2009)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/ganho-de-peso-gestacional)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Peso pregravidico

`peso_pre`

kg · intervallo: 30–250

### Altezza

`altura`

cm · intervallo: 130–200

### Gravidanza

`gemelar`

- `0` — Singola
- `1` — Gemellare

### Peso attuale (facoltativo)

`peso_atual`

kg · facoltativo · intervallo: 30–280

### Età gestazionale attuale (facoltativo)

`ig_sem`

settimane · facoltativo · intervallo: 4–42

## Edizione del metodo

IOM/NRC 2009: IMC pregravidico, range totale/ritmo settimanale; proiezione locale dopo 13 settimane

## Formula documentata

IMC pregravidico = peso ÷ altezza² (kg/m²), secondo OMS. Range totale e ritmo settimanale nel 2º e 3º trimestre: IOM (2009).

Aumento atteso per età gestazionale (gravidanza singola): fino a 13 settimane fino a 2 kg; poi da 0,5 kg + ritmo minimo × (settimane − 13) a 2 kg + ritmo massimo × (settimane − 13), poiché IOM presume 0,5–2 kg nel 1º trimestre.

## Limiti e popolazione

Gli intervalli provengono dalla IOM del 2009 e sono stati elaborati per gestanti negli Stati Uniti; non sono le curve percentili brasiliane di Kac. Usare l’IMC pregravidico. Gli intervalli per la gravidanza gemellare sono provvisori e questa fonte non stabilisce un intervallo per gestanti sottopeso con gravidanza gemellare. La stima settimanale dell’interfaccia combina ipotesi sull’aumento nel primo trimestre e tassi successivi; non è un percentile individuale né una previsione dell’esito. L’applicazione in popolazioni con differenze importanti di statura, nutrizione o assistenza ostetrica richiede una valutazione contestuale.

## Riferimenti

- [Institute of Medicine; National Research Council. Weight Gain During Pregnancy: Reexamining the Guidelines. National Academies Press, 2009.](https://doi.org/10.17226/12584)

- [Kac G et al. Gestational weight gain charts: results from the Brazilian Maternal and Child Nutrition Consortium. Am J Clin Nutr, 2021.](https://doi.org/10.1093/ajcn/nqaa402)

- [IOM/NRC2009,WeightGainDuringPregnancy,chapter7](https://www.nationalacademies.org/read/12584/chapter/9)

- [IOM2009 official report brief](https://nap.nationalacademies.org/resource/12584/Resource-Page---Weight-Gain-During-Pregnancy.pdf)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
