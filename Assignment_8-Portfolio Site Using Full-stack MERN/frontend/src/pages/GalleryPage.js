import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
  {
    // 1
    original: "images/hashmap_oa-assign6-cs261.png",
    thumbnail: "images/hashmap_oa-assign6-cs261.png",
    description: `Python Programming of Binary Tree Operations`,
    originalHeight: "450px",
  },
  {
    // 2
    original: "images/avl-assign4-cs261.png",
    thumbnail: "images/avl-assign4-cs261.png",
    description: `Balanced Binary Tree Data Structure in Python`,
    originalHeight: "450px",
  },
  {
    // 3
    original: "images/clubs-callaway-041823.jpg",
    thumbnail: "images/clubs-callaway-041823.jpg",
    description: `My latest set of golf clubs. Golf is my sport`,
    originalHeight: "450px",
  },
  {
    // 4
    original: "images/io_oper-p6-cs271.png",
    thumbnail: "images/io_oper-p6-cs271.png",
    description: `MASM Assembly Programming of Low Level Operations`,
    originalHeight: "450px",
  },
  {
    // 5
    original: "images/kfaucet-041823.jpg",
    thumbnail: "images/kfaucet-041823.jpg",
    description: `I installed a new kitchen faucet during break. Black and White photos are my other passion`,
    originalHeight: "450px",
  },
  {
    // 6
    original: "images/lemonadestand-p2-cs162.png",
    thumbnail: "images/lemonadestand-p2-cs162.png",
    description: `Python program of how a Lemonade Stand should work`,
    originalHeight: "450px",
  },
  {
    // 7
    original: "images/library-p3-cs162.png",
    thumbnail: "images/library-p3-cs162.png",
    description: `First Python Programming Projects at OSU`,
    originalHeight: "450px",
  },
  {
    // 8
    original: "images/macd-spx-041823.png",
    thumbnail: "images/macd-spx-041823.png",
    description: `Watching stock market charts with my favorite technical indicator`,
    originalHeight: "450px",
  },
  {
    // 9
    original: "images/neighborpets-5d-cs162.png",
    thumbnail: "images/neighborpets-5d-cs162.png",
    description: `Program to look up your neighborhood pets`,
    originalHeight: "450px",
  },
  {
    // 10
    original: "images/stream-p10-cs161.png",
    thumbnail: "images/stream-p10-cs161.png",
    description: `Program to check which movies are playing on which cable channels`,
    originalHeight: "450px",
  },
];


function GalleryPage() {
  return (
    <>
      <h2>My Post Baccalaureate Comp Sci Tour</h2>
      {/* delete classname="gallery" from article */}
      <article>
        <ImageGallery items={images} />
      </article>
    </>
  );
}

export default GalleryPage;     // export to App.js. must have this line
