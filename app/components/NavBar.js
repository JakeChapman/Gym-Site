import React from 'react';
import Navigation from 'react-toolbox/lib/navigation';
import AppBar from 'react-toolbox/lib/app_bar';

const AppBarProps = [
    {
        className: 'SiteNav',
        fixed: true,
        flat: true
    }
];

const actions = [
    { label: 'Trainers', flat: true},
    { label: 'Schedule', flat: true},
    { label: 'About Us', flat: true}
];


const NavBar = () => (
    <div>
        <AppBar className="SiteNav" fixed={true} flat={true}>
            <Navigation type='horizontal' actions={actions} />
        </AppBar>
    </div>
);

export default NavBar;