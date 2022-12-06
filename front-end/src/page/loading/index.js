import './index.css'
import HashLoader from "react-spinners/HashLoader";

function Loading(show){
    console.log(show)
    return (
        <div className='loading'>
      <HashLoader
        color="#36d7b7"
        size={100}
        loading={show}
        speedMultiplier={0.7}
        />
        </div>
    )
}

export default Loading;