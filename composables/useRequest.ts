import { Status } from "@/types/request/status";

export const useRequest = () => {
  const snackbar = useSnackbar();
  const { handleHttpError } = useErrorHandle();

  type TCallParams = {
    req: () => Promise<unknown>;
    snackbarText?: string;
    silent?: boolean;
    silentError?: boolean;
    status?: Ref<Status>;
    onBefore?: () => void;
    onSuccess?: () => void;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  };

  const callAndHandle = async ({
    req,
    snackbarText,
    silent = false,
    silentError = false,
    status,
    onBefore,
    onSuccess,
    onError,
    onFinally,
  }: TCallParams) => {
    try {
      if (onBefore) {
        onBefore();
      }

      if (status && !silent) {
        status.value = Status.Loading;
      }

      await req();

      if (snackbarText) {
        snackbar({
          message: snackbarText,
        });
      }

      if (status) {
        status.value = Status.Succeeded;
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (!silentError) {
        handleHttpError(error);
      }

      if (status) {
        status.value = Status.Failed;
      }

      if (onError) {
        onError(error);
      }
    } finally {
      if (onFinally) {
        onFinally();
      }
    }
  };

  return { callAndHandle };
};
