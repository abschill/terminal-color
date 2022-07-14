import { format } from 'node:util';

const ANSI_OPEN = '\x1b['
const ANSI_CLOSE = '\x1b[0m';

const ANSI_RESET = '0m';
const ANSI_BRIGHT = '1m';
const ANSI_DIM = '2m';
const ANSI_UNDERSCORE = '4m';
const ANSI_BLINK = '5m';
const ANSI_REVERSE = '7m';
const ANSI_HIDDEN = '8m';

const FgBlack = "30m";
const FgRed = "31m";
const FgGreen = "32m";
const FgYellow = "33m";
const FgBlue = "34m";
const FgMagenta = "35m";
const FgCyan = "36m";
const FgWhite = "37m";

const BgBlack = "40m";
const BgRed = "41m";
const BgGreen = "42m";
const BgYellow = "43m";
const BgBlue = "44m";
const BgMagenta = "45m";
const BgCyan = "46m";
const BgWhite = "47m";

export const color = {
	reset: (text: string) => format("%s%s%s%s", ANSI_OPEN, ANSI_RESET, text, ANSI_CLOSE),
	bright: (text: string) => format("%s%s%s%s", ANSI_OPEN, ANSI_BRIGHT, text, ANSI_CLOSE),
	dim: (text: string) => format("%s%s%s%s", ANSI_OPEN, ANSI_DIM, text, ANSI_CLOSE),
	underline: (text: string) => format("%s%s%s%s", ANSI_OPEN, ANSI_UNDERSCORE, text, ANSI_CLOSE),
	blink: (text: string) => format("%s%s%s%s", ANSI_OPEN, ANSI_BLINK, text, ANSI_CLOSE),
	reverse: (text: string) => format("%s%s%s%s", ANSI_OPEN, ANSI_REVERSE, text, ANSI_CLOSE),
	hide: (text: string) => format("%s%s%s%s", ANSI_OPEN, ANSI_HIDDEN, text, ANSI_CLOSE),

	fg: {
		black: (text: string) => format("%s%s%s%s", ANSI_OPEN, FgBlack, text, ANSI_CLOSE),
		red: (text: string) => format("%s%s%s%s", ANSI_OPEN, FgRed, text, ANSI_CLOSE),
		green: (text: string) => format("%s%s%s%s", ANSI_OPEN, FgGreen, text, ANSI_CLOSE),
		yellow: (text: string) => format("%s%s%s%s", ANSI_OPEN, FgYellow, text, ANSI_CLOSE),
		blue: (text: string) => format("%s%s%s%s", ANSI_OPEN, FgBlue, text, ANSI_CLOSE),
		purple: (text: string) => format("%s%s%s%s", ANSI_OPEN, FgMagenta, text, ANSI_CLOSE),
		cyan: (text: string) => format('%s%s%s%s', ANSI_OPEN, FgCyan, text, ANSI_CLOSE),
		white: (text: string) => format('%s%s%s%s', ANSI_OPEN, FgWhite, text, ANSI_CLOSE)
	},

	bg: {
		black: (text: string) => format("%s%s%s%s", ANSI_OPEN, BgBlack, text, ANSI_CLOSE),
		red: (text: string) => format("%s%s%s%s", ANSI_OPEN, BgRed, text, ANSI_CLOSE),
		green: (text: string) => format("%s%s%s%s", ANSI_OPEN, BgGreen, text, ANSI_CLOSE),
		yellow: (text: string) => format("%s%s%s%s", ANSI_OPEN, BgYellow, text, ANSI_CLOSE),
		blue: (text: string) => format("%s%s%s%s", ANSI_OPEN, BgBlue, text, ANSI_CLOSE),
		purple: (text: string) => format("%s%s%s%s", ANSI_OPEN, BgMagenta, text, ANSI_CLOSE),
		cyan: (text: string) => format('%s%s%s%s', ANSI_OPEN, BgCyan, text, ANSI_CLOSE),
		white: (text: string) => format('%s%s%s%s', ANSI_OPEN, BgWhite, text, ANSI_CLOSE)
	}
}
