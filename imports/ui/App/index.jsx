import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import AppHeader from './components/AppHeader';
import AppMenu from './components/AppMenu';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <AppHeader />
        <Layout>
          <AppMenu />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout.Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
