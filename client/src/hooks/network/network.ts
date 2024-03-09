// import { useCallback, useMemo, useState } from "react";
// import { useRecoilValue } from "recoil";

// // import { LoginUserState } from "states";
// // import { REACT_APP_API_HOST as API_HOST } from "envs";
// // import { useCookie } from "hooks/cookie";
// // import { ROUTES } from "routes";
// // import { Json } from "types";
// // import { useNotification } from "hooks/notification";
// // import { Messages } from "constant";

// export const useNetwork = ({ updateState = true } = {}) => {
// //   const { token: newToken } = useRecoilValue(LoginUserState);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [statusCode, setStatusCode] = useState(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [status, setStatus] = useState(null);
//   const [isLoaded, setIsLoaded] = useState<boolean>(false);
// //   const { LOGIN } = ROUTES;

// const API_HOST=""

//   const get = useCallback(
//     async (url: string) => {
//       setLoading(true);
//       try {
//         const response = await fetch(API_HOST + url);
//         const apiPayload = await response.json();
//         if (
//           response?.message === "Unauthorized user." ||
//           response?.message === "You don't have permission" ||
//           response?.status === 401
//         ) {
//           if (apiPayload?.userAccountLocked) {
//             errorNotification(apiPayload?.message);
//           }
//           handleLogout();
//         }
//         setStatusCode(response.status);
//         if (updateState) {
//           setStatus(response?.ok);
//           setIsLoaded(true);
//           setData(apiPayload);
//         }
//         return apiPayload;
//       } catch (err: any) {
//         if (updateState) {
//           setError(err);
//         }
//         errorNotification(Messages.ERROR_MESSAGE);
//         return null;
//       } finally {
//         if (updateState) {
//           setLoading(false);
//         }
//       }
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [config, token]
//   );

//   const post = useCallback(
//     async (url: string, requestJSON: any, options?: Json) => {
//       setLoading(true);
//       try {
//         const response = await fetch(API_HOST + url, {
//           method: "POST",
//           ...postConfig,
//           body: JSON.stringify(requestJSON),
//         });
//         if (response.status === 500) {
//           setError(response.type);
//         }

//         setStatusCode(response.status);
//         setStatus(response?.ok);
//         const apiData = await response.json();
//         const apiResponse = apiData.data ?? apiData;
//         if (apiData?.message === "Unauthorized user.") {
//           handleLogout();
//         }
//         setIsLoaded(true);
//         setData(apiResponse);
//         if (options?.apiResponse) {
//           setData(apiData);
//           return apiData;
//         }
//         return apiResponse;
//       } catch (err: any) {
//         errorNotification(Messages.ERROR_MESSAGE);
//         setError(err);
//         return null;
//       } finally {
//         setLoading(false);
//       }
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [postConfig, token]
//   );

//   const formData = useCallback(
//     async (url: string, requestJSON: any) => {
//       setLoading(true);
//       try {
//         const response = await fetch(API_HOST + url, {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: requestJSON,
//         });
//         const apiData = await response.json();
//         setStatus(response?.ok);
//         setIsLoaded(true);
//         setData(apiData);
//         setLoading(false);
//         return apiData;
//       } catch (err) {
//         setError(err);
//         return null;
//       } finally {
//         setLoading(false);
//       }
//     },
//     [token]
//   );

//   const put = useCallback(
//     async (url: string, requestJSON?: any) => {
//       setLoading(true);
//       try {
//         const response: any = await fetch(API_HOST + url, {
//           method: "PUT",
//           ...postConfig,
//           body: JSON.stringify(requestJSON),
//         });
//         setStatus(response?.ok);
//         setStatusCode(response.status);
//         const apiData = await response.json();
//         const apiResponse = apiData.data ?? apiData;
//         if (response?.message === "Unauthorized user.") {
//           handleLogout();
//         }
//         setStatus(response.status);
//         setIsLoaded(true);
//         setData(apiResponse);
//         setLoading(false);
//         return apiResponse;
//       } catch (err: any) {
//         setError(err);
//         return null;
//       } finally {
//         setLoading(false);
//       }
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [postConfig, token]
//   );

//   const remove = useCallback(
//     async (url: string, requestJSON?: any, options?: Json) => {
//       setLoading(true);
//       try {
//         const response: any = await fetch(API_HOST + url, {
//           method: "DELETE",
//           ...postConfig,
//           body: JSON.stringify(requestJSON),
//         });
//         setStatus(response?.ok);
//         const apiData = await response.json();
//         if (response?.message === "Unauthorized user.") {
//           handleLogout();
//         }
//         setStatus(response.status);
//         setIsLoaded(true);
//         setData(apiData.data);
//         if (options?.apiResponse) {
//           setData(apiData);
//           return apiData;
//         }
//         return apiData.data;
//       } catch (err: any) {
//         setError(err);
//         return null;
//       } finally {
//         setLoading(false);
//       }
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [postConfig, token]
//   );

//   const patch = useCallback(
//     async (url: string, requestJSON?: any, options?: Json) => {
//       setLoading(true);
//       try {
//         const response: any = await fetch(API_HOST + url, {
//           method: "PATCH",
//           ...postConfig,
//           body: JSON.stringify(requestJSON),
//         });
//         setStatus(response?.ok);
//         const apiData = await response.json();
//         if (response?.message === "Unauthorized user.") {
//           handleLogout();
//         }
//         setIsLoaded(true);
//         const apiResponse = apiData.data ?? apiData;
//         setData(apiResponse);
//         if (options?.apiResponse) {
//           setData(apiData);
//           return apiData;
//         }
//         return apiData.data;
//       } catch (err: any) {
//         setError(err);
//         return null;
//       } finally {
//         setLoading(false);
//       }
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [postConfig, token]
//   );

//   return {
//     get,
//     post,
//     formData,
//     put,
//     data,
//     status,
//     error,
//     loading,
//     setLoading,
//     remove,
//     patch,
//     isLoaded,
//     setIsLoaded,
//     statusCode,
//     setStatusCode,
//   };
// };
