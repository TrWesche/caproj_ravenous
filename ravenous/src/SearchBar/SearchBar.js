import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count',
            'Distance': 'distance'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(newSortByOption) {
        this.setState({
            sortBy: newSortByOption
        });
    }

    handleTermChange(event) {
        this.setState({
           term: event.target.value 
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    // let searchArea = document.getElementsByClassName("SearchBar-fields");

    // handleEnterKey(event) {
    //     return;
    // }

    handleSearch(event) {
        this.props.onClick(this.state.term, this.state.location, this.state.sortBy);
        console.log(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    handleSortOptionClick(event) {
        
    }

    // Note: calling the bind in this manner allows the bind to attach both the function and the appropriate value to each item as it loops through.
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
          let sortByOptionValue = this.sortByOptions[sortByOption];
          return (<li className={this.getSortByClass(sortByOptionValue)}
                    href="#"
                    key={sortByOptionValue}
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                    {sortByOption}
                 </li>);
        });
    }

    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
};

export default SearchBar;