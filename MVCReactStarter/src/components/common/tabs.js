import React from 'react';

export class Tabs extends React.Component {

    constructor(props) {
        super();
        this.state = {
            activeTabIndex: 0
        }
    }

    handleTabClick = (tabIndex) => {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.state.activeTabIndex : tabIndex
        });
    }

    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick: this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            })
        });
    }

    renderActiveTabContent() {
        const { children } = this.props;
        const { activeTabIndex } = this.state;
        if (children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }

    render() {
        return (
            <div className="an-bootstrap-custom-tab">
                <div className="an-tab-control">
                    <ul className="nav nav-tabs">
                        {this.renderChildrenWithTabsApiAsProps()}
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade in active">
                        {this.renderActiveTabContent()}
                    </div>
                </div>
            </div>
        )
    }

}

export const Tab = (props) => (
    <li role="presentation">
        <a className={`${props.linkClassName ? props.linkClassName : ''} ${props.isActive ? 'active' : ''}`}
            onClick={(event) => {
                event.preventDefault();
                props.onClick(props.tabIndex);
            }} href="#">
            <i className={`${props.iconClassName ? props.iconClassName : ''}`} /> {props.tabHeader}
        </a>
    </li>
);