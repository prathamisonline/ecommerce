import React, { useCallback } from 'react'
import { useQuery,useMutation } from "react-query";
import { loginUser } from '../../../api/api';
import { loginType } from '../../../types/type';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../../hooks/notification/notification';
import { AppError } from '../../../interfaces/interface';



const useAuthApi = () => {
  const navigate=useNavigate()
  const {successNotification,errorNotification}=useNotification()

  const { mutate: loginMutate, isLoading: loginLoading }=useMutation({
    mutationFn:(data:loginType)=>{
      return loginUser({userData:data,endpoints:"user/login"})
    },
    onSuccess:(data)=>{
      navigate("/");
      localStorage.setItem("userDetails",JSON.stringify(data._id));
      localStorage.setItem("offCardId",JSON.stringify(data._id));
      successNotification("Login successfully")
    },
    onError: ({ data }: AppError) => {
          if (!data) return;
          errorNotification("Something went wrong")
        },
  })

  return (
    { loginMutate,loginLoading }
  );
}

export default useAuthApi