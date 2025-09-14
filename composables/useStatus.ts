import { Status } from '@/types/request/status';

export const useStatus = () => {
  const state = ref(Status.Idle);

  const isLoading = computed(() => state.value === Status.Loading);
  const isSucceed = computed(() => state.value === Status.Succeeded);
  const isFailed = computed(() => state.value === Status.Failed);

  const setLoading = () => {
    state.value = Status.Loading;
  };

  const setSucceeded = () => {
    state.value = Status.Succeeded;
  };

  const setFailed = () => {
    state.value = Status.Failed;
  };

  return {
    status: state,
    isLoading,
    isSucceed,
    isFailed,
    setLoading,
    setSucceeded,
    setFailed,
  };
};
