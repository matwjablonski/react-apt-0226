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



// export const Todo = ({ text = "Default text" }) => {
//     return <div>{text}</div>
// }

// export const Todo2 = (props) => {
//     return <div>{props.text}</div>
// }

// Todo2.defaultProps = {
//     text: "Default text"
// }


// const obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     skills: [
//         {
//             name: "JavaScript",
//             level: "Advanced"
//         },
//         {
//             name: "React",
//             level: "Intermediate"
//         }
//     ]
// }

// const firstSkillName = obj.skills[0].name // "JavaScript"
// const {
//     name, // obj.name
//     age, // obj.age
//     city, // obj.city
//     skills: [ { name: firstSkillName2 } ] // obj.skills[0].name
// } = obj;

// firstSkillName2 // "JavaScript"