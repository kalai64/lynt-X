import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-white flex items-center overflow-hidden fixed inset-0">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <h1 className="text-7xl text-gray-800 font-extrabold mb-8">404</h1>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link
            href="/dashboard"
            className="px-5 inline-block py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-gray-800 active:bg-gray-800 hover:bg-gray-700"
          >
            Back to homepage
          </Link>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <Image
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            alt="Page not found illustration"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
