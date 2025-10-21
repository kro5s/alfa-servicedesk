import { FileUploadItem } from "@alfalab/core-components/file-upload-item";
import { Toast } from "@alfalab/core-components/toast";
import { type ChangeEvent, useId, useState } from "react";
import type { FileInputFieldFile } from "./types.ts";
import styles from "./MultipleFileInputField.module.css";

function MultipleFileInputField({
  className,
  onChange,
}: {
  className?: string;
  onChange: (files: File[]) => void;
}) {
  const [errorToastOpened, setErrorToastOpened] = useState(false);
  const fileInputId = useId();
  const [files, setFiles] = useState<FileInputFieldFile[]>([]);

  const duration = 500;
  let startAnimation: number | null = null;

  function measure(timestamp: number, index: number) {
    if (!startAnimation) {
      startAnimation = timestamp;
    }

    const progress = ((timestamp - startAnimation) / duration) * 100;

    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index].progress = progress;
      return newFiles;
    });

    if (progress < 100) return requestAnimationFrame((t) => measure(t, index));

    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index].status = "SUCCESS";
      return newFiles;
    });
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    const maxSize = 50 * 1024 * 1024;

    if (selectedFiles.some((file) => file.size > maxSize)) {
      setErrorToastOpened(true);

      e.target.value = "";
      return;
    }

    const newFiles: FileInputFieldFile[] = selectedFiles.map((file) => ({
      file,
      status: "UPLOADING",
      progress: 0,
    }));

    const allFiles = [...files, ...newFiles];

    setFiles(allFiles);
    onChange(allFiles.map((file) => file.file));

    newFiles.forEach((_, index) =>
      requestAnimationFrame((t) => measure(t, index + files.length)),
    );

    e.target.value = "";
  };

  const handleDelete = (name: string) => {
    const filteredFiles = files.filter((file) => file.file.name !== name);
    setFiles(filteredFiles);
    onChange(filteredFiles.map((file) => file.file));
  };

  return (
    <div className={className}>
      <input
        id={fileInputId}
        onChange={handleFileChange}
        type="file"
        accept={
          ".png,.jpg,.jpeg,.gif,.bmp,.pdf,.doc,.docx,.xls,.xlsx,.txt,.csv,.zip,.rar,.log,.json,.xml,.mp4,.mov"
        }
        multiple
        style={{ display: "none" }}
      />
      <div className={styles.list}>
        {files.map(({ file, status, progress }) => (
          <FileUploadItem
            key={file.name}
            title={file.name}
            size={file.size}
            uploadStatus={status}
            progressBar={progress}
            showDelete
            onDelete={() => handleDelete(file.name)}
          >
            <FileUploadItem.StatusControl />
            <FileUploadItem.Content />
            <FileUploadItem.Actions />
          </FileUploadItem>
        ))}
        <FileUploadItem title={"Прикрепите файл"} uploadStatus={"INITIAL"}>
          <label htmlFor={fileInputId} style={{ display: "flex" }}>
            <FileUploadItem.StatusControl />
            <FileUploadItem.Content />
            <FileUploadItem.Actions />
          </label>
        </FileUploadItem>
      </div>
      <Toast
        open={errorToastOpened}
        onClose={() => setErrorToastOpened(false)}
        title={
          "Файл слишком большой, максимальный размер загружаемого файла - 50МБ"
        }
        badge="negative-cross"
        hasCloser
        autoCloseDelay={4000}
        className={styles.toast}
      />
    </div>
  );
}

export default MultipleFileInputField;
