// import React, { useEffect } from "react";
// import NewsItem from "./newsItem";
// import { useState } from "react";

// function News() {
//   const [articles, setArticles] = useState(null);
//   useEffect(()=>{
//     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=60185c1f575f423ba523bc6e2ef0eb4f')
//     .then((res) => res.json())
//       .then((finalRes) => {

//         setArticles(finalRes);
//       });
//   }, [])
//   return (
//     <>
//       <div className="container my-3">
//         <h1>NewsMoney - Top News Headlines</h1>

//         <div className="row">
//         {articles!==null ? articles.articles.map((element)=>{
//           console.log(element)
//         }) : "loading"}
//            <div className="col-md-3">
//           <NewsItem title="abc" description="abcd" />
//         </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default News;
import React, { Component } from "react";
import NewsItem from "./newsItem.js";
import Spinner from "./spinner/loader.js";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };
  //  articles = [
  //   {
  //     source: {
  //       id: "al-jazeera-english",
  //       name: "Al Jazeera English",
  //     },
  //     author: "Al Jazeera",
  //     title:
  //       "International support for Tunisia’s jailed opposition leader Ghannouchi",
  //     description:
  //       "International Committee for Solidarity with Rached Ghannouchi says Ennahdha party leader is ‘prisoner of conscience’.",
  //     url: "https://www.aljazeera.com/news/2024/4/16/international-support-for-tunisias-jailed-opposition-leader-ghannouchi",
  //     urlToImage:
  //       "https://www.aljazeera.com/wp-content/uploads/2024/04/2022-07-19T095540Z_2106583907_RC2XEV90J75Z_RTRMADP_3_TUNISIA-POLITICS-GHANNOUCHI-1713249830.jpg?resize=1920%2C1440",
  //     publishedAt: "2024-04-16T08:49:09Z",
  //     content:
  //       "Marking the first anniversary of the arrest of Tunisias prominent opposition leader Rached Ghannouchi, an international committee has formed to raise awareness of the imprisonment of the 82-year-old,… [+3476 chars]",
  //   },
  //   {
  //     source: {
  //       id: "reuters",
  //       name: "Reuters",
  //     },
  //     author: null,
  //     title: "Science News | Today's Latest Science Headlines | Reuters",
  //     description:
  //       "Find latest science news from every corner of the globe at Reuters.com, your online source for breaking international news coverage.",
  //     url: "https://www.reuters.com/science/",
  //     urlToImage:
  //       "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=186",
  //     publishedAt: "2024-04-16T02:37:23.4960359Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: "hacker-news",
  //       name: "Hacker News",
  //     },
  //     author: null,
  //     title: "bigscience/T0pp · Hugging Face",
  //     description:
  //       "We’re on a journey to advance and democratize artificial intelligence through open source and open science.",
  //     url: "https://huggingface.co/bigscience/T0pp",
  //     urlToImage: "https://huggingface.co/front/thumbnails/v2-2.png",
  //     publishedAt: "2021-10-18T16:37:20.4140551Z",
  //     content:
  //       "Model Description\r\nT0* is a series of encoder-decoder models trained on a large set of different tasks specified in natural language prompts. We convert numerous English supervised datasets into prom… [+11344 chars]",
  //   },
  //   {
  //     source: {
  //       id: "hacker-news",
  //       name: "Hacker News",
  //     },
  //     author: null,
  //     title: "Opening up a physics simulator for robotics",
  //     description:
  //       "As part of DeepMind's mission of advancing science, we have acquired the MuJoCo physics simulator and are making it freely available for everyone, to support research everywhere.",
  //     url: "https://deepmind.com/blog/announcements/mujoco",
  //     urlToImage:
  //       "https://lh3.googleusercontent.com/jVZ3VN7wwx2dSowqLmhqm0qAzAmcb-1t7ks3HiNnoHknihF5sl9VDEwuCNTSxfx8jFIi7mBQkvHUdnSKXSPgYLNpvCuE4YajJeMnrYA",
  //     publishedAt: "2021-10-18T16:07:20.4749314Z",
  //     content:
  //       "Advancing research everywhere with the acquisition of MuJoCo\r\nWhen you walk, your feet make contact with the ground. When you write, your fingers make contact with the pen. Physical contacts are what… [+1849 chars]",
  //   },
  //   {
  //     source: {
  //       id: "national-geographic",
  //       name: "National Geographic",
  //     },
  //     author: "Nadia Drake",
  //     title: "How these feuding map-makers shaped our fascination with Mars",
  //     description:
  //       "One was an artist who loved space. His rival was a bold professional astronomer. Their race to map the red planet sparked decades of science and speculation.",
  //     url: "https://www.nationalgeographic.com/science/2021/02/how-feuding-map-makers-shaped-our-fascination-with-mars.html",
  //     urlToImage:
  //       "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
  //     publishedAt: "2021-02-17T14:37:21.3706142Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: "national-geographic",
  //       name: "National Geographic",
  //     },
  //     author: null,
  //     title: "Episode 3: Why War Zones Need Science Too",
  //     description:
  //       "Undaunted by Yemen’s civil war, National Geographic explorer Ella Al-Shamahi searches on the island of Socotra for traces of the earliest known humans to leave Africa.",
  //     url: "https://www.nationalgeographic.com/podcasts/overheard/season-5/episode-3-why-war-zones-need-science.html",
  //     urlToImage:
  //       "https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/podcasts/Overheard/season5/episode3/nationalgeographic_2708459.jpg",
  //     publishedAt: "2021-02-17T14:37:20.2759318Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: "reuters",
  //       name: "Reuters",
  //     },
  //     author: "Reuters Graphics",
  //     title: "Reuters Graphics - Charts, Maps, Interactive Graphics and Videos",
  //     description:
  //       "The latest world news - politics, sports, culture, science and environment - from our graphics journalists in Singapore, Bangalore, London and New York.",
  //     url: "https://www.reuters.com/graphics/",
  //     urlToImage: "https://www.reuters.com/graphics/cdn/img/home.jpg",
  //     publishedAt: "2020-12-21T00:00:00Z",
  //     content: null,
  //   },
  // ];
  constructor(props) {
    super(props);
    // console.log("Constructor is callled in news compnennt");
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 0,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsApp`;
  }
  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60185c1f575f423ba523bc6e2ef0eb4f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      
    });
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60185c1f575f423ba523bc6e2ef0eb4f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  async componentDidMount() {
    // console.log("Cdm");
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60185c1f575f423ba523bc6e2ef0eb4f&page=1&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({loading:false})
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults});
    this.updateNews();
  }
  // handlePrevClick = async () => {
  // console.log("Prev");
  // let url =
  //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60185c1f575f423ba523bc6e2ef0eb4f&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading:false  });
  //   this.setState({page:this.state.page -1})
  //   this.updateNews()
  // };
  // handleNextClick = async () => {
  // console.log("Next");
  //  if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

  //  }
  //  else{
  //   let url =
  //     `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60185c1f575f423ba523bc6e2ef0eb4f&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //console.log(parsedData);
  // this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading:false  });
  //   this.setState({page: this.state.page+1});
  //   this.updateNews()
  // };

  render() {
    // console.log("render");

    return (
      <div className="container my-3">
        <h1 className="text-center my-5">
          NewsApp- Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {/* {this.state.loading && <Spinner/>}  */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className=" row">
            {this.state.articles.map((element) => {
              // {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-end my-5">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            type="button"
            className="btn btn-dark mx-2"
          >
            &larr; Prev
          </button>
          <button
            type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            onClick={this.handleNextClick}
            className="btn btn-dark mx-2"
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
export default News;
