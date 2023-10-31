import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

export interface ModeContextType {
  darkMode: boolean;
  setDark?: Dispatch<SetStateAction<ModeContextType>>;
}

const initialState = {
  darkMode: true,
  setDark: () => {},
};

export const ModeContext = createContext<ModeContextType>(initialState);
ModeContext.displayName = 'ModeContext';

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDark] = useState<ModeContextType>(initialState);

  return (
    // @ts-ignore
    <ModeContext.Provider value={{ darkMode, setDark }}>
      {children}
    </ModeContext.Provider>
  );
};
