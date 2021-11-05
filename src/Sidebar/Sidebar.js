import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTree, FaSortAmountUp, FaGithub } from 'react-icons/fa';
import { IoLogoPython, IoLogoJavascript } from 'react-icons/io';
import { VscSymbolArray, VscSymbolString } from 'react-icons/vsc';
import { GiLinkedRings } from 'react-icons/gi';
import { SiDynamics365 } from 'react-icons/si';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css';
import logo from './crown.png';

const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <div className="Sidebar" style={{ height: '100vh' }}>
      <ProSidebar
        image={false}
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <img src={logo} alt="Logo" width="50" height="50" />
            <span className="title">THE SWE M.O.B</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem>Programming Languages</MenuItem>
          </Menu>
          <Menu>
            <SubMenu icon={<IoLogoPython />} title="Python">
              <MenuItem>
                <SubMenu title="Python Types">
                  <MenuItem>Numbers</MenuItem>
                  <MenuItem>Strings</MenuItem>
                  <MenuItem>Boolean</MenuItem>
                  <MenuItem>Lists</MenuItem>
                  <MenuItem>Dictionaries</MenuItem>
                  <MenuItem>Tuples</MenuItem>
                  <MenuItem>Sets</MenuItem>
                  <MenuItem>None</MenuItem>
                </SubMenu>

                <SubMenu title="Python Basics">
                  <MenuItem>Comparison Operators</MenuItem>
                  <MenuItem>Logical Operators</MenuItem>
                  <MenuItem>Loops</MenuItem>
                  <MenuItem>Range</MenuItem>
                  <MenuItem>Enumerate</MenuItem>
                  <MenuItem>Counter</MenuItem>
                  <MenuItem>Named Tuple</MenuItem>
                  <MenuItem>OrderedDict</MenuItem>
                </SubMenu>

                <SubMenu title="Functions">
                  <MenuItem>Functions</MenuItem>
                  <MenuItem>Lambda</MenuItem>
                  <MenuItem>Comprehensions</MenuItem>
                  <MenuItem>Map</MenuItem>
                  <MenuItem>Filter</MenuItem>
                  <MenuItem>Reduce</MenuItem>
                  <MenuItem>Ternary</MenuItem>
                  <MenuItem>Any</MenuItem>
                  <MenuItem>All</MenuItem>
                  <MenuItem>Closures</MenuItem>
                  <MenuItem>Scope</MenuItem>
                </SubMenu>

                <SubMenu title="Advanced Python">
                  <MenuItem>Modules</MenuItem>
                  <MenuItem>Iterators</MenuItem>
                  <MenuItem>Generators</MenuItem>
                  <MenuItem>Decorators</MenuItem>
                  <MenuItem>Class</MenuItem>
                  <MenuItem>Exceptions</MenuItem>
                  <MenuItem>Command Line Arguments</MenuItem>
                  <MenuItem>File IO</MenuItem>
                  <MenuItem>Useful Libraries</MenuItem>
                </SubMenu>
              </MenuItem>
            </SubMenu>

            <SubMenu icon={<IoLogoJavascript />} title="JavaScript">
              <MenuItem>
                <SubMenu title="JavaScript Types">
                  <MenuItem>Objects</MenuItem>
                  <MenuItem>Primitive vs. Non-Primitive</MenuItem>
                  <MenuItem>Type Cooercion</MenuItem>
                  <MenuItem>Static vs. Dynamic Typed</MenuItem>
                </SubMenu>

                <SubMenu title="JavaScript Engine">
                  <MenuItem>The Parser</MenuItem>
                  <MenuItem>The AST</MenuItem>
                  <MenuItem>The Interpreter</MenuItem>
                  <MenuItem>The Compiler</MenuItem>
                  <MenuItem>The Combo</MenuItem>
                </SubMenu>

                <SubMenu title="Optimizing Code">
                  <MenuItem>Memoization</MenuItem>
                  <MenuItem>Inline Caching</MenuItem>
                  <MenuItem>Hidden Classes</MenuItem>
                  <MenuItem>Managing Arguments</MenuItem>
                </SubMenu>

                <SubMenu title="Call Stack and Memory Heap">
                  <MenuItem>Memory Heap</MenuItem>
                  <MenuItem>Call Stack</MenuItem>
                </SubMenu>

                <SubMenu title="Stack Overflow">
                  <MenuItem>Garbage Collection</MenuItem>
                  <MenuItem>Synchronous</MenuItem>
                  <MenuItem>Event Loop and Callback Queue</MenuItem>
                  <MenuItem>Job Queue</MenuItem>
                  <MenuItem>Promises</MenuItem>
                  <MenuItem>Threads Concurrency and Parallelism</MenuItem>
                </SubMenu>

                <SubMenu title="JavaScript Functions">
                  <MenuItem>Hoisting</MenuItem>
                  <MenuItem>Lexical Environment</MenuItem>
                  <MenuItem>Scope Chain</MenuItem>
                  <MenuItem>Function and Block Scope</MenuItem>
                  <MenuItem>
                    IIFE - Immediately Invoked Function Expression
                  </MenuItem>
                  <MenuItem>This</MenuItem>
                  <MenuItem>Call, Apply, Bind</MenuItem>
                </SubMenu>
              </MenuItem>
            </SubMenu>
          </Menu>

          <Menu>
            <MenuItem>Data Structures & Algorithms</MenuItem>
            <Menu>
              <MenuItem icon={<VscSymbolArray />}>Arrays</MenuItem>
              <MenuItem icon={<VscSymbolString />}>Strings</MenuItem>
              <MenuItem icon={<GiLinkedRings />}>Linked List</MenuItem>
              <MenuItem icon={<FaTree />}>Trees</MenuItem>
              <MenuItem icon={<FaSortAmountUp />}>
                Sorting and Searching
              </MenuItem>
              <MenuItem icon={<SiDynamics365 />}>Dynamic Programming</MenuItem>
            </Menu>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <p>Frank Tran and Eddy Tran</p>
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
              >
                Source
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
