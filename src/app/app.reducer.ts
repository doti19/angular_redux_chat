import { Reducer, combineReducers } from "redux";
import { ThreadsReducer, ThreadsState } from "./thread/threads.reducer";
import { UsersReducer, UsersState } from "./user/users.reducer";

export interface AppState{
    users: UsersState;
    threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    users: UsersReducer,
    threads: ThreadsReducer
});

export default rootReducer;