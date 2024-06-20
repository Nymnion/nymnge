document.getElementById('meme-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const memeName = document.getElementById('meme-name').value;
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    generateMeme(memeName, topText, bottomText);
});

function generateMeme(memeName, topText, bottomText) {
    const apiUrl = `https://apimeme.com/meme?meme=${encodeURIComponent(memeName)}&top=${encodeURIComponent(topText)}&bottom=${encodeURIComponent(bottomText)}`;
    displayMeme(apiUrl);
}

function displayMeme(url) {
    const memeContainer = document.getElementById('meme-container');
    const memeImg = document.createElement('img');
    memeImg.src = url;
    memeImg.alt = 'Generated Meme';
    memeImg.className = 'meme-image';
    memeContainer.appendChild(memeImg);
}
