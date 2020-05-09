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
          "Assign score to selected players": "Assign score to selected players",
          "Give one point to selected players": "Give one point to selected players",
          "Remove one point from selected players": "Remove one point from selected players",
          "Unselect all players": "Unselect all players",
          "Eliminate selected players": "Eliminate selected players",
          "Show Player Setup panel": "Show Player Setup panel",
          "Show/hide Help panel": "Show/hide Help panel",
          "Reset": "Reset",
          "Start Maestro!": "Start Maestro!",
          "Are you sure you want to clear all player names and reset all scores to zero?": "Are you sure you want to clear all player names and reset all scores to zero?",
          "Version": "Version",
          "Key Commands": "Key Commands"
        }
      },
      de: {
        translations: {
          "Player Setup": "Liste der Spieler*innen",
          "Type player name here": "Namen der Spieler*in hier eingeben",
          "Help": "Hilfe",
          "Select players by clicking their names. Assign points using key commands below.":"Klick auf einen Namen, um Spieler*innena auszuwählen. Punkte werden über die Tastenkombinationen unten zugewiesen.",
          "Accidentally eliminated players can be reinstated by reselecting their name.":"Versehentlich eliminierte Spieler*innen können durch erneutes Auswählen des Namens wieder eingesetzt werden.",
          "Assign score to selected players": "Weise ausgewählten Spieler*innen Punkte zu",
          "Give one point to selected players": "Weise ausgewählten Spieler*innen je einen Punkt zu",
          "Remove one point from selected players": "Ziehe ausgewählten Spieler*innen je einen Punkt ab",
          "Unselect all players": "Auswahl aller Spieler*innen aufheben.",
          "Eliminate selected players": "Ausgewählte Spieler*innen eliminieren",
          "Show Player Setup panel": "Zeige Spieler*innenliste",
          "Show/hide Help panel": "Hilfe zeigen/verstecken",
          "Reset": "Zurücksetzen",
          "Start Maestro!": "Maestro beginnen!",
          "Are you sure you want to clear all player names and reset all scores to zero?": "Möchten Sie wirklich alle Spielernamen löschen und alle Punkte auf Null zurücksetzen?",
          "Version": "Versionsnummer",
          "Key Commands": "Tastenbefehle"

        }
      },
      es: {
        translations: {
          "Player Setup": "Configuración del jugador",
          "Type player name here": "Teclar el nombre del jugador aquí",
          "Help": "Ayuda",
          "Select players by clicking their names. Assign points using key commands below.":"Selecciona los jugadores haciendo clic en sus nombres. Asigna puntos utilizándola la tecla de control que está abajo.",
          "Accidentally eliminated players can be reinstated by reselecting their name.":"Jugadores que fueron eliminados accidentalmente, pueden ser reinstalados seleccionando su nombre nuevamente.",
          "Assign score to selected players": "Asigna puntuación a jugadores seleccionados",
          "Give one point to selected players": "Da un punto a jugadores seleccionados",
          "Remove one point from selected players": "Quitar un punto del jugador seleccionado",
          "Unselect all players": "Deseleccionar todas los jugadores",
          "Eliminate selected players": "Eliminar jugadores seleccionados",
          "Show Player Setup panel": "Mostrar panel de jugador ",
          "Show/hide Help panel": "Mostrar/esconder panel de ayuda",
          "Reset": "Reiniciar",
          "Start Maestro!": "¡Inicie Maestro! ",
          "Are you sure you want to clear all player names and reset all scores to zero?": "¿Estás seguro que deseas borrar todos los nombres de jugadores y restablecer todos los puntajes a cero?",
          "Version": "Versión",
          "Key Commands": "Comandos de teclado"
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