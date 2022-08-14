import React from 'react'
import styled from 'styled-components/native';

const PostView = styled.View`
  padding: 15px;
  border-bottom-width:1px;
  border-bottom-color:rgba(0,0,0,0.1)
  border-bottom-style:solid;
  flex-direction:row;
`;


const PostImage = styled.Image`
width:100px;
heigth:150px;
border-radius:10px
`;

const PostTitle=styled.Text`
font-size:16px;
font-weight:700,
`;
const PostDetails=styled.View`
flex-direction:column;
justify-content:center;
`
const PostDate=styled.Text`
font-size:12px;
color:rgba(0,0,0,0.4);
margin-top:2px;
`
export default function Post({title,imageUrl,createdAt}) {
  return (
    <PostView >
    <PostImage
    source={{ uri: imageUrl }}
    />
    <PostDetails>
    <PostTitle>{title}</PostTitle>
    <PostDate>{createdAt}</PostDate>
    </PostDetails>
   
  </PostView>
  )
}
