import React from 'react'
import AddPetForm from '../AddPetForm'
import { useLocation } from 'react-router-dom'
import { Breadcrumb, Button, Flex } from 'antd'

// import 当前文件夹的AddPet.module.css
import './AddPet.css'


const AddPetComp = () => {
  let isFilledForm = false
  const location = useLocation()
  const titlelist = location.pathname.slice(1).split('/')
  // replace - symbol
  titlelist[titlelist.length - 1] = titlelist[titlelist.length - 1].replace(
    /-/g,
    ''
  )
  console.log(titlelist)
  return (
    <div class="addpet-details">
        {/* create a div box if form is not filled then create disable button else create a button can be clicked*/}
        <div className="create-button">
          <Button disabled={!isFilledForm} type="primary">Create profile</Button>
        </div>
      
      <div className="formbox">
        <div class="Avatar">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/151aa30a-01d5-45fc-b0e7-8ee294bb21bc?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&"
            class="avatar-img"
          />
          <div class="avatar-change">Change image</div>
          <div class="avatar-remove">Remove</div>
        </div>
        <AddPetForm />
      </div>
    </div>
  )
}

export default AddPetComp
