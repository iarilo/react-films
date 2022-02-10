
export const FunElement = (props) => {
    const { Year,imdbID,Type,Poster,Title} = props;
    return (
        <div id={imdbID} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {Poster === 'N/A'
                    ? <img className="activator" src={`https://viaplaceholder.com/300x450.png?text= ${Title}`}/>
                    : <img className="activator" src={Poster} />
                }
                {/*  <img className="activator" src={poster} /> */}
            </div>

            <div className="card-content">
                <span className="card-title activator grey-text   text-darken-4">{Title}</span>
                <p>{Year} <span className="right">{Type}</span></p>
            </div>
        </div>

    )
}

