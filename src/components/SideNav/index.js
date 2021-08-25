import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SideWrapper } from './SideNav.stc';
import { openSidebar } from '../../redux/Sidebar/sidebar.actions';



const mapState = ({ sidebar }) => ({
    isExpanded: sidebar.isExpanded
});

export default function SideNav(){
    const dispatch = useDispatch();
    const { isExpanded } = useSelector(mapState);
    return (
        <SideWrapper style={{ width: isExpanded ? '550px' : '160px'}}>
            <button onClick={() => dispatch(openSidebar())}>Click</button>
        </SideWrapper>
    );
};