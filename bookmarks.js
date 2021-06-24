window.onload = () => {
  const tagA = document.getElementsByTagName('a');
  for (let i = 0; i < tagA.length; i++) {
    const href = tagA[i].getAttribute('href');
    const src = 'https://www.google.com/s2/favicons?domain=' + href;
    tagA[i].insertAdjacentHTML(
      'beforebegin',
      `<img src="${src}" class="icon"></img>`
    );
  }
};
