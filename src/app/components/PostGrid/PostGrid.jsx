import React from "react";

// import { Container } from './styles';

function PostGrid({ data }) {
  return (
    <div className="flex flex-wrap -mx-px md:-mx-1">
      {data.map((item) => {
        return item.files_array.map((files) => {
          const srcImg = `http://localhost:8000/${item.file_name}${files}`;

          let hasMp4AndJpg = files.includes(".mp4");

          return (
            <div key={files} className="w-1/3 p-px md:px-3">
              <a href={srcImg} download={files}>
                <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                  {hasMp4AndJpg ? (
                    <video
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      controls
                    >
                      <source src={srcImg} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src={srcImg}
                      alt="image"
                    />
                  )}

                  <i className="fas fa-square absolute right-0 top-0 m-1" />

                  {/* <div
                    className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                      left-0 top-0 hidden"
                  >
                    <div
                      className="flex justify-center items-center 
                          space-x-4 h-full"
                    >
                      <span className="p-2">
                        <i className="fas fa-heart" />
                        412K
                      </span>
                      <span className="p-2">
                        <i className="fas fa-comment" />
                        2,909
                      </span>
                    </div>
                  </div> */}
                </article>
              </a>
            </div>
          );
        });
      })}
    </div>
  );
}

export default PostGrid;
