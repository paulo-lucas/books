import { Reducer } from 'react';
import {
  BooksState,
  ClearPayload,
  UpdatePayload,
  MoveToPagePayload,
} from '@app/interfaces/booksContext';

type ActionTypes = 'update' | 'clear' | 'moveToPage';

type Action = UpdatePayload | ClearPayload | MoveToPagePayload;

export const booksInitialState: BooksState = {
  total: 0,
  itemsPerPage: 20,
  page: 0,
  data: [],
};

/**
 * ACTIONS
 */

const update: Reducer<BooksState, Action> = (state, action) => {
  const { page, total, data, request, distinctTotal } = action as UpdatePayload;

  return { ...state, page: page ?? 0, total, request, distinctTotal, data };
};

const clear: Reducer<BooksState, Action> = () => {
  return booksInitialState;
};

const moveToPage: Reducer<BooksState, Action> = (state, action) => {
  const { page } = action as MoveToPagePayload;

  return { ...state, page };
};

const actions: Record<ActionTypes, Reducer<BooksState, Action>> = {
  update,
  clear,
  moveToPage,
};

export const booksReducer: Reducer<BooksState, Action> = (state, action) => {
  const reducerFunction = actions[action.type];

  return reducerFunction(state, action);
};
