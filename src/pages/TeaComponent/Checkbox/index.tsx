import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Checkbox, List } from "tea-component-mobile";

export default function CheckboxExample() {
  const [items, setItems] = useState([]);

  return (
    <View className="page">
      <Text className="header">Checkbox 复选框</Text>

      <View className="section">
        <View className="header">基本用法</View>
        <Checkbox defaultChecked>勾选</Checkbox>
      </View>

      <View className="section">
        <View className="header">复选框组</View>
        <Checkbox.Group>
          <Checkbox name="1">选项1</Checkbox>
          <Checkbox name="2">选项2</Checkbox>
          <Checkbox name="3" disabled>
            选项3
          </Checkbox>
        </Checkbox.Group>
      </View>

      <View className="section">
        <View className="header">受控用法</View>
        <Checkbox.Group value={items} onChange={items => setItems(items)}>
          <Checkbox name="1">选项1</Checkbox>
          <Checkbox name="2">选项2</Checkbox>
          <Checkbox name="3">选项3</Checkbox>
        </Checkbox.Group>
      </View>

      <View className="section">
        <View className="header">方框样式</View>
        <Checkbox.Group type="square">
          <Checkbox name="1">选项1</Checkbox>
          <Checkbox name="2">选项2</Checkbox>
          <Checkbox name="3" disabled>
            选项3
          </Checkbox>
        </Checkbox.Group>
      </View>

      <View className="section">
        <View className="header">block</View>
        <Checkbox.Group block>
          <Checkbox name="1">选项1</Checkbox>
          <Checkbox name="2">选项2</Checkbox>
          <Checkbox name="3">选项3</Checkbox>
        </Checkbox.Group>
      </View>

      <View className="section">
        <View className="header">按钮模式</View>
        <Checkbox.Group block defaultValue={["2"]} type="button">
          <Checkbox name="1">选项1</Checkbox>
          <Checkbox name="2">选项2</Checkbox>
          <Checkbox name="3">选项3</Checkbox>
          <Checkbox name="4">选项4</Checkbox>
          <Checkbox name="5">较长的选项5</Checkbox>
          <Checkbox name="6">更长一点的选项6</Checkbox>
        </Checkbox.Group>
      </View>

      <View className="header">与 List 组件结合</View>
      <List>
        <Checkbox.Group defaultValue={["2"]} type="square">
          <List.Item title="标题1" before={<Checkbox name="1" />}>
            内容1
          </List.Item>
          <List.Item title="标题2" before={<Checkbox name="2" />}>
            内容2
          </List.Item>
        </Checkbox.Group>
      </List>

      <View className="section">
        <View className="header">同意协议条款</View>
        <Checkbox name="agreement" type="agreement" onChange={console.log}>
          Yes, I do.
        </Checkbox>
      </View>
    </View>
  );
}
