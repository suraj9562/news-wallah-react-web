import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    capitalFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
        document.title = `${this.capitalFirstLetter(this.props.category)} - News Wallh`;
    }

    static defaultProps = {
        country : "in",
        pageSize : 12,
        category : "general",
      }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
      }

    async update(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11a3ddbb88404ab4b8d1bae3fe75fb16&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false
        });
    }

    async componentDidMount(){
        this.update();
    }

    handlePrev = async() =>{
        await this.setState({page : this.state.page - 1});
        this.update();
    }
    
    handleNext = async() =>{
        await this.setState({page : this.state.page + 1});
        this.update();
    }

    render() {
        return (
            <div className="container">
                <div className="my-3">
                    <h3>Top {this.capitalFirstLetter(this.props.category)} Headlines</h3>
                </div>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div key={element.url} className="col-md-4 my-2">
                            <Newsitem title={element.title ? element.title.slice(0,45) : ""} imgUrl={element.urlToImage} infoText={element.description ? element.description.slice(0,80) : ""} NewsUrl={element.url} time = {element.publishedAt} author={element.author} source={element.source["name"]}/>
                        </div>
                    })}
                </div>
                <div className="my-3 d-flex justify-content-between">
                  <button type="button" disabled={this.state.page<=1} className="btn btn-outline-primary" onClick={this.handlePrev}>&larr; Previous </button>
                  <button type="button" disabled={this.state.page + 1  > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-outline-primary" onClick={this.handleNext}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News

