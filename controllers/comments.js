const Blog = require('../models/Blog');
const User = require('../models/User');


module.exports = { 
    create
    
}




function create(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        console.log(blog)
        blog.comments.push(req.body)
       blog.save(function(err) {
         res.redirect('back');
       });
    });
  }

    

