import React, { Component } from 'react';
import { View } from 'react-native';
import I18n from './i18n';

import LangListItem from './LangListItem';

const languages = [
  {
    locale: 'en',
    name: 'English'
  },
  {
    locale: 'de',
    name: 'Deutsch',
    englishName: 'German'
  }
];

export default class LangPicker extends Component {
  static navigationOptions = {
    title: I18n.t('settings.display_language')
  };

  render() {
    const { navigation } = this.props;
    const currentLocale = navigation.getParam('currentLocale');

    return (
      <View style={{ marginTop: 15 }}>
        {
          languages.map((language) => (
            <LangListItem
              key={language.locale}
              isActive={language.locale === currentLocale}
              locale={language.locale}
              name={language.name}
              englishName={language.englishName}
              onChangeLocale={(locale) => navigation.navigate('Option', { locale })}
            />
          ))
        }
      </View>
    );
  }
}