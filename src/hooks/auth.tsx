import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const memoedValue = useMemo(() => {
    return {
      isLoading,
      user,
      setIsLoading,
      setUser
    };
  }, []);

  return (
    <AuthContext.Provider value={memoedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
};
