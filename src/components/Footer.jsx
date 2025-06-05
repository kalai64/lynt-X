import Link from "next/link";

export function Footer({ currentYear }) {
  return (
    <div className="px-6 py-3 bg-transparent shadow-none rounded-none">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center">
          <img src="/Lyt-X-Labs.png" className="mr-3 w-24" alt="Lynt-X Logo" />
        </Link>
        <span className="block text-sm text-gray-500 sm:text-center">
          © {currentYear}{" "}
          <Link className="hover:underline" href="/">
            Lynt-X
          </Link>{" "}
          All Rights Reserved.
        </span>
      </div>
    </div>
  );
}