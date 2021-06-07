import React, { createContext, useContext } from 'react';

const CounterContext = createContext(null);

const CounterProvider = ({ children, value }) => {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (context === null)
    throw new Error('useCounterContext must be used within a CounterProvider');

  return context;
};

export { CounterProvider, useCounterContext };
