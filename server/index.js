const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');

const app = express();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

app.use(allowCrossDomain);

app.get('/uisdc', (req, res, next) => {
  superagent
    .get('http://www.uisdc.com/archives')
    .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8')
    .set('Accept-Encoding', 'gzip, deflate')
    .set('Accept-Language', 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3')
    .set('Content-Type', 'application/json; charset=UTF-8')
    .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:55.0) Gecko/20100101 Firefox/55.0')
    .set('Referer', 'http://www.uisdc.com/archives/page/2')
    .set('Host', 'www.uisdc.com')
    .end((err, sres) => {
      if (err) {
        return next(err);
      }

      const $ = cheerio.load(sres.text);
      const articles = [];
      const today = new Date();
      today.setTime(today.getTime() - 24 * 60 * 60 * 1000);
      const todayString = `${today.getFullYear()}/${(today.getMonth() + 1 > 9) ? today.getMonth() + 1 : `0${today.getMonth() + 1}`}/${today.getDate()}`;
      $('.hentry.post.publish.home-style').each((index, element) => {
        if ($(element).find('.entry-header abbr.published').text() === todayString) {
          articles.push({
            title: $(element).find('.entry-header>.post-title.entry-title>a').text(),
            href: $(element).find('.entry-header>.post-title.entry-title>a').attr('href'),
            img: $(element).find('img.archive-thumbnail.featured').attr('src'),
            intro: $(element).find('.entry-summary>p').text(),
          });
        }
      });

      res.send(articles);
    });
});

module.exports = app;

app.listen(3036, (req, res) => {
  console.log('app is running at localhost:3036/uisdc');
});
