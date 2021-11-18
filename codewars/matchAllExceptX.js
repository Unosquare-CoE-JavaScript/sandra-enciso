/* from https://www.codewars.com/kata/614a4eaeeae33e003fde909b */

/**
 * Write a regex pattern that will match any word except code and war,
 * but still match words that are formed with them (e.g., codewars, barcode, beware, warfare, warm).
 * This also means you can match codecode or warwar. Matches and non-matches should be case-insensitive.
 */

const regex = /\b(?!(code|war)\b)\w+/gi;
