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
import './AddPetOwnerFormComp.css'

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

const AddPetOwnerFormComp = () => {
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
              <div className="form-label">First Name</div>
              <Form.Item
                className="addPetFormItem"
                name="firstName"
                rules={[{ required: true, message: 'Please input First Name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} className="form-column">
              <div className="form-label">First Name</div>
              <Form.Item
                name="lastName"
                className="addPetFormItem"
                rules={[{ required: true, message: 'Please input Last Name!' }]}
                labelAlign="top"
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
                name="phoneNumber"
                rules={[{ required: true, message: 'Please input phoneNumber!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} className="form-column">
              <div className="form-label">Email</div>
              <Form.Item
                className="addPetFormItem"
                name="email"
                rules={[
                  { required: true, message: 'Please input email!' },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row className="form-Row" gutter={[16, 16]}>
            <Col span={12} className="form-column">
              <div className="form-label">City</div>
              <Form.Item
                className="addPetFormItem"
                name="city"
                rules={[{ required: true, message: 'Please input City!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} className="form-column">
              <div className="form-label">Province</div>
              <Form.Item
                className="addPetFormItem"
                name="province"
                rules={[{ required: true, message: 'Please input province!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row className="form-Row" gutter={[16, 16]}>
            <Col span={12} className="form-column">
              <div className="form-label">Mailing Address</div>
              <Form.Item
                className="addPetFormItem"
                name="mailingAddress"
                rules={[{ required: true, message: 'Please input Mailing Address!' }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12} className="form-column">
              <div className="form-label">Billing Address</div>
              <Form.Item
                className="addPetFormItem"
                name="billingAddress"
                rules={[{ required: true, message: 'Please write Billing Address!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row className="form-Row" gutter={[16, 16]}>
            <Col span={12} className="form-column">
              <div className="form-label">postal</div>
              <Form.Item
                className="addPetFormItem"
                name="postal"
                rules={[{ required: true, message: 'Please input postal!' }]}
              >
                <Input />
              </Form.Item>
            </Col>

            {/* <Col span={12} className="form-column">
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
            </Col> */}
          </Row>

          {/* <Row className="form-Row" gutter={[16, 16]}>
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
          </Row> */}

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

export default AddPetOwnerFormComp
