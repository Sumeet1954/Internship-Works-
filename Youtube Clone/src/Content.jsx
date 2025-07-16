import React from 'react';
import {
  Box,
  Typography,
  Avatar,
} from '@mui/material';
import CategoryBar from './CategoryBar';

const demoVideos = [
  {
    title: 'Learn React in 15 Minutes – Fast and Easy!',
    thumbnail: 'https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg',
    channel: 'Tech World',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    link: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
    views: '1.2M views',
    time: '2 weeks ago',
  },
  {
    title: 'JavaScript Full Tutorial for Beginners in 2024',
    thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg',
    channel: 'Code Academy',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    link: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
    views: '830K views',
    time: '1 month ago',
  },
  {
    title: 'Build a YouTube Clone UI with React and MUI',
    thumbnail: 'https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg',
    channel: 'JS Mastery',
    avatar: 'https://yt3.ggpht.com/ytc/AIdro_lRoAw1lZHc_MZ=s88-c-k-c0x00ffffff-no-rj',
    link: 'https://www.youtube.com/watch?v=NT299zIk2JY',
    views: '2.4M views',
    time: '3 months ago',
  },
  {
    title: 'Responsive Web Design Crash Course',
    thumbnail: 'https://i.ytimg.com/vi/srvUrASNj0s/hqdefault.jpg',
    channel: 'Design Guru',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    link: 'https://www.youtube.com/watch?v=srvUrASNj0s',
    views: '750K views',
    time: '6 days ago',
  },
  {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
   {
    title: 'What is JavaScript? Explained Simply',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
    channel: 'JS Simplified',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    views: '4.1M views',
    time: '1 year ago',
  },
];

const Content = () => {
  return (
    <>
    <Box sx={{mt:"40px"}}>
      <CategoryBar/>
    </Box>    
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        px: 2,
        py: 2,
        justifyContent: 'center',
      }}
    >
      {demoVideos.map((video, index) => (
        <Box
          key={index}
          component="a"
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            width: "320px",
            flexShrink: 1,
          }}
        >
          {/* Thumbnail */}
          <Box
            component="img"
            src={video.thumbnail}
            alt={video.title}
            sx={{
              width: '100%',
              height: 180,
              borderRadius: 1,
              objectFit: 'cover',
              mb: 1,
            }}
          />

          {/* Avatar + Title */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
            <Avatar
              src={video.avatar}
              alt={video.channel}
              sx={{ width: 36, height: 36, mt: 0.3 }}
            />
            <Box sx={{ overflow: 'hidden' }}>
              <Typography
                variant="subtitle2"
                fontWeight={500}
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: '14px',
                  lineHeight: 1.3,
                }}
              >
                {video.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="13px"
              >
                {video.channel}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="12px"
              >
                {video.views} • {video.time}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  </>

  );
};

export default Content;
