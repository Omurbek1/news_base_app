
import { Text, View, StatusBar, Image } from "react-native";
import axios from "axios";
import Post from './components/Post'

export default function App() {
  const [items,setItems]=React.useState();
  
  React.useEffect(() => {
   axios.get('https://trycode.pw/c/KFKNW')
   .then(({data})=>{
    setItems(data)
   })
   .catch((err)=>{
    console.log(err);
    alert('Ката чыгып калды!')

   })
  }, [input]);
  return (
    <View>
      <Post title='TEST1'
        createdAt="11/12/123"
        imageUrl='https://memepedia.ru/wp-content/uploads/2022/07/gifka-s-houmlenderom-768x512.jpg' />
      <StatusBar theme='auto' />
    </View>
  );
}


