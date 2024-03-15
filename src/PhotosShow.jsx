/* eslint-disable react/prop-types */
export function PhotosShow(props) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdatePhoto(props.photo.id, params, () => event.target.reset());
        };

    const handleClick = () => {
        props.onDestroyPhoto(props.photo.id);
    };

    return (
      <div>
        <h1>Photo information</h1>
        <p> {props.photo.title}</p>
        <p> {props.photo.body}</p>
        <p> {props.photo.image}</p>
        
        <form onSubmit={handleSubmit}>
         <div>
            <input defaultValue={props.photo.title} title="title" type="text" />
         </div>
         <div>
           <input defaultValue={props.photo.body} title="body" type="text" />
         </div>
         <div>
           <input defaultValue={props.photo.image} title="image" type="text" />
         </div>
         <button type="submit">Update photo</button>
       </form>
       <button onClick={handleClick}>Destroy photo</button>
      </div>
    );
  }