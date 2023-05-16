import React from 'react'

function ProjectCards({project}) {

  console.log("I am afrom Projct", project);

  return (
  <div className='col-md-4 '>
    <div className='card mb-3'>
        <div className='card-body border'>
            <div className="d-flex justify-content-between align-items-center">
                <h5 className='card-title'>{project.name} </h5>
                <a className='btn btn-light' href={`/projects/${project.id}`}> View</a>
            </div>
            <p className='small'>Status <strong>{project.status}</strong></p>
        </div>
    </div>
  </div>
  )
}

export default ProjectCards