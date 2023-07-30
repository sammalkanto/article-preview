import avatarMichelle from '../assets/avatar-michelle.jpg';
import imgDrawers from '../assets/drawers.jpg';
import iconShare from '../assets/icon-share.svg';

import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import pinterestIcon from '../assets/icon-pinterest.svg';
import {useState} from "react";

interface ToolTipProps {
    active: boolean;
}
const ToolTip = ({ active }: ToolTipProps) => {
    return(
        <div className={`tooltip ${active ? 'active' : ''}`}>
            <div className='title'>SHARE</div>
            <img className='icon' src={facebookIcon}/>
            <img className='icon' src={twitterIcon}/>
            <img className='icon' src={pinterestIcon}/>
            <div className='arrow'/>
        </div>
    )
}

const ArticlePreview = () => {
    const [tooltipActive, setTooltipActive] = useState(false);
    const handleClick = () => {
        setTooltipActive(!tooltipActive);
    }
    return(
        <div className='card'>
            <img className='media' src={imgDrawers}/>
            <div className='content'>
                <div className='info'>
                    <h2 className='title'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
                    <p className='description'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
                </div>
                <div className={`bottom ${tooltipActive ? 'active' : ''}`}>
                    <div className={`info ${tooltipActive ? 'active' : ''}`}>
                        <img className='avatar' src={avatarMichelle}/>
                        <div className='box'>
                            <div className='author'>Michelle Appleton</div>
                            <div className='date'>28 Jun 2020</div>
                        </div>
                    </div>
                    <div className='socials'>
                        <div className='title'>SHARE</div>
                        <img className='icon' src={facebookIcon}/>
                        <img className='icon' src={twitterIcon}/>
                        <img className='icon' src={pinterestIcon}/>
                        <div className='arrow'/>
                    </div>
                    <div onClick={handleClick} className='share'>
                        <img src={iconShare}/>
                        <ToolTip active={tooltipActive}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ArticlePreview;