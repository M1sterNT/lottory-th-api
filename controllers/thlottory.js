import Parser from 'rss-parser'
import split from 'string-split'
const parser = new Parser();
const ThLotory = async function (req, res) {

  const transform = split("\t");
  const arr = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  const feed = await parser.parseURL('https://www.lottery.co.th/lotto/feed');
  const index = 0;
  const contentSnippet = split("\r\n", feed.items[index].contentSnippet)
  const contentSnippetTranform = contentSnippet.map(transform)
  const TmpjactpotDate = split(" ", contentSnippetTranform[0][0])
  const jackpotDate = TmpjactpotDate[1] + "-" + arr.indexOf(TmpjactpotDate[2]) + "-" + TmpjactpotDate[3]
  const jackpotDateTh = TmpjactpotDate[1] + "-" + TmpjactpotDate[2] + "-" + TmpjactpotDate[3]
  const three_digit_prev = split(" ", contentSnippetTranform[13][0])
  const three_digit_end = split(" ", contentSnippetTranform[14][0])

  res.status(400).json({
    success: true,
    title: contentSnippetTranform[0][0],
    jackpot: contentSnippetTranform[11][0],
    two_digit: contentSnippetTranform[12][0],
    three_digit_prev: three_digit_prev,
    three_digit_end: three_digit_end,
    pubDate: feed.items[index].pubDate,
    jackpotDate: jackpotDate,
    jackpotDateTh: jackpotDateTh
  });

}
export default ThLotory
