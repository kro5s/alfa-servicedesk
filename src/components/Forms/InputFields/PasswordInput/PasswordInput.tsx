import { Input } from "@alfalab/core-components/input";
import {
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldValues,
} from "react-hook-form";
import { IconButton } from "@alfalab/core-components/icon-button";
import { EyeOffCompactMIcon } from "@alfalab/icons-glyph/EyeOffCompactMIcon";
import { EyeCompactMIcon } from "@alfalab/icons-glyph/EyeCompactMIcon";
import { useState } from "react";

function PasswordInput<T extends FieldValues>({
  field,
  fieldState: { error },
}: {
  field: ControllerRenderProps<T>;
  fieldState: ControllerFieldState;
}) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Input
      type={isHidden ? "password" : "text"}
      size={"s"}
      value={field.value || ""}
      onChange={(e) => field.onChange(e.target.value)}
      onBlur={field.onBlur}
      label={"Пароль"}
      labelView={"outer"}
      placeholder={"Введите пароль"}
      error={error?.message}
      rightAddons={
        <IconButton
          icon={isHidden ? EyeCompactMIcon : EyeOffCompactMIcon}
          onClick={() => setIsHidden((prev) => !prev)}
        />
      }
      block
    />
  );
}

export default PasswordInput;
