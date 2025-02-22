// eslint-disable-next-line import/no-named-as-default
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Title: "MVG Observer",
      Description: "An unofficial departure monitor for Munich's subways",
      Tabs: {
        Matrix: "Matrix",
        Table: "Table",
        Map: "Map",
      },
      Links: {
        Overview: "Overview",
        PITA: "Point In Time Analytics",
      },
      Welcome: {
        Card: {
          Status: {
            Title: "Overview",
            Content:
              "Currently the Subway has <delay>{{ delay }}</delay> delay on average, which is <delayText>{{ delayText }}</delayText>.",
          },
          Highscore: {
            Content:
              "The largest delay on average is at the <station>{{ station }}</station> Station, currently at <delay>{{ delay }}</delay>.",
          },
          About: {
            Content:
              "If none of the next subways of a station has delay, the station will be displayed <green>green</green>. Has at least one subway a delay of under 5 minutes, the station is <yellow>yellow</yellow>. With more than 5 Minutes the station will be <red>red</red>.",
          },
        },
      },
      Table: {
        Filter: "Filter stations...",
        Columns: {
          Station: "Station",
          Departures: "Departures",
        },
        HelpText:
          "The table displays the next departures for each station, similiar to the popup in the grid.",
      },
      Misc: {
        Delay: "delay",
        Departed: "departed",
        SecondsShort: "Sec",
        DeparturePopoverHelp:
          "Shows the next 8  departures and their departure time. The original departuretime plus delay will be shown when hovering the departure time.",
      },
    },
  },
  de: {
    translation: {
      Title: "MVG Observierer",
      Description:
        "Ein inoffizieller Abfahrtsmonitor für die U-Bahnen in München",
      Tabs: {
        Matrix: "Matrix",
        Table: "Tabelle",
        Map: "Karte",
      },
      Links: {
        Overview: "Übersicht",
        PITA: "Punkt in der Zeit Auswertung",
      },
      Welcome: {
        Card: {
          Status: {
            Title: "Übersicht",
            Content:
              "Aktuell haben die U-Bahnen im Durchschnitt <delay>{{ delay }}</delay> Verspätung, das ist <delayText>{{ delayText }}</delayText>.",
          },
          Highscore: {
            Content:
              "Die größte durchschnittliche Verspätung hat im Moment die Station <station>{{ station }}</station> mit <delay>{{ delay }}</delay>.",
          },
          About: {
            Content:
              "Wenn keine der nächsten U-Bahnen an einer Station mehr als 0 Minuten Verspätung hat, also alle pünktlich sind, dann wird die Station <green>grün</green> angezeigt. Hat mindestens eine U-Bahn maximal 5 Minuten Verspätung, dann ist die Station <yellow>gelb</yellow>. Bei mehr als 5 Minuten Verspätung wird die Station dann <red>rot</red> dargestellt.",
          },
        },
      },
      Table: {
        Filter: "Stationen filtern...",
        Columns: {
          Station: "Station",
          Departures: "Abfahrten",
        },
        HelpText:
          "Die Tabelle zeigt die nächsten Abfahrten für jede Station, ähnlich wie das Grid, an.",
      },
      Misc: {
        Delay: "Verspätung",
        Departed: "abgefahren",
        SecondsShort: "Sek",
        DeparturePopoverHelp:
          "Zeigt die nächsten 8 Abfahrten und die dazugehörige Abfahrtszeit an. Die ursprüngliche Abfahrtszeit plus Verspätung wird beim hovern über die Zeit angezeigt.",
      },
    },
  },
}

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "de",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
