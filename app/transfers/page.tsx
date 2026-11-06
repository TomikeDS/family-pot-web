import { EmptyState } from "@/src/components";

export default function TransfersPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Transfers</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Your transfer history and costs will appear here.
      </p>
      <div className="mt-6">
        <EmptyState
          title="No transfers yet"
          description="Once transfers are recorded, their fees and exchange rates will be shown here."
        />
      </div>
    </section>
  );
}
