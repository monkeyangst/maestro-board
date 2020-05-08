import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Player Setup": "Player Setup",
          "Type player name here": "Type player name here",
          "Help": "Help",
          "Select players by clicking their names. Assign points using key commands below.": "Select players by clicking their names. Assign points using key commands below.",
          "Accidentally eliminated players can be reinstated by reselecting their name.":"Accidentally eliminated players can be reinstated by reselecting their name.",
          "Assign score to selected players": "Assign score to selected players"
        }
      },
      de: {
        translations: {
          "Player Setup": "Liste der Spieler*innen",
          "Type player name here": "Namen der Spieler*in hier eingeben",
          "Help": "Hilfe",
          "Select players by clicking their names. Assign points using key commands below.":"Klick auf einen Namen, um Spieler*innena auszuwählen. Punkte werden über die Tastenkombinationen unten zugewiesen.",
          "Accidentally eliminated players can be reinstated by reselecting their name.":"Versehentlich eliminierte Spieler*innen können durch erneutes Auswählen des Namens wieder eingesetzt werden.",
          "Assign score to selected players": "Weise ausgewählten Spieler*innen Punkte zu.",
          "Give one point to selected players": "Weise ausgewählten Spieler*innen je einen Punkt zu",
          "Remove one point from selected players": "Ziehe ausgewählten Spieler*innen je einen Punkt ab",
          "Unselect all players": "Auswahl aller Spieler*innen aufheben",
          "Eliminate selected players": "Ausgewählte Spieler*innen eliminieren",
          "Show Player Setup panel": "Zeige Spieler*innenliste",
          "Show/hide Help panel": "Hilfe zeigen/verstecken"
        }
      }
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  });

export default i18n;