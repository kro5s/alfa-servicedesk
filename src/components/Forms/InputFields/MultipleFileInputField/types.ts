import { type FileUploadItemProps } from "@alfalab/core-components/file-upload-item";

export interface FileInputFieldFile {
  file: File;
  status: FileUploadItemProps["uploadStatus"];
  progress: number;
}
