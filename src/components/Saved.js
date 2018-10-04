<Col size="md-6 sm-12">
<Jumbotron>
  <h1>Saved Articles</h1>
</Jumbotron>
{this.state.articles.length ? (
  <List>
    {this.state.articles.map(article => (
      <ListItem key={article._id}>
        <Link to={"/articles/" + article._id}>
          <strong>
            {article.title} by {article.author}
          </strong>
        </Link>
        <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
      </ListItem>
    ))}
  </List>
) : (
  <h3>No Results to Display</h3>
)}
</Col>