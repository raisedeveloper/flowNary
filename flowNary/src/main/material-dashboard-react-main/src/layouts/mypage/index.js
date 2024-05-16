/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

import {
  Avatar, Box, Button, Chip, Divider, List, ListItem, ListItemAvatar,
  ListItemText, Modal, Paper, Stack, TextField, Typography, InputAdornment,
  IconButton, Link,
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SubjectIcon from '@mui/icons-material/Subject';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import "./mypage.css";
import { GetWithExpiry } from "api/LocalStorage";

import PostingModal from "../home/Board/PostingModal"


function Notifications() {
  const nickname = GetWithExpiry('nickname');
  const profile = GetWithExpiry('profile');

  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* 상단 정보 넣는 Stack 태그 */}
      <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}> {/* 방향을 row로 지정하면 가로 방향으로 배치됨 */}
        {/* Avatar 태그 : 유튜브 프사처럼 동그란 이미지 넣을 수 있는 것 */}
        <Avatar
          src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/${profile}`}
          sx={{
            width: '9rem',
            height: '9rem',
            margin: '20px',
            fontSize: '60px',
            border: '2px solid primary.main' // 외곽선 색과 굵기 지정
          }}
        />
        {/* 프사 옆 정보와 팔로우 버튼 만드는 Stack 공간 */}
        <Stack sx={{ padding: '20px' }} fontWeight={'bold'}>
          <Stack direction={'row'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h4" fontWeight={'bold'}>
              {nickname}
            </Typography>
            {/* <Button onClick={handleCheckingPwd}><SettingsIcon sx={{ fontSize: '50px', color: 'darkgray' }} /></Button> */}
          </Stack>
          <Stack direction={'row'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px' }}>
            <Box sx={{ cursor: 'pointer' }} >
              게시물 수
            </Box>
            <Box sx={{ cursor: 'pointer' }} onClick={() => handleOpen('팔로워', '여기에 팔로워 수에 대한 정보를 표시')}>
              팔로워 수
            </Box>
            <Box sx={{ cursor: 'pointer' }} onClick={() => handleOpen('팔로잉', '여기에 팔로잉 수에 대한 정보를 표시')}>
              팔로잉 수
            </Box>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Button color="secondary" className='msg_button' style={{ border: "3px solid #BA99D1" }} sx={{ color: 'dark', width: '50%' }}>팔로우</Button>
            <Button color="primary" className='msg_button' style={{ border: "3px solid #BA99D1" }} sx={{ width: '70%' }}>메시지 보내기</Button>

            {/* <Button variant="outlined" color="secondary" className='msg_button' sx={{ width: '130px' }} onClick={handlePwd}>비밀번호 변경</Button> */}
          </Stack>
        </Stack>
        <Stack direction={'column'} spacing={2} sx={{ marginTop: '10px', marginBottom: '15px' }}>
        </Stack>
      </Stack >
      {/* <FollowerModal open={followerModalOpen} handleClose={handleClose} content={modalContent} />
      <SettingModal open={SettingModalOpen} handleClose={handleClose} /> */}

      {/* 소개문 넣는 Stack */}
      <Stack sx={{ paddingLeft: '30px', paddingRight: '30px' }}>
        {/* <Link href={user.snsDomain}>{user.snsDomain}</Link> */}
        {/* {user.statusMessage} */}
      </Stack>
      <Divider sx={{ marginTop: '20px', marginBottom: '10px' }}></Divider>
      {/* 게시물과 태그 넣는 거 생성 */}
      <Stack direction="row" justifyContent="center" alignItems='center' spacing={5} sx={{mt:2}}>
        <Stack direction="row" sx={{ cursor: 'pointer' }}>
          <SubjectIcon sx={{ fontSize: 'large' }} />
          <Typography sx={{ fontSize: 'large' }}>게시물</Typography>
        </Stack>
        <Stack direction="row" sx={{ cursor: 'pointer' }}>
          <BookmarkIcon sx={{ fontSize: 'large' }} />
          <Typography sx={{ fontSize: 'large' }}>책갈피</Typography>
        </Stack>
      </Stack>
      <br />
      {/* 게시물 표시하는 Grid */}
      <Grid container>
        <Grid item xs={3}> {/* 1/3 만큼 가로를 차지하고 3개가 넘어가면 다음 줄에 생성 */}
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              1
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              2
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              3
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              4
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              5
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              6
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              7
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              8
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className='uploadlist'>
            <Box className='uploaditem'>
              9
            </Box>
          </Paper>
        </Grid>

      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
