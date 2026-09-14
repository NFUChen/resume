import { Injectable } from '@angular/core';
import type { ConverterFunction } from 'opencc-js/core';

const CHINESE_CHARACTER = /\p{Script=Han}/u;

@Injectable({ providedIn: 'root' })
export class TraditionalChineseService {
  private converter?: ConverterFunction;
  private loading?: Promise<ConverterFunction>;

  /** Chinese questions are answered in Taiwan Traditional Chinese. */
  shouldConvertReply(userMessage: string): boolean {
    return CHINESE_CHARACTER.test(userMessage);
  }

  /**
   * Loads the OpenCC dictionaries on demand so the initial bundle stays small.
   * The dictionaries are only fetched once per session.
   */
  async prepare(): Promise<void> {
    if (this.converter) {
      return;
    }

    this.loading ??= this.createConverter();
    this.converter = await this.loading;
  }

  /** Returns the input unchanged when the dictionaries are not loaded yet. */
  convert(value: string): string {
    return this.converter ? this.converter(value) : value;
  }

  private async createConverter(): Promise<ConverterFunction> {
    // 'twp' also converts Mainland vocabulary into Taiwanese usage,
    // for example 軟件 -> 軟體 and 數據庫 -> 資料庫.
    const [{ ConverterFactory }, fromCn, toTwp] = await Promise.all([
      import('opencc-js/core'),
      import('opencc-js/from/cn'),
      import('opencc-js/to/twp')
    ]);

    return ConverterFactory(...fromCn.default, ...toTwp.default);
  }
}
