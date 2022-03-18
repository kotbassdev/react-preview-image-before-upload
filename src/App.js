import React from 'react'

const App = () => {

  const [image,setImage] = React.useState(null);
  const [preview,setPreview] = React.useState();

  React.useEffect(() => {
    if(!image) return ;

    const objectURLs = URL.createObjectURL(image);
    setPreview(objectURLs);

    return () => {
      console.log('will unmount');
      URL.revokeObjectURL(objectURLs);
    }
  },[image])

  function _onImageChange(e){
    if(e.target.files.length >= 1) setImage(e.target.files[0]);
  }

  return (
    <React.Fragment>
      <input type="file" accept='image/*' onChange={_onImageChange} />
     <img src={preview} width="200" height="200" />
    </React.Fragment>
  );
}

export default App;