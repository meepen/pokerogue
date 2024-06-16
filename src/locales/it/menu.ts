import type { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
  "cancel": "Annulla",
  "continue": "Continua",
  "newGame": "Nuova partita",
  "loadGame": "Carica partita",
  "settings": "Impostazioni",
  "dailyRun": "Run giornaliera (Beta)",
  "selectGameMode": "Seleziona una modalità di gioco.",
  "logInOrCreateAccount": "Accedi o crea un nuovo account per iniziare. Non è richiesta un'email!",
  "username": "Nome utente",
  "password": "Password",
  "login": "Accedi",
  "register": "Registrati",
  "emptyUsername": "Nome utente mancante!",
  "invalidLoginUsername": "Nome utente non valido!",
  "invalidRegisterUsername": "Il nome utente può contenere solo lettere, numeri o trattini bassi",
  "invalidLoginPassword": "Password non valida!",
  "invalidRegisterPassword": "La password deve contenere almeno 6 caratteri",
  "usernameAlreadyUsed": "Il nome utente inserito è stato già utilizzato!",
  "accountNonExistent": "Account inesistente!",
  "unmatchingPassword": "La password inserita non è corretta!",
  "passwordNotMatchingConfirmPassword": "La password deve essere uguale alla conferma password!",
  "confirmPassword": "Conferma password",
  "registrationAgeWarning": "Registrandoti confermi di avere 13 anni o più.",
  "backToLogin": "Torna all'accesso",
  "failedToLoadSaveData": "Impossibile caricare i dati di salvataggio. Ricarica la pagina.\nSe il problema persiste, contatta l'amministratore.",
  "sessionSuccess": "Sessione caricata correttamente.",
  "failedToLoadSession": "Impossibile caricare i dati della sessione.\nPotrebbero essere danneggiati.",
  "boyOrGirl": "Sei un ragazzo o una ragazza?",
  "boy": "Ragazzo",
  "girl": "Ragazza",
  "dailyRankings": "Classifica giornaliera",
  "weeklyRankings": "Classifica settimanale",
  "noRankings": "Nessuna classifica",
  "loading": "Caricamento…",
  "loadingAsset": "Caricamento asset: {{assetName}}",
  "playersOnline": "Giocatori online",
  "evolving": "Cosa?\n{{pokemonName}} si sta evolvendo!",
  "stoppedEvolving": "{{pokemonName}} ha smesso di evolversi.",
  "pauseEvolutionsQuestion": "Vuoi sospendere le evoluzioni per {{pokemonName}}?\nPossono essere riattivate dalla schermata del party.",
  "evolutionsPaused": "Le evoluzioni sono state sospese per {{pokemonName}}.",
  "evolutionDone": "Congratulazioni!\n{{pokemonName}} si è evoluto in {{evolvedPokemonName}}!",
  "yes":"Si",
  "no":"No",
  "disclaimer": "DISCLAIMER",
  "disclaimerDescription": "Questo gioco è un prodotto incompleto; si potrebbero riscontrare errori (inclusa la perdita dei dati di salvataggio),\ncambiamenti impercettibili, e non è detto che venga aggiornato nel tempo o mai completato del tutto."
} as const;
