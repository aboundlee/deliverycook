import {useState, useEffect} from 'react';
import axios from 'axios';

const useAxios = ({url, postData, postConfig}) => {
    const [state, setState] = useState({
      data: null,
      loading: true,
      error: null
    });
  
    const [trigger, setTrigger] = useState(0);
  
    const refetch = () => {
      setState({
        loading: true
      });
      setTrigger(Date.now());
    };
  

    const getData = async () => {
      const result = await axios.post(url, postData, postConfig);
      setState({
        data: result.data,
        loading: false,
        error: null
      });
      if (result.error) {
        setState({data:result.data, loading:false, error:result.error});
      }
    };


  
    useEffect(() => { getData(); }, [trigger]);
    if (!url) {
      return;
    }
    return {state, refetch};
};

export default useAxios;