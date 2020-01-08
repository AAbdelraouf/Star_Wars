import React, { Component } from 'react'
import _ from 'lodash'
import { View } from 'react-native'
import { connect } from 'react-redux';
import {StarWarsPeople} from './StarWarsPeople'
import { StarWarsPeopleRequestActions } from '../../../state/actions/requests/StarWarsPeople/getStarWarsPeople.actions';
import { starWarsPeopleResults, starWarsPeopleRequesting } from '../../../state/selectors/StarWarsPeopleSelectors/starWarsPeopleSelector';

const mapStateToProps = state => {
  return {
  starWarsResults: starWarsPeopleResults(state),
  isRequesting: starWarsPeopleRequesting(state)
}};

const mapDispatchToProps = {
  fetchStarWarsData: StarWarsPeopleRequestActions
};

class StarWarsPeopleContainer extends Component {
  render() {
    const { fetchStarWarsData, starWarsResults, isRequesting } = this.props;
    console.log('SWScreen', isRequesting);
    const slicedStarWarsResults = _.slice(starWarsResults, [1, 2, 3, 4, 5], 5) || {};
    return (
        <View>
          <StarWarsPeople
            starWarsPeople={ slicedStarWarsResults }
            onPressFetch={ fetchStarWarsData }
            isRequesting={isRequesting}
          />
        </View>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsPeopleContainer);
