import {
  IonContent,
  IonButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonIcon,
  IonText,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-justify-content-between">
              <IonCol className="ion-text-left">
                <IonTitle className="ion-padding">Home</IonTitle>
              </IonCol>
              <IonCol className="ion-text-right">
                <IonButton>
                  <IonIcon slot="start" icon={addCircleOutline} />
                  Add Incident
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <img src="" alt="" />

          <IonCardHeader>
            <IonCardTitle> Student Rioting</IonCardTitle>
            <IonCardSubtitle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            perferendis ut vel nihil fugiat, non placeat ducimus adipisci atque!
            Placeat ratione possimus ab fugit aspernatur, nostrum quos
            consectetur reprehenderit debitis?
          </IonCardContent>

          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-left">
                <IonChip color="medium">Date</IonChip>
              </IonCol>
              <IonCol className="ion-text-right">
                <IonChip color="medium">Time</IonChip>
              </IonCol>
            </IonRow>

            <div className="ion-text-center">
              <p>Location</p>
            </div>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
