function Structure () {
  return (
    <>
    <header className="py-3 mb-2 text-center">
      <div className="container">
        <h1 className="h3 mb-0">Movies catalog</h1>
      </div>
    </header>


    <div className="container-xl">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="container">
            <section className="mb-4">
              <h2 className="sr-only">Movie search form</h2>

              <form className="js-search-form" action="https://echo.htmlacademy.ru" method="GET" autocomplete="off">
                <div className="form-group">
                  <input className="form-control js-search-form__title-input" type="search" name="title" placeholder="Avengers"
                    aria-label="Title"></input>
                </div>

                <div className="form-group">
                  <input className="form-control js-search-form__rating-input" type="number" step="any" name="min_rating"
                    placeholder="7.5" value="5" aria-label="Minimum rating"></input>
                </div>

                <div className="form-group">
                  <select className="form-control js-search-form__genre-select" name="genre" aria-label="Genre">
                    <option value="All" selected>All</option>
                  </select>
                </div>

                <div className="form-group">
                  <select className="form-control js-search-form__sort-select" name="sort" aria-label="Sorting">
                    <option value="rating_desc" selected>Rating (high to low)</option>
                    <option value="rating_asc">Rating (low to high)</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                    <option value="year_desc">Year (new to old)</option>
                    <option value="year_asc">Year (old to new)</option>
                  </select>
                </div>

                <button className="btn btn-primary btn-block" type="submit">Search</button>
              </form>
            </section>

            <section className="mb-4">
              <h2>Bookmarked movies</h2>
              <ul className="bookmarked-movies list-group"></ul>
            </section>
          </div>
        </div>


        <section className="col-md-8">
          <h2 className="h5">Search results</h2>
          <div className="alert alert-info">Use the form on the left to search for a movie</div>

          <ul className="search-results row list-unstyled">
          </ul>
        </section>
      </div>
    </div>
    </>
  )

}

export default Structure
