import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Form, Input } from "tea-component-mobile";

const { Textarea } = Input;

export default function FormExample() {
  return (
    <View className="page">
      <Text className="header">Input 输入框</Text>
      <Text className="header">基本用法</Text>

      <View style={{ marginBottom: "8px" }}>
        <Input placeholder="输入单行文本" />
      </View>

      <View style={{ marginBottom: "8px" }}>
        <Input disabled placeholder="输入单行文本" />
      </View>

      <View style={{ marginBottom: "8px" }}>
        <Textarea placeholder="输入多行文本" />
      </View>

      <Form title="在表单中使用">
        <Form.Item label="文本">
          <Input placeholder="输入单行文本" />
        </Form.Item>
        <Form.Item label="禁用">
          <Input disabled defaultValue="禁用文本" />
        </Form.Item>
        <Form.Item label="数字">
          <Input type="number" placeholder="输入数字" />
        </Form.Item>
        <Form.Item label="密码">
          <Input type="password" placeholder="输入密码" />
        </Form.Item>
        <Form.Item label="身份证">
          <Input type="idcard" placeholder="输入身份证号" />
        </Form.Item>
        <Form.Item label="小数">
          <Input type="digit" placeholder="输入小数" />
        </Form.Item>
        <Form.Item label="多行文本">
          <Textarea placeholder="输入多行文本" />
        </Form.Item>
        <Form.Item label="多行文本">
          <Textarea
            placeholder="输入多行文本"
            count
            height={48}
            maxlength={100}
          />
        </Form.Item>
      </Form>
    </View>
  );
}