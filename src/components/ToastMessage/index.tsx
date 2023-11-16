'use client'
import { toast } from "react-toastify";

interface IProps {
  message: string;
  type: 'success' | 'error';
}

export function ShowToastMessage({ message, type = 'success' }: IProps) {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
}
