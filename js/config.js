/*
 * ============================================
 *  FRC 1792 SCOUTING - SHARED CONFIGURATION
 * ============================================
 *
 *  This is the ONLY file you need to edit
 *  when setting up for a new event or season.
 *
 */

const SCOUTING_CONFIG = {
    // Google Apps Script URL (ends with /exec)
    // Get this from: Google Sheet → Extensions → Apps Script → Deploy → Web app
    WEBHOOK_URL: "https://script.google.com/macros/s/AKfycbzJU8f4nTJ7OVeTdnJ_adUI1InFLFyMrRh39WV9WWtuSObwfhwFrMp7oUVnY0IHr6iy6g/exec",

    // The Blue Alliance API key
    // Get this from: thebluealliance.com/account → Read API Keys
    TBA_API_KEY: "mGOnCOk0j8Ah1GLBYfGaNze8qMqdJBUJKTlwdYfLF1FhA6P02fYoyddVUcGyP7le",

    // Event code (find at thebluealliance.com — last part of event URL)
    // Example: "2026wiapp" = 2026 Appleton District
    EVENT_KEY: "2026txcle",

    // Set to false to disable team loading from TBA
    ENABLE_TEAM_LOADING: true,

    // Secret code required to access scouting (client-side gate)
    // The real security is server-side in Apps Script (ALLOWED_CODES)
    SECRET_CODE: "idk8576"
};
