import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getRandomImage } from './utils/randomimage'
import Header from './component/Header'
import SearchBar from './component/SearchBar'


export class Home extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       backupPosts:[],
       inputData : "",
       

    }
  }

  handleInputData =(event)=>{
    this.setState({
      inputData:event.target.value
    })  
    console.log("in handle input data")
    // this.setState({posts:this.state.backupPosts})
    //
    // this.setState.posts=this.state.posts.filter(this.state.posts.car === this.state.inputData)
    // console.log(this.state.inputData,"filtered")
  }

  filterData =() =>{
    console.log(this.state.inputData,"in filter data")
    
    // this.setState({posts:this.state.backupPosts})
    console.log(this.state.posts,this.state.backupPosts,"in backup post")
    this.setState({posts : (this.state.posts.filter((elem)=>{return elem.car.toLowerCase()===this.state.inputData.toLowerCase()}
      ))})
    //console.log(this.state.posts.filter((elem)=>elem.car.toLowerCase()===this.state.inputData.toLowerCase()))
    console.log(this.state.posts)
  }
  
  
  componentDidMount(){
    axios.get('https://myfakeapi.com/api/cars/')
    .then(response =>{
      console.log(response)

     // console.log(response.data.cars.length,'12333')
      this.setState({posts: response.data.cars,backupPosts:response.data.cars})

    })
    .catch(error => {
      console.log(error)
    })
  }



  render() {
  
    
    return (
      <div >
        {/* <Header/> */}
        <div>
        <h1>Collection Of Cars</h1>

        <div>
              <input type='text' placeholder={"enter Make"} onChange={(e)=>this.handleInputData(e)} value={this.state.inputData}/>
              <button onClick={this.filterData}>Search</button>
        </div>
        </div>
      
      {/* <SearchBar enterMake={"enterMake"}/> */}
      <div style={{display:'grid', gridTemplateRows: 'auto', gridTemplateColumns:'repeat(4, 1fr)'}}>
      {
        //this.state.posts.length?
        this.state.posts.map((post,index)=>
        <div style ={{border:"1px ", padding:"10px"}} key={post.id}>
           <img style={{heigh:"200px", width:"150px"}} src={getRandomImage()} alt='logo' className='logo'/>
            <div> Made : {post.car}</div>
            <div>{post.car_model}</div>
            <div>{post.price}</div>
            <Link to='/details' state={{val:index,post:this.state.posts, img:getRandomImage()}}><div><button onClick={()=> console.log(index,getRandomImage,"123") }>View Details</button></div></Link>  

        </div>

        )
          
        
      }
      
      </div>
    </div>
    )
  }
}

export default Home
