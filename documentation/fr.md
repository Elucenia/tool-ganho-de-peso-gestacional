<!-- ELUCENIA technical documentation · ganho-de-peso-gestacional · fr · no clinical/professional/rights approval -->

# Prise de poids pendant la grossesse (IOM 2009)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/ganho-de-peso-gestacional)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Poids avant grossesse

`peso_pre`

kg · intervalle: 30–250

### Taille

`altura`

cm · intervalle: 130–200

### Grossesse

`gemelar`

- `0` — Unique
- `1` — Gémellaire

### Poids actuel (facultatif)

`peso_atual`

kg · facultatif · intervalle: 30–280

### Âge gestationnel actuel (facultatif)

`ig_sem`

semaines · facultatif · intervalle: 4–42

## Édition de la méthode

IOM/NRC 2009 : IMC avant grossesse, plage totale/rythme hebdomadaire ; projection locale après 13 semaines

## Formule documentée

IMC avant grossesse = poids ÷ taille² (kg/m²), classé selon OMS. Plage totale et rythme hebdomadaire aux 2e et 3e trimestres : IOM (2009).

Prise attendue selon le terme (grossesse unique) : jusqu’à 13 semaines, jusqu’à 2 kg ; ensuite, de 0,5 kg + rythme minimal × (semaines − 13) à 2 kg + rythme maximal × (semaines − 13), car IOM suppose 0,5 à 2 kg au 1er trimestre.

## Limites et population

Les fourchettes proviennent de l’IOM 2009 et ont été élaborées pour les femmes enceintes aux États-Unis ; il ne s’agit pas des courbes de percentiles brésiliennes de Kac. Utilisez l’IMC avant la grossesse. Les fourchettes pour les grossesses gémellaires sont provisoires et cette source n’en établit aucune pour les femmes en insuffisance pondérale portant des jumeaux. L’estimation hebdomadaire de l’interface combine des hypothèses de prise de poids au premier trimestre et des rythmes ultérieurs ; ce n’est ni un percentile individuel ni une prédiction d’issue. L’application à des populations présentant des différences importantes de taille, de nutrition ou de soins obstétricaux exige une évaluation contextuelle.

## Références

- [Institute of Medicine; National Research Council. Weight Gain During Pregnancy: Reexamining the Guidelines. National Academies Press, 2009.](https://doi.org/10.17226/12584)

- [Kac G et al. Gestational weight gain charts: results from the Brazilian Maternal and Child Nutrition Consortium. Am J Clin Nutr, 2021.](https://doi.org/10.1093/ajcn/nqaa402)

- [IOM/NRC2009,WeightGainDuringPregnancy,chapter7](https://www.nationalacademies.org/read/12584/chapter/9)

- [IOM2009 official report brief](https://nap.nationalacademies.org/resource/12584/Resource-Page---Weight-Gain-During-Pregnancy.pdf)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
