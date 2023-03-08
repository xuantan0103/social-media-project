    import React from "react";
    import { Button, Card, Col, Form, Input, message, Row, Spin } from "antd";
    import { useAuthContext } from "../../context/AuthContext";
    import { API } from "../../constant";
    import { useState } from "react";
    import { getToken } from "../../helpers";
    
    const Profile = () => {
      const [loading, setLoading] = useState(false);
      const { user, isLoading, setUser } = useAuthContext();
    
      const handleProfileUpdate = async (data) => {
        setLoading(true);
        try {
          const response = await fetch(`${API}/users/${user.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              // set the auth token to the user's jwt
              Authorization: `Bearer ${getToken()}`,
            },
            body: JSON.stringify(data),
          });
          const responseData = await response.json();
    
          setUser(responseData);
          message.success("Data saved successfully!");
        } catch (error) {
          console.error(Error);
          message.error("Error While Updating the Profile!");
        } finally {
          setLoading(false);
        }
      };
    
      if (isLoading) {
        return <Spin size="large" />;
      }
    
      return (
        <Card className="profile_page_card">
          <Form
            layout="vertical"
            initialValues={{
              username: user?.username,
              email: user?.email,
              twitter_username: user?.twitter_username,
              linkedin_username: user?.linkedin_username,
              github_username: user?.github_username,
              avatar_url: user?.avatar_url,
              website_url: user?.website_url,
              about: user?.about,
            }}
            onFinish={handleProfileUpdate}
          >
            <Row gutter={[16, 16]}>
              <Col md={8} lg={8} sm={24} xs={24}>
                <Form.Item
                  label="FIRSTNAME"
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder="Firstname" />
                </Form.Item>
              </Col>
              <Col md={8} lg={8} sm={24} xs={24}>
                <Form.Item
                  label="LASTNAME"
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder="Lastname" />
                </Form.Item>
              </Col>
              <Col md={8} lg={8} sm={24} xs={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Email is required!",
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="example@test.com" />
                </Form.Item>
              </Col>
              <Col md={8} lg={8} sm={24} xs={24}>
                <Form.Item
                  label="PASSWORD"
                  name="password"
                  rules={[
                    {
                      required: true,
                      type: "password",
                    },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>
              </Col> 
              <Col md={8} lg={8} sm={24} xs={24}>
                <Form.Item
                  label="BIRTHDAY"
                  rules={[
                    {
                      required: true,
                      type: "date",
                    },
                  ]}
                >
                  <Input placeholder="Day of Birth" />
                </Form.Item>
              </Col>
              </Row>
              </Form>
              </Card>         
      );
    };
    
    export default Profile;


