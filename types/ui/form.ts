import type {
  FormInstance as ElFormInstance,
  FormItemRule as ElFormItemRule,
} from "element-plus";

import type UiForm from "@/components/ui/Form/index.vue";

type TFormComponent = InstanceType<typeof UiForm>;

type TFormInstance = ElFormInstance;

type TFormItemRule = ElFormItemRule;

export type { TFormComponent, TFormInstance, TFormItemRule };
