import React from 'react'

const TermItem = ({ title, content }) => {
  return (
<div className="first:mt-0 mt-4">
    <h2 className="font-medium">{title}</h2>
    <p className="text-xs mt-1">{content}</p>
</div>
  )
}

export default TermItem

