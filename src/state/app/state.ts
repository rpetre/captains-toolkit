import { AppState } from "state/_types";

export const state: AppState = {
    settings: {
        theme: 'light',
    },
    loading: true,
    navigating: false,
    updated: 0,
    version: null
}