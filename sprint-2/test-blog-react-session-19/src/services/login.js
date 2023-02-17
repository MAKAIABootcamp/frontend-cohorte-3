export const saveUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const getUser = () => {
    const userLocalStorage = localStorage.getItem("user");
    if (userLocalStorage) {
        return JSON.parse(userLocalStorage)
    }else {
        return false
    }
};

export const doLogout = () => {
    localStorage.clear();
}
