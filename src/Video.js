import React, { Component } from 'react';
import './Video.css';

class Video extends Component{

    get_video_url(){
        var video_url = "https://youtu.be/" + this.props.youtube_id;
        if(this.props.time)
            video_url = video_url + "?t=" + this.props.time;
        return video_url;
    }

    get_video_preview_image(){
        return "https://img.youtube.com/vi/" + this.props.youtube_id + "/0.jpg";
    }

    render(){
        return (
            <div className="Video">
                <a target="_blank" href={this.get_video_url()}>
                    <img width={200} src={this.get_video_preview_image()} />
                    <br/>
                    {this.props.name}
                </a>
            </div>
        );
    }
}

export default Video;

