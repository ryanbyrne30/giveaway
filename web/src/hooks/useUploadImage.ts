import { relativeLink } from "@/utils/preprocessors";
import { useState } from "react";

export function useUploadImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function uploadImage(
    image: FileList | File | string | undefined | null,
    endpoint: string
  ) {
    setError(null);

    let file: File | undefined;
    if (image instanceof File) file = image;
    else if (image instanceof FileList) file = image[0];
    if (file === undefined) return setIsSuccess(true);

    const formData = new FormData();
    formData.append("file", file);
    setIsLoading(true);
    try {
      console.debug("Sending request...");
      const response = await fetch(relativeLink(endpoint), {
        method: "POST",
        body: formData,
      });
      console.debug("Done");
      setIsSuccess(response.status === 200);
      if (response.status !== 200) {
        setIsSuccess(false);
        const data = await response.json();
        if (typeof data === "object" && data !== null && "message" in data)
          return setError(data.message);
        if (typeof data === "object" && data !== null && "error" in data)
          return setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Error uploading image");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    uploadImage,
    isLoading,
    isSuccess,
    error,
  };
}
