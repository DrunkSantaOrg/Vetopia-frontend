import React, { useEffect, useRef } from 'react'
import EditPetForm from '../EditPetForm/EditPetForm'
import { useLocation } from 'react-router-dom'
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Row,
  Col,
  ConfigProvider,
  Space,
} from 'antd'
import { useSelector } from 'react-redux'

// import 当前文件夹的AddPet.module.css
import './EditPet.css'

const { Option } = Select

  const weightUnitOptions = ['kg', 'g', 'lb']

  const weightSelectAfter = (
    <Select defaultValue="kg" style={{ width: 60 }}>
      {weightUnitOptions.map((unit) => (
        <Option key={unit} value={unit}>
          {unit}
        </Option>
      ))}
    </Select>
  )

const EditPetComp = React.forwardRef(({onChange, props, ref, pet }) => {
  
  const petOwner = useSelector((state) => state.petOwner)

  const [form] = Form.useForm();

  const handleOnformChange = () => {
    const formData = form.getFieldsValue();
    onChange(formData)
  }

  const handleButtonClick = () => {
    console.log('ok 2')
  }

  React.useImperativeHandle(ref, () => ({
    handleButtonClick,
  }))


  let isFilledForm = false

  const handleOnFormFilled = (isFormFilled) => {
    isFilledForm = isFormFilled
  }

  useEffect(() => {
    console.log('isFilledForm: ' + isFilledForm)
  }, [isFilledForm])



  const location = useLocation()
  const titlelist = location.pathname.slice(1).split('/')
  // replace - symbol
  titlelist[titlelist.length - 1] = titlelist[titlelist.length - 1].replace(
    /-/g,
    ''
  )
  

  const onFinish = async (values) => {
    console.log("ok 3 formdata:"+values);
    
    // try {
    //   console.log(values, petOwner)
    //   await createPetsData(petOwner.id, values);
    //   message.success('Pet  creates successfully');
    //   navigate('/home/health-records');
    // } catch (err) {
    //   message.error('Error creating pet')
    // }
  }

  return (
    <div class="addpet-details">
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
        
        <ConfigProvider
          theme={{
            token: {
              activeBg: '#6750A4',
              activeBorderColor: '#6750A4',
              hoverBorderColor: '#6750A4',
            },
          }}
        >
          <Space>
            <Form
              form={form}
              name="myForm"
              initialValues={pet}
              onFinish={onFinish}
              onValuesChange={handleOnformChange}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              className="myForm"
            >
              <Row className="form-Row" gutter={[16, 16]}>
                <Col span={12} className="form-column">
                  <div className="form-label">Name</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="name"
                    rules={[{ required: true, message: 'Please input Name!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12} className="form-column">
                  <div className="form-label">Species</div>
                  <Form.Item
                    name="species"
                    className="addPetFormItem"
                    rules={[
                      { required: true, message: 'Please select Species!' },
                    ]}
                    labelAlign="top"
                  >
                    <Select>
                      <Option value="dog">Dog</Option>
                      <Option value="cat">Cat</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row className="form-Row" gutter={[16, 16]}>
                <Col span={12} className="form-column">
                  <div className="form-label">Breed</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="breed"
                    rules={[
                      { required: true, message: 'Please select Breed!' },
                    ]}
                  >
                    <Select>
                      <Option value="dog">German Dog</Option>
                      <Option value="cat">Canadian Dog</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12} className="form-column">
                  <div className="form-label">Date of birth</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="dateOfBirth"
                    rules={[
                      {
                        required: true,
                        message: 'Please select Date of birth!',
                      },
                    ]}
                  >
                    <DatePicker className="addPetFormItem-datepicker" />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="form-Row" gutter={[16, 16]}>
                <Col span={12} className="form-column">
                  <div className="form-label">Gender</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="gender"
                    rules={[
                      { required: true, message: 'Please select Gender!' },
                    ]}
                  >
                    <Select>
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12} className="form-column">
                  <div className="form-label">Weight</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="weight"
                    rules={[
                      { required: true, message: 'Please input Weight!' },
                    ]}
                  >
                    <Input addonAfter={weightSelectAfter} />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="form-Row" gutter={[16, 16]}>
                <Col span={12} className="form-column">
                  <div className="form-label">Age</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="age"
                    rules={[{ required: true, message: 'Please input age!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={12} className="form-column">
                  <div className="form-label">Color</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="color"
                    rules={[{ required: true, message: 'Please write Color!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="form-Row" gutter={[16, 16]}>
                <Col span={12} className="form-column">
                  <div className="form-label">Microchip Number</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="microchipNumber"
                    rules={[{ required: true, message: 'Please input age!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={12} className="form-column">
                  <div className="form-label">Insurance Number</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="insuranceNumber"
                    rules={[
                      {
                        required: true,
                        message: 'Please write Insurance Number!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="form-Row" gutter={[16, 16]}>
                <Col span={24} className="form-column">
                  <div className="form-label">Neutered/Spayed?</div>
                  <Form.Item
                    className="addPetFormItem"
                    name="isNeutered"
                    rules={[
                      { required: true, message: 'Please select an option!' },
                    ]}
                  >
                    <Radio.Group>
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Space>
        </ConfigProvider>
      </div>
    </div>
  )
})

export default EditPetComp
