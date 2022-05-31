import React from 'react';
import { Collapse } from 'antd';
import dividerTop from './divider-top.svg';
const { Panel } = Collapse;
/*
* Q&A  section
*/
class Questions extends React.Component {
  render() {
    let title = "More Questions?";
    const text = (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    );
    return <div className="questions">
      <img src={dividerTop} className="divider"></img>
      <div className="section-container padded">
        <h2>{title}</h2>
        <div className="collapse">
          <Collapse bordered={false}>
            <Panel header="How does Volhalla work?" key="1">
              {text}
            </Panel>
            <Panel header="What are options?" key="2">
              {text}
            </Panel>
            <Panel header="How do I know my funds are safe?" key="3">
              {text}
            </Panel>
            <Panel header="Who is Volhalla partnered with?" key="4">
              {text}
            </Panel>
            <Panel header="Where can I learn more?" key="5">
              {text}
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>;
  }
}

export default Questions;