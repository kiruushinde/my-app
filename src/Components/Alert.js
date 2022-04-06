import React from 'react'

function Alert(props) {
 
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show bg-green-100 text-green-700 p-2 " role="alert">
        <strong className=''>{props.alert.type}</strong> {props.alert.msg}

    <button type="button" className="btn-close text-3xl py-1 text-black" data-bs-dismiss="alert" aria-label="Close">X</button>
  </div>
  )
}

export default Alert