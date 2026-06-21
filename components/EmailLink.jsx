import { SOCIAL } from "@/data/social";

const DEFAULT_SUBJECT = "Research Collaboration";

function buildComposeUrl(email, subject) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email
  });

  if (subject) {
    params.set("su", subject);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function EmailLink({
  email = SOCIAL.email,
  subject = DEFAULT_SUBJECT,
  className = "",
  children,
  ...props
}) {
  return (
    <a
      className={className}
      href={buildComposeUrl(email, subject)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
