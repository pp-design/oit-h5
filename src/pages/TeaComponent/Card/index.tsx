import React from "react";
import { View, Text, Image } from "@tarojs/components";
import {
  Button,
  Card,
  Descriptions,
  List,
  Typography,
} from "tea-component-mobile";


export default function CardExample() {
  return (
    <View className="page">
      <Text className="header">Card 卡片</Text>
      <Text className="header">基本用法</Text>
      <Card>
        <Card.Body
          title="内容区标题"
          subtitle="小标题"
          extra={<Button text>操作区</Button>}
        >
          内容区
        </Card.Body>
      </Card>

      <Text className="header">典型卡片</Text>
      <Card>
        <Card.Header>卡片头部</Card.Header>
        <Card.Body
          title="内容区标题"
          subtitle="小标题"
          extra={<Button text>操作区</Button>}
        >
          内容区
        </Card.Body>
        <Card.Footer>卡片底部</Card.Footer>
      </Card>

      <Text className="header">图片卡片</Text>
      <Card>
        <Image
          mode="widthFix"
          src="https://main.qcloudimg.com/raw/cf516e7b725dc06cbedef8eaeaed294d.svg"
          style={{ height: "auto" }}
        />
        <Card.Body>内容区</Card.Body>
      </Card>

      <Text className="header">结合 Descriptions 组件</Text>
      <Card>
        <Card.Body title="主机信息">
          <Descriptions>
            <Descriptions.Item
              label="名称"
              arrow
              onClick={() => console.log("click")}
            >
              主机名称
            </Descriptions.Item>
            <Descriptions.Item label="示例 ID">ins-k6nvxxxu</Descriptions.Item>
            <Descriptions.Item
              label="UUID"
              extra={
                <Button text type="primary">
                  重置密码
                </Button>
              }
            >
              3466756d-9fbe-4b66-90f3-5b2f0b161784
            </Descriptions.Item>
            <Descriptions.Item
              label="状态"
              extra={
                <Button text type="primary">
                  调整状态
                </Button>
              }
            >
              <Typography.Text theme="success">运行中</Typography.Text>
            </Descriptions.Item>
          </Descriptions>
        </Card.Body>
      </Card>

      <Text className="header">结合 List 组件</Text>
      <Card>
        <Card.Header>图文列表</Card.Header>
        <List.Item
          title="标题文字"
          description="描述描述描述描述描述描述描述描述描述描述"
          thumb="//imgcache.qq.com/open_proj/proj_qcloud_v2/tc-x/tea-ui/assets/image.svg"
        />
        <List.Item
          title="标题文字"
          description="描述描述描述描述描述描述描述描述描述描述"
          thumb="//imgcache.qq.com/open_proj/proj_qcloud_v2/tc-x/tea-ui/assets/image.svg"
        />
        <List.Item title="查看更多" arrow />
      </Card>
    </View>
  );
}