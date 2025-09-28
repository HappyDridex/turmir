export const useTourRequestPopup = () => {
  const isTourRequestOpen = useState('isTourRequestPopupOpened', () => false);

  const setTourRequestOpen = () => {
    isTourRequestOpen.value = true;
  };

  return {
    isTourRequestOpen,
    setTourRequestOpen,
  };
};
