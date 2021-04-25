import React from "react";
import { View, Text } from "@tarojs/components";
import { Statistic, Card, Picker } from "tea-component-mobile";

export default function StatisticExample() {
  return (
    <View className="page">
      <Text className="header">Statistic 统计数值</Text>

      <Text className="header">通栏面板</Text>
      <Card>
        <Card.Body
          title="昨日概况"
          extra={
            <Picker mode="date">
              <Picker.Button>2021-01-01</Picker.Button>
            </Picker>
          }
        >
          <Statistic.Board>
            <Statistic title="访问人数" value={771745} unit="人">
              <Statistic.Info type="down">较昨日: -3000</Statistic.Info>
              <Statistic.Info>总人数: -</Statistic.Info>
            </Statistic>
          </Statistic.Board>
        </Card.Body>
      </Card>

      <Text className="header">两栏</Text>
      <Card>
        <Card.Body
          title="昨日概况"
          extra={
            <Picker mode="date">
              <Picker.Button>2021-01-01</Picker.Button>
            </Picker>
          }
        >
          <Statistic.Board col={2}>
            <Statistic title="访问人数" value={771745} unit="人">
              <Statistic.Info type="up">较昨日: +3000</Statistic.Info>
            </Statistic>
            <Statistic title="语音时长" value={7890} unit="分钟">
              <Statistic.Info type="down">较昨日: -3000</Statistic.Info>
              <Statistic.Info>总时长: -</Statistic.Info>
            </Statistic>
            <Statistic title="本月流量" value={27.53} unit="GB">
              <Statistic.Info>剩余流量: -</Statistic.Info>
            </Statistic>
          </Statistic.Board>
        </Card.Body>
      </Card>

      <Text className="header">三栏</Text>
      <Card>
        <Card.Body
          title="昨日概况"
          extra={
            <Picker mode="date">
              <Picker.Button>2021-01-01</Picker.Button>
            </Picker>
          }
        >
          <Statistic.Board col={3}>
            <Statistic title="访问人数" value={1745} unit="人">
              <Statistic.Info type="up">较昨日: +30</Statistic.Info>
            </Statistic>
            <Statistic title="语音时长" value={785} unit="分钟">
              <Statistic.Info type="down">较昨日: -30</Statistic.Info>
              <Statistic.Info>总时长: -</Statistic.Info>
            </Statistic>
            <Statistic title="本月流量" value={27.53} unit="GB">
              <Statistic.Info>剩余流量: -</Statistic.Info>
            </Statistic>
            <Statistic title="存储空间" value={13.45} unit="TB">
              <Statistic.Info>剩余空间: -</Statistic.Info>
            </Statistic>
            <Statistic title="使用次数" value={1} unit="次" />
          </Statistic.Board>
        </Card.Body>
      </Card>
    </View>
  );
}
