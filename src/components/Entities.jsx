function Entities({ data }) {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data && data.map((item) => {
            const { name, flags } = item
            return (
              <div key={name.common} className="col">
                <div className="card shadow-sm">
                  <img
                    src={flags.png}
                    alt={flags.alt || `Flag of ${name.common}`}
                    className="card-img-top"
                    style={{ height: '225px', objectFit: 'cover' }}

                  />
                  <div className="card-body">
                    <h4>{name.common}</h4>
                    <p className="card-text">{flags.alt || `Flag of ${name.common}`}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Entities

