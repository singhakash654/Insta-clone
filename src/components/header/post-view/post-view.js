import {useEffect, useState} from "react"
import Card from "../../../card"
import Header from "../header";
import data from "./sampleData";
import './post-view.css'
const PostView = ()=> {
    const [posts, setPosts]= useState([]);
    useEffect(()=> {
           fetch("http://localhost:3004/user").then((res)=>res.json()).then((data)=> {
            setPosts(data);
           }).catch((err)=> {
            if(err) {
                console.log(err)
            }
            })
           
    }, [])
    return (
        <>
        <Header/>
        <div className="header-content">
            <section className="head">
                <div id="head-1">
                 <h3>Siva</h3>
                 <p>Bengaluru</p>
                </div>
                <img id="more-option-image" src= {require("../../../images/more.png")} alt="icon" />
            </section>
        </div>
        <div className="content">
                <img src={require("../../../images/mountain.jpg")} alt="main-img" />
            </div>
        <div className="post-container">
            {posts.map((post, i)=> {
                return (
                    <Card post={post} key={i}/>
                )
            })}
        </div>
        </>
    )
    
}
export default PostView;