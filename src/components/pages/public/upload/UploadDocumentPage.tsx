"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  CheckCircle2,
  FileText,
  Loader2,
  Upload,
  XCircle,
} from "lucide-react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

export default function UploadDocumentPage() {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    setSuccessMessage("");
    setErrorMessage("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      setFile(null);
      setErrorMessage("Please select a PDF document.");
      return;
    }

    setFile(selectedFile);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(false);
    setSuccessMessage("");
    setErrorMessage("");

    const droppedFile = event.dataTransfer.files?.[0];

    if (!droppedFile) return;

    if (droppedFile.type !== "application/pdf") {
      setFile(null);
      setErrorMessage("Please upload a PDF document.");
      return;
    }

    setFile(droppedFile);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      setErrorMessage("Please select a PDF document first.");
      return;
    }

    setUploading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch(
        `${API_BASE_URL}/documents/upload`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      let data: unknown = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        const message =
          typeof data === "object" &&
          data !== null &&
          "message" in data &&
          typeof data.message === "string"
            ? data.message
            : `Upload failed with status ${response.status}.`;

        throw new Error(message);
      }

      setSuccessMessage(
        typeof data === "object" &&
          data !== null &&
          "message" in data &&
          typeof data.message === "string"
          ? data.message
          : "Document uploaded successfully."
      );

      setFile(null);

      const input = document.getElementById(
        "document-file"
      ) as HTMLInputElement | null;

      if (input) {
        input.value = "";
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to upload the document."
      );
    } finally {
      setUploading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setSuccessMessage("");
    setErrorMessage("");

    const input = document.getElementById(
      "document-file"
    ) as HTMLInputElement | null;

    if (input) {
      input.value = "";
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Upload className="h-4 w-4" />
              Document Upload
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Upload a{" "}
              <span className="text-blue-600">document.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Upload a PDF document to the AI document processing system.
              Your document can then be processed by the backend AI pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Upload */}
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-7">
              <h2 className="text-xl font-bold text-slate-950">
                Upload Document
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Supported format: PDF
              </p>
            </div>

            <label
              htmlFor="document-file"
              onDragEnter={(event) => {
                event.preventDefault();
                setDragActive(true);
              }}
              onDragOver={(event) => {
                event.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={(event) => {
                event.preventDefault();
                setDragActive(false);
              }}
              onDrop={handleDrop}
              className={`flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition ${
                dragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-blue-50/50"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Upload className="h-7 w-7" />
              </div>

              <p className="mt-5 text-base font-bold text-slate-900">
                Drop your PDF here
              </p>

              <p className="mt-2 text-sm text-slate-500">
                or click to browse from your computer
              </p>

              <input
                id="document-file"
                name="file"
                type="file"
                accept="application/pdf,.pdf"
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>

            {file && (
              <div className="mt-5 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <FileText className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-900">
                    {file.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>

                <button
                  type="button"
                  onClick={removeFile}
                  disabled={uploading}
                  aria-label="Remove selected file"
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-white hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            )}

            {successMessage && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                <p>{successMessage}</p>
              </div>
            )}

            {errorMessage && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0" />

                <p>{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={!file || uploading}
              className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {uploading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-5 w-5" />
                  Upload Document
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}