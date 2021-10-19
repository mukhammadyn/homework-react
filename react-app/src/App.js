function App({title,year,rating}) {
  return (
    <>
      <li className="search-results__item movie col-sm-6 mb-4">
        <div className="card">
          <img className="movie__poster card-img-top" src="https://picsum.photos/id/870/300" alt="" width="300" height="200"></img>

          <div className="card-body">
            <h3 className="movie__title h5">{title}</h3>
            <p className="card-text">
              <span className="movie__year">{year}</span>
            </p>

            <p className="card-text">
              <span className="movie__rating">{rating}</span>
            </p>

            <p className="card-text d-flex flex-column flex-md-row flex-wrap justify-content-around">
              <a className="movie__trailer-link m-1 m-xl-0 btn btn-outline-primary btn-sm" href="" target="_blank">Watch trailer</a>
              <button className="m-1 m-xl-0 btn btn-outline-info btn-sm js-movie-modal-opener" type="button" data-toggle="modal" data-target="#movie-info-modal">More info</button>
              <button className="m-1 m-xl-0 btn btn-outline-success btn-sm js-movie-bookmark" type="button">Bookmark</button>
            </p>
          </div>
        </div>
      </li>
    </>
  )
}

export default App;
