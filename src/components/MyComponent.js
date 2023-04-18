import React from 'react';

class MyComponent extends React.Component {
  render() {
    const foodCat = ['pizza', 'burger', 'sushi'];
    
    return (
      <div>
        {foodCat !==[] ? foodCat.map((data)=>{
          return(
            <div key={data}>hello {data}</div>
          )
        }) : null}
      </div>
    );
  }
}

export default MyComponent;
