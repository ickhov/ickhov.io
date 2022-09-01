import React from "react";

const colorModeKey = "color-mode";

interface ProviderProps {
  children: React.ReactNode;
}

interface ContextProps {
  mode: string;
  toggleColorMode: () => void;
}

// initialize the context default values
const Context = React.createContext<ContextProps>({
  mode: "light",
  toggleColorMode: () => {},
});

// Provider component that wraps the app with the provider object
export const ColorModeProvider = (props: ProviderProps) => {
  const { children } = props;
  const defaultMode = localStorage.getItem(colorModeKey);
  const [mode, setMode] = React.useState<string>(defaultMode || "dark");
  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem(colorModeKey, newMode);
      return newMode;
    });
  };
  // render this only when certain value changes
  const value = React.useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode]
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// Hook for child components to get the provider values.
export const useColorMode = () => React.useContext(Context);
