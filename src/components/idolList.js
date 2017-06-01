import React from 'react';
import _ from 'lodash';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import {idolFetch} from '../actions';
import IdolListItem from './idolListItem';


class IdolList extends React.Component {
    
    componentWillMount(){
        this.props.idolFetch();
        
        this.createDataSource(this.props);
        //cloneWithRows won't fill up with idolFetch because the data probably hasn't been returned yet
        //re-do with componentWillReceiveProps
        //componentWillReceiveProps will be called with new props
        //nextProps are the new props that the component will be re-rendered with from mapStateToProps
    }
    
    componentWillReceiveProps(nextProps) {
        
        this.createDataSource(nextProps)
    }
    
    createDataSource({idols}){
        
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        
        this.dataSource = ds.cloneWithRows(idols);
    
    }
    
    //single-row, one idol
    renderRow(idol) {
        
        return <IdolListItem idol = {idol} />
    }
    
    render() {
        
        console.log(this.props);
        return (
            <ListView
                enableEmptySections
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    //in this component as state.idols
    //use lodash and map to put the return objects into array
    const idols = _.map(state.idols, (val, uid) => {
        return {...val, uid};
    });
    
    return {idols};
};

export default connect(mapStateToProps, {idolFetch})(IdolList);