import axios from 'axios';

export const tokenInsertHeader = (token) => {
    if (!token) return false
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return true
}

//헤더에 토큰 넣기
//   useEffect(() => {
//         const token = localStorage.getItem('token') //로컬스토리지 데이터 key에 '토큰'이있다면 값이 나와
//         console.log('fristToken: ', token);
//         if (token) {
//           tokenInsertHeader(token)
//         }
//       }, [])