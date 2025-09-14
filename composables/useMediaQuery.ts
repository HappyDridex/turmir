export const useMediaQuery = () => {
  const { $viewport } = useNuxtApp();

  // 0 - 768
  const isTabletOrLess = computed(() => $viewport.isLessOrEquals("sm"));

  // 1024 - ххх
  const isLgOrMore = computed(() => $viewport.isGreaterOrEquals("lg"));

  return {
    isTabletOrLess,
    isLgOrMore,
  };
};
