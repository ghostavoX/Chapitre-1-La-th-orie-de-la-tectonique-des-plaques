// ============================================================
// content.js — CONTENU DU QUIZ (SVT 2AC - La Tectonique des Plaques)
// ============================================================
var QUIZ_CONFIG = {
  "title": "🌋 SVT 2ème Année Collège (2AC)",
  "subtitle": "La Tectonique des Plaques & la Dynamique Interne de la Terre",
  "badges": [
    "🌍 Dérive des continents",
    "⚡ Séismes & Volcans",
    "🧩 Plaques lithosphériques"
  ],
  "totalPoints": 20,
  "results": [
    {
      "min": 90,
      "emoji": "🏆",
      "title": "Excellente maîtrise !",
      "text": "Bravo ! Tu as parfaitement assimilé la tectonique des plaques et la dynamique interne.",
      "animation": "confetti"
    },
    {
      "min": 70,
      "emoji": "🎉",
      "title": "Très bien !",
      "text": "Bon travail ! La majorité des notions sur les plaques et séismes sont bien acquises.",
      "animation": "confetti"
    },
    {
      "min": 50,
      "emoji": "👍",
      "title": "Satisfaisant !",
      "text": "Les bases sont là. Prends le temps de revoir la correction pour consolider tes connaissances.",
      "animation": "sparkles"
    },
    {
      "min": 0,
      "emoji": "💪",
      "title": "Poursuis tes efforts !",
      "text": "Relis attentivement la leçon et retente l'exercice pour progresser !",
      "animation": "shake"
    }
  ],
  "sections": [
    {
      "title": "📌 1ère Partie : Restitution des Connaissances (10 points)",
      "exercises": [
        {
          "id": "ex1",
          "type": "qcm",
          "title": "Exercice 1 : Définitions scientifiques (2 points)",
          "description": "Choisissez la définition exacte pour chaque terme géologique :",
          "questions": [
            {
              "text": "<strong>1. Une plaque lithosphérique</strong> :",
              "options": [
                "Un fragment rigide de la surface terrestre délimité par des zones d'activités sismique et volcanique intenses",
                "Une couche liquide située au cœur du noyau terrestre responsable du magnétisme",
                "Une grande montagne continentale immobile entourée par les océans"
              ],
              "correct": 1,
              "points": 1.0
            },
            {
              "text": "<strong>2. Un séisme</strong> :",
              "options": [
                "Une éruption continue de lave fluide formant un nouveau fond océanique",
                "Une secousse brutale du sol causée par la libération soudaine d'énergie lors des mouvements des plaques",
                "L'accumulation progressive de sable sous l'action des courants marins"
              ],
              "correct": 2,
              "points": 1.0
            }
          ],
          "feedback": {
            "incomplete": "⚠️ Veuillez répondre à toutes les questions de l'exercice 1.",
            "success": "<strong>Résultat : {score}/{max} pts.</strong><br>• <strong>Plaque lithosphérique</strong> : Fragment rigide de la surface terrestre limité par des zones actives.<br>• <strong>Séisme</strong> : Secousse brutale provoquée par la libération soudaine d'énergie.",
            "partial": "<strong>Résultat : {score}/{max} pts.</strong><br>• <strong>Plaque lithosphérique</strong> : Fragment rigide de la surface terrestre limité par des zones actives.<br>• <strong>Séisme</strong> : Secousse brutale provoquée par la libération soudaine d'énergie."
          }
        },
        {
          "id": "ex2",
          "type": "qcm",
          "title": "Exercice 2 : Évaluation Vrai ou Faux (3,5 points)",
          "description": "Indiquez si chaque affirmation est Vraie ou Fausse :",
          "questions": [
            {
              "text": "1. Les plaques lithosphériques sont totalement immobiles.",
              "options": [
                "Vrai",
                "Faux"
              ],
              "correct": 2,
              "points": 0.5
            },
            {
              "text": "2. Toutes les plaques lithosphériques sont exclusivement océaniques.",
              "options": [
                "Vrai",
                "Faux"
              ],
              "correct": 2,
              "points": 0.5
            },
            {
              "text": "3. La répartition mondiale des séismes et des volcans permet de délimiter les plaques lithosphériques.",
              "options": [
                "Vrai",
                "Faux"
              ],
              "correct": 1,
              "points": 0.5
            },
            {
              "text": "4. Pour prouver sa théorie, Alfred Wegener n'a présenté qu'un seul argument.",
              "options": [
                "Vrai",
                "Faux"
              ],
              "correct": 2,
              "points": 0.5
            },
            {
              "text": "5. Certaines plaques peuvent être à la fois continentales et océaniques (océano-continentales).",
              "options": [
                "Vrai",
                "Faux"
              ],
              "correct": 1,
              "points": 0.5
            },
            {
              "text": "6. La théorie de la dérive des continents a été proposée par Charles Richter.",
              "options": [
                "Vrai",
                "Faux"
              ],
              "correct": 2,
              "points": 0.5
            },
            {
              "text": "7. L'échelle MSK mesure l'intensité (dégâts) tandis que l'échelle de Richter mesure la magnitude (énergie).",
              "options": [
                "Vrai",
                "Faux"
              ],
              "correct": 1,
              "points": 0.5
            }
          ],
          "feedback": {
            "incomplete": "⚠️ Veuillez répondre à toutes les affirmations.",
            "success": "<strong>Résultat : {score}/{max} pts.</strong><br>• 1. <strong>Faux</strong> : Les plaques bougent de quelques centimètres par an.<br>• 2. <strong>Faux</strong> : Il existe des plaques mixtes (ex : Plaque Africaine).<br>• 3. <strong>Vrai</strong> : Les séismes et volcans bordent les limites de plaques.<br>• 4. <strong>Faux</strong> : Wegener a présenté des arguments morphologiques, paléontologiques et petrographiques.<br>• 5. <strong>Vrai</strong> : Ex : Plaque africaine, plaque sud-américaine.<br>• 6. <strong>Faux</strong> : C'est Alfred Wegener (Richter a créé l'échelle de magnitude).<br>• 7. <strong>Vrai</strong> : MSK = dégâts ressentis / Richter = énergie libérée.",
            "partial": "<strong>Résultat : {score}/{max} pts.</strong><br>• 1. <strong>Faux</strong> : Les plaques bougent de quelques centimètres par an.<br>• 2. <strong>Faux</strong> : Il existe des plaques mixtes (ex : Plaque Africaine).<br>• 3. <strong>Vrai</strong> : Les séismes et volcans bordent les limites de plaques.<br>• 4. <strong>Faux</strong> : Wegener a présenté plusieurs arguments.<br>• 5. <strong>Vrai</strong> : Ex : Plaque africaine.<br>• 6. <strong>Faux</strong> : Proposée par Alfred Wegener.<br>• 7. <strong>Vrai</strong> : MSK = intensité / Richter = magnitude."
          }
        },
        {
          "id": "ex3",
          "type": "qcm",
          "title": "Exercice 3 : Association de concepts (4,5 points)",
          "description": "Sélectionnez l'expression exacte correspondant à chaque notion :",
          "questions": [
            {
              "text": "1. <strong>La Pangée</strong> correspond à :",
              "options": [
                "Un appareil enregistreur d'ondes sismiques",
                "L'ancien supercontinent qui réunissait tous les continents actuels",
                "Une échelle de 12 degrés mesurant les dégâts d'un séisme",
                "Une échelle de 9 degrés mesurant la magnitude d'un séisme"
              ],
              "correct": 2,
              "points": 1.125
            },
            {
              "text": "2. Le <strong>Sismographe</strong> correspond à :",
              "options": [
                "Un appareil qui permet d'enregistrer les ondes sismiques",
                "L'ancien supercontinent qui réunissait tous les continents actuels",
                "Une échelle de 12 degrés mesurant les dégâts d'un séisme",
                "Une échelle de 9 degrés mesurant la magnitude d'un séisme"
              ],
              "correct": 1,
              "points": 1.125
            },
            {
              "text": "3. L'<strong>Échelle MSK</strong> correspond à :",
              "options": [
                "Un appareil qui permet d'enregistrer les ondes sismiques",
                "L'ancien supercontinent qui réunissait tous les continents actuels",
                "Une échelle formée de 12 degrés permettant de mesurer l'intensité d'un séisme",
                "Une échelle formée de 9 degrés permettant de mesurer la magnitude d'un séisme"
              ],
              "correct": 3,
              "points": 1.125
            },
            {
              "text": "4. L'<strong>Échelle de Richter</strong> correspond à :",
              "options": [
                "Un appareil qui permet d'enregistrer les ondes sismiques",
                "L'ancien supercontinent qui réunissait tous les continents actuels",
                "Une échelle formée de 12 degrés permettant de mesurer l'intensité d'un séisme",
                "Une échelle formée de 9 degrés permettant de mesurer la magnitude d'un séisme"
              ],
              "correct": 4,
              "points": 1.125
            }
          ],
          "feedback": {
            "incomplete": "⚠️ Veuillez associer chaque concept à sa définition.",
            "success": "<strong>Résultat : {score}/{max} pts.</strong><br>• <strong>Pangée</strong> : Supercontinent unique d'origine.<br>• <strong>Sismographe</strong> : Appareil de mesure des ondes sismiques.<br>• <strong>Échelle MSK</strong> : Mesure de l'intensité (12 degrés).<br>• <strong>Échelle de Richter</strong> : Mesure de la magnitude (énergie).",
            "partial": "<strong>Résultat : {score}/{max} pts.</strong><br>• <strong>Pangée</strong> : Supercontinent unique d'origine.<br>• <strong>Sismographe</strong> : Appareil de mesure des ondes sismiques.<br>• <strong>Échelle MSK</strong> : Mesure de l'intensité (12 degrés).<br>• <strong>Échelle de Richter</strong> : Mesure de la magnitude (énergie)."
          }
        }
      ]
    },
    {
      "title": "📊 2ème Partie : Raisonnement Scientifique & Communication (10 points)",
      "exercises": [
        {
          "id": "ex4",
          "type": "qcm",
          "title": "Exercice 1 : Étude des arguments de la dérive des continents (5 points)",
          "description": "En vous appuyant sur l'étude des documents géologiques (Doc 1) :",
          "images": ["images/img1.png"],
          "questions": [
            {
              "text": "1. Quelle est la théorie géologique mise en évidence par les arguments de Wegener ?",
              "options": [
                "La théorie de la tectonique globale des plaques",
                "La théorie de la dérive des continents",
                "La théorie de l'expansion des fonds océaniques"
              ],
              "correct": 2,
              "points": 1.25
            },
            {
              "text": "2. Quels sont les deux arguments illustrés par la complémentarité des côtes et la répartition des fossiles ?",
              "options": [
                "L'argument sismologique et l'argument volcanique",
                "L'argument géométrique (morphologique) et l'argument paléontologique",
                "L'argument thermique et l'argument magnétique"
              ],
              "correct": 2,
              "points": 1.25
            },
            {
              "text": "3. En quoi consiste l'<strong>argument géométrique (morphologique)</strong> ?",
              "options": [
                "À la complémentarité parfaite des formes de découpage des côtes (ex: Afrique et Amérique du Sud)",
                "À la présence de séismes de même magnitude sur tous les continents",
                "À la découverte de volcans de même âge le long des rivages"
              ],
              "correct": 1,
              "points": 1.25
            },
            {
              "text": "4. En quoi consiste l'<strong>argument paléontologique</strong> ?",
              "options": [
                "À la présence de fossiles identiques d'espèces anciennes (ex: Mesosaurus) sur des continents aujourd'hui séparés",
                "À l'alignement parfait des chaînes de montagnes actuelles",
                "À la présence de gisements de pétrole sous les océans"
              ],
              "correct": 1,
              "points": 1.25
            }
          ],
          "feedback": {
            "incomplete": "⚠️ Veuillez répondre à toutes les questions de l'exercice 1.",
            "success": "<strong>Résultat : {score}/{max} pts.</strong><br>• <strong>Théorie</strong> : Dérive des continents (Wegener).<br>• <strong>Arguments</strong> : Morphologique (complémentarité des formes) et Paléontologique (fossiles identiques comme le Mesosaurus).",
            "partial": "<strong>Résultat : {score}/{max} pts.</strong><br>• <strong>Théorie</strong> : Dérive des continents (Wegener).<br>• <strong>Arguments</strong> : Morphologique (complémentarité des formes) et Paléontologique (fossiles identiques comme le Mesosaurus)."
          }
        },
        {
          "id": "ex5",
          "type": "qcm",
          "title": "Exercice 2 : Carte des plaques lithosphériques et dynamique globale (5 points)",
          "description": "En vous basant sur la carte mondiale des plaques lithosphériques (Doc 2) :",
          "images": ["images/img2.png"],
          "questions": [
            {
              "text": "1. Combien de plaques lithosphériques principales sont représentées sur la carte ?",
              "options": [
                "7 plaques",
                "11 plaques",
                "20 plaques"
              ],
              "correct": 2,
              "points": 0.8
            },
            {
              "text": "2. Quel est un exemple de <strong>plaque purement océanique</strong> ?",
              "options": [
                "Plaque Pacifique (ou Plaque de Nazca)",
                "Plaque Africaine",
                "Plaque Eurasiatique"
              ],
              "correct": 1,
              "points": 0.8
            },
            {
              "text": "3. Quel est un exemple de <strong>plaque océano-continentale</strong> ?",
              "options": [
                "Plaque Pacifique",
                "Plaque Africaine (ou Plaque Sud-Américaine)",
                "Plaque de Nazca"
              ],
              "correct": 2,
              "points": 0.8
            },
            {
              "text": "4. Quels sont les deux types fondamentaux de mouvements aux limites des plaques ?",
              "options": [
                "Mouvements de convergence (rapprochement) et mouvements de divergence (éloignement)",
                "Mouvements verticaux uniquement",
                "Mouvements de rotation circulaire uniquement"
              ],
              "correct": 1,
              "points": 0.8
            },
            {
              "text": "5. Citez un exemple de deux <strong>plaques divergentes</strong> (qui s'éloignent) :",
              "options": [
                "Plaque Africaine et Plaque Sud-Américaine",
                "Plaque de Nazca et Plaque Sud-Américaine",
                "Plaque Indienne et Plaque Eurasiatique"
              ],
              "correct": 1,
              "points": 0.9
            },
            {
              "text": "6. Citez un exemple de deux <strong>plaques convergentes</strong> (qui se rapprochent) :",
              "options": [
                "Plaque Africaine et Plaque Sud-Américaine",
                "Plaque de Nazca et Plaque Sud-Américaine",
                "Plaque Nord-Américaine et Plaque Africaine"
              ],
              "correct": 2,
              "points": 0.9
            }
          ],
          "feedback": {
            "incomplete": "⚠️ Veuillez répondre à toutes les questions sur la carte des plaques.",
            "success": "<strong>Résultat : {score}/{max} pts.</strong><br>• La carte présente <strong>11 plaques</strong>.<br>• <strong>Plaque océanique</strong> : Pacifique / Nazca.<br>• <strong>Plaque mixte</strong> : Africaine / Sud-Américaine.<br>• <strong>Mouvements</strong> : Divergence (ex: Afrique / Sud-Amérique) et Convergence (ex: Nazca / Sud-Amérique).",
            "partial": "<strong>Résultat : {score}/{max} pts.</strong><br>• La carte présente <strong>11 plaques</strong>.<br>• <strong>Plaque océanique</strong> : Pacifique / Nazca.<br>• <strong>Plaque mixte</strong> : Africaine / Sud-Américaine.<br>• <strong>Mouvements</strong> : Divergence et Convergence."
          }
        }
      ]
    }
  ]
};