import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo/Rawafed logo black.png";

const footerColumns = [
  {
    title: "Property Finder",
    items: [
      { name: "About us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" }
    ],
  },
  {
    title: "Real estate professionals",
    items: [
      { name: "Partner Hub", href: "#" },
      { name: "PF Expert", href: "#" }
    ],
  },
];

const socialIcons = [
  {
    name: "Instagram",
    href: "#",
    svg: (
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 10.5Zm4.75-3.9a.85.85 0 1 1-.85.85.85.85 0 0 1 .85-.85Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    svg: (
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M13.5 10H16l.5-3h-3V5.5A1.5 1.5 0 0 1 15 4h1V1h-2.5A4.5 4.5 0 0 0 9 5.5V7H6v3h3v9h3.5Z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    svg: (
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="m4 4 6.9 8.18L4.4 20h3.2l4.44-5.1L16.6 20H20l-7.1-8.4L19.6 4h-3.2l-4 4.6L8 4Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    svg: (
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M6.94 8.84V20H3.5V8.84ZM5.24 4a2.06 2.06 0 1 1-2.06 2.05A2.05 2.05 0 0 1 5.24 4Zm5.41 4.84c1.44 0 2.4.79 2.79 1.54V8.84h3.44V20h-3.44v-5.73c0-.91-.63-1.54-1.52-1.54-.86 0-1.47.58-1.51 1.47V20h-3.45v-8.95h3.45Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3">
            <Image src={Logo} alt="Rawafed logo" className="h-10 w-auto" />
          </div>

          <div className="grid flex-1 gap-8 sm:grid-cols-2">
            {footerColumns.map((col) => (
              <div key={col.title} className="space-y-3">
                <h3 className="text-base font-semibold text-slate-900">{col.title}</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <a className="transition hover:text-rose-600" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link href="/terms" className="hover:text-blue-600 transition">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-blue-600 transition">Cookies Policy</Link>
            <Link href="/sitemap-page" className="hover:text-blue-600 transition">Sitemap</Link>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <span className="rounded-full border border-slate-200 px-3 py-1">UAE</span>
              <span className="rounded-full border border-slate-200 px-3 py-1">عربي</span>
            </div>
            <div className="flex items-center gap-2">
              {socialIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-800 text-white transition hover:bg-indigo-700"
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
