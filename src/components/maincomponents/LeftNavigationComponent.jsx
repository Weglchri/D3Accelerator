import React from 'react';

export class LeftNavigationComponent extends React.Component {
    render() {
        return (
            <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900">
                <header className="demo-drawer-header">
                    <div className="icon_header"></div>
                </header>
                <nav className="demo-navigation mdl-navigation"></nav>
            </div>
        );
    }
}


