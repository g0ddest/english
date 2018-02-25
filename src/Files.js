import React, { Component } from 'react';
import File from './File'

class Files extends Component{

    render(){
        if(this.props.files)
            return (
                <span>
                    {this.props.files.map((item, index) => {
                        return (
                            <File type={item.type} name={item.name} path={item.path} />
                        )
                    })}
                </span>
            );
        else return null;
    }

}

export default Files;