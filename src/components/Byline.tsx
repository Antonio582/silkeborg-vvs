interface Props {
  date?: string;
}

export default function Byline({ date = "marts 2026" }: Props) {
  return (
    <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
      <span>Af Silkeborg VVS Team · Opdateret {date}</span>
    </p>
  );
}
