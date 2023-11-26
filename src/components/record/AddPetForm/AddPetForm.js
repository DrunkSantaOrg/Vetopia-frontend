import React from 'react'
import { useNavigate } from 'react-router-dom'
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
  message,
} from 'antd'

import usePetsData from '../../../hooks/Pethook'


import './AddPetForm.css'

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

const AddPetForm = ({petOwner}) => {
  console.log("3:"+petOwner)
  const navigate = useNavigate()
  const { createPetsData } = usePetsData()

  // // state to check if the form is filled
  // const { form } = Form.useForm()
  // // function to check if the form is filled
  // const [isFormFilled, setIsFormFilled] = React.useState(false)

  // const checkFormFilled = async () => {
  //   try {
  //     await form.validateFields()
  //     setIsFormFilled(true)
  //     onFormFilled(true)
  //     console.log('Success:')
  //   } catch (err) {
  //     setIsFormFilled(false)
  //     onFormFilled(false)
  //     console.log('Failed:' + err)
  //   }
  // }

  // // useEffect to check if the form is filled on every change
  // React.useEffect(() => {
  //   checkFormFilled()
  // }, [form])

  const onFinish = async (values) => {
    try {
      console.log(values, petOwner)
      await createPetsData(petOwner.id, values);
      message.success('Pet  creates successfully');
      navigate('/home/health-records');
    } catch (err) {
      message.error('Error creating pet')
    }
  }

  return (
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
          // form={form}
          name="myForm"
          onFinish={onFinish}
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
                rules={[{ required: true, message: 'Please select Species!' }]}
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
                rules={[{ required: true, message: 'Please select Breed!' }]}
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
                  { required: true, message: 'Please select Date of birth!' },
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
                rules={[{ required: true, message: 'Please select Gender!' }]}
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
                rules={[{ required: true, message: 'Please input Weight!' }]}
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
              <div className="form-label">Phone Number</div>
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
                  { required: true, message: 'Please write Insurance Number!' },
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

          <Row className="form-Row">
            <Col span={24}>
              <Form.Item
                className="addPetFormItem"
                wrapperCol={{ offset: 1, span: 16 }}
              >
                <button type="primary" htmlType="submit">
                  Submit
                </button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Space>
    </ConfigProvider>
  )
}

export default AddPetForm
