function Hero() {
  return (
    <article className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Country Flags</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Country flags are a visual representation of a country. They are used to represent a country on a map, in a
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Flags
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            All Flags
          </button>
        </div>
      </div>
    </article>
  )
}

export default Hero

