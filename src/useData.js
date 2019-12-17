import { useState, useEffect } from "react";
import axios from "axios";

const useDataApi = url => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(url, {
          headers: {
            Accept: "application/json"
          }
        });
        setData(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [url]);

  return data;
};

export default useDataApi;
