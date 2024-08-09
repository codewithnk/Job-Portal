import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = async () => {
    try {
      const res = await axios.get(`${JOB_API_END_POINT}/get`, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setAllJobs(res.data.Jobs));
      }
    } catch (error) {}
  };
};

export default useGetAllJobs;