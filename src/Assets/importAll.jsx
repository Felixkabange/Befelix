function importAll(r) {
    let images = {};
    r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
    return images;
  }
  
  const images = importAll(require.context('../Assets', true, /\.(png|jpe?g|svg)$/));

  
  export default images;
  
  