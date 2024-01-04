import { IonButton, IonIcon, IonInput } from '@ionic/react';
import { settings, menu, pulse } from 'ionicons/icons';
import './ProfileContainer.css';

interface ContainerProps { }

const ProfileContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="profile-container">
      Profile

      <div className='profile-form'>
        <IonInput placeholder='NAME' class='custom-input' color={'dark'}>
          
        </IonInput>

        <IonInput placeholder='GENDER' class='custom-input' color={'dark'}>
          
        </IonInput>

        <IonInput placeholder='AGE' class='custom-input' color={'dark'}>
          
        </IonInput>

        <IonInput placeholder='SHOE SIZE' class='custom-input' color={'dark'}>
          
        </IonInput>
      </div>

      <div className='bottom-menu'>
        <div className='profile-action'>
          <IonButton color={'#6C49D6'} className='action-btn'>
            <IonIcon icon={settings}></IonIcon>
          </IonButton>

          <IonButton color={'#6C49D6'} className='action-btn'>
            <IonIcon icon={menu}></IonIcon>
          </IonButton>

          <IonButton color={'#6C49D6'} className='action-btn'>
            <IonIcon icon={pulse}></IonIcon>
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
