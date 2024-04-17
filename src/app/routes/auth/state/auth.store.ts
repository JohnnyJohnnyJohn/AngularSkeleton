import {createStore, select, withProps} from '@ngneat/elf';
import {localStorageStrategy, persistState} from "@ngneat/elf-persist-state";
import {AuthState} from "./auth.model";

export const authStore = createStore(
  { name: 'auth' },
  withProps<AuthState>({ user: null, accessToken: null })
);

persistState(authStore, {key: 'auth-store', storage: localStorageStrategy})

export function updateAuthState(newState: AuthState) {
  authStore.update(state => (
    {
      ...state,
      user: newState.user,
      accessToken: newState.accessToken
    }
  ));
}

export const user$= authStore.pipe(select(state => state.user))

export const token$= authStore.pipe(select(state => state.accessToken))
