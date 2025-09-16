import { createContext, useContext, useState } from 'react';
import { settings } from '/JS/settings';

/**
 * @typedef {{cashRegisterName: string, cashierName: string}} Settings
 * @typedef {Object} SettingsContextValue
 * @property {Settings} settings - The current settings object
 * @property {function(SettingsContextValue | (old: SettingsContextValue) => SettingsContextValue): void} setSettings - Function to update settings
 */

/**
 * Context for managing application settings
 * @type {React.Context<SettingsContextValue>}
 */
const SettingsContext = createContext({
  settings,
  setSettings: (_value) => {},
});

/**
 * Provider component for the Settings context
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with the provider
 * @returns {JSX.Element} The provider component
 */
export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(settings);
  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

/**
 * Custom hook to access the settings context
 * @returns {SettingsContextValue} The settings context value containing settings and setSettings
 * @throws {Error} When used outside of a SettingsContextProvider
 */
export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error(
      'useSettings must be used from within a settings provider!',
    );
  }
  return context;
}
