export function AdvertiseCta() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-lg font-semibold sm:text-xl">
          Looking to advertise a property? We can help.
        </p>
        <a
          href="#"
          className="whitespace-nowrap rounded-lg border-2 border-white bg-white px-6 py-2.5 text-sm font-semibold text-indigo-800 transition hover:bg-indigo-50"
        >
          List your property with us
        </a>
      </div>
    </section>
  );
}
