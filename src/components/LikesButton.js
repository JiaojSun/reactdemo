import React from 'react'

class LikesButton extends React.Component{
    constructor(props){
        console.log('props---------------');
        console.log(props)
        // super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
        super(props)
        this.state = {
            likes:0
        }
    }
    increaseLikes(){
        console.log(this);
        this.setState({
            likes: ++this.state.likes
        })
    }
    render(){
        return(
            <div className="likes-button-component">
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick = {()=>{this.increaseLikes()}}
                >
                点赞{this.state.likes}
                </button>
            </div>
        )
    }
}
export default LikesButton

// class LikesButton extends React.Component {
//     constructor(props) {
//         console.log(props)
//         // super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
//         super(props)
//         this.state = {
//             likes: 0
//         }
//         this.increaseLikes = this.increaseLikes.bind(this);
//     }
//     increaseLikes() {
//         console.log(this);
//         this.setState({
//             likes: ++this.state.likes
//         })
//     }
//     render() {
//         return (
//             <div className="likes-button-component">
//                 <button
//                     type="button"
//                     className="btn btn-outline-primary btn-lg"
//                     onClick={this.increaseLikes}
//                 >
//                     点赞{this.state.likes}
//                 </button>
//             </div>
//         )
//     }
// }
// export default LikesButton