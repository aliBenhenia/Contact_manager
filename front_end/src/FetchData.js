import axios from "axios";
import { useEffect, useState } from "react";

const useFeatch =  (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Make a GET request to the API endpoint using Axios
          const response = await axios.get(url);
  
          // If the request is successful, handle the response here
          // Assuming response.data contains the fetched data
          console.log('Data fetched successfully:', response.data);
          setData(response.data); // Set the fetched data in state
        } catch (error) {
          // If there's an error, handle it here
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData();
    }, [data]);
    return [data];
};
  export default useFeatch;