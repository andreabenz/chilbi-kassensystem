import { createContext, useContext, useState } from 'react';

/**
 * @typedef {Object} TitleContextValue
 * @property {string} title - The current title value
 * @property {(value: string | ((prevState: string) => string)) => void} setTitle - Function to update the title value
 */

/**
 * @type {React.Context<TitleContextValue | undefined>}
 */
const TitleContext = createContext(undefined);

/**
 * Provider component for the title context
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with title context
 * @returns {JSX.Element} Title context provider wrapping children
 */
export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('Chilbi Kassensystem');

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

/**
 * Hook to access the title context
 * @returns {TitleContextValue} The title context value containing title and setTitle
 * @throws {Error} When used outside of TitleProvider
 */
export const useTitle = () => {
  const context = useContext(TitleContext);
  if (context === undefined) {
    throw new Error('useTitle must be used within a TitleProvider');
  }
  return context;
};
