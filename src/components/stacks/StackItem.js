import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { BreakLine } from '../elements';
import NewsList from '../../containers/NewsList';
import { colors, paddings } from '../../styles';
import { getTimeString, trimText } from '../../util';

export default class StackItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStackExpanded: false,
    };
  }

  toggleNewsList() {
    this.setState(state => ({
      ...state,
      isStackExpanded: !state.isStackExpanded,
    }));
  }

  render() {
    return (
      <View>
        <Text style={[styles.title, paddings.interval]}>
          {trimText(this.props.stack.title)}
        </Text>
        {!getTimeString(this.props.stack.time) || (
          <Text style={[paddings.interval, styles.time]}>
            {getTimeString(this.props.stack.time, {
              showWeekday: false,
              withSpaceBetween: true,
              forceShowYear: true,
            })}
          </Text>
        )}
        <Text style={styles.description}>
          {trimText(this.props.stack.description)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, paddings.interval]}
          onPress={() => this.toggleNewsList()}
        >
          <Text style={styles.buttonText}>
            查看 {this.props.stack.newsCount} 条相关新闻
          </Text>
          <Icon
            type="material-community"
            color={colors.darkGrey}
            name={this.state.isStackExpanded ? 'arrow-down' : 'arrow-right'}
            size={11}
          />
        </TouchableOpacity>

        {!this.state.isStackExpanded || (
          <NewsList
            style={styles.newsList}
            stackId={this.props.stack.id}
            newsList={this.props.stack.news}
            onNewsPress={this.props.onNewsPress}
            newsCount={this.props.stack.newsCount}
          />
        )}

        {this.props.isLastStack || <BreakLine style={styles.breakLine} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 26,
  },
  time: {
    fontSize: 16,
    color: colors.darkGrey,
  },
  description: {
    paddingBottom: 12,
    fontSize: 14,
    lineHeight: 22,
  },
  button: {
    padding: 6,
    borderRadius: 4,
    borderColor: colors.darkGrey,
    borderWidth: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: colors.darkGrey,
    paddingRight: 4,
  },
  newsList: {
    marginTop: 8,
  },
  breakLine: {
    marginVertical: 20,
  },
});
