import { useReducer, createContext, useContext } from 'react';
import type { ReactNode, Dispatch } from 'react';

interface User {
  loggedIn: boolean;
}

const initialUserState: User = { loggedIn: false};

enum UserActionType {
    LOG_IN = 'logIn',
    LOG_OUT = 'logOut',
    SIGN_UP = 'SignUp'
}

interface UserAction {
    type: UserActionType
}

export const UserContext = createContext<User>(initialUserState);
export const UserDispatchContext = createContext<Dispatch<UserAction> | null>(null);

interface UserProviderProps {
	children: ReactNode;
	initialState?: User;
}

export const UserProvider = ({
	children,
	initialState,
}: UserProviderProps) => {
	const [user, dispatch] = useReducer(
		userReducer,
		initialState ?? initialUserState
	);
  // initialState ? initialState : initialUserState
  // if (initialState) {return initialState} else {return initialUserState};

	return (
    <UserContext.Provider value={user}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserContext.Provider>
	);
};

function userReducer(user: User, action: UserAction) {
	switch (action.type) {
		case UserActionType.LOG_IN: {
      return {...user, loggedIn: true};
		}
		case UserActionType.LOG_OUT: {
			return  {loggedIn: false};
		}
		default:
			throw Error(`Action type ${action.type} is not supported`);
	}
};



// Custom hooks for consuming created contexts
export const useUserContext = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
