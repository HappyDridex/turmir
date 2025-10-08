export const useQuizTourPopup = () => {
  const isQuizTourOpen = useState('isQuizTourPopupOpened', () => false);

  const setQuizTourOpen = () => {
    isQuizTourOpen.value = true;
  };

  return {
    isQuizTourOpen,
    setQuizTourOpen,
  };
};
