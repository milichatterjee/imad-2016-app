var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:"Article One || Sharmili Chatterjee",
        heading:"Article-One",
        date:"september 17 2016",
        content:`<div>
          <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first article
           </p>
           <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first article
           </p>
       </div>`
    },
    'article-two':{
        title:"Article-Two || Sharmili Chatterjee",
        heading:"Article-TWO",
        date:"september 17 2016",
        content:`<div>
          <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first article
           </p>
           <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first article
           </p>
       </div>`
    },
    'article-three':{
        title:"Article-Three || Sharmili Chatterjee",
        heading:"Article-Three",
        date:"september 17 2016",
        content:`<div>
          <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first article
           </p>
           <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first article
           </p>
       </div>`
    }
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
        <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body>
        
    <div class="container">
        <div>
     <a href="/">home</a> 
     </div>
     <hr>
      <h3>${heading} </h3>
       <div> 
       ${date}
       </div>
       ${content}
    </div>
   </body>
   </html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function (req,res){
    //articleName=article-one
    //articles[articleName]=content of article one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/sba.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sba.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

