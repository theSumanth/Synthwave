import { createContext, useState } from "react";

export const PageContext = createContext({
  pageStatus: "",
  changePageStatus: () => {},
});

const PageContextProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState("/home");

  const handleChange = (path) => {
    setCurrentPath(path);
  };

  const pageCtx = { pageStatus: currentPath, changePageStatus: handleChange };
  return (
    <PageContext.Provider value={pageCtx}>{children}</PageContext.Provider>
  );
};

export default PageContextProvider;
