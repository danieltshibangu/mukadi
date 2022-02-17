import React, {Fragment} from 'react';
import styles from '../styles/sidebar.module.scss'


function Sidebar() {
  return (
    <Fragment>
        <div class={styles.sidebar}>
            <div><img class={styles.mukadi} src='mukadi-logo-sidebar-white.svg'/></div>
        </div>
    </Fragment>
    
    );
}

export default Sidebar;
