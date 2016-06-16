var $ = require('jquery');

function Post(){

}
Post.fetch = function(){
  return $.ajax('http://tiny-lasagna-server.herokuapp.com/collections/posts').then(function(posts){
    $(document).trigger('posts:fetched', [posts]);
    return posts;
  });
};

module.exports = Post;
