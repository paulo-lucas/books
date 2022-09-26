import { Reducer } from 'react';
import {
  BooksState,
  ClearPayload,
  UpdatePayload,
} from '@app/interfaces/booksContext';

type ActionTypes = 'update' | 'clear';

type Action = UpdatePayload | ClearPayload;

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
  const { page, total, data, request } = action as UpdatePayload;

  return { ...state, page: page ?? 0, total, request, data };
};

const clear: Reducer<BooksState, Action> = () => {
  return booksInitialState;
};

const actions: Record<ActionTypes, Reducer<BooksState, Action>> = {
  update,
  clear,
};

export const booksReducer: Reducer<BooksState, Action> = (state, action) => {
  const reducerFunction = actions[action.type];

  return reducerFunction(state, action);
};
