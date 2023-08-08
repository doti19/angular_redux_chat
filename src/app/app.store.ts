import { InjectionToken } from '@angular/core';
import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';
import {configureStore,} from '@reduxjs/toolkit';
import {
  AppState,
  default as reducer
} from './app.reducer';
import {createLogger} from 'redux-logger';

export const AppStore = new InjectionToken('App.store');

// const devtools: StoreEnhancer<AppState> =
//   window['devToolsExtension'] ?
//   window['devToolsExtension']() : f => f;

const logger = createLogger();
export function createAppStore(): Store<AppState> {
  return configureStore<AppState>({

      devTools: true,
      reducer: reducer,
      middleware: [logger]
      // compose(devtools)
    }
  );
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];
