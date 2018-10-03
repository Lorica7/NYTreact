import React, { Component } from "react";

import API from "../../utils/API";

import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../components/List";
import SearchForm from "../components/Search";
import ResultList from "../components/ResultList";
import Header from "../components/Header";

class Articles extends Component {
  state = {
    articles: [],
    saved: [],
    topicSearch: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticle()
      .then(res =>
        this.setState({ saved: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticle())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchTopics(this.state.topicSearch);
  };

  searchTopics = query => {
    API.search(query)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Header />
        <SearchForm>
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        </SearchForm>

        <Col size="xs-12">
          {!this.state.articles.length ? (
            <h1 className="text-center">No Articles Found</h1>
          ) : (
              <ResultList>
                {this.state.articles.map(article => {
                  return (
                    <Results
                      key={article.title}
                      title={article.title}
                      url={article.url}
                      datePub={article.datePub}
                    />
                  );
                })}
              </ResultList>
            )}
        </Col>
        <h1>Saved Articles</h1>
        <div>
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                  <Link to={article.url >
                    <strong>
                      {article.title}
                    </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
          };
            </div>
      </div>
    )
  };
};


export default Articles;
