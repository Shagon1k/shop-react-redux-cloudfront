import React from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getAuthorizationToken } from "~/utils/utils";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    console.log("uploadFile to", url);

    const authToken = getAuthorizationToken();
    const headers = {
      ...(authToken && {
        Authorization: `Basic ${authToken}`,
      }),
    };


    // Get the presigned URL
    const response = await axios({
      method: "GET",
      url,
      headers,
      params: {
        name: encodeURIComponent(file?.name || ""),
      },
    });
    console.log("File to upload: ", file?.name);
    const signedUrl = response.data?.data || "";
    if (!signedUrl || typeof signedUrl !== "string") {
      console.error("Signed url not provided.");
      return;
    }
    console.log("Uploading to: ", signedUrl);
    const result = await fetch(signedUrl, {
      method: "PUT",
      body: file,
    });
    console.log("Result: ", result);
    setFile(undefined);
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}
