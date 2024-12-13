import React from 'react';
import Shimmer from './shimmer';

class UserClass extends React.Component{
  constructor (props){
   super(props);
   //console.log(this.props.name+"child const");
   this.state={
   // count:0,
   userinfo:{},
    
   }
  }

 async componentDidMount(){
        //console.log(this.props.name+'child component mount')
      const  res=  await this.fetchuser();
       console.log(res);
       this.setState({
        userinfo :res
     })
     this.timer=setInterval(()=>{
        console.log('loop');

     },1000)
  }
    fetchuser= async ()=>{
   const data= await fetch('https://api.github.com/users/Manojnadava');
    const response= await data.json();
    return await response;
   }

   componentDidUpdate (prevProps,prevState){
    //bed
    console.log('update called'+prevState.userinfo.login);
    console.log('update called'+this.state.userinfo.login);

   }
   componentWillUnmount () {
    clearInterval(this.timer);
   }
    render() {
        console.log(this.props.name+'child render')
        const {name,location}=this.props;
        //const {count}=this.state;
        return ((Object.keys(this.state.userinfo)).length===0) ? <Shimmer /> :
         (
            <div className="user-info">
                <h5> is a state var  </h5>
                {/* <button onClick={()=>{
                  //  this.state.count+=1;
                  this.setState({
                    count:this.state.count+=1,
                  })
                }}>Count Increase</button> */}
               <h2>Name: {this.state.userinfo.login}</h2>
               <h3>Location: {this.state.userinfo.created_at} from class</h3>
               <h4> Contact: manojnadava20@gnmail.com</h4>
            </div>
        )
    }
}

export default UserClass;