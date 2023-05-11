// import React from 'react';

// export function Square(props) {
//     const generalpath = "https://github.com/UW-INFO442-SP23/group-heart/tree/main/";

//     const image_path = generalpath + props.img_path;

//     return (
//         <div className="flex-item-card">
//             <img src={image_path} alt={props.img_alt} />
//             <div className="card-content" md={6} lg={4} sm={12}>
//                 <h3 className="project-title">{props.title}</h3>
//                 <p>{props.description}</p>
//             </div>
//         </div>

//     )
// }

import React from 'react';

export function Square(props) {
  const generalpath = "https://github.com/UW-INFO442-SP23/group-heart/tree/main/";

  const image_path = generalpath + props.img_path;

  return (
    <div className="flex-item-card">
      <img src={image_path} alt={props.img_alt} />
      <div className="card-content">
      <h3 className="project-title">{props.title}</h3>
      </div>
    </div>
  );
}
