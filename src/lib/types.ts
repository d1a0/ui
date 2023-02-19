export interface HighlighterOptions {
  language: string;
}

export interface Highlighter {
  highlight(code: string, options: HighlighterOptions): string;
}
