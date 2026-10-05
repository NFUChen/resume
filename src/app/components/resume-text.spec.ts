import { parseResumeText, stripResumeMarkup } from './resume-text';

const glossary = [{ term: 'point of presence', definition: 'A nearby network endpoint.' }];

describe('resume text markup', () => {
  it('splits emphasis without losing surrounding spaces or qualifiers', () => {
    expect(parseResumeText('Cut by **approximately 70%**, verified.')).toEqual([
      { kind: 'text', text: 'Cut by ' },
      { kind: 'strong', text: 'approximately 70%' },
      { kind: 'text', text: ', verified.' }
    ]);
  });

  it('resolves canonical terms and case-insensitive aliases', () => {
    expect(parseResumeText('[[point of presence]][[PoP|POINT OF PRESENCE]]', glossary)).toEqual([
      { kind: 'term', text: 'point of presence', definition: glossary[0].definition },
      { kind: 'term', text: 'PoP', definition: glossary[0].definition }
    ]);
  });

  it('keeps the display label of unknown terms as plain text', () => {
    expect(parseResumeText('[[unknown]][[label|missing]]', glossary)).toEqual([
      { kind: 'text', text: 'unknown' },
      { kind: 'text', text: 'label' }
    ]);
  });

  it('leaves literal HTML and entities unchanged for template escaping', () => {
    expect(parseResumeText('<img src=x onerror=alert(1)> &amp; **<b>text</b>**')).toEqual([
      { kind: 'text', text: '<img src=x onerror=alert(1)> &amp; ' },
      { kind: 'strong', text: '<b>text</b>' }
    ]);
  });

  it('handles empty text and unmatched markers literally', () => {
    expect(parseResumeText('')).toEqual([]);
    expect(stripResumeMarkup('**unfinished [[term')).toBe('**unfinished [[term');
  });

  it('is stable across consecutive calls and strips markup using display labels', () => {
    const text = '**approximately 70%** at [[point-of-presence|point of presence]]';
    const first = parseResumeText(text, glossary);
    expect(stripResumeMarkup(text)).toBe('approximately 70% at point-of-presence');
    expect(parseResumeText(text, glossary)).toEqual(first);
  });
});
