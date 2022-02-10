    import React from 'react';

export class FanSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: '',
            Type: 'all',

        };
        this.valueSearch = this.valueSearch.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        
    }

    valueSearch(event) {
        this.setState({ categories: event.target.value });
       
    }

    handleKey(event) {
        if (event.key === 'Enter') {
        this.props.searcMovies(
        this.state.categories, this.state.Type);
            
        }
    }

    handleFilter(event) {
        //dataset коллекция атрибутов
        this.setState(
    () => ({Type: event.target.dataset.type}),
    () => {this.props.searchFilm(this.state.categories,
           this.state.Type); 
  }
 ); 
}

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field inline">
                        <input
                            id="email_inline"
                            className="validate"
                            placeholder="search"
                            type="email"
                            value={this.categories}
                            onChange={this.valueSearch}
                            onKeyDown={this.handleKey}
                        />
 <button  className="btn search-btn"
    onClick={() => this.props.searchFilm(
        this.state.categories, this.state.Type)} >
                   поиск
 </button>

{/* <form action="#" className="radio"> */}
<div action="#" className="radio">
  <p>
    <label>
        <input className="with-gap"
            name="Type" type="radio" data-type=" all"
            onChange={this.handleFilter}
            checked={this.state.Type === 'all'} />
            <span>All</span>
    </label>
  </p>
  <p>
     <label>
        <input className="with-gap"
            name="Type" type="radio" data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.Type === 'movie'} />
            <span>movie only</span>
     </label>
    </p>
    <p>
        <label>
          <input className="with-gap"
            name="Type" type="radio" data-type="series"
            onChange={this.handleFilter}
            checked={this.state.Type === 'series'} />
            <span>Series only</span>
        </label>
    </p>

     <p>
        <label>
            <input className="with-gap"
            name="Type" type="radio" data-type="game"
            onChange={this.handleFilter}
            checked={this.state.Type === 'game'} />
                <span>Game</span>
        </label>
    </p>


</div>
                    </div>
                </div>
            </div>
        );
    }
}
 