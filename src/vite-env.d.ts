/// <reference types="vite/client" />
import type { RootState } from '@/store';

declare module 'react-redux' {
    // Extend the DefaultRootState to include your RootState type
    interface DefaultRootState extends RootState { }
    interface UseSelector {
        <TState = RootState, Selected = unknown>(selector: (state: TState) => Selected, equalityFn?: EqualityFn<Selected>): Selected;
    }
}