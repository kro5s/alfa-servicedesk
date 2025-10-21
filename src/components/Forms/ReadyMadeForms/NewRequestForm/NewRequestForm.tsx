import { Controller, useForm } from "react-hook-form";
import { Input } from "@alfalab/core-components/input";
import styles from "./NewRequestForm.module.css";
import type { NewRequestFormData } from "./types.ts";
import { RadioGroup } from "@alfalab/core-components/radio-group";
import { Radio } from "@alfalab/core-components/radio";
import { Select } from "@alfalab/core-components/select";
import { Textarea } from "@alfalab/core-components/textarea";
import MultipleFileInputField from "../../InputFields/MultipleFileInputField/MultipleFileInputField.tsx";
import { Button } from "@alfalab/core-components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { newRequestFormSchema } from "./schema.ts";
import { useMutation } from "@tanstack/react-query";
import type { Request, RequestPreview } from "../../../../types/types.ts";
import { myRequests } from "../../../../mocks/my-requests.ts";
import { useNavigate } from "react-router-dom";

// TODO delete
let currentId = 1;

const suboptions: { [key: string]: any[] } = {
  it: [
    { key: "laptops", content: "Ноутбуки" },
    { key: "displays", content: "Мониторы" },
    { key: "pc", content: "ПК" },
  ],
  furniture: [
    { key: "chairs", content: "Стулья" },
    { key: "sofas", content: "Диваны" },
    { key: "electronics", content: "Бытовая техника" },
  ],
  rooms: [
    { key: "windows", content: "Окна" },
    { key: "floors", content: "Полы" },
    { key: "walls", content: "Стены" },
  ],
};

function NewRequestForm() {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["new_request"],
    mutationFn: async (_: NewRequestFormData) => {
      return await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 2000 + 1000),
      );
    },
    onMutate: async (newRequestFormData, context) => {
      // TODO delete
      const newRequestPreview: RequestPreview = {
        id: String(++currentId),
        title: newRequestFormData.title,
        priority: newRequestFormData.priority,
        description: newRequestFormData.content,
        status: "initial",
        created_at: new Date().toISOString(),
      };

      const newRequest: Request = {
        ...newRequestPreview,
        category: newRequestFormData.category,
        subcategory: newRequestFormData.subcategory,
        files: newRequestFormData.files,
      };

      context.client.setQueryData(["requests"], (prev?: RequestPreview[]) =>
        prev
          ? [newRequestPreview, ...prev]
          : [newRequestPreview, ...myRequests],
      );

      context.client.setQueryData(
        ["requests", newRequest.id],
        () => newRequest,
      );

      navigate(`/requests/${currentId}`);
    },
  });

  const { handleSubmit, control, watch, resetField } =
    useForm<NewRequestFormData>({
      resolver: yupResolver(newRequestFormSchema as any),
      defaultValues: {
        priority: "medium",
        location: 4324,
      },
      mode: "onBlur",
    });

  const category = watch("category");

  return (
    <form
      onSubmit={handleSubmit((data) => {
        mutate(data);
      })}
    >
      <div className={styles.formGrid}>
        <Controller
          name={"title"}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              className={styles.title}
              label={"Тема обращения"}
              labelView={"outer"}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              onBlur={field.onBlur}
              error={error?.message}
              block
            />
          )}
        />

        <Controller
          name={"location"}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Select
              className={styles.location}
              selected={String(field.value) || null}
              label={"Локация"}
              labelView={"outer"}
              options={[
                { key: "4324", content: "Екатеринбург, ул. Горького, д. 7а" },
                {
                  key: "4311",
                  content: "Москва, пр-т Андропова, д. 18, стр. 3",
                },
                {
                  key: "6245",
                  content:
                    "Санкт-Петербург, Малый просп. Петроградской стороны, д.87",
                },
              ]}
              showSearch
              onChange={(payload) => field.onChange(payload.selected?.key)}
              onBlur={field.onBlur}
              error={error?.message}
              block
            />
          )}
        />

        <Controller
          name={"category"}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Select
              className={styles.category}
              label={"Категория"}
              labelView={"outer"}
              options={[
                { key: "it", content: "Рабочая техника" },
                { key: "furniture", content: "Мебель" },
                { key: "rooms", content: "Помещения" },
              ]}
              onChange={(payload) => {
                field.onChange(payload.selected?.key);
                resetField("subcategory", { defaultValue: undefined });
              }}
              onBlur={field.onBlur}
              placeholder={"Выберите категорию"}
              error={error?.message}
              block
            />
          )}
        />

        <Controller
          name={"subcategory"}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Select
              className={styles.subcategory}
              disabled={!category}
              selected={field.value || null}
              label={"Подкатегория"}
              labelView={"outer"}
              options={suboptions[category] || []}
              onChange={(payload) => field.onChange(payload.selected?.key)}
              onBlur={field.onBlur}
              placeholder={"Выберите подкатегорию"}
              error={error?.message}
              block
            />
          )}
        />

        <Controller
          name={"priority"}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <RadioGroup
              className={styles.priority}
              direction={"horizontal"}
              label={
                <span
                  style={{
                    color: "var(--form-control-label-color)",
                    fontSize: "14px",
                  }}
                >
                  Приоритет
                </span>
              }
              value={field.value}
              onChange={(_, payload) => field.onChange(payload.value)}
              onBlur={field.onBlur}
              error={error?.message}
            >
              <Radio label={"Низкий"} value={"low"} />
              <Radio label={"Средний"} value={"medium"} />
              <Radio label={"Высокий"} value={"high"} />
            </RadioGroup>
          )}
        />

        <Controller
          name={"content"}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Textarea
              className={styles.content}
              label={"Опишите проблему"}
              labelView={"outer"}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              onBlur={field.onBlur}
              error={error?.type !== "maxLength" ? error?.message : undefined}
              minRows={10}
              resize={"vertical"}
              maxLength={512}
              showCounter
              block
            />
          )}
        />

        <Controller
          name={"files"}
          control={control}
          render={({ field }) => (
            <MultipleFileInputField
              className={styles.files}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      <div className={styles.submitButtonContainer}>
        <Button view={"primary"} type={"submit"} loading={isPending}>
          Отправить
        </Button>
      </div>
    </form>
  );
}

export default NewRequestForm;
