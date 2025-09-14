import type {
  TFormInstance,
  TFormItemRule,
  TFormComponent,
} from "@/types/ui/form";

type TForm = Record<string, unknown>;

export default class FormValidator<T extends TForm> {
  private form: T;
  private rules: Partial<Record<keyof T, TFormItemRule[]>> = {};

  constructor(form: T) {
    this.form = form;
  }

  prepareProp(prop: keyof T) {
    if (!Array.isArray(this.rules[prop])) {
      this.rules[prop] = [];
    }
  }

  setRequired(prop: keyof T, message: string, trigger = "submit") {
    this.prepareProp(prop);

    this.rules[prop]!.push({
      required: true,
      message,
      trigger,
    });

    return this;
  }

  setMin(
    prop: keyof T,
    minLength: number,
    message: string,
    trigger = "change"
  ) {
    this.prepareProp(prop);

    this.rules[prop]!.push({
      min: minLength,
      message,
      trigger,
    });

    return this;
  }

  setCustom(
    prop: keyof TForm,
    callback: () => boolean,
    message: string,
    trigger = "submit"
  ) {
    this.prepareProp(prop);

    this.rules[prop]!.push({
      validator: callback,
      message,
      trigger,
    });

    return this;
  }

  getRules() {
    return this.rules;
  }

  private validate(formInstance: TFormInstance | null | undefined) {
    if (!formInstance) {
      return false;
    }

    return formInstance.validate();
  }

  async isValid(formRef: TFormComponent | null | undefined) {
    if (!formRef) {
      console.warn("[DEBUG] formRef is null");
      return false;
    }

    try {
      await this.validate(formRef.form);

      return true;
    } catch {
      return false;
    }
  }
}
