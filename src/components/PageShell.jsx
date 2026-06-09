export default function PageShell({ children, className = '' }) {
  return <section className={`pageShell ${className}`}>{children}</section>
}
