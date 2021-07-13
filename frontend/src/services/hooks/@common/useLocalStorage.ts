const useLocalStorage = () => {
  const accessToken = localStorage.getItem("accessToken");

  return {
    accessToken,
  };
};

export default useLocalStorage;
