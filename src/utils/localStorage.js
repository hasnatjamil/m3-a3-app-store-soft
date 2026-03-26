
const getStoredDataFromLS = () => {
  const storedApp = localStorage.getItem("installedApps");
  return storedApp ? JSON.parse(storedApp) : [];
};

const saveDataToLS = (id) => {
  const storedApp = getStoredDataFromLS();

  const exists = storedApp.includes(id);

  if (!exists) {
    storedApp.push(id);
    localStorage.setItem("installedApps", JSON.stringify(storedApp));
  }
};

export { getStoredDataFromLS, saveDataToLS };
