import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';


export interface AppState {
  router?:  RouterReducerState<any>;
  login?:any
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
