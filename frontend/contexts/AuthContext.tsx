import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
import getUser from "../convex/getUser";
import { user } from "../convex/sendUser";
import { useMutation, useQuery } from "../convex/_generated/react";

type AuthData = {
    _id : string,
    name : string,
    email : string,
    goalSleepTime: number,
    streakLength: number,
    lastGoodSleep: string 
}

type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signUp: (name: string, email: string, goalSleepTime: number) => Promise<void>
  signIn: (name: string, email: string) => Promise<void>;
  signOut(): void;
};

type AuthProviderProps = {
  children?: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);
  const sendUser = useMutation("sendUser");
  // const getUser = useQuery("getUser");

  useEffect(() => {
    loadStorageData();
  }, []);


  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await getItemAsync("AuthData");
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  const signUp = async (name: string, email: string, goalSleepTime: number) => {
    try {
      const newUser: user = {
        name: name,
        email: email,
        goalSleepTime: goalSleepTime,
        streakLength: 0,
        lastGoodSleep: new Date().toISOString()
      }
      const userId: any = await sendUser(newUser);
      const idString: string = userId.toString();
      const _authData = {
        _id: idString,
        name: newUser.name,
        email: newUser.email,
        goalSleepTime: newUser.goalSleepTime,
        streakLength: newUser.streakLength,
        lastGoodSleep: newUser.lastGoodSleep
      }
      setAuthData(_authData);
      setItemAsync("AuthData", JSON.stringify(_authData));
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const signIn = async (name: string, email: string) => {
    try {
        const user = {name, email}
      const _authData = await getUser(name, email);
      if (_authData === undefined) {
        throw new Error("Cannot find user");
      }
      setAuthData(_authData);
      setItemAsync("AuthData", JSON.stringify(_authData));
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const signOut = async () => {
    setAuthData(undefined);
    await deleteItemAsync("AuthData");
  };

  return (
    <AuthContext.Provider value={{ authData, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthContext, AuthProvider, useAuth };
