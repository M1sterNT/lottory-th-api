import Parser from 'rss-parser'
import split  from 'string-split'
import striptags from 'striptags'
const parser = new Parser();
const  ThLotory = async function (req, res) {
  const transform = split("\t");
  const feed = await parser.parseURL('https://www.lottery.co.th/lotto/feed');
  const contentSnippet = split("\r\n",feed.items[0].contentSnippet)
  const contentSnippetTranform = contentSnippet.map(transform)
  res.status(400).json({ success: true, title: contentSnippetTranform[0][0] , jackpot: contentSnippetTranform[11][0] , two_digit: contentSnippetTranform[12][0] , tree_digit_prev: contentSnippetTranform[13][0], tree_digit_end: contentSnippetTranform[14][0]});

}
export default ThLotory 
 