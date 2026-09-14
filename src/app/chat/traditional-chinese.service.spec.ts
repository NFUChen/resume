import { TestBed } from '@angular/core/testing';
import { TraditionalChineseService } from './traditional-chinese.service';

describe('TraditionalChineseService', () => {
  let service: TraditionalChineseService;

  beforeEach(() => {
    service = TestBed.inject(TraditionalChineseService);
  });

  it('converts Simplified Chinese to Taiwan Traditional Chinese', async () => {
    await service.prepare();

    expect(service.convert('云端软件与数据库')).toBe('雲端軟體與資料庫');
  });

  it('converts replies for Traditional Chinese questions', () => {
    expect(service.shouldConvertReply('請說明這個專案的雲端架構')).toBeTrue();
  });

  it('converts replies for Simplified Chinese questions', () => {
    expect(service.shouldConvertReply('请说明这个项目的云端架构')).toBeTrue();
  });

  it('does not convert replies for English questions', () => {
    expect(service.shouldConvertReply('What is William experienced with?')).toBeFalse();
  });
});
