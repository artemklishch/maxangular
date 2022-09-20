import { User } from "../user.model";

export interface State {
  user: User;
}

const initialState: State = {
  user: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
