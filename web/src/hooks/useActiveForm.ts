import type {
  DeepRequired,
  FieldError,
  Resolver,
  UseFormProps,
} from "react-hook-form";
import { useForm } from "react-hook-form";
import type { ZodType, ZodTypeDef } from "zod";

export function useActiveForm<
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>(schema: Schema, options?: UseFormProps<TFormValues>) {
  const resolver = createResolver(schema);
  return useForm({
    mode: "onBlur",
    resolver: resolver as Resolver<TFormValues, any>,
    ...options,
  });
}

function createResolver<
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>(schema: Schema) {
  return (values: TFormValues) => {
    const errors = zodCheckerToFormResolverError(schema, values);
    return { values, errors };
  };
}

export function zodCheckerToFormResolverError<
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>(zodChecker: ZodType, values: TFormValues) {
  const _zodChecker = zodChecker.safeParse(values);
  const errors: Partial<Record<keyof DeepRequired<TFormValues>, FieldError>> =
    {};

  if (!_zodChecker.success) {
    _zodChecker.error.issues.forEach((i) => {
      const message = i.message;
      const name: keyof DeepRequired<TFormValues> | undefined =
        i.path[0]?.toString();

      if (name !== undefined) {
        const e: FieldError = { type: "error", message };
        errors[name] = e;
      }
    });
  }

  return errors;
}
