import React from 'react';
import { StyleSheet, FlatList, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../styles';
import SvgUri from 'react-native-svg-uri';
import EventItem from './EventItem';

const Events = () => (
  <ScrollView
    style={styles.container}
  >
    <View
      style={styles.header}
    >
      <SvgUri
        width='100'
        height='50'
        source={require('../static/logotype.svg')}
      />
      <View
        style={styles.headerCircle}
      >
        <Icon
          name='user'
          type='font-awesome'
          color='#fff'
          size={20}
        />
      </View>
    </View>
    <FlatList
      data={eventList}
      style={{paddingBottom: 50}}
      renderItem={({ item }) =>
        <EventItem
          name={item.name}
          description={item.description}
          imageUrl={item.headerImage.imageUrl}
          source={item.headerImage.source}
          sourceUrl={item.headerImage.sourceUrl}
        />
      }
      keyExtractor={item => item.id.toString()}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: colors.lightGrey,
    flexDirection: 'column',
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerCircle: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const eventList = [{"headerImage":{"imageUrl":"181bc4c41c8f4f921b7d974cb1ce3148.jpg","source":"新京报","sourceUrl":"http://www.bjnews.com.cn/video/2017/11/02/462651.html","id":6,"createdAt":"2018-03-10T20:08:06.000Z","updatedAt":"2018-03-28T01:48:44.000Z","event":12},"name":"豫章书院事件","pinyin":"yu-zhang-shu-yuan-shi-jian","description":"2017 年 10 月，微博和知乎网友揭发学校非法禁锢与暴力刑罚青少年学员，引发舆论关注。2017 年 11 月 2 日，豫章书院执行山长吴军豹建立媒体微信群，发布豫章书院申请停办的消息。豫章书院称，因“戒尺”等古代教育方法不能容于现行教育制度，另外，学生对象特殊，停止“戒尺”后会置老师于危险之地，豫章书院修身学校已于当天主动申请停办，待政府部门批准后，进行在校生逐步分流。","status":"admitted","id":12,"createdAt":"2018-03-10T20:07:40.000Z","updatedAt":"2018-03-28T01:55:48.000Z"},{"headerImage":{"imageUrl":"a229ae18efbf4ab145bf9bb04b06af45.jpg","source":"爱范儿","sourceUrl":"http://www.ifanr.com/728403","id":5,"createdAt":"2018-03-10T20:04:57.000Z","updatedAt":"2018-03-10T20:04:57.000Z","event":11},"name":"哔哩哔哩大会员事件","pinyin":"bi-li-bi-li-da-hui-yuan-shi-jian","description":"在 10 月 10 日“萌节”到来之际，B 站（哔哩哔哩弹幕视频网）发大招了。这家以二次元文化著称的视频网站正式推出了名为“大会员”的 VIP 会员制度。 ","status":"admitted","id":11,"createdAt":"2018-03-10T20:04:16.000Z","updatedAt":"2018-03-10T20:04:16.000Z"},{"headerImage":{"imageUrl":"16e614cf40ec0b56694de0ae5b18d0c1.jpg","source":"新京报","sourceUrl":null,"id":3,"createdAt":"2018-03-08T22:22:16.000Z","updatedAt":"2018-03-08T22:22:16.000Z","event":10},"name":"百度魏则西事件","pinyin":"bai-du-wei-ze-xi-shi-jian","description":"2016 年 4 月 12 日，21 岁的魏则西因滑膜肉瘤去世，在其生前求医过程中，通过百度搜索到武警北京总队第二医院，被该医院宣传的“生物免疫疗法”、“斯坦福技术”所骗，花费不赀却未收获任何效果，贻误合理治疗时机。魏则西去世后，莆田系医院虚假宣传、百度搜索竞价排名、部队医院对外承包混乱等问题引发社会强烈关注。 ","status":"admitted","id":10,"createdAt":"2018-03-08T06:12:36.000Z","updatedAt":"2018-03-08T06:12:36.000Z"},{"headerImage":{"imageUrl":"0960c803795139a7f1d5b93f393f7fe5.jpg","source":"北京电影学院","sourceUrl":"http://www.bfa.edu.cn/xygk/2016-01/10/content_18070.htm","id":4,"createdAt":"2018-03-10T20:00:43.000Z","updatedAt":"2018-03-10T20:00:43.000Z","event":9},"name":"北电侯亮平事件","pinyin":"bei-dian-hou-liang-ping-shi-jian","description":"近日，一名自称是北电学生的网友在微博上开设为@北电侯亮平的账号，实名举报北电摄影学院以宋靖、吴毅为首的教授们多次潜规则大学生，常年贪污受贿的事实。","status":"admitted","id":9,"createdAt":"2018-03-06T04:38:07.000Z","updatedAt":"2018-03-06T04:38:07.000Z"},{"headerImage":{"imageUrl":"8c858c404b7969a68367c9c8f386b128.jpg","source":"界面新闻","sourceUrl":"http://www.jiemian.com/article/1432881.html","id":1,"createdAt":"2018-02-28T06:28:52.000Z","updatedAt":"2018-03-06T04:50:47.000Z","event":2},"name":"杭州保姆纵火案","pinyin":"hangz-zhou-bao-mu-zong-huo-an","description":"6 月 22 日清晨 5 时 07 分，浙江省杭州市上城区鲲鹏路蓝色钱江小区一住宅突发大火，最终造成 4 人死亡。除保姆逃生外，女主人与 3 个孩子（两个男孩，一个女孩）均抢救无效死亡。根据警方的通报，保姆莫某晶存在重大作案嫌疑，已被公安机关控制。 ","status":"admitted","id":2,"createdAt":"2018-02-27T02:21:30.000Z","updatedAt":"2018-02-28T06:18:06.000Z"}];

export default Events;
