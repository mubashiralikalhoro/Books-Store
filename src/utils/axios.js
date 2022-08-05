import axios from 'axios';
import endPoints from '../constants/apiEndPoints';

// redux impo
import {store} from '../store/store';
import {logout} from '../store/action/user';

// setup base thing
const apiRequest = axios.create({
  baseURL: endPoints.BASE_URL,
  responseType: 'json',
  headers: {'Content-Type': 'application/json'},
});

apiRequest.interceptors.response.use(
  response => {
    if (response.status == 200) {
      //console.log('Interceptors response', response);
      return Promise.resolve(response);
    }
  },
  error => {
    // console.log('interceptors error', error, error.response.status);

    // todo for login
    if (error.response.status == 401 && error.response.data.code == 401) {
      store.dispatch(logout()); //Temporarily disabled this as other 401 calls logs out the user
      // alert(error.response.data.message);
    }
    return Promise.reject(error.response);
  },
);

export default apiRequest;


// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// export const useGet = (endpoint, loadInstant) => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(loadInstant);

//   const _load = () => {
//     setLoading(true);
//     axios
//       .get(endpoint)
//       .then(res => {
//         if (res?.data?.success) {
//           setData(res?.data.data);
//         } else {
//           // notification.warn(res?.data?.message ?? "An Error Occured While Loading Data");
//         }
//       })
//       .catch(e => {
//         // notification.warn(e?.response?.data?.message ?? "An Error Occured While Loading Data");
//       })
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     if (loadInstant) _load();
//   }, [endpoint]);

//   return {data, loading};
// };

// export const useGetPaginated = (endpoint, loadInstant, pg, pgSize) => {
//   const [loading, setLoading] = useState(loadInstant);
//   const [data, setData] = useState(undefined);

//   const _load = (pageNo, pageSize = 10) => {
//     setLoading(true);
//     axios
//       .get(
//         endpoint +
//           (/\?/.test(endpoint) ? '&' : '?') +
//           `pageNo=${
//             pageNo ?? (data?.currentPage ?? 0) + 1
//           }&pageSize=${pageSize}`,
//       )
//       .then(res => {
//         if (res?.data?.success) {
//           setData(res?.data.data);
//         } else {
//           // notification.warn(res?.data?.message ?? "An Error Occured While Loading Data");
//         }
//       })
//       .catch(e => {
//         // notification.warn(e?.response?.data?.message ?? "An Error Occured While Loading Data");
//       })
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     if (loadInstant) _load(pg ?? 1, pgSize ?? 10);
//   }, [endpoint]);

//   return {
//     loading,
//     list: data?.list ?? [],
//     currentPage: data?.currentPage ?? 0,
//     totalPages: data?.totalPages ?? 0,
//     pageSize: data?.pageSize ?? 0,
//     totalCount: data?.totalCount ?? 0,
//     hasPrevious: data?.hasPrevious,
//     hasNext: data?.hasNext,
//     loadMore: _load,
//   };
// };
