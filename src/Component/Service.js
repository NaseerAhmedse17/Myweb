import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
function Service() {
  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
              Sdata.map((value, ind)=>{
                return (
                  <Card
                  key={ind}
                  imgsrc={value.imgsrc}
                  title={value.title}
                  />
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Service
