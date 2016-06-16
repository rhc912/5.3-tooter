var expect = chai.expect;
var $ = require('jquery');
var Post = require('../app/scripts/models');
/**
 * Write some tests to test the Post Model
 */
describe('Post', function(){
  describe("fetch", function(){

    it("should return a promise", function(){
      var promise = Post.fetch();
      expect(promise).to.respondTo('then');
    });

    it("should resolve with an array of posts", function(done){
      Post.fetch().then(function(posts){
        var firstPost = posts[0];
        expect(firstPost).to.have.property('title');
        expect(firstPost).to.have.property('body');
        expect(firstPost).to.have.property('_id');
        // expect(firstPost).to.have.property('created_at');
        done();
      });
    });

    it("should trigger a posts:fetched event", function(done){

      $(document).on('posts:fetched', function(event, posts){
        expect(posts).to.be.an.instanceof(Array);
        done();
      });

      Post.fetch();
    });
  });
});

// PUT YOUR TESTS HERE!!!
describe("create post form", function(){
  it('should trigger a create:post event on the document with the title and body', function(done){
    $(document).on('create:post', function(event, create){
      expect(create).to.have.property('title');
      expect(create).to.have.property('body');
      done();
    });
    $('.input-title').val("Cool story brahh");
    $('.input-body').val("woooooh what is going on motha trucka");
    $('#blog-post-form').submit();
    done();
  });

});
