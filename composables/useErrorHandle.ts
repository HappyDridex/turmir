import { useSnackbar } from "@/composables/useSnackbar";
import { parseErrorMessage, isHttpError } from "@/utils/error";
import { isSSR } from "@/utils/environment";

export const useErrorHandle = () => {
  const snackbar = useSnackbar();

  const handleHttpError = (error: unknown, showSnackbar = true) => {
    if (isSSR || !showSnackbar) {
      return;
    }

    const message = parseErrorMessage(error);
    const details =
      isHttpError(error) && error.details ? ` ${error.details}` : "";
    const outputMessage = `${message}${details}`;

    if (!message) {
      console.error("[handleHttpError]: error is not http", error);
      return;
    }

    snackbar({
      type: "error",
      message: outputMessage,
    });
  };

  return { handleHttpError };
};
