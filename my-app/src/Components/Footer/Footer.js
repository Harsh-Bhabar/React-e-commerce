import React from "react";
import "./footer-module.css";
import { SlSocialFacebook, SlSocialGithub, SlSocialTwitter, SlSocialLinkedin } from 'react-icons/sl'
import { AiFillHeart } from 'react-icons/ai'

export default function Footer(props) {
  return (
    <div className="footer">
		  <div className="footerLeft">{props.footerTitle}</div>
		  <div className="footerRight">
	 	<div className="followBtns">
				  <SlSocialFacebook className="icon"  />
				  <SlSocialGithub className="icon" />
				  <SlSocialTwitter className="icon" />	
				  <SlSocialLinkedin className="icon" />
				  </div>
			  <div className="lastText">Made with <AiFillHeart /> by Harsh</div> 
	  </div>
    </div>
  );
}
