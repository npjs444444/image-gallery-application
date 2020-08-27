import React, { useState, useEffect } from "react";

function Specific({ match }) {
  const [specific, setSpecific] = useState({});
  const [isLoading, loading] = useState(false);

  useEffect(() => {
    getSpecificPost();
  }, []);

  const getSpecificPost = async () => {
    loading(true);
    const specific = await fetch(
      `https://picsum.photos/id/${match.params.id}/info`
    );
    const response = await specific.json();
    setSpecific(response);
    loading(false);
  };

  return (
    <div className='container'>
      {isLoading ? (
        <div className='p-5 text-center'>Loading...</div>
      ) : (
        <div>
          <p className='text-center py-3'>
            <strong>{specific.author}</strong>
            <br />
            <a href={specific.url} target='_blank'>
              {specific.url}
            </a>
          </p>
          <img
            className='img-fluid'
            src={specific.download_url}
            alt={specific.url}
          />
        </div>
      )}
    </div>
  );
}

export default Specific;
