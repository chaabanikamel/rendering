import './App.css';
import sideMenu from "./SideMenu";
function App(){
  const posts=[
    {id:1,
     postName:"pinguCoder",
     postBody:"platform e learning"},
     {
      id:2,
      postName:"Learn React",
      postBody:"with pinguCoder"
     },
     {
      id:3,
      postName:"Learn Angular ",
      postBody:"with pinguCoder"
     }
    ];
    const postList = posts.map((post)=>{
       return <post key ={post.id} postName ={post.postName} postBody={post.postBody} />
    })
  return(
    <div className = "App">
      <Header>
        {/*POSTS CONTAINER*/}
        <div style={{display:"flex",justifyContent:"center"}}>
             <div style={{width:"60%",display:"flex",justifyContent:"center"}}>
              <div style={{width:"70%"}}>
              {postList}
              </div>
              <div style={{width:"30%",marginTop:"25px"}}>
                <AppSideMenu/>
              </div>
             </div>
        </div> 
        </Header> 

    </div>
  )
}

function AppSideMenu(){
  if(ShowCategories == true){
    return (<sideMenu/>);
  }
  else{
    return (null)
  }


}

export default App;
