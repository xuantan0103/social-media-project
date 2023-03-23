import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import {
  updateStart,
  updateSuccess,
  updateError,
} from "./userSlice";
import { BASE_URL } from "../../api/constant";
function FriendSlice (FriendSlice){
    const {list, loading} = useSelector(state => state.friendsRequest);
    const dispatch = useDispatch();
    const [isAccept, setIsAccept] = useState('default');
  
    const Button = (props) => {
        const [isAccept, setIsAccept] = useState('default');
  
        const onSubmitFriendRequest = async (type, id) => {
          if(type === 'accept'){
            setIsAccept(true)
            await axios.post('', {follow_users_UserId: id})
          }else {
            setIsAccept(false)
            await axios.post('', {follow_users_UserId: id})
          }
        }
     }
     } const updateUser = async (user, id, token) => {
      updateStart();
      try {
        const res = await axios.updateUser(`${BASE_URL}/users/${id}`, user, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        updateSuccess(res.data);
      } catch (err) {
        console.log(err);
        updateError();
      }
    };