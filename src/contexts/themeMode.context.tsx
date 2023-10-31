import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
  useContext,
} from 'react';

export interface ThemeModeContextType {
  typeMode: 'darkMode' | 'whiteMode';
  setTypeMode: Dispatch<SetStateAction<ThemeModeContextType['typeMode']>>;
}

const initialState: { typeMode: ThemeModeContextType['typeMode'] } = {
  typeMode: 'darkMode',
};

export const ThemeModeContext = createContext<ThemeModeContextType>({
  typeMode: initialState.typeMode,
  setTypeMode: () => {},
});
ThemeModeContext.displayName = 'ThemeModeContext';

export const ThemeModeProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [typeMode, setTypeMode] = useState<ThemeModeContextType['typeMode']>(
    initialState.typeMode,
  );

  return (
    <ThemeModeContext.Provider value={{ typeMode, setTypeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useTypeMode = () => {
  const { typeMode, setTypeMode } = useContext(ThemeModeContext);
  return { typeMode, setTypeMode };
};
