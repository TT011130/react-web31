import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter.jsx'

//Component render khi nào
//1-Khi nó đc gọi lần đầu tiên (<App/>)
//2-Khi trạng thái của component thay đổi
//3-Khi prop thay đổi

//render như nào
//component chỉ là 1 hàm bình thường, nhận vào các tham số, tính toán và trả về 1 đoạn jsx
//Mỗi khi component render, thì chạy các câu lệnh từ đầu tới cuối và trả về jsx

//function App() {
  //hook
  //useState(gia_tri_ban_dau | hàm); //trả về một mảng chứa 2 giá trị [state, setState]
  //Có thể gọi nhớ giá trị giữa mỗi lần render
 // const [
    //Biến tham chiếu đến giá trị trạng thái
   // date,
    //Hàm để cập nhật giá trị trạng thái kích hoạt render lại
    // setDate] 
    // = useState
     // Giá trị ban đầu, chỉ có tác dụng trong lần đầu tiên render, và có thể chứa bất kỳ kiểu dữ liệu nào
    // (new Date());

//các câu lệnh
//setInterval (o dùng đc)
//setTimeout

  //setTimeout (() => {
    //Đặt lại giá trị trạng thai thành ngày giờ hiện tại
    // và render lại để hiển thị ngày giờ
   // setDate(new Date());

    //nếu trạng thái mới phụ thuộc vào trạng thái cũ
    //thì nên sử dụng 1 hàm
    //hàm này sẽ nhận vào trạng thái mới nhất tại thời điểm hàm được gọi
    //setDate ((previousDate) => {
      //return newState
    //})
  //}, 1000); 


// const [count, setCount] = useState(0)
// let date = new Date();
// setInterval (() => {
//   console.log("update time");
//   date = new Date ();
// }, 1000);
  //return <div>{date.toLocaleString()}</div>;
//}

//các lỗi thường mắc phải
//1 - sử dụng useState với giá trị ban đầu không đúng
//2 - sử dụng useState ở trong vòng lặp if else, hàm, ... (chung cho tất cả các hook)
//3 - sử dụng useState ở sau câu lệnh return, ví duhj if else return (chung cho tất cả các hook)
//4 - Thay đổi trực tiếp giá trị của state, không thông qua hàm setState
//5 - Sử dụng useState không phải trong component (custom hook) (chung cho tất cả component)
//6 - setState là hàm bất đồng bộ
//7 - dữ liệu trong hàm setState bị cached
//8 - sử dụng quá nhiều useState -> gộp chung trong 1 trạng thái
//9 - giá trị trạng thái thì ko tự động merge khi thay đổi
//10 - sử dụng useState khi không cần thiết
//export default App
export default function App() {
  const [counter, setCounter] = useState(0);
  const increase = onClick() {() => setCount(counter + 1)}
}
