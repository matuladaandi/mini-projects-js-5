const quotes = [
  "Lorem ipsum doloaar sit amet consectetur adipisicing elit. Saepe, aliquid.",
  "Loresm isum dolor consectetur adipisicing elit. Saepe, aliquid.",
  "Loxrem  dolor sit amet consectetur adipisicing elit. Saepe, aliquid.",
  "Lorgddem ipsum dolor sit amet  elit. Saepe, aliquid.",
  "Lorssem dolo r sit amet consectetur adipisicing elit. Saepe, aliquid.",
];

const usedIndexes = new Set();

const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
  while (true) {
    // floor dibulatkan kebawah
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) {
      continue;
    }

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
