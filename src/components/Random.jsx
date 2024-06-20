import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


// Fetch returns the response object itself,
//  which contains other information such as status, 
//  headers, and url. Axios returns the data in the response object, 
//  which is more convenient for accessing the data directly.
// Fetch only rejects the promise if there is a network error,
//  not if the response has an error status. Axios handles errors
//   in the catch block, which makes it easier to deal with error responses.


const Random=()=> {

    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //   setLoading(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //   const { data } = await axios.get(url);
    //   const imageSource = data.data.images.downsized_large.url;
    //   setGif(imageSource);
    //   console.log(imageSource);
    //   setLoading(false)
    // }

    // useEffect(() => {
    //   fetchData();
    // }, []);


  const { gif, loading, fetchData } = useGif();

  return(
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-3xl uppercase underline font-bold'>A Random Gif</h1>
      {
        loading ? (<Spinner />) : (<img src= {gif} width="450" />)
      }
      <button onClick={()=>fetchData()} className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold pd mb-[20px]"> Generate</button>
    </div>
  )
}

export default Random
