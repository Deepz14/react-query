import axios from "axios";
import { useQuery } from "react-query";

const fetchUserInfo = (email) => {
    return axios.get(`http://localhost:8000/users/${email}`);
}

const fetchChannelInfo = (channelId) => {
    return axios.get(`http://localhost:8000/channels/${channelId}`);
}

const DependentQuery = ({email}) => {
  const {data: user} = useQuery(
    ["user", email],
    () => fetchUserInfo(email)
  );

  console.log(user);
  const {data: channelData} = useQuery(
    ["channel", user?.data?.channelId],
    () => fetchChannelInfo(user?.data?.channelId),
    {
      enabled: !!user?.data?.channelId
    }
  );  
  console.log(channelData);  
  return (
    <div>DependentQuery</div>
  )
}

export default DependentQuery;