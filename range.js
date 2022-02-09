module.exports = (req, res, next) => {
  res.header('Content-Range', 'posts 0-20/20')
  next()
}

//normally in an express server.  We would want to see how many total posts there are in the databse.

