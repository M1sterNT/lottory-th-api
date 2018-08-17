import Parser from 'rss-parser'
import split from 'string-split'
import striptags from 'striptags'
const parser = new Parser();
const ThLotory = async function (req, res) {

  const transform = split("\t");
  const feed = await parser.parseURL('https://www.lottery.co.th/lotto/feed');
  const contentSnippet = split("\r\n", feed.items[0].contentSnippet)
  const contentSnippetTranform = contentSnippet.map(transform)
  const TmpjactpotDate = split(" ", contentSnippetTranform[0][0])
  const arr = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  const jackpotDate = TmpjactpotDate[1] + "-" + arr.indexOf(TmpjactpotDate[2]) + "-" + TmpjactpotDate[3]
  const jackpotDateTh = TmpjactpotDate[1] + "-" + TmpjactpotDate[2] + "-" + TmpjactpotDate[3]
  const tree_digit_prev = split(" ", contentSnippetTranform[13][0])
  const tree_digit_end = split(" ", contentSnippetTranform[14][0])

  res.status(400).json({
    success: true,
    title: contentSnippetTranform[0][0],
    jackpot: contentSnippetTranform[11][0],
    two_digit: contentSnippetTranform[12][0],
    tree_digit_prev: tree_digit_prev,
    tree_digit_end: tree_digit_end,
    pubDate: feed.items[0].pubDate,
    jackpotDate: jackpotDate,
    jackpotDateTh: jackpotDateTh
  });

}
export default ThLotory
