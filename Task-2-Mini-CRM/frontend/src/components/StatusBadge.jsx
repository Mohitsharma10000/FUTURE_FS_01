export default function StatusBadge({ status }) {
  return (
    <span className={`tag ${status}`}>
      <span className="dot" />
      {status}
    </span>
  );
}
