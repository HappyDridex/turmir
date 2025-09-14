import { ElMessage } from "element-plus";

type TSnackbarType = "success" | "warning" | "info" | "error";

type TSnackbarParams = {
  message: string;
  type?: TSnackbarType;
  duration?: number;
  showClose?: boolean;
  appendTo?: string;
};

export const useSnackbar =
  () =>
  ({
    type = "success",
    message,
    duration = 3000,
    showClose = true,
  }: TSnackbarParams) => {
    if (import.meta.server) return;

    ElMessage({
      message,
      type,
      duration,
      showClose,
    });
  };
