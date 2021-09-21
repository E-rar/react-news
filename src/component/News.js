import {Component} from 'react';
import NewsItem from './NewsItem'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  
             news: [],
             content:'tesla',
             mode:'everything?q=',
             country:'de'
        }
    }
    componentDidMount(){
        console.log('The component did mount')
        fetch(`https://newsapi.org/v2/${this.state.mode}${this.state.content}&from=2021-08-21&sortBy=publishedAt&apiKey=f967be664c7c427390facab3403a4a94`)
            .then(response => response.json())
            .then(json => this.setState({ news:json.articles}))
           
        }

    handleCategory(){

    // //    this.setState({ mode:'country=de&category=',content : 'business'})
    }
    render() { 
        return ( 
            <div>
                <nav>
                <input type="text" name="" id="search"   />
                <ul>

                    <li onClick={this.handleCategory}>Business</li>

                </ul>
                </nav>
                <div className="grid">
                
                 {this.state.news.map(elt => 
                 <NewsItem 
                 key={elt.source.id}
                 title={elt.title} 
                 content={elt.content} 
                 date={elt.publishedAt} 
                 img={elt.urlToImage} 
                 url={elt.url}
                 ></NewsItem>)}
                </div>
            </div>
         );
    }
}
 
export default News;