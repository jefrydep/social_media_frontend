// import Navbar from "../navbar/Navbar"

import { Box, useMediaQuery } from "@mui/material"
import PostsWidget from "../../views/widgets/PostsWidget";
import MyPostWidget from "../../views/widgets/MyPostWidget";
// import Navbar from "views/navbar/Navbar"
import Navbar from "../navbar/Navbar"
import AdvertWidget from "../../views/widgets/AdvertWidget";
import FriendListWidget from "../../views/widgets/FriendsListWidget";
import { useSelector } from "react-redux";
import UserWidget from "../widgets/UserWidget";

 

const HomePage = () => {
// const picturePath = 'picture path adress'
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { userId, picturePath } = useSelector((state) => state.user);
  // console.log(userId)
  const {userId} = useSelector((state) => state.user);
  return (
     <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={picturePath} />
          {/* <UserWidget/> */}
          <UserWidget userId={userId} picturePath={picturePath} />
          {/* <UserWidget/> */}
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {/* <MyPostWidget  /> */}
          <MyPostWidget picturePath={picturePath} />
          {/* <PostsWidget userId={_id} /> */}
          <PostsWidget />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            {/* <AdvertWidget /> */}
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={userId} />
            {/* <FriendListWidget /> */}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage