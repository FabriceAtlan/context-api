import { createContext, ReactNode, useState } from "react";

//create UserContext
export const UserContext = createContext<UserProps | null>(null);

type Children = {
	children: ReactNode;
}

export type UserProps = {
	user: boolean,
	setUser: (value: boolean) => void;
}

export default function UserContextProvider({children}:Children) {
	const [user, setUser] = useState(false);

	return (
		<UserContext.Provider value={{user:user,setUser:setUser}}>
			{children}
		</UserContext.Provider>
	)
};