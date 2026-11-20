async function checkUrl(photoId) {
  try {
    const res = await fetch('https://unsplash.com/photos/' + photoId);
    const html = await res.text();
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    console.log(photoId, '--> Title:', titleMatch ? titleMatch[1].trim() : 'No title');
  } catch (e) {
    console.error(photoId, e.message);
  }
}

async function run() {
  const ids = [
    '1541643600914-78b084683601',
    '1588405748880-12d1d2a59f75',
    '1594035910387-fea47794261f',
    '1549465220-1a8b9238cd48',
    '1518895949257-7621c3c786d7',
    '1584308666744-24d5c474f2ae',
    '1507652313519-d4e9174996dd',
    '1592945403244-b3fbafd7f539',
    '1523293182086-7651a899d37f',
    '1616949755610-8c9bbc08f138',
    '1615397349754-cfa2066a298e',
    '1547887537-6158d64c35b3'
  ];
  for (const id of ids) {
    await checkUrl(id);
  }
}
run();
