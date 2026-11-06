import { EmptyState } from "@/src/components";

export default function RecipientsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Recipients</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        The people you send money home to will be listed here.
      </p>
      <div className="mt-6">
        <EmptyState
          title="No recipients yet"
          description="Add a recipient to group transfers and compare costs."
        />
      </div>
    </section>
  );
}
