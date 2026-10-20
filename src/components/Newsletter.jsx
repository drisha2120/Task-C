function Newsletter() {
  return (
    <section className="px-6 md:px-10 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-2xl font-semibold text-gray-900">
          Stay Updated
        </h2>

        <p className="text-gray-600 mt-3">
          Want to see what I'm working on? Leave your email below.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 rounded-md w-full sm:w-80 focus:outline-none focus:border-teal-500"
          />

          <button
            type="button"
            className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Subscribe
          </button>
        </div>

      </div>
    </section>
  )
}

export default Newsletter