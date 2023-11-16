import React from 'react'
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
import './AddPetFormComp.css'

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

const AddPetFormComp = () => {
  const onFinish = (values) => {
    console.log('Received values:', values)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          activeBg: '#6750A4',
          activeBorderColor: '#6750A4',
          hoverBorderColor: '#6750A4',
        },
      }}
    >
      <Space>
        <Form
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
                <Select>{/* Add breed options */}</Select>
              </Form.Item>
            </Col>
            <Col span={12} className="form-column">
              <div className="form-label">Date of birth</div>
              <Form.Item
                className="addPetFormItem"
                name="dob"
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
            <Col span={24} className="form-column">
              <div className="form-label">Neutered/Spayed?</div>
              <Form.Item
                className="addPetFormItem"
                name="neuteredSpayed"
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

          {/* <Row className="form-Row">
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
      </Row> */}
        </Form>
      </Space>
    </ConfigProvider>
  )
}

export default AddPetFormComp
