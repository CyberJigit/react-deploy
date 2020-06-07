import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, posts);


  return(
    <div className="sideBarContainer">
      <Card>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img src={require("../../img/profile-logo.jpg")} alt="about us img" />  
        </div>
        <div className="cardBody">
          <p className="personalBio">My name is... whatever, I am sowtware developer, I am 21 years old, and hmmmm... actually I just need some text to be written here... so well, enough I guess )).</p>
        </div>
      </Card>

      <Card>
        <div className="cardHeader">
          <span>Social Networks</span>
        </div>
        <div className="profileImageContainer">
          <img src={require("../../img/profile-logo.jpg")} alt="about us img" />  
        </div>
        <div className="cardBody">
          <p className="personalBio">My name is... whatever, I am sowtware developer, I am 21 years old, and hmmmm... actually I just need some text to be written here... so well, enough I guess )).</p>
        </div>
      </Card>

      <Card>
        <div className="cardHeader">
          <span>Recent Post</span>
        </div>
        <div className="recentPosts">
          {
            posts.map(post => {
              return(
                <NavLink to={`/post/${post.id}`}>
                  <div className="recentPost">
                    <h4>{post.blogTitle}</h4>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
      </Card>
    </div>
    
   )

 }

export default SideBar