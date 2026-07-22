'use client';

interface ResponseBoxProps {
  response: string;
}

export default function ResponseBox({
  response,
}: ResponseBoxProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="mb-4 text-lg font-semibold">
        Response
      </h2>

      {response ? (
        <p className="whitespace-pre-wrap leading-7 text-slate-700">
          {response}
        </p>
      ) : (
        <p className="text-slate-400">
          AI response will appear here.
        </p>
      )}
    </div>
  );
}