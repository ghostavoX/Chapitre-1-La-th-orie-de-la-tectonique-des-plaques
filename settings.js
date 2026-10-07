// ============================================================
// quiz-settings.js — APPARENCE & RÉGLAGES (presque fixe)
// Le contenu du quiz (questions, textes) est dans quiz-config.js
// ============================================================
var QUIZ_SETTINGS = {
  // "normal" = tout sur une page | "slider" = un exercice à la fois (modifiable aussi dans ⚙️)
  "display": "normal",
  // false = cache le bouton ⚙️ (les élèves ne peuvent plus rien changer)
  "showSettings": true,

  // Valeurs par défaut
  "theme": {
    "fontSize": 16,
    "lineHeight": 1.6,
    "fontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    "text": "#3b2f2a",
    "bg": "#f3eee4",
    "card": "#fbf8f1",
    "primary": "#4a5a45",
    "secondary": "#a4593a",
    "ocean": "#5f8590",
    "accent": "#c79a3b",
    "correct": "#5b8a4a",
    "incorrect": "#b5483a"
  },

  // Thèmes proposés dans le panneau ⚙️
  "themes": {
    "Papier": { "text": "#3b2f2a", "bg": "#f3eee4", "card": "#fbf8f1", "primary": "#4a5a45", "secondary": "#a4593a", "ocean": "#5f8590", "accent": "#c79a3b", "correct": "#5b8a4a", "incorrect": "#b5483a" },
    "Argile": { "text": "#3a2a22", "bg": "#efe6da", "card": "#f8f2e8", "primary": "#7a4a34", "secondary": "#b5704f", "ocean": "#6f8a7a", "accent": "#c79a3b", "correct": "#5b8a4a", "incorrect": "#a63d33" },
    "Sauge":  { "text": "#2f3a33", "bg": "#eceee6", "card": "#f7f8f2", "primary": "#53654f", "secondary": "#7d9470", "ocean": "#b98a52", "accent": "#c79a3b", "correct": "#5b8a4a", "incorrect": "#b5483a" },
    "Mer":    { "text": "#24343a", "bg": "#e9eeec", "card": "#f5f8f7", "primary": "#3d5a62", "secondary": "#5f8a8b", "ocean": "#c47d55", "accent": "#d0a24a", "correct": "#5b8a4a", "incorrect": "#b5483a" },
    "Nuit":   { "text": "#e8e0d2", "bg": "#1f1c18", "card": "#2a2621", "primary": "#4a5a45", "secondary": "#b5704f", "ocean": "#8fa9a0", "accent": "#c79a3b", "correct": "#6fa05a", "incorrect": "#cf6253" }
  },

  // Couleurs proposées dans le panneau ⚙️ : l'utilisateur choisit UNIQUEMENT dans ces listes
  "colorOptions": {
    "text":      ["#3b2f2a", "#3a2a22", "#2f3a33", "#24343a", "#1f1f1f", "#4a4036", "#e8e0d2", "#f5f0e6"],
    "bg":        ["#f3eee4", "#efe6da", "#eceee6", "#e9eeec", "#f7f3ea", "#e6dccb", "#1f1c18", "#22262a"],
    "card":      ["#fbf8f1", "#f8f2e8", "#f7f8f2", "#f5f8f7", "#ffffff", "#efe8da", "#2a2621", "#2f3338"],
    "primary":   ["#4a5a45", "#7a4a34", "#53654f", "#3d5a62", "#5c4b3a", "#6b5b2e", "#3f4f5a", "#7a3b3b"],
    "secondary": ["#a4593a", "#b5704f", "#7d9470", "#5f8a8b", "#8c6a3f", "#b07d62", "#6f7f5a", "#9a5b6b"],
    "ocean":     ["#5f8590", "#6f8a7a", "#b98a52", "#c47d55", "#8fa9a0", "#7b8fa6", "#8a7a5c"],
    "accent":    ["#c79a3b", "#d0a24a", "#b86b3f", "#7d9470", "#8fa9a0", "#d8b56a"],
    "correct":   ["#5b8a4a", "#6fa05a", "#4f7f5f", "#3f7d6a"],
    "incorrect": ["#b5483a", "#a63d33", "#cf6253", "#9c4a3a"]
  },

  // Images (valeurs globales ; chaque exercice peut les surcharger dans quiz-config.js)
  "imageConfig": {
    "defaultWidth": "900px",
    "defaultMaxWidth": "100%",
    "defaultHeight": "auto",
    "defaultBorderRadius": "20px",
    "multiImageMaxHeight": "400px",
    "sliderMaxHeight": "40vh"
  }
};
