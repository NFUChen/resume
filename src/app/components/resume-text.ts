import { GlossaryTerm } from '../data/resume.data';

/**
 * Inline markup supported inside resume copy:
 *   **text**                  -> emphasised (quantified outcomes)
 *   [[term]]                  -> glossary tooltip, looked up by `term`
 *   [[shown text|term]]       -> same, when the sentence wording differs
 *     from the canonical glossary term.
 */
export type ResumeTextSegment =
  | { kind: 'text'; text: string }
  | { kind: 'strong'; text: string }
  | { kind: 'term'; text: string; definition: string };

const MARKUP = /\*\*(.+?)\*\*|\[\[(.+?)\]\]/g;

function splitTermMarker(raw: string): { label: string; term: string } {
  const separator = raw.indexOf('|');
  if (separator === -1) {
    return { label: raw, term: raw };
  }
  return { label: raw.slice(0, separator), term: raw.slice(separator + 1) };
}

export function parseResumeText(text: string, glossary: GlossaryTerm[] = []): ResumeTextSegment[] {
  const segments: ResumeTextSegment[] = [];
  let cursor = 0;

  for (const match of text.matchAll(MARKUP)) {
    const start = match.index ?? 0;
    if (start > cursor) {
      segments.push({ kind: 'text', text: text.slice(cursor, start) });
    }

    if (match[1] !== undefined) {
      segments.push({ kind: 'strong', text: match[1] });
    } else {
      const { label, term } = splitTermMarker(match[2]);
      const entry = glossary.find(item => item.term.toLowerCase() === term.toLowerCase());
      // An unknown term degrades to plain text rather than losing the words.
      segments.push(entry ? { kind: 'term', text: label, definition: entry.definition } : { kind: 'text', text: label });
    }

    cursor = start + match[0].length;
  }

  if (cursor < text.length) {
    segments.push({ kind: 'text', text: text.slice(cursor) });
  }

  return segments;
}

/** Plain-text form, for consumers that must not see the markup (e.g. the chat prompt). */
export function stripResumeMarkup(text: string): string {
  return parseResumeText(text).map(segment => segment.text).join('');
}
