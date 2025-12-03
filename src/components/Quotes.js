import quotesData from '../data/quoteData.json';
const Quotes = () => {
    //숫자를 random처리 : Math.random() : 
    const index = Math.floor (Math.random()*quotesData.length);
    const data = quotesData[index];
  return (
    <div id='qute-page'>
        <p>{data.text}</p>
        <small>-{data.author}</small>
    </div>
  )
}

export default Quotes