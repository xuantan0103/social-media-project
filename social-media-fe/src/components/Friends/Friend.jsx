import styles from "./Friend.scss";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserImage from "./UserImage";
// import { useNavigate } from "react-router-dom";
// import { friendSlice } from "../../redux/slice/friendSlice";
import FlexBetween from "./FlexBetween";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";

const cx = classNames.bind(styles);
export const Button = (props, user) => {
/** Contains top part of the post */
const Friend = ({ id, relation, userPicturePath }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  
  const friendSlice = friends.find((friend) => friend._id === id);
  const isSelf = _id === id

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3000/users/${_id}/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(friendSlice({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        {/**User profile photo */}
        <UserImage image={userPicturePath} size="55px" />
        <Box
          // onClick={() => {
          //   navigate(`/profile/${id}`);
          //   navigate(0); //refresh the page from when going into user prof and then going into another prof
          // }}
        >
            {/**Name */}
            <Typography
                color={main}
                variant="h5"
                fontWeight="500"
                sx={{
                    "&:hover": {
                    color: palette.primary.main,
                    cursor: "pointer",
                    },
                }}
                >
                {}
            </Typography>
            {/**location */}
            <Typography color={medium} fontSize="0.75rem">
                {}
            </Typography>
        </Box>
        {/**Friend button */}
        </FlexBetween>
            {!isSelf && (
            <IconButton
                onClick={() => patchFriend()}
                sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
            >
                {friendSlice ? (
                <FaUserMinus sx={{ color: primaryDark }} />
                ) : (
                <FaUserPlus sx={{ color: primaryDark }} />
                )}
            </IconButton>
            )}
        </FlexBetween>
          );
        };    
      }      
export default Button ;
