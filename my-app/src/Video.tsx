import React from "react"

export const Video = ({ src = ''}) => {


    return React.createElement(
        'video', 
        { key: src },
        React.createElement(
            'source', 
            { src, type: 'video/mp4' }
        )
    )

    // return (
    //     <video key={src}>
    //         <source src={src} type="video/mp4" />
    //     </video>
    // )
}

// type VideoProps = {
//     src: string;
// }

// class VideoClass extends React.Component<VideoProps> {
//     render() {
//         return (
//             <video key={this.props.src}>
//                 <source src={this.props.src} type="video/mp4" />
//             </video>
//         );

//         // return (
//         //     <video key={this.props.src}>
//         //         <source src={this.props.src} type="video/mp4" />
//         //     </video>
//         // )
//     }
// }

export const Videos = ({ sources = [], title = "ABC" }) => {
    return (
        <div>
            {title}
            {sources.map((src) => <Video key={src} src={src} />)}
        </div>
    )
}

