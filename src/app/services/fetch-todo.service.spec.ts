import { TestBed } from '@angular/core/testing';

import { FetchTodoService } from './fetch-todo.service';

describe('FetchTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchTodoService = TestBed.get(FetchTodoService);
    expect(service).toBeTruthy();
  });
});
