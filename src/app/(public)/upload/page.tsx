import type { Metadata } from "next";

import UploadDocumentPage from "@/components/pages/public/upload/UploadDocumentPage";

export const metadata: Metadata = {
  title: "Upload Document | Bikram Modi",
  description:
    "Upload a document to the AI document processing system.",
};

export default function UploadPage() {
  return <UploadDocumentPage />;
}