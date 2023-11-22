import React from 'react';
import {Form, Input, Button, message, Row, Col, ConfigProvider, Space} from 'antd';
import {useNavigate} from 'react-router-dom';
import './AddPetOwnerForm.css';
import usePetOwnerData from "../../../hooks/PetOwnerhook";

const AddPetOwnerForm = ({petOwner}) => {
  const navigate = useNavigate();
  const {updatePetOwner} = usePetOwnerData();

  const onFinish = async (values) => {
    try {
      await updatePetOwner(petOwner.id, values);
      message.success('Pet owner updated successfully');
      navigate('/home/settings');
    } catch (err) {
      message.error('Error updating pet owner');
    }
  };

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
              name="editPetOwnerForm"
              onFinish={onFinish}
              initialValues={petOwner}
              labelCol={{span: 8}}
              wrapperCol={{span: 16}}
              className="myForm"
          >
            <Row className="form-Row" gutter={[16, 16]}>
              <Col span={12} className="form-column">
                <div className="form-label">First Name</div>
                <Form.Item
                    className="addPetFormItem"
                    name="firstName"
                    rules={[{required: true, message: 'Please input First Name!'}]}
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col span={12} className="form-column">
                <div className="form-label">Last Name</div>
                <Form.Item
                    name="lastName"
                    className="addPetFormItem"
                    rules={[{required: true, message: 'Please input Last Name!'}]}
                >
                  <Input/>
                </Form.Item>
              </Col>
            </Row>

            <Row className="form-Row" gutter={[16, 16]}>
              <Col span={12} className="form-column">
                <div className="form-label">Phone Number</div>
                <Form.Item
                    className="addPetFormItem"
                    name="phoneNumber"
                    rules={[{required: true, message: 'Please input Phone Number!'}]}
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col span={12} className="form-column">
                <div className="form-label">Email</div>
                <Form.Item
                    className="addPetFormItem"
                    name="email"
                    rules={[{required: true, message: 'Please input Email!'}]}
                >
                  <Input/>
                </Form.Item>
              </Col>
            </Row>

            <Row className="form-Row" gutter={[16, 16]}>
              <Col span={12} className="form-column">
                <div className="form-label">City</div>
                <Form.Item
                    className="addPetFormItem"
                    name="city"
                    rules={[{required: true, message: 'Please input City!'}]}
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col span={12} className="form-column">
                <div className="form-label">Province</div>
                <Form.Item
                    className="addPetFormItem"
                    name="province"
                    rules={[{required: true, message: 'Please input Province!'}]}
                >
                  <Input/>
                </Form.Item>
              </Col>
            </Row>

            <Row className="form-Row" gutter={[16, 16]}>
              <Col span={12} className="form-column">
                <div className="form-label">Mailing Address</div>
                <Form.Item
                    className="addPetFormItem"
                    name="mailingAddress"
                    rules={[{required: true, message: 'Please input Mailing Address!'}]}
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col span={12} className="form-column">
                <div className="form-label">Billing Address</div>
                <Form.Item
                    className="addPetFormItem"
                    name="billingAddress"
                    rules={[{required: true, message: 'Please input Billing Address!'}]}
                >
                  <Input/>
                </Form.Item>
              </Col>
            </Row>

            <Row className="form-Row" gutter={[16, 16]}>
              <Col span={12} className="form-column">
                <div className="form-label">Postal</div>
                <Form.Item
                    className="addPetFormItem"
                    name="postal"
                    rules={[{required: true, message: 'Please input Postal Code!'}]}
                >
                  <Input/>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
              <Button type="primary" htmlType="submit">
                Update Pet Owner
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </ConfigProvider>
  );
};

export default AddPetOwnerForm;
