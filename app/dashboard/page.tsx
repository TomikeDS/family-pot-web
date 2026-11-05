import { EmptyState } from "@/src/components";

export default function DashboardPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Totals and cost comparisons will appear here.
      </p>
      <div className="mt-6">
        <EmptyState
          title="No transfers yet"
          description="Record a transfer to start seeing how much you have sent and what it cost."
        />
      </div>
    </section>
  );
}
