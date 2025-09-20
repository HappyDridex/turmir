export const useFlag = (
  initValue: boolean = false
): [Ref<boolean>, () => void, () => void, () => void] => {
  const isFlag = ref<boolean>(initValue);

  const setFlag = () => (isFlag.value = true);

  const unsetFlag = () => (isFlag.value = false);

  const toggleFlag = () => (isFlag.value = !isFlag.value);

  return [isFlag, setFlag, unsetFlag, toggleFlag];
};
