import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useEffect } from "react";
import { setFriends } from "../../state";
import { useDispatch, useSelector} from "react-redux";

const FriendListWidget = ({ userId }) => {
// const FriendListWidget = ({ }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  // const getFriends = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/users/${userId}/friends`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setFriends({ friends: data }));
  // };

  // useEffect(() => {
  //   getFriends();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const getFriends = async () => {
    const response = await fetch(
      // `http://localhost:8081/api/${userId}/friends`,
      `http://localhost:8081/api/1/friends`,
      {
        method: "GET",
        // headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    console.log(data.friend)
    dispatch(setFriends({ friends: data.friend }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friends List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
          <Friend
            key={friend.friendId}
            friendId={friend.friendId}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
        {/* name:jefry
        name:Rosi
        name:saul
        name:terry */}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
