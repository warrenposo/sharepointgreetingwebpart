import * as React from 'react';
import styles from './Uploadimage.module.scss';
import type { IUploadimageProps } from './IUploadimageProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Uploadimage extends React.Component<IUploadimageProps, {}> {
  public render(): React.ReactElement<IUploadimageProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    // Get the current hour
    const now = new Date();
    const hours = now.getHours();

    // Determine the greeting message based on the time
    const greetingMessage =
      hours >= 5 && hours < 12
        ? 'Good morning'
        : hours >= 12 && hours < 17
        ? 'Good afternoon'
        : hours >= 17 && hours < 22
        ? 'Good evening'
        : 'Good night';

    return (
      <section className={`${styles.uploadimage} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img
            alt=""
            src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')}
            className={styles.welcomeImage}
          />
          <h2>
            {greetingMessage}, {escape(userDisplayName)}!
          </h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        {/* ... rest of your code ... */}
      </section>
    );
  }
}
