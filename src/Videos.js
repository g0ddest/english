import React, { Component } from 'react';
import Video from "./Video";
import Tasks from "./Tasks";

class Videos extends Component{

    render(){
        if(this.props.videos)
            return (
                <div>
                {this.props.videos.map((item, index) => {
                    return (
                        <Video name={item.name} youtube_id={item.youtube_id} time={item.time} />
                    )
                })}
                </div>
            );
        else return null;
    }

}

export default Videos;