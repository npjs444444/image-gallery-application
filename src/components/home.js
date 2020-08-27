import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Home() {
  const [allImages, getImages] = useState([]);
  const [isLoading, loading] = useState(false);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    gallerySet();
  }, [pages]);

  const gallerySet = async () => {
    loading(true);
    const allFiles = await fetch(
      `https://picsum.photos/v2/list?page=${pages}&limit=6`
    );
    const response = await allFiles.json();
    getImages(response);
    loading(false);
  };

  //next-image
  const nextImage = () => {
    setPages(pages + 1);
  };

  const prevImage = () => {
    if (pages <= 1) {
      return;
    }
    setPages(pages - 1);
  };

  return (
    <div className='container m-auto'>
      <div className='d-flex justify-content-between align-items-center py-5'>
        <button
          className='btn btn-primary rounded-0'
          onClick={() => {
            prevImage();
          }}
        >
          Previous
        </button>
        <strong>Pages : {pages}</strong>
        <button
          onClick={() => {
            nextImage();
          }}
          className='btn btn-primary rounded-0'
        >
          Next
        </button>
      </div>

      {isLoading ? (
        <div className='p-5 bg-light'>
          <p className='text-center'>Loading....</p>
        </div>
      ) : (
        <div className='row'>
          {allImages.map((item) => (
            <Link
              to={`/specific/${item.id}`}
              className='col-md-4 mb-5'
              key={item.id}
            >
              <img
                src={item.download_url}
                style={{ width: "100%", height: "250px" }}
                className='img-fluid'
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
